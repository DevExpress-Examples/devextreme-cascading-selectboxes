<template>
  <div>
    <div class="dx-fieldset" style="width:50%">
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
            :ref="citySelectBoxRefKey"
            :data-source="cities"
            :value.sync="cityValue"
            value-expr="ID"
            display-expr="Name"
          />
        </div>
      </div>
      <div class="dx-fieldset-header">In Form</div>
      <div class="dx-field">
        <DxForm :form-data.sync="address" @field-data-changed="fieldDataChanged">
          <DxSimpleItem
            data-field="StateID"
            editor-type="dxSelectBox"
            :editor-options="stateEditorOptions"
          >
            <DxLabel text="State"></DxLabel>
          </DxSimpleItem>
          <DxSimpleItem
            data-field="CityID"
            editor-type="dxSelectBox"
            :editor-options="cityEditorOptions"
          >
            <DxLabel text="City"></DxLabel>
          </DxSimpleItem>
        </DxForm>
      </div>
    </div>
  </div>
</template>
<script>
import { DxSelectBox } from "devextreme-vue";
import DxForm, { DxSimpleItem, DxLabel } from "devextreme-vue/form";
import service from "./data.js";

const citySelectBoxRefKey = "city-select-box";

export default {
  components: {
    DxSelectBox,
    DxForm,
    DxSimpleItem,
    DxLabel
  },
  data() {
    const states = service.getStates(),
      cities = service.getCities();
    return {
      states,
      cities,
      cityValue: null,
      citySelectBoxRefKey,
      address: service.getAddress(),
      stateEditorOptions: {
        dataSource: states,
        valueExpr: "ID",
        displayExpr: "Name"
      },
      cityEditorOptions: {
        dataSource: cities,
        valueExpr: "ID",
        displayExpr: "Name"
      }
    };
  },
  methods: {
    stateValueChanged: function(e) {
      this.cityDataSource.filter(["StateID", "=", e.value]);
      this.cityDataSource.load();

      this.cityValue = null;
    },
    fieldDataChanged: function(e) {
      if (e.dataField === "StateID") {
        var cityEditor = e.component.getEditor("CityID");
        let dataSource = cityEditor.getDataSource();
        
        dataSource.filter(["StateID", "=", e.value]);
        dataSource.load();

        this.address.CityID = null;
      }
    }
  },
  computed: {
    citySelectBox: function() {
      return this.$refs[citySelectBoxRefKey].instance;
    },
    cityDataSource: function() {
      return this.citySelectBox.getDataSource();
    }
  }
};
</script>
