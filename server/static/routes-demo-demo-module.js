(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes-demo-demo-module"],{

/***/ "./src/app/routes/demo/components/box-correction/box-correction.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/routes/demo/components/box-correction/box-correction.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg_pipeline_img\">\n    <div class=\"bg_pipeline_left\"></div>\n    <div class=\"bg_pipeline_right\"></div>\n    <!-- <div class=\"bg_pipeline_caption left\">3.</div> -->\n    <div class=\"bg_pipeline_caption\">Correct</div>\n</div>\n\n<div [class]=\"'box '+status.classList\">\n    <div class=\"heading\"> \n        <h2>Recommendation:\n            <a name=\"box-correction\"></a>\n        </h2>\n    </div>\n\n\n\n    <!-- something wrong -->\n    <div class=\"body\" *ngIf=\"status.classList.indexOf('-ok')===-1\">\n        <h2>Add\n            <b>{{status.correction_corrosionInhibitor.add}} gallons of corrosion inhibitor per barrel</b>\n        </h2>\n        <div>\n            \n        </div>\n\n        <div class=\"content-box content-box-error\" *ngIf=\"status.classList.indexOf('-ok')===-1 && status.classList.indexOf('-na')===-1\">\n\n            <div class=\"content\">\n                <h3>Correction cost:</h3>\n                <div class=\"fieldset\">\n                    <span class=\"label\">Cost per gallon of inhibitor: </span>\n                    <b>$</b>\n                    <input type=\"number\" [value]=\"status.correction_corrosionInhibitor.constraintPerUnit\" [placeholder]=\"status.correction_corrosionInhibitor.constraintPerUnit\"\n                        (change)=\"set_status_correction_corrosionInhibitor('constraintPerUnit',$event.target.value)\" />\n                </div>\n                <div class=\"fieldset\">\n                    <span class=\"label\">Cost to correct each <b>{{status.crude_bblhr}} bbl / hr</b>:</span>\n                    <b>$ {{status.correction_corrosionInhibitor.constraintPerUnit * status.crude_bblhr}}</b>\n                    <!-- <input type=\"number\" [value]=\"status.correction_corrosionInhibitor.constraintUpperLimit\" [placeholder]=\"status.correction_corrosionInhibitor.constraintUpperLimit\"\n                        (change)=\"set_status_correction_corrosionInhibitor('constraintUpperLimit',$event.target.value)\" /> -->\n                </div>\n                <div class=\"fieldset\">\n                    <h3 (click)=\"calculate_corrosionInhibitor($event);\">\n                        <span class=\"icon-ui_cycle\"></span><span> Update</span>\n                    </h3>\n                </div>\n            </div>\n\n            <!-- <div class=\"content-bottom\">\n                <button value=\"calculate\" onClick=\"document.getElementById('calculate_measurements_button').focus();document.getElementById('calculate_measurements_button').click();setTimeout(function(){document.getElementById('calculate_measurements_button').blur();},500);\">\n                    <span class=\"icon-ui_cycle\"></span>\n                    <span> Update</span>\n                </button>\n            </div> -->\n        </div>\n\n    </div>\n\n    <div class=\"bottom\"></div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/routes/demo/components/box-correction/box-correction.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/routes/demo/components/box-correction/box-correction.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "[box-correction] {\n  z-index: 103;\n  transition: opacity 0.5s linear 0.15s; }\n  .status-ok [box-correction] {\n    display: none; }\n  .status-bad [box-correction] {\n    visibility: visible !important;\n    opacity: 1 !important; }\n  [box-correction] .box {\n    min-height: 365px; }\n  [box-correction] .box .heading {\n      background: #f8ad05;\n      color: #fff; }\n  [box-correction] .box .heading * {\n        margin: 0;\n        padding: 0.66rem 0.85rem;\n        line-height: 1; }\n  [box-correction] .box .body {\n      padding: 1.5rem 1.1rem;\n      color: #999999; }\n  [box-correction] .box .body h2,\n      [box-correction] .box .body h3 {\n        color: #f8ad05; }\n  [box-correction] .box h2 {\n      margin: 0;\n      padding: 0.5rem 0;\n      line-height: 115%; }\n  [box-correction] .box h3 {\n      font-weight: normal; }\n  [box-correction] .box h3 b {\n        font-weight: bold; }\n  [box-correction] .box p {\n      margin: 1.5rem 0.1rem; }\n  [box-correction] .box {\n    z-index: 200;\n    border: solid 2px #f8ad05;\n    background: #fff; }\n  [box-correction] .box .bottom::after {\n      background: #f8ad05; }\n  [box-correction] .bg_pipeline_img {\n    background-image: url(\"/assets/images/bg/correction_center.png\"); }\n  [box-correction] .bg_pipeline_img .bg_pipeline_right {\n      background-image: url(\"/assets/images/bg/correction_right.png\"); }\n  [box-correction] .bg_pipeline_img .bg_pipeline_left {\n      background-image: url(\"/assets/images/bg/correction_left.png\"); }\n  [box-correction] .bg_pipeline_img .bg_pipeline_left::before {\n        background: #f8ad05; }\n  [box-correction] .content-box {\n    position: absolute;\n    bottom: 1rem;\n    width: calc(100% - 2.5rem);\n    color: #999999; }\n  [box-correction] .content-box h3 {\n      color: #333;\n      font-weight: bold;\n      margin: 0.75rem 0 0.5rem 0; }\n  [box-correction] .content-box .content {\n      padding: 0;\n      line-height: 2rem; }\n  [box-correction] .content-box .content input {\n        width: 60px;\n        font-size: 12px;\n        font-weight: 400;\n        padding-left: 5px;\n        margin: 1px 0.25rem; }\n  [box-correction] .content-box .content .fieldset {\n        position: relative;\n        text-align: right; }\n  [box-correction] .content-box .content .fieldset .label {\n          display: block;\n          position: absolute;\n          left: 0; }\n  [box-correction] .content-box .content .fieldset input {\n          min-width: 70px;\n          color: #333; }\n  [box-correction] .content-box .content .fieldset h3 {\n          margin: 0.75rem 0.25rem 0.5rem 0;\n          cursor: pointer; }\n  [box-correction] .content-box .content-bottom {\n      padding: 1rem 0 0.33rem; }\n  [box-correction] .content-box .content-bottom h3 {\n        color: #52b9f0;\n        margin: 0 0 0.5rem 0;\n        cursor: pointer; }\n  [box-correction] .content-box .content-bottom button {\n        background: #f8ad05;\n        border: none;\n        color: #fff;\n        font-weight: bold;\n        font-size: 125%;\n        line-height: 1.5rem;\n        padding: 0.35rem 1rem 0.5rem;\n        border: solid 2px #e99f00;\n        border-left: none;\n        border-top: none;\n        border-radius: 3px;\n        cursor: pointer; }\n  [box-correction] .content-box .content-bottom button:focus {\n          border: solid 1px transparent;\n          position: relative;\n          top: 2px;\n          left: 2px; }\n  [box-correction] .content-box .content-bottom button > * {\n          vertical-align: middle;\n          color: #fff; }\n"

/***/ }),

/***/ "./src/app/routes/demo/components/box-correction/box-correction.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/routes/demo/components/box-correction/box-correction.component.ts ***!
  \***********************************************************************************/
/*! exports provided: BoxCorrectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxCorrectionComponent", function() { return BoxCorrectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_corrosion_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/corrosion.service */ "./src/app/services/corrosion.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BoxCorrectionComponent = /** @class */ (function () {
    function BoxCorrectionComponent(corrosionService) {
        this.corrosionService = corrosionService;
        /*
        data (model)
      */
        this.status = "";
        this.status = corrosionService.get("status");
    }
    /*
    component ready (DOM is not ready)
  */
    BoxCorrectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.corrosionService.statusUpdated.subscribe(function (status) {
            _this.status = status;
        });
    };
    BoxCorrectionComponent.prototype.set_status_correction_corrosionInhibitor = function (key, value) {
        this.corrosionService.set_status_correction_corrosionInhibitor(key, value);
    };
    BoxCorrectionComponent.prototype.calculate_corrosionInhibitor = function () {
        console.log("click");
        this.corrosionService.calculate_corrosionInhibitor();
    };
    BoxCorrectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "[box-correction]",
            template: __webpack_require__(/*! ./box-correction.component.html */ "./src/app/routes/demo/components/box-correction/box-correction.component.html"),
            styles: [__webpack_require__(/*! ./box-correction.component.scss */ "./src/app/routes/demo/components/box-correction/box-correction.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [src_app_services_corrosion_service__WEBPACK_IMPORTED_MODULE_1__["CorrosionService"]])
    ], BoxCorrectionComponent);
    return BoxCorrectionComponent;
}());



