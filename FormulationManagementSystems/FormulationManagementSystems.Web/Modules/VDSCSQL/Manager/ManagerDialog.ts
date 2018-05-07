
namespace FormulationManagementSystems.VDSCSQL {

    @Serenity.Decorators.registerClass()
    export class ManagerDialog extends Serenity.EntityDialog<ManagerRow, any> {
        protected getFormKey() { return ManagerForm.formKey; }
        protected getIdProperty() { return ManagerRow.idProperty; }
        protected getLocalTextPrefix() { return ManagerRow.localTextPrefix; }
        protected getNameProperty() { return ManagerRow.nameProperty; }
        protected getService() { return ManagerService.baseUrl; }

        protected form = new ManagerForm(this.idPrefix);

    }
}