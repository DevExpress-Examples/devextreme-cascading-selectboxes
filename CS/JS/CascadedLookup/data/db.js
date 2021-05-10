(function() {
    CascadedLookup.db = new DevExpress.data.ODataContext({
        url: 'http://services.odata.org/Northwind/Northwind.svc/',
        entities: {
            Categories: {
                key: "CategoryID",
                keyType: "Int32"
            },
            Products: {
                key: "ProductID",
                keyType: "Int32"
            }
        }
    });
})();