import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DxSelectBoxModule, DxSelectBoxComponent } from "devextreme-angular";
import { DxFormModule } from "devextreme-angular";
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, DxSelectBoxModule, DxFormModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  exports: [AppComponent],
  providers:[]
})
export class AppModule {}
