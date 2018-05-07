
namespace FormulationManagementSystems.VDSCSQL {

    @Serenity.Decorators.registerClass()
    export class ManagerGrid extends Serenity.EntityGrid<ManagerRow, any> {
        protected getColumnsKey() { return 'VDSCSQL.Manager'; }
        protected getDialogType() { return ManagerDialog; }
        protected getIdProperty() { return ManagerRow.idProperty; }
        protected getLocalTextPrefix() { return ManagerRow.localTextPrefix; }
        protected getService() { return ManagerService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}