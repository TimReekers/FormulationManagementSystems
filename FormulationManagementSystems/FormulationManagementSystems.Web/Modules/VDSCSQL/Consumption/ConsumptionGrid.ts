
namespace FormulationManagementSystems.VDSCSQL {

    @Serenity.Decorators.registerClass()
    export class ConsumptionGrid extends Serenity.EntityGrid<ConsumptionRow, any> {
        protected getColumnsKey() { return 'VDSCSQL.Consumption'; }
        protected getDialogType() { return ConsumptionDialog; }
        protected getIdProperty() { return ConsumptionRow.idProperty; }
        protected getLocalTextPrefix() { return ConsumptionRow.localTextPrefix; }
        protected getService() { return ConsumptionService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}