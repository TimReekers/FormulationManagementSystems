
namespace FormulationManagementSystems.VDSCSQL {

    @Serenity.Decorators.registerClass()
    export class EmployeeOvertimeGrid extends Serenity.EntityGrid<EmployeeOvertimeRow, any> {
        protected getColumnsKey() { return 'VDSCSQL.EmployeeOvertime'; }
        protected getDialogType() { return EmployeeOvertimeDialog; }
        protected getIdProperty() { return EmployeeOvertimeRow.idProperty; }
        protected getLocalTextPrefix() { return EmployeeOvertimeRow.localTextPrefix; }
        protected getService() { return EmployeeOvertimeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}