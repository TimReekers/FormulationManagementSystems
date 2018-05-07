
namespace FormulationManagementSystems.VDSCSQL {

    @Serenity.Decorators.registerClass()
    export class BulkBatchDataGrid extends Serenity.EntityGrid<BulkBatchDataRow, any> {
        protected getColumnsKey() { return 'VDSCSQL.BulkBatchData'; }
        protected getDialogType() { return BulkBatchDataDialog; }
        protected getIdProperty() { return BulkBatchDataRow.idProperty; }
        protected getLocalTextPrefix() { return BulkBatchDataRow.localTextPrefix; }
        protected getService() { return BulkBatchDataService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}