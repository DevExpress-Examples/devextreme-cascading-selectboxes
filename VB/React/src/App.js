import React, { useRef, useState, useCallback, useEffect } from "react";
import { SelectBox } from "devextreme-react";
import Form, { SimpleItem, Label } from "devextreme-react/form";

import service from "./data.js";

const states = service.getStates();
const cities = service.getCities();

const stateEditorOptions = {
  dataSource: states,
  valueExpr: "ID",
  displayExpr: "Name"
};

const cityEditorOptions = {
  dataSource: cities,
  valueExpr: "ID",
  displayExpr: "Name"
};

export default function App() {

  const [formData, setFormData] = useState(service.getAddress);
  const [stateValue, setStateValue] = useState(null);
  const [cityValue, setCityValue] = useState(null);
  const citySelectBoxRef = useRef();
  let cityDataSource = null;

  useEffect(() => {
    cityDataSource = citySelectBoxRef.current.instance.getDataSource();
  })

  const stateValueChanged = (e) => {
    cityDataSource.filter(["StateID", "=", e.value]);
    cityDataSource.load();
    setStateValue(e.value);
    setCityValue(null)
  }
  const cityValueChanged = e => {
    setCityValue(e.value);
  };
  const onFieldDataChanged = useCallback((e) => {
    if (e.dataField === "StateID") {
      let cityEditor = e.component.getEditor("CityID");
      let dataSource = cityEditor.getDataSource();
      dataSource.filter(["StateID", "=", e.value]);
      dataSource.load();
      setFormData({ ...formData, ...{ CityID: null, StateID: e.value } });
    }
  }, [])

  return (
    <div>
      <div className="dx-fieldset">
        <div className="dx-fieldset-header">Select State, City</div>
        <div className="dx-field">
          <div className="dx-field-label">State</div>
          <div className="dx-field-value">
            <SelectBox
              dataSource={states}
              valueExpr="ID"
              displayExpr="Name"
              value={stateValue}
              onValueChanged={stateValueChanged}
            />
          </div>
        </div>
        <div className="dx-field">
          <div className="dx-field-label">City</div>
          <div className="dx-field-value">
            <SelectBox
              ref={citySelectBoxRef}
              dataSource={cities}
              onValueChanged={cityValueChanged}
              valueExpr="ID"
              displayExpr="Name"
              value={cityValue}
            />
          </div>
        </div>
      </div>
      <div className="dx-fieldset-header">In Form</div>
      <div className="dx-field">
        <Form
          formData={formData}
          onFieldDataChanged={onFieldDataChanged}
        >
          <SimpleItem
            dataField="StateID"
            editorType="dxSelectBox"
            editorOptions={stateEditorOptions}
          >
            <Label text="State" />
          </SimpleItem>
          <SimpleItem
            dataField="CityID"
            editorType="dxSelectBox"
            editorOptions={cityEditorOptions}
          >
            <Label text="City" />
          </SimpleItem>
        </Form>
      </div>
    </div>
  );
}