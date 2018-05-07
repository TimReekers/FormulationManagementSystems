
namespace FormulationManagementSystems.VDSCSQL {

    @Serenity.Decorators.registerClass()
    export class SrlBulkTerminalClearanceGrid extends Serenity.EntityGrid<SrlBulkTerminalClearanceRow, any> {
        protected getColumnsKey() { return 'VDSCSQL.SrlBulkTerminalClearance'; }
        protected getDialogType() { return SrlBulkTerminalClearanceDialog; }
        protected getIdProperty() { return SrlBulkTerminalClearanceRow.idProperty; }
        protected getLocalTextPrefix() { return SrlBulkTerminalClearanceRow.localTextPrefix; }
        protected getService() { return SrlBulkTerminalClearanceService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}