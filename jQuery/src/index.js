$(() => {
  const address = { StateID: null, CityID: null };

  $('#stateSelectBox').dxSelectBox({
    dataSource: states,
    valueExpr: 'ID',
    displayExpr: 'Name',
    showClearButton: true,
    onValueChanged(e) {
      const dataSource = citySelectBox.getDataSource();
      dataSource.filter('StateID', '=', e.value);
      dataSource.load();
      citySelectBox.option('value', null);
    },
  });

  let citySelectBox = $('#citySelectBox').dxSelectBox({
    dataSource: cities,
    valueExpr: 'ID',
    displayExpr: 'Name',
  }).dxSelectBox('instance');

  $('#stateCityForm').dxForm({
    formData: address,
    onFieldDataChanged(e) {
      if (e.dataField === 'StateID') {
        const cityEditor = e.component.getEditor('CityID');
        cityEditor.getDataSource().filter(['StateID', '=', e.value]);
        cityEditor.getDataSource().load();
        e.component.updateData('CityID', null);
      }
    },
    items: [
      // State item
      {
        label: { text: 'State' },
        dataField: 'StateID',
        editorType: 'dxSelectBox',
        editorOptions: {
          dataSource: states,
          valueExpr: 'ID',
          displayExpr: 'Name',
          showClearButton: true,
        },
      },
      // City item
      {
        label: { text: 'City' },
        dataField: 'CityID',
        editorType: 'dxSelectBox',
        editorOptions: {
          dataSource: cities,
          valueExpr: 'ID',
          displayExpr: 'Name',
        },
      },
    ],
  });
});
