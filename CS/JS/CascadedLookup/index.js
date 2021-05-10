window.CascadedLookup = window.CascadedLookup || {};

$(function() {
    // Uncomment the line below to disable platform-specific look and feel and to use the Generic theme for all devices
    // DevExpress.devices.current({ platform: "generic" });

    CascadedLookup.app = new DevExpress.framework.html.HtmlApplication({
        namespace: CascadedLookup,        
        layoutSet: DevExpress.framework.html.layoutSets[CascadedLookup.config.layoutSet],
        navigation: CascadedLookup.config.navigation,
        commandMapping: CascadedLookup.config.commandMapping
    });
    CascadedLookup.app.router.register(":view/:id", { view: "home", id: undefined });

    CascadedLookup.app.navigate();
});
