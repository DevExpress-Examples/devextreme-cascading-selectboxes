<!-- default file list -->
*Files to look at*:

<!-- default file list end -->
# How to implement cascading lookups


<p>This example demonstrates how to implement cascading lookups. The main idea is to get the changed value of the first lookup and select data based on this value for the second lookup. It is necessary to perform the following steps:</p>
<p>1. Handle the <a href="http://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/?version=15_2#onValueChanged">dxLookup.onValueChanged</a> event of the first lookup;<br>2. In this event handler pass the selected value of the first lookup to the <a href="http://js.devexpress.com/Documentation/ApiReference/Data_Layer/DataSource/Configuration/?version=15_1#filter"><u>DataSource.filter</u></a> method of a data source that is related to the second lookup.</p>
<p><strong>See</strong><strong> a</strong><strong>lso</strong><strong>:<br></strong><a href="https://www.devexpress.com/Support/Center/p/T334359">dxDataGrid - How to implement cascading lookup columns</a><br> <a href="https://js.devexpress.com/Documentation/Guide/Data_Layer/Data_Source_Examples/#OData/Associations"><u>OData Associations</u></a><u><br> </u><a href="http://js.devexpress.com/Documentation/ApiReference/Data_Layer/ODataContext"><u>ODataContext</u></a><u><br> </u><a href="http://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxLookup/"><u>dxLookup</u></a><u><br> </u><a href="https://www.devexpress.com/Support/Center/p/E4817">ODataContext - How to filter data by a foreign key value</a><u><br> </u></p>

<br/>


