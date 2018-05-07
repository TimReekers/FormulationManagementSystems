
namespace FormulationManagementSystems.VDSCSQL {

    @Serenity.Decorators.registerClass()
    export class ValueEntriesDataGrid extends Serenity.EntityGrid<ValueEntriesDataRow, any> {
        protected getColumnsKey() { return 'VDSCSQL.ValueEntriesData'; }
        protected getDialogType() { return ValueEntriesDataDialog; }
        protected getIdProperty() { return ValueEntriesDataRow.idProperty; }
        protected getLocalTextPrefix() { return ValueEntriesDataRow.localTextPrefix; }
        protected getService() { return ValueEntriesDataService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}