/***/ }),

/***/ "./src/app/routes/demo/components/box-lifetime-calculated/box-lifetime-calculated.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/routes/demo/components/box-lifetime-calculated/box-lifetime-calculated.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [class]='\"bg_pipeline_img \"+statusClass'>\n    <div class=\"bg_pipeline_left\"></div>\n    <div class=\"bg_pipeline_right\"></div>\n    <div class=\"bg_pipeline_caption\">Analyze</div>\n</div>\n\n\n\n<!-- <div [class]=\"'box '+status.classList\" *ngFor=\"let expected of status.lifetimes_calculated\">\n    <div class=\"heading\">\n        <h2>Predicted Lifetime:</h2>\n    </div>\n    <div class=\"body\" *ngIf=\"status.classList.indexOf('-na')!==-1\">\n        <div>\n            <div class=\"icon-ui_alert\"></div>\n        </div>\n        <div>\n            <h2>Not enough data</h2>\n            <div class=\"error\">\n                <div>\n                    &#8226; Please enter more measurements, as many as possible for the most accurate calculation\n                </div>\n            </div>\n        </div>\n    </div>\n</div> -->\n\n\n\n<div [class]=\"'box '+statusClass\">\n<div class=\"heading\">\n    <h2><span *ngIf=\"status.lifetime_calculatedWorst\">Best Case </span><span *ngIf=\"!status.lifetime_calculatedWorst\">Predicted </span>Lifetime:</h2>\n</div>\n\n<!-- problems -->\n<div class=\"body\">\n\n    <!-- <div class=\"bestWorstCase\" *ngIf=\"status.lifetime_calculatedWorst\">\n        Best case scenario:\n    </div> -->\n    <h2>\n        <span [class]='\"icon-ui_\"+(status.lifetime_calculated===status.lifetime_manufacturer ? \"check\" : \"alert\")'></span>\n        <span> {{status.lifetime_calculated}} years</span>\n    </h2>\n    <div class=\"progress_indicator_bar\">\n        <span class=\"part\" [style.width]=\"(status.lifetime_calculated / status.lifetime_manufacturer) * 100 +'%'\"></span>\n        <span class=\"rest\"></span>\n    </div>\n\n    <div class=\"bar_container\">\n        <div class=\"bar\">\n            <div class=\"bar_shaded\"></div>\n        </div>\n        <div class=\"bar_caption\">\n            based on manufacturer's expected lifetime of\n            <span class=\"backend_val\" style=\"white-space:nowrap;\">{{status.lifetime_manufacturer}} years</span>, and a probability of certainty of\n            <span class=\"backend_val\" style=\"\">{{status.lifetime_calculatedProb}}%</span>\n        </div>\n    </div>\n    <div>&nbsp;</div>\n    <!-- <h3>Details:</h3>\n    <ul>\n        <li *ngFor=\"let problem of status.problems\">{{problem}} </li>\n    </ul> -->\n\n</div>\n</div>\n<div [class]=\"'box next '+status.classList\" *ngIf=\"status.lifetime_calculatedWorst\">\n    <div class=\"heading\">\n        <h2>Worst Case Lifetime:</h2>\n    </div>\n\n    <!-- problems -->\n    <div class=\"body\">\n\n        <!-- <div class=\"bestWorstCase\">\n            Worst case scenario:\n        </div> -->\n        <h2>\n            <span [class]='\"icon-ui_\"+(status.lifetime_calculatedWorst===status.lifetime_manufacturer ? \"check\" : \"alert\")'></span>\n            <span> {{status.lifetime_calculatedWorst}} years</span>\n        </h2>\n        <div class=\"progress_indicator_bar\">\n            <span class=\"part\" [style.width]=\"(status.lifetime_calculatedWorst / status.lifetime_manufacturer) * 100 +'%'\"></span>\n            <span class=\"rest\"></span>\n        </div>\n\n        <div class=\"bar_container\">\n            <div class=\"bar\">\n                <div class=\"bar_shaded\"></div>\n            </div>\n            <div class=\"bar_caption\">\n                based on manufacturer's expected lifetime of\n                <span class=\"backend_val\" style=\"white-space:nowrap;\">{{status.lifetime_manufacturer}} years</span>, and a probability of certainty of\n                <span class=\"backend_val\" style=\"\">{{status.lifetime_calculatedWorstProb}}%</span>\n            </div>\n        </div>\n        <div>&nbsp;</div>\n        <!-- <h3>Details:</h3>\n        <ul>\n            <li *ngFor=\"let problem of status.problems\">{{problem}} </li>\n        </ul> -->\n\n    </div>\n    <!-- \n    fluid parameters\n    \n    gallons per thousand barrels\n    \n    * salt types ? mono divalents etc...\n     -->\n"

/***/ }),

/***/ "./src/app/routes/demo/components/box-lifetime-calculated/box-lifetime-calculated.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/routes/demo/components/box-lifetime-calculated/box-lifetime-calculated.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "[box-lifetime-calculated] {\n  z-index: 104;\n  transition: opacity 0.5s linear 0s; }\n  .status-ok [box-lifetime-calculated] {\n    display: none; }\n  .status-bad [box-lifetime-calculated] {\n    visibility: visible !important;\n    opacity: 1 !important; }\n  [box-lifetime-calculated] .box {\n    z-index: 200; }\n  [box-lifetime-calculated] .bg_pipeline_img {\n    background-image: url(\"/assets/images/bg/lifetime_center.png\"); }\n  [box-lifetime-calculated] .bg_pipeline_img .bg_pipeline_right {\n      background-image: url(\"/assets/images/bg/lifetime_right.png\"); }\n  [box-lifetime-calculated] .bg_pipeline_img .bg_pipeline_left {\n      background-image: url(\"/assets/images/bg/lifetime_left.png\"); }\n  [box-lifetime-calculated] .bg_pipeline_img.status-ok {\n      background-image: url(\"/assets/images/bg/corrected_center.png\"); }\n  [box-lifetime-calculated] .bg_pipeline_img.status-ok .bg_pipeline_right {\n        background-image: url(\"/assets/images/bg/corrected_right.png\"); }\n  [box-lifetime-calculated] .bg_pipeline_img.status-ok .bg_pipeline_left {\n        background-image: url(\"/assets/images/bg/corrected_left.png\"); }\n  [box-lifetime-calculated] .bg_pipeline_img.no-correction {\n      background-size: 18% 100%;\n      background-position: left; }\n  [box-lifetime-calculated] .bg_pipeline_img.no-correction .bg_pipeline_left {\n        display: none; }\n  [box-lifetime-corrected] {\n  z-index: 102;\n  transition: opacity 0.5s linear 0.3s; }\n  .status-ok [box-lifetime-corrected],\n  .status-bad [box-lifetime-corrected] {\n    visibility: visible !important;\n    opacity: 1 !important; }\n  [box-lifetime-corrected] .box {\n    min-height: 250px !important;\n    z-index: 200; }\n  [box-lifetime-corrected] .box .heading::before {\n      display: none; }\n  [box-lifetime-corrected] .bg_pipeline_img {\n    visibility: hidden;\n    opacity: 0;\n    background-image: url(\"/assets/images/bg/corrected_center.png\"); }\n  [box-lifetime-corrected] .bg_pipeline_img .bg_pipeline_right {\n      background-image: url(\"/assets/images/bg/corrected_right.png\"); }\n  [box-lifetime-corrected] .bg_pipeline_img .bg_pipeline_left::before {\n      background: #88dd00; }\n  [box-lifetime-calculated],\n[box-lifetime-corrected] {\n  /*\n\t\tself status\n\t*/\n  /*\n\t\tetc\n\t*/ }\n  [box-lifetime-calculated] .box.status-bad,\n  [box-lifetime-corrected] .box.status-bad {\n    border-color: #d45c62; }\n  [box-lifetime-calculated] .box.status-bad .progress_indicator_bar,\n    [box-lifetime-corrected] .box.status-bad .progress_indicator_bar {\n      border-color: #d45c62; }\n  [box-lifetime-calculated] .box.status-bad .progress_indicator_bar .part,\n      [box-lifetime-corrected] .box.status-bad .progress_indicator_bar .part {\n        background: #d45c62; }\n  [box-lifetime-calculated] .box.status-bad .heading,\n    [box-lifetime-corrected] .box.status-bad .heading {\n      background: #d45c62; }\n  [box-lifetime-calculated] .box.status-bad .body h2,\n    [box-lifetime-calculated] .box.status-bad .body h3,\n    [box-lifetime-corrected] .box.status-bad .body h2,\n    [box-lifetime-corrected] .box.status-bad .body h3 {\n      color: #d45c62; }\n  [box-lifetime-calculated] .box.status-bad .body .bestWorstCase,\n    [box-lifetime-corrected] .box.status-bad .body .bestWorstCase {\n      font-size: 1.5rem; }\n  [box-lifetime-calculated] .box.status-bad .bottom::after,\n    [box-lifetime-corrected] .box.status-bad .bottom::after {\n      background: #d45c62; }\n  [box-lifetime-calculated] .box.status-bad .backend_val,\n    [box-lifetime-corrected] .box.status-bad .backend_val {\n      color: #d45c62; }\n  [box-lifetime-calculated] .box.status-ok,\n  [box-lifetime-corrected] .box.status-ok {\n    border-color: #88dd00; }\n  [box-lifetime-calculated] .box.status-ok .progress_indicator_bar,\n    [box-lifetime-corrected] .box.status-ok .progress_indicator_bar {\n      border-color: #88dd00; }\n  [box-lifetime-calculated] .box.status-ok .progress_indicator_bar .part,\n      [box-lifetime-corrected] .box.status-ok .progress_indicator_bar .part {\n        background: #88dd00; }\n  [box-lifetime-calculated] .box.status-ok .heading,\n    [box-lifetime-corrected] .box.status-ok .heading {\n      background: #88dd00; }\n  [box-lifetime-calculated] .box.status-ok .body h2,\n    [box-lifetime-calculated] .box.status-ok .body h3,\n    [box-lifetime-corrected] .box.status-ok .body h2,\n    [box-lifetime-corrected] .box.status-ok .body h3 {\n      color: #88dd00; }\n  [box-lifetime-calculated] .box.status-ok .bottom::after,\n    [box-lifetime-corrected] .box.status-ok .bottom::after {\n      background: #88dd00; }\n  [box-lifetime-calculated] .box.status-ok .backend_val,\n    [box-lifetime-corrected] .box.status-ok .backend_val {\n      color: #88dd00; }\n  [box-lifetime-calculated] .box .backend_val,\n  [box-lifetime-corrected] .box .backend_val {\n    font-weight: bold; }\n"

/***/ }),

