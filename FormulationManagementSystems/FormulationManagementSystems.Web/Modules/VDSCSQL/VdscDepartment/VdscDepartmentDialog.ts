
namespace FormulationManagementSystems.VDSCSQL {

    @Serenity.Decorators.registerClass()
    export class VdscDepartmentDialog extends Serenity.EntityDialog<VdscDepartmentRow, any> {
        protected getFormKey() { return VdscDepartmentForm.formKey; }
        protected getIdProperty() { return VdscDepartmentRow.idProperty; }
        protected getLocalTextPrefix() { return VdscDepartmentRow.localTextPrefix; }
        protected getNameProperty() { return VdscDepartmentRow.nameProperty; }
        protected getService() { return VdscDepartmentService.baseUrl; }

        protected form = new VdscDepartmentForm(this.idPrefix);

    }
}