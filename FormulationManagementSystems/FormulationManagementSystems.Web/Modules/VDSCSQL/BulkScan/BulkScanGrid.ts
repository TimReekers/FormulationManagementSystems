
namespace FormulationManagementSystems.VDSCSQL {

    @Serenity.Decorators.registerClass()
    export class BulkScanGrid extends Serenity.EntityGrid<BulkScanRow, any> {
        protected getColumnsKey() { return 'VDSCSQL.BulkScan'; }
        protected getDialogType() { return BulkScanDialog; }
        protected getIdProperty() { return BulkScanRow.idProperty; }
        protected getLocalTextPrefix() { return BulkScanRow.localTextPrefix; }
        protected getService() { return BulkScanService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}