/***/ "./src/app/routes/demo/components/box-lifetime-calculated/box-lifetime-calculated.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/routes/demo/components/box-lifetime-calculated/box-lifetime-calculated.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: BoxLifetime_calculatedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxLifetime_calculatedComponent", function() { return BoxLifetime_calculatedComponent; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_corrosion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/corrosion.service */ "./src/app/services/corrosion.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BoxLifetime_calculatedComponent = /** @class */ (function () {
    function BoxLifetime_calculatedComponent(corrosionService, _sanitizer) {
        this.corrosionService = corrosionService;
        this._sanitizer = _sanitizer;
        /*
        data (model)
      */
        this.status = "";
        this.statusClass = "";
        this.statusClassMake = function (status) {
            if (status.lifetime_calculated <= status.lifetime_manufacturer * 0.9) {
                return "status-bad";
            }
            else {
                return "status-ok";
            }
        };
        /*
        component ready (DOM is not ready)
      */
        this.progress_bar_style = "";
        this.status = corrosionService.get("status");
        this.statusClass = this.statusClassMake(this.status);
    }
    BoxLifetime_calculatedComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.progress_bar_style = this._sanitizer.bypassSecurityTrustStyle(`width:${(this.status.lifetime_calculated / this.status.lifetime_manufacturer) * 100}%;`);
        this.corrosionService.statusUpdated.subscribe(function (status) {
            _this.status = status;
            _this.statusClass = _this.statusClassMake(_this.status);
            // this.progress_bar_style = this._sanitizer.bypassSecurityTrustStyle(`width:${(this.status.lifetime_calculated / this.status.lifetime_manufacturer) * 100}%;`);
        });
    };
    BoxLifetime_calculatedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "[box-lifetime-calculated]",
            template: __webpack_require__(/*! ./box-lifetime-calculated.component.html */ "./src/app/routes/demo/components/box-lifetime-calculated/box-lifetime-calculated.component.html"),
            styles: [__webpack_require__(/*! ./box-lifetime-calculated.component.scss */ "./src/app/routes/demo/components/box-lifetime-calculated/box-lifetime-calculated.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [src_app_services_corrosion_service__WEBPACK_IMPORTED_MODULE_2__["CorrosionService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["DomSanitizer"]])
    ], BoxLifetime_calculatedComponent);
    return BoxLifetime_calculatedComponent;
}());



/***/ }),

/***/ "./src/app/routes/demo/components/box-lifetime-corrected/box-lifetime-corrected.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/routes/demo/components/box-lifetime-corrected/box-lifetime-corrected.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg_pipeline_img\">\n    <div class=\"bg_pipeline_left\"></div>\n    <div class=\"bg_pipeline_right\"></div>\n    <div class=\"bg_pipeline_caption\">Output</div>\n</div>\n\n<div [class]=\"'box '+statusClass\">\n    <div class=\"heading\">\n        <h2>{{status.correction_corrosionInhibitor.add ? \"Corrected\" : \"Predicted\"}} Lifetime:</h2>\n    </div>\n\n    <div class=\"body\">\n        <h2>\n            <span [class]='\"icon-ui_\"+(status.lifetime_corrected===status.lifetime_manufacturer ? \"check\" : \"alert\")'></span>\n            <span> {{status.lifetime_corrected}} years</span>\n        </h2>\n        <div class=\"progress_indicator_bar\">\n            <span class=\"part\" [style.width]=\"(status.lifetime_corrected / status.lifetime_manufacturer) * 100 +'%'\"></span>\n            <span class=\"rest\"></span>\n        </div>\n\n        <div class=\"bar_container\">\n            <div class=\"bar\">\n                <div class=\"bar_shaded\"></div>\n            </div>\n            <div class=\"bar_caption\">\n                based on manufacturer's expected lifetime of\n                <span class=\"backend_val\" style=\"white-space:nowrap;\">{{status.lifetime_manufacturer}} years</span>, and a probability of certainty of\n                <span class=\"backend_val\" style=\"\">{{status.lifetime_correctedProb}}%</span>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"bottom\"></div>\n\n</div>\n<!-- \nfluid parameters\n\ngallons per thousand barrels\n\n* salt types ? mono divalents etc...\n -->\n"

/***/ }),

/***/ "./src/app/routes/demo/components/box-lifetime-corrected/box-lifetime-corrected.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/routes/demo/components/box-lifetime-corrected/box-lifetime-corrected.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: BoxLifetime_correctedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxLifetime_correctedComponent", function() { return BoxLifetime_correctedComponent; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_corrosion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/corrosion.service */ "./src/app/services/corrosion.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BoxLifetime_correctedComponent = /** @class */ (function () {
    function BoxLifetime_correctedComponent(corrosionService, _sanitizer) {
        this.corrosionService = corrosionService;
        this._sanitizer = _sanitizer;
        /*
        data (model)
      */
        this.status = "";
        this.statusClass = "";
        this.statusClassMake = function (status) {
            if (status.lifetime_corrected > status.lifetime_calculated || status.lifetime_corrected >= status.lifetime_manufacturer * 0.9) {
                return "status-ok";
            }
            else {
                return "status-bad";
            }
        };
        /*
        component ready (DOM is not ready)
      */
        this.progress_bar_style = "";
        this.status = corrosionService.get("status");
        this.statusClass = this.statusClassMake(this.status);
    }
    BoxLifetime_correctedComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.progress_bar_style = this._sanitizer.bypassSecurityTrustStyle(`width:${(this.status.lifetime_corrected / this.status.lifetime_manufacturer) * 100}%;`);
        this.corrosionService.statusUpdated.subscribe(function (status) {
            _this.status = status;
            _this.statusClass = _this.statusClassMake(_this.status);
            // this.progress_bar_style = this._sanitizer.bypassSecurityTrustStyle(`width:${(this.status.lifetime_corrected / this.status.lifetime_manufacturer) * 100}%;`);
        });
    };
    BoxLifetime_correctedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "[box-lifetime-corrected]",
            template: __webpack_require__(/*! ./box-lifetime-corrected.component.html */ "./src/app/routes/demo/components/box-lifetime-corrected/box-lifetime-corrected.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [src_app_services_corrosion_service__WEBPACK_IMPORTED_MODULE_2__["CorrosionService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["DomSanitizer"]])
    ], BoxLifetime_correctedComponent);
    return BoxLifetime_correctedComponent;
}());



