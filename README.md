# Corrosion demo

This is a simple one page app - to calculate corrosion, and give a nice visual representation of the recommended correction. It uses HTML forms and Angular JS to send user modified data to the backend API.

###  
## Back-end

`./server/server.py`

1.  serves `static/index.html` for `GET "/"`
2.  serves `static/*` for other `GET "*"`
3.  responds with a `JSON` object for `POST "/calculate"`  
    **Sample request:**  
    `{"measurements":[{"id":"salt","value":247},{"id":"temp","value":290}],"constraint_per_unit":400,"constraint_upper_limit":10000}`

###  
## Front-end

`./angular` folder contains development in-progress code for front-end JS/HTML  
`./server/static` folder contains production code, which is served by `python.py`

###  
## Instructions

To run project, just start the python server: `cd ./server; python server.py` and open the browser to `http://localhost:5000`.  
Then, click the `calculate` button in the app, to send the POST request to the `server.py`
