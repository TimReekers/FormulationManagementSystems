
namespace FormulationManagementSystems.VDSCSQL {

    @Serenity.Decorators.registerClass()
    export class ValveListGrid extends Serenity.EntityGrid<ValveListRow, any> {
        protected getColumnsKey() { return 'VDSCSQL.ValveList'; }
        protected getDialogType() { return ValveListDialog; }
        protected getIdProperty() { return ValveListRow.idProperty; }
        protected getLocalTextPrefix() { return ValveListRow.localTextPrefix; }
        protected getService() { return ValveListService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}