/***/ }),

/***/ "./src/app/routes/demo/components/box-measure/box-measure.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/routes/demo/components/box-measure/box-measure.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg_pipeline_img\">\n    <div class=\"bg_pipeline_left\"></div>\n    <div class=\"bg_pipeline_right\"></div>\n    <!-- <div class=\"bg_pipeline_caption left\">1.</div> -->\n    <div class=\"bg_pipeline_caption\">Measure</div>\n</div>\n\n<div [class]=\"'box '+status.classList\">\n    <div class=\"heading\">\n        <h2>Fluid Parameters:</h2>\n    </div>\n    <div class=\"body crude_measurements\">\n\n        <div class=\"crude_type\">\n            <label>\n                <b>Crude types:</b>\n                <!--  (%) -->\n            </label>\n            <div class=\"crude_groups\">\n\n                <div class=\"crude_group\" style=\"background:#F3F3F3;border-color:rgba(0,0,0,0.175);\">\n                    <div class=\"th\">Grade A\n                        <b>(bbl\n                            <i>/</i>hr)</b>\n                    </div>\n                    <div class=\"td\">\n                        <span></span>\n                        <span></span>\n                    </div>\n                    <div class=\"inputs\">\n                        <span class=\"crude_abc_input\">\n                            <input type=\"number\" min=\"0\" max=\"1000000\" [value]=\"measurements.crude_a.value\" (change)=\"crude_change('crude_a',$event)\" />\n                        </span>\n                    </div>\n                    <div class=\"crude_abc_info\">\n                        <span class=\"icon-ui_info\"></span>\n                        <div class=\"expanded_info\">\n                            <ul>\n                                <li><b>h2s:</b> 0.50 <i>%</i></li>\n                                <li><b>salt:</b> 400 <i>ppm</i></li>\n                                <li><b>price:</b> 70 <i>$/bbl</i></li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"crude_group\" style=\"background:#E6E6E6;border-color:rgba(0,0,0,0.350);\">\n                    <div class=\"th\">Grade B\n                        <b>(bbl\n                            <i>/</i>hr)</b>\n                    </div>\n                    <div class=\"td\">\n                        <span></span>\n                        <span></span>\n                    </div>\n                    <div class=\"inputs\">\n                        <span class=\"crude_abc_input\">\n                            <input type=\"number\" min=\"0\" max=\"1000000\" [value]=\"measurements.crude_b.value\" (change)=\"crude_change('crude_b',$event)\" />\n                        </span>\n                    </div>\n                    <div class=\"crude_abc_info\">\n                        <span class=\"icon-ui_info\"></span>\n                        <div class=\"expanded_info\">\n                            <ul>\n                                <li><b>h2s:</b> 2 <i>%</i></li>\n                                <li><b>salt:</b> 1200 <i>ppm</i></li>\n                                <li><b>price:</b> 60 <i>$/bbl</i></li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"crude_group\" style=\"background:#D8D8D8;border-color:rgba(0,0,0,0.525);\">\n                    <div class=\"th\">Grade C\n                        <b>(bbl\n                            <i>/</i>hr)</b>\n                    </div>\n                    <div class=\"td\">\n                        <span></span>\n                        <span></span>\n                    </div>\n                    <div class=\"inputs\">\n                        <span class=\"crude_abc_input\">\n                            <input type=\"number\" min=\"0\" max=\"1000000\" [value]=\"measurements.crude_c.value\" (change)=\"crude_change('crude_c',$event)\" />\n                        </span>\n                    </div>\n                    <div class=\"crude_abc_info\">\n                        <span class=\"icon-ui_info\"></span>\n                        <div class=\"expanded_info\">\n                            <ul>\n                                <li><b>h2s:</b> 1.2 <i>%</i></li>\n                                <li><b>salt:</b> 100 <i>ppm</i></li>\n                                <li><b>price:</b> 65 <i>$/bbl</i></li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n\n        <!-- <div [class]=\"'crude_sliders _'+substance.id\" *ngFor=\"let substance of generateArray(measurements)\"> -->\n            <div class=\"crude_sliders _h2o\">\n                <input-slider class=\"slider\" vertical [substance]=\"measurements.h2o\" (substanceChange)=\"substanceChange($event)\"></input-slider>\n            </div>\n            <div class=\"crude_sliders _temperature\">\n                <input-slider class=\"slider\" vertical [substance]=\"measurements.temperature\" (substanceChange)=\"substanceChange($event)\"></input-slider>\n            </div>\n        <!-- </div> -->\n\n    </div>\n\n    <div class=\"bottom\">\n        <div class=\"bottom-more-options\">\n            <div class=\"bottom-more-options-content\">\n                <p>\n                    When you choose Grade A/B/C flow rates above, we will automatically calculate the h2s and salt content of the total volume. To disable this functionality, click the checkboxes below:\n                </p>\n                <fieldset>\n                    <input type=\"checkbox\" (change)=\"measurements.omit_toggle('h2s')\" [value]=\"measurements.omit_h2s\" /> omit h2s measurement\n                </fieldset>\n                <fieldset>\n                    <input type=\"checkbox\" (change)=\"measurements.omit_toggle('salt')\" [value]=\"measurements.omit_salt\" /> omit salt measurement\n                </fieldset>\n            </div>\n        </div>\n        <span class=\"left_info_link\">\n            <div style=\"margin-left:2.5px;color:#999;\">\n                <b style=\"position: relative;top: -0.125rem;\" class=\"if_active\" onClick=\"console.log(this.closest('.bottom').classList.remove('active'));setTimeout(function(){window.scroll({ top: 0, left: 0, behavior: 'smooth' });},500);\">\n                    <span style=\"font-size:66%;padding:0 5px 0 0;\">&#9650;</span><span style=\"font-weight:500;\">hide options...</span>\n                </b>\n            </div>\n            <div><b>⬆ Approx. flow rates</b></div>\n            <div style=\"margin-left:2.5px;color:#999;\">\n                <b class=\"if_not_active\" onClick=\"console.log(this.closest('.bottom').classList.add('active'));setTimeout(function(){window.scroll({ top: 1010, left: 0, behavior: 'smooth' });},500);\">\n                    <span style=\"font-size:66%;padding:0 5px 0 0;\">&#9660;</span><span style=\"font-weight:500;\">more options...</span>\n                </b>\n            </div>\n        </span>\n        <button value=\"calculate\" (click)=\"calculate_measurements();\" onMouseUp=\"setTimeout(function(){document.getElementById('calculate_measurements_button').blur();},500);\"\n            id=\"calculate_measurements_button\">\n            <span class=\"icon-ui_cycle\"></span>\n            <span> Calculate</span>\n        </button>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/routes/demo/components/box-measure/box-measure.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/routes/demo/components/box-measure/box-measure.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "[box-measure] {\n  position: relative !important;\n  display: block !important;\n  visibility: visible !important;\n  opacity: 1 !important;\n  min-width: 380px !important;\n  z-index: 105; }\n  [box-measure] .box .heading {\n    background: #52b9f0;\n    color: #fff; }\n  [box-measure] .box .heading * {\n      margin: 0;\n      padding: 0.66rem 0.85rem;\n      line-height: 1; }\n  [box-measure] .box .body {\n    padding: 0 1.166rem 0 0.166rem; }\n  [box-measure] .box .bottom {\n    text-align: right;\n    padding: 1rem 1.01rem 1.25rem 1.25rem; }\n  [box-measure] .box .bottom .left_info_link {\n      color: #52b9f0;\n      float: left;\n      text-align: left; }\n  [box-measure] .box .bottom button {\n      background: #52b9f0;\n      border: none;\n      color: #fff;\n      font-weight: bold;\n      font-size: 125%;\n      line-height: 1.5rem;\n      padding: 0.35rem 1rem 0.5rem;\n      border: solid 2px #26a4e7;\n      border-left: none;\n      border-top: none;\n      border-radius: 4px;\n      cursor: pointer;\n      margin: 0 1px 1px 0; }\n  [box-measure] .box .bottom button:focus {\n        border: solid 2px #ffffff;\n        border-right: none;\n        border-bottom: none;\n        position: relative;\n        top: 0;\n        left: 0; }\n  [box-measure] .box .bottom button > * {\n        vertical-align: middle; }\n  [box-measure] .box .bottom .if_active,\n    [box-measure] .box .bottom .if_not_active {\n      display: none; }\n  [box-measure] .box .bottom.active .if_active {\n      display: block; }\n  [box-measure] .box .bottom:not(.active) .if_not_active {\n      display: block; }\n  [box-measure] .box .bottom .bottom-more-options {\n      max-height: 0;\n      transition: max-height 0.5s;\n      overflow: hidden;\n      text-align: left;\n      position: relative;\n      top: -0.25rem;\n      color: #666; }\n  [box-measure] .box .bottom .bottom-more-options .bottom-more-options-content {\n        padding: 0.5rem 0 0.25rem 0.5rem;\n        margin: 0 0 0.66rem;\n        border-radius: 4px;\n        border-bottom: solid 2px #ccc;\n        border-right: solid 2px #ccc;\n        background: #f3f3f3;\n        background: #e6e6e6;\n        border-color: rgba(0, 0, 0, 0.35); }\n  [box-measure] .box .bottom .bottom-more-options p,\n      [box-measure] .box .bottom .bottom-more-options fieldset {\n        margin: 0;\n        padding: 0 0 3px;\n        border: none; }\n  [box-measure] .box .bottom .bottom-more-options fieldset {\n        color: #111;\n        font-weight: 500; }\n  [box-measure] .box .bottom.active .bottom-more-options {\n      max-height: 175px; }\n  [box-measure] .box {\n    border: solid 2px #52b9f0; }\n  [box-measure] .box .heading {\n      background: #52b9f0; }\n  [box-measure] .bg_pipeline_img {\n    background-image: url(\"/assets/images/bg/measure_center.png\"); }\n  [box-measure] .bg_pipeline_img .bg_pipeline_right {\n      background-image: url(\"/assets/images/bg/measure_right.png\"); }\n  [box-measure] .bg_pipeline_img .bg_pipeline_left {\n      background-image: url(\"/assets/images/bg/measure_left.png\"); }\n  [box-measure] .bg_pipeline_img .bg_pipeline_left::before {\n        background: #52b9f0;\n        bottom: 100%;\n        height: 150%; }\n  .crude_measurements {\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n  display: -ms-flexbox;\n  display: flex; }\n  .crude_measurements label {\n    color: rgba(0, 0, 0, 0.87);\n    line-height: 200%;\n    padding-left: 2px; }\n  .crude_measurements .crude_sliders {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-positive: 1;\n        flex-grow: 1;\n    padding: 0.66rem 0.1rem 0.1rem 1rem;\n    width: 25%; }\n  .crude_measurements .crude_sliders .slider {\n      width: 100%; }\n  .crude_measurements .crude_sliders._h2s {\n      display: none; }\n  .crude_measurements .crude_sliders._salt {\n      display: none; }\n  .crude_measurements .crude_type {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    position: relative;\n    width: calc(50% - 2rem) !important;\n    padding: 0.66rem 0.1rem 0.1rem 1rem; }\n  .crude_measurements .crude_type .crude_groups {\n      width: 100%;\n      -ms-flex-positive: 1;\n          flex-grow: 1; }\n  .crude_measurements .crude_type .crude_groups .crude_group {\n        position: relative;\n        padding: 0.66rem 0.5rem 0.5rem;\n        margin: 0 0 0.5rem;\n        color: #333;\n        background: #f4f4f4;\n        border-radius: 3px;\n        text-shadow: 0px 0px 50px rgba(0, 0, 0, 0.5);\n        height: 4rem;\n        border-bottom: solid 2px #ccc;\n        border-right: solid 2px #ccc; }\n  .crude_measurements .crude_type .crude_groups .crude_group:last-child {\n          margin-bottom: 0; }\n  .crude_measurements .crude_type .crude_groups .crude_group .crude_abc_info {\n          position: absolute;\n          bottom: 0.14rem;\n          right: 0.28rem;\n          background: inherit;\n          border-color: inherit; }\n  .crude_measurements .crude_type .crude_groups .crude_group .crude_abc_info .expanded_info {\n            display: block;\n            opacity: 0;\n            visibility: hidden;\n            position: absolute;\n            width: 10rem;\n            height: auto;\n            top: -0.28rem;\n            left: -0.24rem;\n            background: inherit;\n            z-index: 1000;\n            border-bottom-color: #999;\n            border-right-color: #999;\n            border-radius: 4px;\n            transition: opacity 0.33s, visibility 0 linear 0.33s;\n            border-bottom: solid 2px #ccc;\n            border-right: solid 2px #ccc;\n            border-color: inherit; }\n  .crude_measurements .crude_type .crude_groups .crude_group .crude_abc_info .expanded_info ul {\n              list-style: none;\n              padding: 0.66rem 0 0.66rem 0.33rem;\n              margin: 0; }\n  .crude_measurements .crude_type .crude_groups .crude_group .crude_abc_info .expanded_info li {\n              list-style: none;\n              padding: 0.11rem 0 0.11rem 1.33rem;\n              margin: 0; }\n  .crude_measurements .crude_type .crude_groups .crude_group .crude_abc_info span::before {\n            opacity: 0.25;\n            text-shadow: 0 0 50px rgba(0, 0, 0, 0.75); }\n  .crude_measurements .crude_type .crude_groups .crude_group .crude_abc_info:hover span::before {\n            opacity: 1; }\n  .crude_measurements .crude_type .crude_groups .crude_group .crude_abc_info:hover .expanded_info {\n            display: block;\n            opacity: 1;\n            visibility: visible;\n            transition: opacity 0.33s; }\n  .crude_measurements .crude_type .crude_groups div.th {\n        font-weight: bold;\n        color: #111;\n        padding: 0 0 0.25rem; }\n  .crude_measurements .crude_type .crude_groups div.th b {\n          font-weight: normal;\n          padding: 0 1px 0 4px; }\n  .crude_measurements .crude_type .crude_groups div.th b i {\n            font-style: normal;\n            padding: 0 2px; }\n  .crude_measurements .crude_type .crude_groups input {\n        margin: 3px 3px 3px 0;\n        width: calc(100% - 6px);\n        display: inline;\n        max-width: 80px;\n        display: inline-block;\n        width: calc(100% - 1rem);\n        font-size: 12px;\n        font-weight: 400;\n        padding-left: 5px; }\n"

/***/ }),

