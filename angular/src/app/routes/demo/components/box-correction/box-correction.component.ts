import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { CorrosionService } from "src/app/services/corrosion.service";

@Component({
    selector: "[box-correction]",
    templateUrl: "./box-correction.component.html",
    styleUrls: ["./box-correction.component.scss"],
    encapsulation: ViewEncapsulation.None
})
export class BoxCorrectionComponent implements OnInit {
    /*
    data (model)
  */
    status: any = "";
    constructor(private corrosionService: CorrosionService) {
        this.status = corrosionService.get("status");
    }
    /*
    component ready (DOM is not ready)
  */
    ngOnInit() {
        this.corrosionService.statusUpdated.subscribe(status => {
            this.status = status;
        });
    }
    set_status_correction_corrosionInhibitor(key, value) {
        this.corrosionService.set_status_correction_corrosionInhibitor(key, value);
    }
    calculate_corrosionInhibitor() {
        console.log("click");
        this.corrosionService.calculate_corrosionInhibitor();
    }
}
