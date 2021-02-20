import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DxSelectBoxModule } from "devextreme-angular/ui/select-box";
import { DxFormModule } from "devextreme-angular/ui/form";
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    DxSelectBoxModule,
    DxFormModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  exports: [AppComponent],
  providers:[]
})
export class AppModule {}
