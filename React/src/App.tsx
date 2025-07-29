import {
  useRef, useState, useCallback,
} from 'react';
import { SelectBox, type SelectBoxRef, type SelectBoxTypes } from 'devextreme-react/select-box';
import Form, { SimpleItem, Label, type FormTypes } from 'devextreme-react/form';
import notify from 'devextreme/ui/notify';
import './App.css';
import 'devextreme/dist/css/dx.light.css';

import type dxSelectBox from 'devextreme/ui/select_box';
import service from './data';

const states = service.getStates();
const cities = service.getCities();

const stateEditorOptions = {
  dataSource: states,
  valueExpr: 'ID',
  displayExpr: 'Name',
};

const cityEditorOptions = {
  dataSource: cities,
  valueExpr: 'ID',
  displayExpr: 'Name',
};

function App(): JSX.Element {
  const [formData, setFormData] = useState(service.getAddress);
  const [stateValue, setStateValue] = useState(null);
  const [cityValue, setCityValue] = useState(null);
  const citySelectBoxRef = useRef<SelectBoxRef>(null);

  const stateValueChanged = useCallback((e: SelectBoxTypes.ValueChangedEvent): void => {
    if (citySelectBoxRef.current) {
      const cityDataSource = citySelectBoxRef.current.instance().getDataSource();
      cityDataSource.filter(['StateID', '=', e.value]);
      cityDataSource.load().then(() => {
        setStateValue(e.value);
        setCityValue(null);
      }).catch(() => {
        notify('An error occurred while loading changes.', 'error', 3000);
      });
    }
  }, []);
  const cityValueChanged = useCallback((e: SelectBoxTypes.ValueChangedEvent): void => {
    setCityValue(e.value);
  }, []);
  const onFieldDataChanged = useCallback((e: FormTypes.FieldDataChangedEvent) => {
    if (e.dataField === 'StateID') {
      const cityEditor = e.component.getEditor('CityID') as dxSelectBox;
      const dataSource = cityEditor.getDataSource();
      dataSource.filter(['StateID', '=', e.value]);
      dataSource.load().then(() => {
        setFormData({ ...formData, ...{ CityID: null, StateID: e.value } });
      }).catch(() => {
        notify('An error occurred while loading changes.', 'error', 3000);
      });
    }
  }, []);

  return (
    <div>
      <div className="dx-fieldset" style={{ width: '50%' }}>
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
    </div>
  );
}

export default App;
