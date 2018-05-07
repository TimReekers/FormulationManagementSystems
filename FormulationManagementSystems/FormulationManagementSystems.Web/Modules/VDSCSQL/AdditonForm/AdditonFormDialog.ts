
namespace FormulationManagementSystems.VDSCSQL {

    @Serenity.Decorators.registerClass()
    export class AdditonFormDialog extends Serenity.EntityDialog<AdditonFormRow, any> {
        protected getFormKey() { return AdditonFormForm.formKey; }
        protected getIdProperty() { return AdditonFormRow.idProperty; }
        protected getLocalTextPrefix() { return AdditonFormRow.localTextPrefix; }
        protected getNameProperty() { return AdditonFormRow.nameProperty; }
        protected getService() { return AdditonFormService.baseUrl; }

        protected form = new AdditonFormForm(this.idPrefix);

    }
}