/***/ "./src/app/routes/demo/components/box-measure/box-measure.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/routes/demo/components/box-measure/box-measure.component.ts ***!
  \*****************************************************************************/
/*! exports provided: BoxMeasureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxMeasureComponent", function() { return BoxMeasureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_corrosion_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/corrosion.service */ "./src/app/services/corrosion.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BoxMeasureComponent = /** @class */ (function () {
    function BoxMeasureComponent(corrosionService) {
        this.corrosionService = corrosionService;
        /*
        data (model)
      */
        this.status = {};
        this.measurements = {};
        this.status = corrosionService.get("status");
        this.measurements = corrosionService.get("measurements");
    }
    /*
    component ready (DOM is not ready)
  */
    BoxMeasureComponent.prototype.ngOnInit = function () { };
    /*
    events
  */
    BoxMeasureComponent.prototype.crude_change = function (id, e) {
        var value = e.target ? e.target.value : e.value;
        this.measurements[id].value = value;
        this.corrosionService.set_measurement(this.measurements[id]);
    };
    BoxMeasureComponent.prototype.substanceChange = function (measurement) {
        this.measurements[measurement.id] = measurement;
        this.corrosionService.set_measurement(measurement);
    };
    BoxMeasureComponent.prototype.calculate_measurements = function () {
        console.log("click");
        this.corrosionService.calculate_measurements();
    };
    /*
    lib
  */
    BoxMeasureComponent.prototype.generateArray = function (obj) {
        // because *ngFor can't iterate over objects...
        // return Object.keys(obj).map(key => {
        //   return { key: key, value: obj[key] };
        // });
        return Object.values(obj);
    };
    BoxMeasureComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "[box-measure]",
            template: __webpack_require__(/*! ./box-measure.component.html */ "./src/app/routes/demo/components/box-measure/box-measure.component.html"),
            styles: [__webpack_require__(/*! ./box-measure.component.scss */ "./src/app/routes/demo/components/box-measure/box-measure.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [src_app_services_corrosion_service__WEBPACK_IMPORTED_MODULE_1__["CorrosionService"]])
    ], BoxMeasureComponent);
    return BoxMeasureComponent;
}());



