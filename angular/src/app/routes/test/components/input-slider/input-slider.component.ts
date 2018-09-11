import { DomSanitizer } from "@angular/platform-browser";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "input-slider",
    templateUrl: "./input-slider.component.html",
    styleUrls: ["./input-slider.component.scss"]
})
export class InputSliderComponent implements OnInit {
    addClass = "";
    @Input() vertical: any;
    @Input() substance: any;
    @Output() substanceChange = new EventEmitter();

    constructor(private _sanitizer: DomSanitizer) {}

    ngOnInit() {
        this.substance.min = this.substance.statusOk;
        this.substance.max = this.substance.statusAlert;
        this.substance.diff = this.substance.max - this.substance.min;
        if (this.substance.statusDanger && this.substance.statusBad) {
            this.substance.na = this.substance.min - this.substance.diff / 3;
            this.substance.zeroAtStyle = this._sanitizer.bypassSecurityTrustStyle(`top:69%`);
        } else if (this.substance.statusDanger || this.substance.statusBad) {
            this.substance.na = this.substance.min - this.substance.diff / 2;
            this.substance.zeroAtStyle = this._sanitizer.bypassSecurityTrustStyle(`top:61%`);
        } else {
            this.substance.na = this.substance.min - this.substance.diff;
            this.substance.zeroAtStyle = this._sanitizer.bypassSecurityTrustStyle(`top:45%`);
        }
        if (this.substance.statusBad) {
            let nTotal = this.substance.max - this.substance.na;
            let nTop = (this.substance.statusAlert - this.substance.statusBad) / nTotal;
            this.substance.badAtStyle = this._sanitizer.bypassSecurityTrustStyle(`top:${Math.round(nTop * 90)}%`);
        }
        if (this.substance.statusDanger) {
            let nTotal = this.substance.max - this.substance.na;
            let nTop = (this.substance.statusAlert - this.substance.statusDanger) / nTotal;
            this.substance.dangerAtStyle = this._sanitizer.bypassSecurityTrustStyle(`top:${Math.round(nTop * 90)}%`);
        }
        if (this.substance.max < 10) {
            this.substance.step = 0.1;
        } else {
            this.substance.step = 1;
        }
        if (this.vertical !== undefined) {
            this.addClass += " vertical";
        }
    }
    sliderInputValueChange_computeValue(eValue) {
        let value = eValue;
        if (this.substance.step === 1) {
            value = Math.round(value);
        }
        let minNaDiffHalf = (this.substance.min + this.substance.na) / 2;
        if (Math.abs(minNaDiffHalf) <= 10) {
            minNaDiffHalf = 0;
        }
        if (eValue === null || eValue === "" || eValue < minNaDiffHalf) {
            value = null;
        } else if (eValue < this.substance.min) {
            value = this.substance.min;
        } else if (eValue > this.substance.max) {
            value = this.substance.max;
        }
        return value;
    }
    sliderStatusSet(status) {
        if (status === "na") {
            this.substance.value = this.substance.na;
        } else if (status === "ok") {
            this.substance.value = this.substance.statusOk;
        } else if (status === "bad") {
            this.substance.value = this.substance.statusBad;
        } else if (status === "danger") {
            this.substance.value = this.substance.statusDanger;
        } else if (status === "alert") {
            this.substance.value = this.substance.statusAlert;
        }
    }
    sliderInputChange(e) {
        e.source._value = this.sliderInputValueChange_computeValue(e.value);
    }
    sliderValueChange(e) {
        this.substance.value = this.sliderInputValueChange_computeValue(e.target ? e.target.value : e.value);
        this.substanceChange.emit(this.substance);
    }
}
