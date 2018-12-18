import { Injectable, EventEmitter } from "@angular/core";
import { environment } from "../../environments/environment";
/*
	const
*/
const USE_REMOTE_SERVER = !environment.production;
// const BEAPIURL = "http://" + (USE_REMOTE_SERVER ? "10.1.111.193" : "localhost") + ":5000/calculate";
const BEAPIURL = "http://localhost:5000/calculate";
/*
	lib
*/
function fetchWithTimeout(url, options, timeout) {
	return new Promise((resolve, reject) => {
		fetch(url, options)
			.then(resolve)
			.catch(reject);
		if (timeout) {
			const e = new Error("Connection timed out");
			setTimeout(reject, timeout, e);
		}
	});
}
/*
	class
*/
@Injectable({
	providedIn: "root"
})
export class CorrosionService {
	/*






	front-end model >>>






	*/
	status = {
		/*
			status:
		*/
		lifetime_manufacturer: 10,
		lifetime_corrected: 10,
		lifetime_correctedProb: 100,
		classList: "",
		lifetimes_calculated: [
			{
				lifetime: 10,
				probability: 100
			}
		],
		corrections: [
			{
				type: "add corrosion inhibitor",
				amount: 1,
				constraintPerUnit: 100,
				constraintUpperLimit: 10000
			}
		],
		problems: [],
		solutions: [],
		crude_bblhr: 0,
		/*
			depreciated:
		*/
		lifetime_calculated: 10,
		lifetime_calculatedProb: 100,
		lifetime_calculatedWorst: null,
		lifetime_calculatedWorstProb: null,
		correction_corrosionInhibitor: {
			constraintPerUnit: 100,
			constraintUpperLimit: 10000,
			add: 0,
			per: 0
		}
	};
	statusOriginal: any = {};
	statusUpdated = new EventEmitter();
	/*
		measurements:
	*/
	measurements = {
		crude_a: {
			id: "crude_a",
			name: "Crude Type A",
			unit: "bbl/hr",
			value: 10
		},
		crude_b: {
			id: "crude_b",
			name: "Crude Type B",
			unit: "bbl/hr",
			value: 20
		},
		crude_c: {
			id: "crude_c",
			name: "Crude Type C",
			unit: "bbl/hr",
			value: 30
		},
		h2o: {
			id: "h2o",
			name: "H2O",
			unit: "%",
			value: 0,
			statusOk: 0,
			statusBad: 5,
			statusDanger: 10,
			statusAlert: 15
		},
		h2s: {
			id: "h2s",
			name: "H2S",
			unit: "%",
			value: 0,
			statusOk: 0,
			statusBad: 0.5,
			statusDanger: 1,
			statusAlert: 1.5
		},
		salt: {
			id: "salt",
			name: "Salt",
			unit: "ppm",
			value: 0,
			statusOk: 0,
			statusBad: 100,
			statusDanger: 500,
			statusAlert: 1000
		},
		temperature: {
			id: "temperature",
			name: "Temp.",
			unit: "°C",
			value: 289,
			statusOk: 289,
			statusBad: 290,
			statusAlert: 291
		},
		/*
			omit
		*/
		omit_h2s: false,
		omit_salt: false,
		omit_toggle: omit_what => {
			if (omit_what === "h2s") {
				console.log("omit_toggle this.measurements.omit_h2s", this.measurements.omit_h2s, !this.measurements.omit_h2s);
				this.measurements.omit_h2s = !this.measurements.omit_h2s;
			}
			if (omit_what === "salt") {
				console.log("omit_toggle this.measurements.omit_salt", this.measurements.omit_salt, !this.measurements.omit_salt);
				this.measurements.omit_salt = !this.measurements.omit_salt;
			}
			this.statusUpdated.emit(this.status);
		}
	};
	constructor() {
		this.statusOriginal = Object.assign({}, this.status);
	}
	/*






	public classes - user input






	*/
	public set_measurement(measurement) {
		var m = measurement;
		this.measurements[m.id] = Object.assign({}, this.measurements[m.id], m);
	}
	public get(what) {
		if (what === "status") {
			return this.status;
		} else if (what === "measurements") {
			return this.measurements;
		}
	}
	public set_status_correction_corrosionInhibitor(key, value) {
		value = value / 1;
		if (value < 0) {
			value = 0;
		}
		if (key === "constraintUpperLimit") {
			if (value < this.status.correction_corrosionInhibitor.constraintPerUnit) {
				value = this.status.correction_corrosionInhibitor.constraintPerUnit;
			}
		}
		this.status.correction_corrosionInhibitor[key] = value;
		this.statusUpdated.emit(this.status);
	}
	/*



		


		public classes - no user input, use existing data






	*/
	public async calculate_corrosionInhibitor() {
		/*
			calculate
		*/
		this.set_constraints_corrosionInhibitor();
		/*
			emit
		*/
		this.statusUpdated.emit(this.status);
	}
	public async calculate_measurements() {
		console.log("calculate_measurements, status:", Object.assign({}, this.status));
		/*
			crude / measurements
		*/
		var measurements = Object.assign({}, this.measurements);
		var crude_a = measurements.crude_a.value / 1;
		var crude_b = measurements.crude_b.value / 1;
		var crude_c = measurements.crude_c.value / 1;
		var crude_abc_total = crude_a + crude_b + crude_c;
		crude_a = crude_a / crude_abc_total;
		crude_b = crude_b / crude_abc_total;
		crude_c = crude_c / crude_abc_total;
		measurements.salt.value = 400 * crude_a + 1200 * crude_b + 100 * crude_c;
		measurements.h2s.value = 0.5 * crude_a + 2 * crude_b + 1.2 * crude_c;
		// debug
		// console.log("crude_abc_total", crude_abc_total);
		// console.log("a", crude_a);
		// console.log("b", crude_b);
		// console.log("c", crude_c);
		// cleanup
		delete measurements.crude_a;
		delete measurements.crude_b;
		delete measurements.crude_c;
		// omit
		if (this.measurements.omit_h2s) {
			delete measurements.h2s;
		}
		if (this.measurements.omit_salt) {
			delete measurements.salt;
		}
		/*
			request
		*/
		var request = {
			constraint_per_unit: this.status.correction_corrosionInhibitor.constraintPerUnit,
			constraint_upper_limit: this.status.correction_corrosionInhibitor.constraintUpperLimit,
			measurements: []
		};
		for (let k in measurements) {
			let v = measurements[k];
			if (v.value || v.value === 0) {
				request.measurements.push({
					id: v.id,
					value: v.value
				});
			}
		}
		console.log("request", request);
		/*
			fetch
		*/
		var fetchWait = 3000;
		if (USE_REMOTE_SERVER) {
			fetchWait = 300;
		}
		var res = await fetch(BEAPIURL, {
			body: JSON.stringify(request),
			cache: "no-cache",
			headers: {
				"content-type": "application/json"
			},
			method: "POST",
			mode: "cors"
		});
		/*
			response
		*/
		var response = await res.json();
		(<any>window).response = response;
		console.log("response", response);
		this.set_status_backend(response);
		/*
			calculate
		*/
		if (response.lifetimeCalculated && response.lifetimeCalculated[0]) {
			// back-end
			this.set_status_backend(response);
		} else {
			// front-end
			var e = "Bad response from server. Expecting lifetimeCalculated to be array of numbers.";
			var err = "API request failed with error: " + e + "... Will use 'mock' 'dummy' front-end logic";
			console.warn(err);
			alert(err);
			return;
		}
		/*
			emit
		*/
		this.status.crude_bblhr = crude_abc_total;
		this.statusUpdated.emit(this.statusOriginal);
		// setTimeout(() => {
			console.log("this.status", this.status);
			this.statusUpdated.emit(this.status);
		// }, 150);
	}
	/*



		


		private classes - logic and calculations






	*/
	reset_status() {
		this.status = Object.assign({}, this.statusOriginal);
		this.status.problems = [];
		this.status.solutions = [];
	}
	set_constraints_corrosionInhibitor = () => {
		this.status.correction_corrosionInhibitor.constraintUpperLimit = this.status.correction_corrosionInhibitor.constraintPerUnit * this.status.correction_corrosionInhibitor.add;
	};
	set_status_backend = response => {
		// first reset
		this.reset_status();
		this.set_constraints_corrosionInhibitor();
		// important details
		// this.status.lifetimes_calculated = [];
		// response.lifetimeCalculated.forEach((val, i) => {
		// 	this.status.lifetimes_calculated.push({
		// 		lifetime: response.lifetimeCalculated[i],
		// 		probability: response.lifetimeCalculatedProb[i]
		// 	});
		// });
		this.status.correction_corrosionInhibitor.add = response.corrosionInhibitor / 1;
		this.status.lifetime_calculated = response.lifetimeCalculated[0] / 1;
		this.status.lifetime_calculatedProb = response.lifetimeCalculatedProb[0] / 1;
		if (this.status.lifetime_calculatedProb>100) {
			this.status.lifetime_calculatedProb = 100;
		}
		this.status.lifetime_calculatedWorst = response.lifetimeCalculated[1] / 1;
		this.status.lifetime_calculatedWorstProb = response.lifetimeCalculatedProb[1] / 1;
		if (this.status.lifetime_calculatedWorstProb>100) {
			this.status.lifetime_calculatedWorstProb = 100;
		}
		this.status.lifetime_corrected = response.lifetimeCorrected / 1;
		this.status.lifetime_correctedProb = response.lifetimeCorrectedProb / 1;
		this.status.lifetime_manufacturer = response.lifetimeManufacturer / 1;
		/// classList
		if (this.status.lifetime_calculatedWorst || this.status.lifetime_calculated < this.status.lifetime_manufacturer) {
			this.status.classList += " status-bad";
		} else {
			this.status.classList += " status-ok";
		}
	};
}
