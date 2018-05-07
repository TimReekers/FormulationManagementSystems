/// <reference path="../Common/Helpers/LanguageList.ts" />

namespace FormulationManagementSystems.ScriptInitialization {
    Q.Config.responsiveDialogs = true;
    Q.Config.rootNamespaces.push('FormulationManagementSystems');
    Serenity.EntityDialog.defaultLanguageList = LanguageList.getValue;

    if ($.fn['colorbox']) {
        $.fn['colorbox'].settings.maxWidth = "95%";
        $.fn['colorbox'].settings.maxHeight = "95%";
    }

    window.onerror = Q.ErrorHandling.runtimeErrorHandler;
}   