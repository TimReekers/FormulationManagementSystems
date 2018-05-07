
namespace FormulationManagementSystems.VDSCSQL {

    @Serenity.Decorators.registerClass()
    export class VdscDepartmentGrid extends Serenity.EntityGrid<VdscDepartmentRow, any> {
        protected getColumnsKey() { return 'VDSCSQL.VdscDepartment'; }
        protected getDialogType() { return VdscDepartmentDialog; }
        protected getIdProperty() { return VdscDepartmentRow.idProperty; }
        protected getLocalTextPrefix() { return VdscDepartmentRow.localTextPrefix; }
        protected getService() { return VdscDepartmentService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}