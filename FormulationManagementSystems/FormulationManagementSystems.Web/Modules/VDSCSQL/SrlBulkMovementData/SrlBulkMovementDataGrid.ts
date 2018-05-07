
namespace FormulationManagementSystems.VDSCSQL {

    @Serenity.Decorators.registerClass()
    export class SrlBulkMovementDataGrid extends Serenity.EntityGrid<SrlBulkMovementDataRow, any> {
        protected getColumnsKey() { return 'VDSCSQL.SrlBulkMovementData'; }
        protected getDialogType() { return SrlBulkMovementDataDialog; }
        protected getIdProperty() { return SrlBulkMovementDataRow.idProperty; }
        protected getLocalTextPrefix() { return SrlBulkMovementDataRow.localTextPrefix; }
        protected getService() { return SrlBulkMovementDataService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}