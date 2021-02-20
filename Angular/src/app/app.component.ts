import { Component, ViewChild } from "@angular/core";

import { DxSelectBoxComponent } from "devextreme-angular/ui/select-box";

import { State, City, Address, Service } from "./app.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [Service]
})
export class AppComponent {
  @ViewChild("citySelectBox", { static: false })
  citySelectBoxComponent: DxSelectBoxComponent;

  states: State[];
  cities: City[];

  selectedCityID: number;
  address: Address;

  constructor(service: Service) {
    this.states = service.getStates();
    this.cities = service.getCities();

    this.address = service.getAddress();
  }

  onStateChanged(e) {
    let dataSource = this.citySelectBoxComponent.instance.getDataSource();
    dataSource.filter(["StateID", "=", e.value]);
    dataSource.load();
	this.selectedCityID = null;
  }

  onFieldDataChanged(e) {
    if (e.dataField === "StateID") {
      var cityEditor = e.component.getEditor("CityID");
      let dataSource = cityEditor.getDataSource();
      dataSource.filter(["StateID", "=", e.value]);
      dataSource.load();
	  this.address.CityID = null;
    }
  }
}
