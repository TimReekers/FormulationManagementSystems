
namespace FormulationManagementSystems.VDSCSQL {

    @Serenity.Decorators.registerClass()
    export class EmployeeOvertimeDialog extends Serenity.EntityDialog<EmployeeOvertimeRow, any> {
        protected getFormKey() { return EmployeeOvertimeForm.formKey; }
        protected getIdProperty() { return EmployeeOvertimeRow.idProperty; }
        protected getLocalTextPrefix() { return EmployeeOvertimeRow.localTextPrefix; }
        protected getNameProperty() { return EmployeeOvertimeRow.nameProperty; }
        protected getService() { return EmployeeOvertimeService.baseUrl; }

        protected form = new EmployeeOvertimeForm(this.idPrefix);

    }
}