import { DomSanitizer } from "@angular/platform-browser";

import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { CorrosionService } from "src/app/services/corrosion.service";

@Component({
    selector: "[box-lifetime-corrected]",
    templateUrl: "./box-lifetime-corrected.component.html",
    encapsulation: ViewEncapsulation.None
})
export class BoxLifetime_correctedComponent implements OnInit {
    /*
    data (model)
  */
    status: any = "";
    statusClass: any = "";
    statusClassMake = function(status) {
        if (status.lifetime_corrected > status.lifetime_calculated || status.lifetime_corrected >= status.lifetime_manufacturer * 0.9) {
            return "status-ok";
        } else {
            return "status-bad";
        }
    };
    constructor(private corrosionService: CorrosionService, private _sanitizer: DomSanitizer) {
        this.status = corrosionService.get("status");
        this.statusClass = this.statusClassMake(this.status);
    }
    /*
    component ready (DOM is not ready)
  */
    progress_bar_style: any = "";
    ngOnInit() {
        // this.progress_bar_style = this._sanitizer.bypassSecurityTrustStyle(`width:${(this.status.lifetime_corrected / this.status.lifetime_manufacturer) * 100}%;`);
        this.corrosionService.statusUpdated.subscribe(status => {
            this.status = status;
            this.statusClass = this.statusClassMake(this.status);
            // this.progress_bar_style = this._sanitizer.bypassSecurityTrustStyle(`width:${(this.status.lifetime_corrected / this.status.lifetime_manufacturer) * 100}%;`);
        });
    }
}
