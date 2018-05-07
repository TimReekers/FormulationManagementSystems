
namespace FormulationManagementSystems.VDSCSQL {

    @Serenity.Decorators.registerClass()
    export class SrcDstPathGrid extends Serenity.EntityGrid<SrcDstPathRow, any> {
        protected getColumnsKey() { return 'VDSCSQL.SrcDstPath'; }
        protected getDialogType() { return SrcDstPathDialog; }
        protected getIdProperty() { return SrcDstPathRow.idProperty; }
        protected getLocalTextPrefix() { return SrcDstPathRow.localTextPrefix; }
        protected getService() { return SrcDstPathService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}