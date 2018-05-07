
namespace FormulationManagementSystems.VDSCSQL {

    @Serenity.Decorators.registerClass()
    export class ConsumptionDialog extends Serenity.EntityDialog<ConsumptionRow, any> {
        protected getFormKey() { return ConsumptionForm.formKey; }
        protected getIdProperty() { return ConsumptionRow.idProperty; }
        protected getLocalTextPrefix() { return ConsumptionRow.localTextPrefix; }
        protected getNameProperty() { return ConsumptionRow.nameProperty; }
        protected getService() { return ConsumptionService.baseUrl; }

        protected form = new ConsumptionForm(this.idPrefix);

    }
}