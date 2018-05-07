
namespace FormulationManagementSystems.VDSCSQL {

    @Serenity.Decorators.registerClass()
    export class VdscAreaGroupGrid extends Serenity.EntityGrid<VdscAreaGroupRow, any> {
        protected getColumnsKey() { return 'VDSCSQL.VdscAreaGroup'; }
        protected getDialogType() { return VdscAreaGroupDialog; }
        protected getIdProperty() { return VdscAreaGroupRow.idProperty; }
        protected getLocalTextPrefix() { return VdscAreaGroupRow.localTextPrefix; }
        protected getService() { return VdscAreaGroupService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}