
namespace FormulationManagementSystems.VDSCSQL {

    @Serenity.Decorators.registerClass()
    export class VdscAreaGrid extends Serenity.EntityGrid<VdscAreaRow, any> {
        protected getColumnsKey() { return 'VDSCSQL.VdscArea'; }
        protected getDialogType() { return VdscAreaDialog; }
        protected getIdProperty() { return VdscAreaRow.idProperty; }
        protected getLocalTextPrefix() { return VdscAreaRow.localTextPrefix; }
        protected getService() { return VdscAreaService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}