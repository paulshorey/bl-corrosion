import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { TestComponent } from "./test.component";
import { InputSliderComponent } from "./components/input-slider/input-slider.component";
import { BoxMeasureComponent } from "./components/box-measure/box-measure.component";
import { BoxCorrectionComponent } from "./components/box-correction/box-correction.component";
import { BoxLifetime_calculatedComponent } from "./components/box-lifetime-calculated/box-lifetime-calculated.component";
import { BoxLifetime_correctedComponent } from "./components/box-lifetime-corrected/box-lifetime-corrected.component";
import { MatSliderModule } from "@angular/material/slider";

@NgModule({
    imports: [
        MatSliderModule,
        CommonModule,
        RouterModule.forChild([
            {
                path: "",
                component: TestComponent
            },
            {
                path: "secondTest",
                component: TestComponent
            }
        ])
    ],
    exports: [],
    declarations: [TestComponent, InputSliderComponent, BoxMeasureComponent, BoxCorrectionComponent, BoxLifetime_calculatedComponent, BoxLifetime_correctedComponent],
    providers: []
})
export default class TestModule {}