/***/ }),

/***/ "./src/app/routes/demo/components/input-slider/input-slider.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/routes/demo/components/input-slider/input-slider.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"mymat-slider-label\">\n    <label>\n        <b>{{substance.name}}</b> ({{substance.unit}})\n    </label>\n</div>\n\n<div [class]=\"'mymat-slider-fieldset '+addClass\" ng-if=\"substance\">\n    <div class=\"mymat-slider-input\">\n        <input type=\"number\" [step]=\"substance.step\" [min]=\"substance.na\" [max]=\"substance.max\" [value]=\"substance.value\" (change)=\"sliderValueChange($event)\"\n        />\n    </div>\n    <div class=\"mymat-slider-slider\">\n\n        <mat-slider vertical thumbLabel [step]=\"substance.step\" [min]=\"substance.na\" [max]=\"substance.max\" [value]=\"substance.value===null ? substance.na : substance.value\"\n            (input)=\"sliderInputChange($event)\" (change)=\"sliderValueChange($event)\"></mat-slider>\n\n        <div class=\"mymat-slider-ticks left\">\n            <div class=\"t tMax\" *ngIf=\"substance.statusAlert\" (click)=\"sliderStatusSet('alert')\">\n                <i>&nbsp;</i>\n                <span class=\"icon-ui_alert\"></span>\n            </div>\n            <div class=\"t tBad\" *ngIf=\"substance.badAtStyle\" (click)=\"sliderStatusSet('bad')\" [style]=\"substance.badAtStyle\">\n                <i>&nbsp;</i>\n                <span class=\"icon-ui_alert\"></span>\n            </div>\n            <div class=\"t tDanger\" *ngIf=\"substance.dangerAtStyle\" (click)=\"sliderStatusSet('danger')\" [style]=\"substance.dangerAtStyle\">\n                <i>&nbsp;</i>\n                <span class=\"icon-ui_alert\"></span>\n            </div>\n            <div class=\"t tOk\" [style]=\"this.substance.zeroAtStyle\" (click)=\"sliderStatusSet('ok')\">\n                <i>&nbsp;</i>\n                <span class=\"icon-ui_check\"></span>\n            </div>\n            <!-- <div class=\"t tNa\">\n                <span class=\"\">N/A</span>\n            </div> -->\n        </div>\n\n        <div class=\"mymat-slider-ticks right\">\n            <div class=\"t\">\n                &#8805; {{substance.max}}\n            </div>\n            <div class=\"t tBadRight\" [style]=\"substance.badAtStyle\">\n                {{substance.statusBad}}\n            </div>\n            <div class=\"t\" [style]=\"substance.dangerAtStyle\">\n                {{substance.statusDanger}}\n            </div>\n            <div class=\"t\" [style]=\"this.substance.zeroAtStyle\">\n                <span *ngIf=\"substance.statusOk>0\">&#8804; </span>{{substance.min}}\n            </div>\n            <div class=\"t tNa\">\n                N/A\n            </div>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/routes/demo/components/input-slider/input-slider.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/routes/demo/components/input-slider/input-slider.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  outline: none; }\n\n*:focus {\n  outline: none; }\n\n.mymat-slider-fieldset {\n  position: relative;\n  width: 100%;\n  padding: 0.8rem 0 1.8rem 0;\n  margin: 0 0 0 0;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  text-align: center;\n  overflow: hidden;\n  height: calc(104% - 5.5rem);\n  background: #f3f3f3;\n  border-radius: 4px;\n  border-bottom: solid 2px #ccc;\n  border-right: solid 2px #ccc;\n  border-color: rgba(0, 0, 0, 0.175); }\n\n.mymat-slider-fieldset > * {\n    width: auto; }\n\n.mymat-slider-label {\n  vertical-align: top;\n  color: rgba(0, 0, 0, 0.87);\n  line-height: 200%; }\n\n.mymat-slider-input {\n  position: relative;\n  display: block;\n  padding: 0 4.4% 0 3.3%;\n  white-space: nowrap; }\n\n.mymat-slider-input input {\n  display: inline-block;\n  width: calc(100% - 1rem);\n  font-size: 12px;\n  font-weight: 400;\n  padding-left: 5px; }\n\n.mymat-slider-slider {\n  position: relative;\n  top: 1rem;\n  height: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n  margin-top: 0;\n  padding-top: 0; }\n\n.mymat-slider-slider mat-slider {\n    width: 40%;\n    height: 100%;\n    padding: 0;\n    margin: 0 0 0 0.8rem; }\n\n.mymat-slider-slider .mymat-slider-ticks {\n    font-size: 12px;\n    font-weight: 400;\n    line-height: 115%;\n    position: relative;\n    margin: 1px 0 0 0;\n    color: #bfbfbf;\n    height: 100%; }\n\n.mymat-slider-slider .mymat-slider-ticks .t {\n      position: absolute;\n      white-space: nowrap; }\n\n.mymat-slider-slider .mymat-slider-ticks .t i {\n        position: absolute;\n        top: -0.4rem;\n        left: 0.8rem;\n        width: 1.5rem;\n        color: #bfbfbf;\n        border-bottom: solid 1.25px #bfbfbf; }\n\n.mymat-slider-slider .mymat-slider-ticks .tMax {\n      top: 0;\n      color: #d65139; }\n\n.mymat-slider-slider .mymat-slider-ticks .tDanger {\n      color: #f88f05; }\n\n.mymat-slider-slider .mymat-slider-ticks .tBad {\n      color: #f5c33a; }\n\n.mymat-slider-slider .mymat-slider-ticks .tBadRight {\n      padding-top: 1px !important; }\n\n.mymat-slider-slider .mymat-slider-ticks .tOk {\n      bottom: calc(15% + 2px);\n      color: #6ace00;\n      padding: 1px 0;\n      margin: 0 -1px; }\n\n.mymat-slider-slider .mymat-slider-ticks .tNa {\n      bottom: 1px;\n      color: #bfbfbf; }\n\n.mymat-slider-slider .mymat-slider-ticks.right {\n      text-align: left;\n      left: 0; }\n\n.mymat-slider-slider .mymat-slider-ticks.right .t {\n        left: -1px;\n        pointer-events: none;\n        outline: none;\n        padding: 0 0 0 2px;\n        background: #f4f4f4; }\n\n.mymat-slider-slider .mymat-slider-ticks.left {\n      text-align: right;\n      right: 1.8rem; }\n\n.mymat-slider-slider .mymat-slider-ticks.left .t {\n        right: 0;\n        cursor: pointer; }\n\n.mymat-slider-slider .mymat-slider-ticks.left .t span {\n          outline: none;\n          text-shadow: 3px 0px 0 #f4f4f4;\n          display: inline-block;\n          position: relative; }\n\n.mymat-slider-slider .mymat-slider-ticks.left .t span.icon-ui_alert {\n          zoom: 0.9; }\n\n.mymat-slider-slider .mat-slider-vertical {\n    min-height: 170px; }\n"

/***/ }),

/***/ "./src/app/routes/demo/components/input-slider/input-slider.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/routes/demo/components/input-slider/input-slider.component.ts ***!
  \*******************************************************************************/
