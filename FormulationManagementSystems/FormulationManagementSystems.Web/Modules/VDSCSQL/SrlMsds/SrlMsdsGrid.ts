
namespace FormulationManagementSystems.VDSCSQL {

    @Serenity.Decorators.registerClass()
    export class SrlMsdsGrid extends Serenity.EntityGrid<SrlMsdsRow, any> {
        protected getColumnsKey() { return 'VDSCSQL.SrlMsds'; }
        protected getDialogType() { return SrlMsdsDialog; }
        protected getIdProperty() { return SrlMsdsRow.idProperty; }
        protected getLocalTextPrefix() { return SrlMsdsRow.localTextPrefix; }
        protected getService() { return SrlMsdsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}