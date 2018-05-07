
namespace FormulationManagementSystems.VDSCSQL {

    @Serenity.Decorators.registerClass()
    export class ValveListDialog extends Serenity.EntityDialog<ValveListRow, any> {
        protected getFormKey() { return ValveListForm.formKey; }
        protected getIdProperty() { return ValveListRow.idProperty; }
        protected getLocalTextPrefix() { return ValveListRow.localTextPrefix; }
        protected getNameProperty() { return ValveListRow.nameProperty; }
        protected getService() { return ValveListService.baseUrl; }

        protected form = new ValveListForm(this.idPrefix);

    }
}