/*! exports provided: InputSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputSliderComponent", function() { return InputSliderComponent; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InputSliderComponent = /** @class */ (function () {
    function InputSliderComponent(_sanitizer) {
        this._sanitizer = _sanitizer;
        this.addClass = "";
        this.substanceChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    InputSliderComponent.prototype.ngOnInit = function () {
        this.substance.min = this.substance.statusOk;
        this.substance.max = this.substance.statusAlert;
        this.substance.diff = this.substance.max - this.substance.min;
        if (this.substance.statusDanger && this.substance.statusBad) {
            this.substance.na = this.substance.min - this.substance.diff / 3;
            this.substance.zeroAtStyle = this._sanitizer.bypassSecurityTrustStyle("top:69%");
        }
        else if (this.substance.statusDanger || this.substance.statusBad) {
            this.substance.na = this.substance.min - this.substance.diff / 2;
            this.substance.zeroAtStyle = this._sanitizer.bypassSecurityTrustStyle("top:61%");
        }
        else {
            this.substance.na = this.substance.min - this.substance.diff;
            this.substance.zeroAtStyle = this._sanitizer.bypassSecurityTrustStyle("top:45%");
        }
        if (this.substance.statusBad) {
            var nTotal = this.substance.max - this.substance.na;
            var nTop = (this.substance.statusAlert - this.substance.statusBad) / nTotal;
            this.substance.badAtStyle = this._sanitizer.bypassSecurityTrustStyle("top:" + Math.round(nTop * 90) + "%");
        }
        if (this.substance.statusDanger) {
            var nTotal = this.substance.max - this.substance.na;
            var nTop = (this.substance.statusAlert - this.substance.statusDanger) / nTotal;
            this.substance.dangerAtStyle = this._sanitizer.bypassSecurityTrustStyle("top:" + Math.round(nTop * 90) + "%");
        }
        if (this.substance.max < 10) {
            this.substance.step = 0.1;
        }
        else {
            this.substance.step = 1;
        }
        if (this.vertical !== undefined) {
            this.addClass += " vertical";
        }
    };
    InputSliderComponent.prototype.sliderInputValueChange_computeValue = function (eValue) {
        var value = eValue;
        if (this.substance.step === 1) {
            value = Math.round(value);
        }
        var minNaDiffHalf = (this.substance.min + this.substance.na) / 2;
        if (Math.abs(minNaDiffHalf) <= 10) {
            minNaDiffHalf = 0;
        }
        if (eValue === null || eValue === "" || eValue < minNaDiffHalf) {
            value = null;
        }
        else if (eValue < this.substance.min) {
            value = this.substance.min;
        }
        else if (eValue > this.substance.max) {
            value = this.substance.max;
        }
        return value;
    };
    InputSliderComponent.prototype.sliderStatusSet = function (status) {
        if (status === "na") {
            this.substance.value = this.substance.na;
        }
        else if (status === "ok") {
            this.substance.value = this.substance.statusOk;
        }
        else if (status === "bad") {
            this.substance.value = this.substance.statusBad;
        }
        else if (status === "danger") {
            this.substance.value = this.substance.statusDanger;
        }
        else if (status === "alert") {
            this.substance.value = this.substance.statusAlert;
        }
    };
    InputSliderComponent.prototype.sliderInputChange = function (e) {
        e.source._value = this.sliderInputValueChange_computeValue(e.value);
    };
    InputSliderComponent.prototype.sliderValueChange = function (e) {
        this.substance.value = this.sliderInputValueChange_computeValue(e.target ? e.target.value : e.value);
        this.substanceChange.emit(this.substance);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], InputSliderComponent.prototype, "vertical", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], InputSliderComponent.prototype, "substance", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], InputSliderComponent.prototype, "substanceChange", void 0);
    InputSliderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "input-slider",
            template: __webpack_require__(/*! ./input-slider.component.html */ "./src/app/routes/demo/components/input-slider/input-slider.component.html"),
            styles: [__webpack_require__(/*! ./input-slider.component.scss */ "./src/app/routes/demo/components/input-slider/input-slider.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["DomSanitizer"]])
    ], InputSliderComponent);
    return InputSliderComponent;
}());



/***/ }),

/***/ "./src/app/routes/demo/demo.component.html":
/*!*************************************************!*\
  !*** ./src/app/routes/demo/demo.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"demo_fullscreen\">\n<header>\n    <span>Demo / Proof of concept</span>\n    <img src=\"/assets/images/logo/Beyond_Limits_Logo_WHITE_RGB_700x40.svg\" />\n</header>\n<!-- <h2 id=\"demo_banner\">Demo / Proof of concept</h2> -->\n<article>\n    <h1 style=\"padding: 0 1.66rem;color: #52b9f0;\">Oil Pipeline Corrosion Calculator</h1>\n    <div id=\"pipeline\" [class]=\"'box-components '+statusClass\">\n\n        <span *ngIf=\"statusClass.indexOf('show-results')!==-1\" id=\"scroll-left\" class=\"scroll left\" onclick=\"window.scroll({left: 0,behavior: 'smooth'});\">\n            <span>\n                <b>&laquo;</b>\n                <span> Scroll Left </span>\n            </span>\n        </span>\n        <span *ngIf=\"statusClass.indexOf('show-results')!==-1\" id=\"scroll-right\" class=\"scroll right\" onclick=\"window.scroll({left: 2000,behavior: 'smooth'});\">\n            <span>\n                <span> Scroll Right </span>\n                <b>&raquo;</b>\n            </span>\n        </span>\n\n        <div box-measure></div>\n        <div box-lifetime-calculated></div>\n        <div box-correction *ngIf=\"status.correction_corrosionInhibitor.add\"></div>\n        <div box-lifetime-corrected *ngIf=\"status.correction_corrosionInhibitor.add || status.classList.indexOf('-ok')!=-1\"></div>\n\n    </div>\n</article>\n</div>"

/***/ }),

