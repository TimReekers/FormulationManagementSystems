
namespace FormulationManagementSystems.VDSCSQL {

    @Serenity.Decorators.registerClass()
    export class SrlBulkStorageTankDataGrid extends Serenity.EntityGrid<SrlBulkStorageTankDataRow, any> {
        protected getColumnsKey() { return 'VDSCSQL.SrlBulkStorageTankData'; }
        protected getDialogType() { return SrlBulkStorageTankDataDialog; }
        protected getIdProperty() { return SrlBulkStorageTankDataRow.idProperty; }
        protected getLocalTextPrefix() { return SrlBulkStorageTankDataRow.localTextPrefix; }
        protected getService() { return SrlBulkStorageTankDataService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}