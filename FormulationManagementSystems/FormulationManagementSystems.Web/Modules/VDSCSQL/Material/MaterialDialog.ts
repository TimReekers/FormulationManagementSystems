﻿
namespace FormulationManagementSystems.VDSCSQL {

    @Serenity.Decorators.registerClass()
    export class MaterialDialog extends Serenity.EntityDialog<MaterialRow, any> {
        protected getFormKey() { return MaterialForm.formKey; }
        protected getIdProperty() { return MaterialRow.idProperty; }
        protected getLocalTextPrefix() { return MaterialRow.localTextPrefix; }
        protected getNameProperty() { return MaterialRow.nameProperty; }
        protected getService() { return MaterialService.baseUrl; }

        protected form = new MaterialForm(this.idPrefix);

    }
}