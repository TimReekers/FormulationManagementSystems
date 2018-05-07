
namespace FormulationManagementSystems.VDSCSQL {

    @Serenity.Decorators.registerClass()
    export class EmployeePhotoDialog extends Serenity.EntityDialog<EmployeePhotoRow, any> {
        protected getFormKey() { return EmployeePhotoForm.formKey; }
        protected getIdProperty() { return EmployeePhotoRow.idProperty; }
        protected getLocalTextPrefix() { return EmployeePhotoRow.localTextPrefix; }
        protected getNameProperty() { return EmployeePhotoRow.nameProperty; }
        protected getService() { return EmployeePhotoService.baseUrl; }

        protected form = new EmployeePhotoForm(this.idPrefix);

    }
}