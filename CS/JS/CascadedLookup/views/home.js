CascadedLookup.home = function (params) {
    var viewModel = {
        categoryDataSource: new DevExpress.data.DataSource(CascadedLookup.db.Categories),
        categoryValue: ko.observable(undefined),
        onCategoryChange: function (e) {
            this.productDataSource.filter('Category.CategoryID', '=', this.categoryValue());
            this.productDataSource.load();
        },
        productDataSource: new DevExpress.data.DataSource({
            store: CascadedLookup.db.Products,
            expand: 'Category'
        }),
        productValue: ko.observable(undefined)
    };
    return viewModel;
};