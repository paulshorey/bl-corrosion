import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from "@angular/core";
import { CorrosionService } from "src/app/services/corrosion.service";

@Component({
    selector: "[box-measure]",
    templateUrl: "./box-measure.component.html",
    styleUrls: ["./box-measure.component.scss"],
    encapsulation: ViewEncapsulation.None
})
export class BoxMeasureComponent implements OnInit {
    /*
    data (model)
  */
    status: any = {};
    measurements: any = {};
    constructor(private corrosionService: CorrosionService) {
        this.status = corrosionService.get("status");
        this.measurements = corrosionService.get("measurements");
    }
    /*
    component ready (DOM is not ready)
  */
    ngOnInit() {}
    /*
    events
  */
    crude_change(id, e) {
        var value = e.target ? e.target.value : e.value;
        this.measurements[id].value = value;
        this.corrosionService.set_measurement(this.measurements[id]);
    }
    substanceChange(measurement) {
        this.measurements[measurement.id] = measurement;
        this.corrosionService.set_measurement(measurement);
    }
    calculate_measurements() {
        console.log("click");
        this.corrosionService.calculate_measurements();
    }
    /*
    lib
  */
    generateArray(obj) {
        // because *ngFor can't iterate over objects...
        // return Object.keys(obj).map(key => {
        //   return { key: key, value: obj[key] };
        // });
        return Object.values(obj);
    }
}
