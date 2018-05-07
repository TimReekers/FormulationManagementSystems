
namespace FormulationManagementSystems.VDSCSQL {

    @Serenity.Decorators.registerClass()
    export class ValvePositionMapGrid extends Serenity.EntityGrid<ValvePositionMapRow, any> {
        protected getColumnsKey() { return 'VDSCSQL.ValvePositionMap'; }
        protected getDialogType() { return ValvePositionMapDialog; }
        protected getIdProperty() { return ValvePositionMapRow.idProperty; }
        protected getLocalTextPrefix() { return ValvePositionMapRow.localTextPrefix; }
        protected getService() { return ValvePositionMapService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}