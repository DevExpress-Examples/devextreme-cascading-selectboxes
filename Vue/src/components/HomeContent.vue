<script setup lang="ts">
import { ref } from 'vue';

import 'devextreme/dist/css/dx.light.css';

import { DxSelectBox, type DxSelectBoxTypes } from 'devextreme-vue/select-box';
import DxForm, { DxSimpleItem, DxLabel, type DxFormTypes } from 'devextreme-vue/form';
import type dxSelectBox from 'devextreme/ui/select_box';
import notify from 'devextreme/ui/notify';

import service from '../data';

const states = service.getStates(),
  cities = service.getCities(),
  address = ref(service.getAddress());
const citySelectBoxRef = ref<DxSelectBox>();
const cityValue = ref(null);
const stateEditorOptions = {
    dataSource: states,
    valueExpr: 'ID',
    displayExpr: 'Name'
  },
  cityEditorOptions = {
    dataSource: cities,
    valueExpr: 'ID',
    displayExpr: 'Name'
  };
function stateValueChanged(e: DxSelectBoxTypes.ValueChangedEvent) {
  const citySelectBox = citySelectBoxRef?.value?.instance;
  if (citySelectBox) {
    const dataSource = citySelectBox.getDataSource();
    dataSource.filter(['StateID', '=', e.value]);
    dataSource.load().then(() => {
      cityValue.value = null;
    }).catch(() => {
      notify('An error occurred while loading changes.', 'error', 3000);
    });
  }
}
function fieldDataChanged(e: DxFormTypes.FieldDataChangedEvent) {
  if (e.dataField === 'StateID') {
    const cityEditor = e.component.getEditor('CityID') as dxSelectBox;
    const dataSource = cityEditor.getDataSource();
    dataSource.filter(['StateID', '=', e.value]);
    dataSource.load().then(() => {
      address.value.CityID = null;
    }).catch(() => {
      notify('An error occurred while loading changes.', 'error', 3000);
    });
  }
}
</script>
<template>
  <div>
    <div
      class="dx-fieldset"
      style="width:50%"
    >
      <div class="dx-fieldset-header">Select State, City</div>
      <div class="dx-field">
        <div class="dx-field-label">State</div>
        <div class="dx-field-value">
          <DxSelectBox
            :data-source="states"
            value-expr="ID"
            display-expr="Name"
            @valueChanged="stateValueChanged"
          />
        </div>
      </div>
      <div class="dx-field">
        <div class="dx-field-label">City</div>
        <div class="dx-field-value">
          <DxSelectBox
            ref="citySelectBoxRef"
            :data-source="cities"
            v-model:value="cityValue"
            value-expr="ID"
            display-expr="Name"
          />
        </div>
      </div>
      <div class="dx-fieldset-header">In Form</div>
      <div class="dx-field">
        <DxForm
          v-model:form-data="address"
          @field-data-changed="fieldDataChanged"
        >
          <DxSimpleItem
            data-field="StateID"
            editor-type="dxSelectBox"
            :editor-options="stateEditorOptions"
          >
            <DxLabel text="State"/>
          </DxSimpleItem>
          <DxSimpleItem
            data-field="CityID"
            editor-type="dxSelectBox"
            :editor-options="cityEditorOptions"
          >
            <DxLabel text="City"/>
          </DxSimpleItem>
        </DxForm>
      </div>
    </div>
  </div>
</template>
