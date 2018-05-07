
namespace FormulationManagementSystems.VDSCSQL {

    @Serenity.Decorators.registerClass()
    export class SrlMsdsDialog extends Serenity.EntityDialog<SrlMsdsRow, any> {
        protected getFormKey() { return SrlMsdsForm.formKey; }
        protected getIdProperty() { return SrlMsdsRow.idProperty; }
        protected getLocalTextPrefix() { return SrlMsdsRow.localTextPrefix; }
        protected getService() { return SrlMsdsService.baseUrl; }

        protected form = new SrlMsdsForm(this.idPrefix);

    }
}