/***/ "./src/app/routes/demo/demo.component.scss":
/*!*************************************************!*\
  !*** ./src/app/routes/demo/demo.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#demo_fullscreen {\n  position: relative;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  height: 49rem;\n  width: 150vw; }\n  #demo_fullscreen header {\n    width: calc(100vw - 3.33rem);\n    position: fixed;\n    background: #000;\n    border-bottom: solid 2px white;\n    padding: 1.15rem 1.66rem;\n    margin: 0;\n    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.125);\n    height: 13px; }\n  #demo_fullscreen header img {\n      position: absolute;\n      left: 20px;\n      top: 16px;\n      width: 220px;\n      display: block; }\n  #demo_fullscreen header span {\n      position: absolute;\n      right: 1.5rem;\n      top: 1.25rem;\n      padding: 0;\n      margin: -0.15rem;\n      line-height: 100%;\n      font-size: 1.125rem;\n      font-weight: 100;\n      color: #fff; }\n  #demo_fullscreen article {\n    -ms-flex-positive: 1;\n        flex-grow: 1;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    -ms-flex-pack: center;\n        justify-content: center;\n    margin-top: 50px; }\n  #demo_fullscreen h1 {\n    font-size: 2rem;\n    margin: 20px 0 4px 0; }\n  .progress_indicator_bar {\n  position: relative;\n  margin: 0.5rem 0 1rem;\n  width: 99%;\n  height: 0.5rem;\n  border: solid 1px #bfbfbf;\n  border-left-width: 2px;\n  background: #fff; }\n  .progress_indicator_bar .part {\n    position: absolute;\n    top: -0.25px;\n    left: -0.25px;\n    height: calc(100% + 1px);\n    width: 50%;\n    background: #bfbfbf; }\n  /*\n    scroll\n*/\n  .scroll {\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 1s;\n  z-index: 101;\n  position: fixed;\n  top: 0.5rem;\n  cursor: pointer; }\n  .scroll.left {\n    left: 1rem;\n    color: #52b9f0; }\n  .scroll.right {\n    right: 1rem;\n    color: #88dd00; }\n  .scroll span {\n    vertical-align: 2.5px; }\n  .scroll span span {\n      font-size: 125%;\n      font-weight: bold; }\n  .scroll span b {\n      font-size: 2rem; }\n  body.scroll-left .scroll.left {\n  opacity: 1;\n  visibility: visible; }\n  body.scroll-right .scroll.right {\n  opacity: 1;\n  visibility: visible; }\n  /*\n    background graphics\n*/\n  .bg_pipeline_img {\n  position: relative;\n  left: -5rem;\n  background-size: 90% 100%;\n  background-repeat: no-repeat;\n  background-position: center;\n  height: 70px;\n  width: calc(100% + 6.14rem);\n  margin-bottom: 1.7rem;\n  z-index: 100; }\n  .bg_pipeline_img .bg_pipeline_caption {\n    position: absolute;\n    bottom: 35%;\n    color: #fff;\n    width: calc(100% + 4.75rem);\n    text-align: center;\n    font-weight: bold;\n    font-size: 19px; }\n  .bg_pipeline_img .bg_pipeline_caption.left {\n      color: #fff;\n      width: 13%; }\n  .bg_pipeline_img .bg_pipeline_left {\n    position: absolute;\n    left: 5rem;\n    height: 100%;\n    width: 50%;\n    background-size: auto 100%;\n    background-repeat: no-repeat;\n    background-position: left center; }\n  .bg_pipeline_img .bg_pipeline_left img {\n      position: relative;\n      height: 100%; }\n  .bg_pipeline_img .bg_pipeline_right {\n    position: absolute;\n    right: 0;\n    height: 100%;\n    width: 50%;\n    background-size: auto 100%;\n    background-repeat: no-repeat;\n    background-position: right center; }\n  /*\n    boxes\n*/\n  #pipeline.box-components {\n  /*\n        auto-scale (in index.html) based on ratio of content width / page width\n    */\n  width: 1280px;\n  -webkit-transform-origin: 0 0;\n      -ms-transform-origin: 0 0;\n          transform-origin: 0 0;\n  /*\n        layout\n    */\n  vertical-align: top;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  margin: 24px 24px 0; }\n  #pipeline.box-components > div {\n    padding: 0 28px 0 0.6rem;\n    width: 25vw; }\n  #pipeline.box-components > div .box {\n      position: relative;\n      z-index: 99; }\n  #pipeline.box-components > div .box .heading::before {\n        content: \" \";\n        position: absolute;\n        top: -4rem;\n        left: 20px;\n        width: 2px;\n        height: 4.25rem;\n        background: inherit;\n        z-index: 99; }\n  #pipeline.box-components > div .box.next {\n      z-index: 90; }\n  .box-components {\n  /*\n        style\n    */ }\n  .box-components .box {\n    position: relative;\n    top: -0.1px;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    background: #fff;\n    border: solid 2px #bfbfbf;\n    min-height: 290px;\n    width: 99%;\n    min-width: 320px;\n    max-width: 480px;\n    margin-bottom: 24px;\n    box-shadow: 2px 2px 0 0 #ccc;\n    border-radius: 2px; }\n  .box-components .box .heading {\n      background: #bfbfbf;\n      color: #fff; }\n  .box-components .box .heading > * {\n        margin: 0;\n        padding: 0.66rem 0.85rem;\n        line-height: 1; }\n  .box-components .box .body {\n      padding: 1.5rem 1.1rem;\n      color: #999999; }\n  .box-components .box h2 {\n      margin: 0;\n      padding: 0.5rem 0;\n      line-height: 100%; }\n  .box-components .box h3 {\n      font-weight: normal; }\n  .box-components .box h3 b {\n        font-weight: bold; }\n  .box-components .box p {\n      margin: 1.5rem 0.1rem; }\n  .box-components .box .heading {\n      margin: -0.5px -0.5px;\n      width: calc(100% + 1px); }\n  .box-components .box .body {\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n      position: relative; }\n  .box-components .box .bottom {\n      position: relative; }\n"

/***/ }),

/***/ "./src/app/routes/demo/demo.component.ts":
/*!***********************************************!*\
  !*** ./src/app/routes/demo/demo.component.ts ***!
  \***********************************************/
/*! exports provided: DemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoComponent", function() { return DemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_corrosion_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/corrosion.service */ "./src/app/services/corrosion.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DemoComponent = /** @class */ (function () {
    function DemoComponent(corrosionService) {
        this.corrosionService = corrosionService;
        /*
        data (model)
      */
        this.status = {
            classList: ""
        };
        this.statusClass = "";
        this.statusClassMake = function (status) {
            if (status.classList.indexOf("-na") === -1 && status.classList.indexOf("-ok") === -1) {
                return status.classList;
            }
            else {
                return status.classList;
            }
        };
        this.status = corrosionService.get("status");
        this.statusClass = this.statusClassMake(this.status);
    }
    /*
    component ready (DOM is not ready)
  */
    DemoComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            window.scroll({
                left: 0,
                behavior: "smooth"
            });
        }, 100);
        this.corrosionService.statusUpdated.subscribe(function (status) {
            window.bodyOnResize();
            _this.status = status;
            _this.statusClass = _this.statusClassMake(status);
            if (_this.statusClass.indexOf("-bad") !== -1 && _this.status.correction_corrosionInhibitor.add) {
                setTimeout(function () {
                    window.scroll({
                        left: window.document.querySelector("div[box-lifetime-calculated]").offsetLeft / 1.75,
                        behavior: "smooth"
                    });
                }, 500);
            }
            // console.log("statusUpdated", this.status);
        });
    };
    DemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "demo-component",
            template: __webpack_require__(/*! ./demo.component.html */ "./src/app/routes/demo/demo.component.html"),
            styles: [__webpack_require__(/*! ./demo.component.scss */ "./src/app/routes/demo/demo.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [src_app_services_corrosion_service__WEBPACK_IMPORTED_MODULE_1__["CorrosionService"]])
    ], DemoComponent);
    return DemoComponent;
}());



/***/ }),

/***/ "./src/app/routes/demo/demo.module.ts":
/*!********************************************!*\
  !*** ./src/app/routes/demo/demo.module.ts ***!
  \********************************************/
/*! exports provided: DemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoModule", function() { return DemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _demo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./demo.component */ "./src/app/routes/demo/demo.component.ts");
/* harmony import */ var _components_input_slider_input_slider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/input-slider/input-slider.component */ "./src/app/routes/demo/components/input-slider/input-slider.component.ts");
/* harmony import */ var _components_box_measure_box_measure_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/box-measure/box-measure.component */ "./src/app/routes/demo/components/box-measure/box-measure.component.ts");
/* harmony import */ var _components_box_correction_box_correction_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/box-correction/box-correction.component */ "./src/app/routes/demo/components/box-correction/box-correction.component.ts");
/* harmony import */ var _components_box_lifetime_calculated_box_lifetime_calculated_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/box-lifetime-calculated/box-lifetime-calculated.component */ "./src/app/routes/demo/components/box-lifetime-calculated/box-lifetime-calculated.component.ts");
/* harmony import */ var _components_box_lifetime_corrected_box_lifetime_corrected_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/box-lifetime-corrected/box-lifetime-corrected.component */ "./src/app/routes/demo/components/box-lifetime-corrected/box-lifetime-corrected.component.ts");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var DemoModule = /** @class */ (function () {
    function DemoModule() {
    }
    DemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        path: "",
                        component: _demo_component__WEBPACK_IMPORTED_MODULE_3__["DemoComponent"]
                    }
                ])
            ],
            exports: [],
            declarations: [_demo_component__WEBPACK_IMPORTED_MODULE_3__["DemoComponent"], _components_input_slider_input_slider_component__WEBPACK_IMPORTED_MODULE_4__["InputSliderComponent"], _components_box_measure_box_measure_component__WEBPACK_IMPORTED_MODULE_5__["BoxMeasureComponent"], _components_box_correction_box_correction_component__WEBPACK_IMPORTED_MODULE_6__["BoxCorrectionComponent"], _components_box_lifetime_calculated_box_lifetime_calculated_component__WEBPACK_IMPORTED_MODULE_7__["BoxLifetime_calculatedComponent"], _components_box_lifetime_corrected_box_lifetime_corrected_component__WEBPACK_IMPORTED_MODULE_8__["BoxLifetime_correctedComponent"]],
            providers: []
        })
    ], DemoModule);
    return DemoModule;
}());



/***/ }),

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
// const BEAPIURL = "http://" + (USE_REMOTE_SERVER ? "10.1.111.232" : "localhost") + ":5000/calculate";
var BEAPIURL = "http://localhost:5000/calculate";
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
//# sourceMappingURL=routes-demo-demo-module.js.map