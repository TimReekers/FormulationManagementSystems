
namespace FormulationManagementSystems.VDSCSQL {

    @Serenity.Decorators.registerClass()
    export class BulkStorageTankGrid extends Serenity.EntityGrid<BulkStorageTankRow, any> {
        protected getColumnsKey() { return 'VDSCSQL.BulkStorageTank'; }
        protected getDialogType() { return BulkStorageTankDialog; }
        protected getIdProperty() { return BulkStorageTankRow.idProperty; }
        protected getLocalTextPrefix() { return BulkStorageTankRow.localTextPrefix; }
        protected getService() { return BulkStorageTankService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}