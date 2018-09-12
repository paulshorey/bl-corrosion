(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes-demo-demo-module~routes-test-test-module"],{

/***/ "./src/app/services/corrosion.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/corrosion.service.ts ***!
  \***********************************************/
/*! exports provided: CorrosionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorrosionService", function() { return CorrosionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


/*
    const
*/
var USE_REMOTE_SERVER = !_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production;
var BEAPIURL = "http://" + (USE_REMOTE_SERVER ? "10.1.111.193" : "localhost") + ":5000/calculate";
// const BEAPIURL = "http://localhost:5000/calculate";
/*
    lib
*/
function fetchWithTimeout(url, options, timeout) {
    return new Promise(function (resolve, reject) {
        fetch(url, options)
            .then(resolve)
            .catch(reject);
        if (timeout) {
            var e = new Error("Connection timed out");
            setTimeout(reject, timeout, e);
        }
    });
}
/*
    class
*/
var CorrosionService = /** @class */ (function () {
    function CorrosionService() {
        var _this = this;
        /*
    
    
    
    
    
    
        front-end model >>>
    
    
    
    
    
    
        */
        this.status = {
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
        this.statusOriginal = {};
        this.statusUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /*
            measurements:
        */
        this.measurements = {
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
            omit_toggle: function (omit_what) {
                if (omit_what === "h2s") {
                    console.log("omit_toggle this.measurements.omit_h2s", _this.measurements.omit_h2s, !_this.measurements.omit_h2s);
                    _this.measurements.omit_h2s = !_this.measurements.omit_h2s;
                }
                if (omit_what === "salt") {
                    console.log("omit_toggle this.measurements.omit_salt", _this.measurements.omit_salt, !_this.measurements.omit_salt);
                    _this.measurements.omit_salt = !_this.measurements.omit_salt;
                }
                _this.statusUpdated.emit(_this.status);
            }
        };
        this.set_constraints_corrosionInhibitor = function () {
            _this.status.correction_corrosionInhibitor.constraintUpperLimit = _this.status.correction_corrosionInhibitor.constraintPerUnit * _this.status.correction_corrosionInhibitor.add;
        };
        this.set_status_backend = function (response) {
            // first reset
            _this.reset_status();
            _this.set_constraints_corrosionInhibitor();
            // important details
            // this.status.lifetimes_calculated = [];
            // response.lifetimeCalculated.forEach((val, i) => {
            // 	this.status.lifetimes_calculated.push({
            // 		lifetime: response.lifetimeCalculated[i],
            // 		probability: response.lifetimeCalculatedProb[i]
            // 	});
            // });
            _this.status.correction_corrosionInhibitor.add = response.corrosionInhibitor / 1;
            _this.status.lifetime_calculated = response.lifetimeCalculated[0] / 1;
            _this.status.lifetime_calculatedProb = response.lifetimeCalculatedProb[0] / 1;
            if (_this.status.lifetime_calculatedProb > 100) {
                _this.status.lifetime_calculatedProb = 100;
            }
            _this.status.lifetime_calculatedWorst = response.lifetimeCalculated[1] / 1;
            _this.status.lifetime_calculatedWorstProb = response.lifetimeCalculatedProb[1] / 1;
            if (_this.status.lifetime_calculatedWorstProb > 100) {
                _this.status.lifetime_calculatedWorstProb = 100;
            }
            _this.status.lifetime_corrected = response.lifetimeCorrected / 1;
            _this.status.lifetime_correctedProb = response.lifetimeCorrectedProb / 1;
            _this.status.lifetime_manufacturer = response.lifetimeManufacturer / 1;
            /// classList
            if (_this.status.lifetime_calculatedWorst || _this.status.lifetime_calculated < _this.status.lifetime_manufacturer) {
                _this.status.classList += " status-bad";
            }
            else {
                _this.status.classList += " status-ok";
            }
        };
        this.statusOriginal = Object.assign({}, this.status);
    }
    /*






    public classes - user input






    */
    CorrosionService.prototype.set_measurement = function (measurement) {
        var m = measurement;
        this.measurements[m.id] = Object.assign({}, this.measurements[m.id], m);
    };
    CorrosionService.prototype.get = function (what) {
        if (what === "status") {
            return this.status;
        }
        else if (what === "measurements") {
            return this.measurements;
        }
    };
    CorrosionService.prototype.set_status_correction_corrosionInhibitor = function (key, value) {
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
    };
    /*



        


        public classes - no user input, use existing data






    */
    CorrosionService.prototype.calculate_corrosionInhibitor = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                /*
                    calculate
                */
                this.set_constraints_corrosionInhibitor();
                /*
                    emit
                */
                this.statusUpdated.emit(this.status);
                return [2 /*return*/];
            });
        });
    };
    CorrosionService.prototype.calculate_measurements = function () {
        return __awaiter(this, void 0, void 0, function () {
            var measurements, crude_a, crude_b, crude_c, crude_abc_total, request, k, v, fetchWait, res, response, e, err;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("calculate_measurements, status:", Object.assign({}, this.status));
                        measurements = Object.assign({}, this.measurements);
                        crude_a = measurements.crude_a.value / 1;
                        crude_b = measurements.crude_b.value / 1;
                        crude_c = measurements.crude_c.value / 1;
                        crude_abc_total = crude_a + crude_b + crude_c;
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
                        request = {
                            constraint_per_unit: this.status.correction_corrosionInhibitor.constraintPerUnit,
                            constraint_upper_limit: this.status.correction_corrosionInhibitor.constraintUpperLimit,
                            measurements: []
                        };
                        for (k in measurements) {
                            v = measurements[k];
                            if (v.value || v.value === 0) {
                                request.measurements.push({
                                    id: v.id,
                                    value: v.value
                                });
                            }
                        }
                        console.log("request", request);
                        fetchWait = 3000;
                        if (USE_REMOTE_SERVER) {
                            fetchWait = 300;
                        }
                        return [4 /*yield*/, fetch(BEAPIURL, {
                                body: JSON.stringify(request),
                                cache: "no-cache",
                                headers: {
                                    "content-type": "application/json"
                                },
                                method: "POST",
                                mode: "cors"
                            })];
                    case 1:
                        res = _a.sent();
                        return [4 /*yield*/, res.json()];
                    case 2:
                        response = _a.sent();
                        window.response = response;
                        console.log("response", response);
                        this.set_status_backend(response);
                        /*
                            calculate
                        */
                        if (response.lifetimeCalculated && response.lifetimeCalculated[0]) {
                            // back-end
                            this.set_status_backend(response);
                        }
                        else {
                            e = "Bad response from server. Expecting lifetimeCalculated to be array of numbers.";
                            err = "API request failed with error: " + e + "... Will use 'mock' 'dummy' front-end logic";
                            console.warn(err);
                            alert(err);
                            return [2 /*return*/];
                        }
                        /*
                            emit
                        */
                        this.status.crude_bblhr = crude_abc_total;
                        this.statusUpdated.emit(this.statusOriginal);
                        // setTimeout(() => {
                        console.log("this.status", this.status);
                        this.statusUpdated.emit(this.status);
                        return [2 /*return*/];
                }
            });
        });
    };
    /*



        


        private classes - logic and calculations






    */
    CorrosionService.prototype.reset_status = function () {
        this.status = Object.assign({}, this.statusOriginal);
        this.status.problems = [];
        this.status.solutions = [];
    };
    CorrosionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [])
    ], CorrosionService);
    return CorrosionService;
}());



/***/ })

}]);
//# sourceMappingURL=routes-demo-demo-module~routes-test-test-module.js.map