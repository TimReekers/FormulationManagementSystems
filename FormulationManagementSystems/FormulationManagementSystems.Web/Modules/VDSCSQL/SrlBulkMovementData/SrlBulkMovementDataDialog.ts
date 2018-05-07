
namespace FormulationManagementSystems.VDSCSQL {

    @Serenity.Decorators.registerClass()
    export class SrlBulkMovementDataDialog extends Serenity.EntityDialog<SrlBulkMovementDataRow, any> {
        protected getFormKey() { return SrlBulkMovementDataForm.formKey; }
        protected getIdProperty() { return SrlBulkMovementDataRow.idProperty; }
        protected getLocalTextPrefix() { return SrlBulkMovementDataRow.localTextPrefix; }
        protected getService() { return SrlBulkMovementDataService.baseUrl; }

        protected form = new SrlBulkMovementDataForm(this.idPrefix);

    }
}