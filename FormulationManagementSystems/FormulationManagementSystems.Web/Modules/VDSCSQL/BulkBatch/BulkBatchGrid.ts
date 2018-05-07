
namespace FormulationManagementSystems.VDSCSQL {

    @Serenity.Decorators.registerClass()
    export class BulkBatchGrid extends Serenity.EntityGrid<BulkBatchRow, any> {
        protected getColumnsKey() { return 'VDSCSQL.BulkBatch'; }
        protected getDialogType() { return BulkBatchDialog; }
        protected getIdProperty() { return BulkBatchRow.idProperty; }
        protected getLocalTextPrefix() { return BulkBatchRow.localTextPrefix; }
        protected getService() { return BulkBatchService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}