
namespace FormulationManagementSystems.VDSCSQL {

    @Serenity.Decorators.registerClass()
    export class SrlCarrierDialog extends Serenity.EntityDialog<SrlCarrierRow, any> {
        protected getFormKey() { return SrlCarrierForm.formKey; }
        protected getIdProperty() { return SrlCarrierRow.idProperty; }
        protected getLocalTextPrefix() { return SrlCarrierRow.localTextPrefix; }
        protected getNameProperty() { return SrlCarrierRow.nameProperty; }
        protected getService() { return SrlCarrierService.baseUrl; }

        protected form = new SrlCarrierForm(this.idPrefix);

    }
}