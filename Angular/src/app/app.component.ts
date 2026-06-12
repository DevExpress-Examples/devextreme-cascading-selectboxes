import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { DxSelectBoxModule, DxSelectBoxComponent, DxSelectBoxTypes } from 'devextreme-angular/ui/select-box';
import { DxFormModule, DxFormTypes } from 'devextreme-angular/ui/form';
import dxSelectBox from 'devextreme/ui/select_box';
import notify from 'devextreme/ui/notify';
import {
  State, City, Address, Service,
} from './app.service';

@Component({
  selector: 'app-root',
  imports: [DxSelectBoxModule, DxFormModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  providers: [Service],
})
export class AppComponent {
  @ViewChild('citySelectBox', { static: false })
    citySelectBoxComponent!: DxSelectBoxComponent;

  states: State[];

  cities: City[];

  selectedCityID: number | null = null;

  address: Address;

  constructor(service: Service) {
    this.states = service.getStates();
    this.cities = service.getCities();
    this.address = service.getAddress();
  }

  onStateChanged(e: DxSelectBoxTypes.ValueChangedEvent): void {
    const dataSource = this.citySelectBoxComponent.instance.getDataSource();
    dataSource.filter(['StateID', '=', e.value]);
    dataSource.load().then(() => {
      this.selectedCityID = null;
    }).catch(() => {
      notify('An error occurred while loading changes.', 'error', 3000);
    });
  }

  onFieldDataChanged(e: DxFormTypes.FieldDataChangedEvent): void {
    if (e.dataField === 'StateID') {
      const cityEditor = e.component.getEditor('CityID') as dxSelectBox;
      let dataSource = cityEditor?.getDataSource();
      dataSource.filter(['StateID', '=', e.value]);
      dataSource.load().then(() => {
        this.address.CityID = null;
      }).catch(() => {
        notify('An error occurred while loading changes.', 'error', 3000);
      });
    }
  }
}
