
namespace FormulationManagementSystems.VDSCSQL {

    @Serenity.Decorators.registerClass()
    export class SrlBulkMovementDialog extends Serenity.EntityDialog<SrlBulkMovementRow, any> {
        protected getFormKey() { return SrlBulkMovementForm.formKey; }
        protected getIdProperty() { return SrlBulkMovementRow.idProperty; }
        protected getLocalTextPrefix() { return SrlBulkMovementRow.localTextPrefix; }
        protected getNameProperty() { return SrlBulkMovementRow.nameProperty; }
        protected getService() { return SrlBulkMovementService.baseUrl; }

        protected form = new SrlBulkMovementForm(this.idPrefix);

    }
}