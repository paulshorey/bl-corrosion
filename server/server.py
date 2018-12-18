#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
from flask import Flask, render_template, redirect, request, jsonify
import json
from flask_cors import CORS
import blperfecta
import os
import csv


kb_dir = "./kb"
input_dir = "./input"
output_dir = "./output"
feature_value_file = "input_1.txt"
corrosion_table = './Corrosion table_v2_table_only.csv'

load_feature_values = "{0}/{1}".format(input_dir, feature_value_file)

engine = blperfecta.Perfecta()
engine.load_kb(os.path.join(kb_dir, 'fluid-ranges.lisp'))
engine.load_kb(os.path.join(kb_dir, 'kb_corrosion_from_table.lisp'))

previous_life_time = 10

life_time_probs = {}
# read corrosion table
f = open(corrosion_table, 'r')
corrosion_data = csv.reader(f)
for each in corrosion_data:
    life_time_probs[each[-3]] = each[-1]
f.close()


def create_input_xml(features):
    """
    Return XML format of features value for Perfecta
    """
    s = "<Features>"
    for feature in features:
        s += "<Feature_Value Name='{0}' ID='{1}' Group_ID='{1}' Time='0' Conf='1.0' Value='{2}'/>"\
            .format(feature['name'], feature['id'], feature['value'])
    s += "</Features>"
    print(s)
    return s


def find_concepts(output, num_features):
    """
    Find which life_time has highest score, then use the score of Life_time_all
    """
    print(output)
    probs = []
    life_times = []
    concepts_conclusion = output["root"]["output"]["Deduced_Concepts"]["Concept"]


    # remove any concept for Salt, H2O, H2S and temp
    cleaned_concepts_conclusion = []
    for i, each in enumerate(concepts_conclusion):
        if each["@Name"][:3].lower() not in ['h2o', 'h2s', 'sal', 'tem']:
            cleaned_concepts_conclusion.append(each)
    if num_features == 4:
        life_times = [cleaned_concepts_conclusion[0]["@Name"]]
        probs = [cleaned_concepts_conclusion[0]["@Score"]]
    else:
        life_times = [cleaned_concepts_conclusion[0]["@Name"], cleaned_concepts_conclusion[3]["@Name"]]
        probs = [cleaned_concepts_conclusion[0]["@Score"], cleaned_concepts_conclusion[3]["@Score"]]
    print(life_times, probs)
    life_times = [life_time.split("_")[-2] for life_time in life_times]
    probs = [float(prob) * 100 for prob in probs]
    return life_times, probs


app = Flask(__name__, static_url_path='')
CORS(app)


@app.route('/')
def index():
    global previous_life_time
    previous_life_time = 10
    return app.send_static_file('index.html')


@app.route('/calculate', methods=['POST'])
def update_json():
    global previous_life_time
    previous_life_time = 10
    data = json.loads(request.data.decode("utf-8"))
    print('data', data)

    # creating feature values for perfecra
    features = []
    for i, val in enumerate(data["measurements"]):
        d = {"name": val["id"], "id": i, "value": val['value']}
        features.append(d)

    # get inputs as XML for Perfecta
    print('*' * 80)
    perfecta_output = engine.input_features(create_input_xml(features))
    print('*' * 80)
 
    # Find LifeTime and Probability from Perfecta's output
    life_times, probs = find_concepts(perfecta_output, len(features))

    if len(life_times) == 1:
        probs[0] = float(probs[0]) * 0.8 + float(life_time_probs[life_times[0]]) * 10
    elif len(life_times) == 2:
        probs[0] = float(probs[0]) + float(life_time_probs[life_times[0]]) * 10
        probs[1] = float(probs[1]) + float(life_time_probs[life_times[1]]) * 10
    probs = ["{0:.2f}".format(float(prob)) for prob in probs]

    # set default value for corrected LT and prob
    corrected_life_time = life_times[0]
    corrected_prob = probs[0]

    # calculating second life time
    life_time_diff = previous_life_time - float(life_times[0])
    corrosion_inhibitor = 0
    hs2_value = 0
    for i, f in enumerate(features):
        if f['name'] == 'h2s':
            hs2_value = f['value']
            if hs2_value > 0.5:
                features[i]['value'] = 0.4
                if life_time_diff >= 1.5:
                    corrosion_inhibitor = 1
                elif 0 < life_time_diff < 1.5:
                    corrosion_inhibitor = 0.3

                # get inputs as XML for Perfecta
                perfecta_output = engine.input_features(create_input_xml(features))

                # Find LifeTime and Probability from Perfecta's output
                corrected_life_time, corrected_prob = find_concepts(perfecta_output, len(features))
                corrected_prob = float(corrected_prob[0]) * 0.8 + float(life_time_probs[corrected_life_time[0]]) * 10
                corrected_prob = "{0:.2f}".format(float(corrected_prob))
                previous_life_time = float(life_times[0])


    response = {
        "lifetimeManufacturer": 10,
        "lifetimeCalculated": life_times,
        "lifetimeCalculatedProb": probs,
        "corrosionInhibitor": corrosion_inhibitor,
        "lifetimeCorrected": corrected_life_time[0],
        "lifetimeCorrectedProb": corrected_prob,
    }


    print(response)
    return json.dumps(response), 200, {'ContentType': 'application/json'}


if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True, threaded=True)
