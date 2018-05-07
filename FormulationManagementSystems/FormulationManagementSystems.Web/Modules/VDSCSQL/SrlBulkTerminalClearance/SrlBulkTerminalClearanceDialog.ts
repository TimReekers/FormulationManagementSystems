
namespace FormulationManagementSystems.VDSCSQL {

    @Serenity.Decorators.registerClass()
    export class SrlBulkTerminalClearanceDialog extends Serenity.EntityDialog<SrlBulkTerminalClearanceRow, any> {
        protected getFormKey() { return SrlBulkTerminalClearanceForm.formKey; }
        protected getIdProperty() { return SrlBulkTerminalClearanceRow.idProperty; }
        protected getLocalTextPrefix() { return SrlBulkTerminalClearanceRow.localTextPrefix; }
        protected getNameProperty() { return SrlBulkTerminalClearanceRow.nameProperty; }
        protected getService() { return SrlBulkTerminalClearanceService.baseUrl; }

        protected form = new SrlBulkTerminalClearanceForm(this.idPrefix);

    }
}