import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule, HAMMER_GESTURE_CONFIG } from "@angular/platform-browser";
import { GestureConfig } from "@angular/material";

import { AppComponent } from "./app.component";

// import "src/app/lib/Object.prototype.watch";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: "",
        loadChildren: "./routes/demo/demo.module#DemoModule"
      },
      {
        path: "test",
        loadChildren: "./routes/test/test.module#TestModule"
      }
    ])
  ],
  providers: [{ provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig }],
  bootstrap: [AppComponent]
})
export class AppModule {}
