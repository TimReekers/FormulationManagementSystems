
namespace FormulationManagementSystems.VDSCSQL {

    @Serenity.Decorators.registerClass()
    export class ValueEntriesDataDialog extends Serenity.EntityDialog<ValueEntriesDataRow, any> {
        protected getFormKey() { return ValueEntriesDataForm.formKey; }
        protected getIdProperty() { return ValueEntriesDataRow.idProperty; }
        protected getLocalTextPrefix() { return ValueEntriesDataRow.localTextPrefix; }
        protected getNameProperty() { return ValueEntriesDataRow.nameProperty; }
        protected getService() { return ValueEntriesDataService.baseUrl; }

        protected form = new ValueEntriesDataForm(this.idPrefix);

    }
}