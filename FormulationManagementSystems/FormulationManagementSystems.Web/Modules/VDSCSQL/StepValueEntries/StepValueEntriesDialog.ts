
namespace FormulationManagementSystems.VDSCSQL {

    @Serenity.Decorators.registerClass()
    export class StepValueEntriesDialog extends Serenity.EntityDialog<StepValueEntriesRow, any> {
        protected getFormKey() { return StepValueEntriesForm.formKey; }
        protected getIdProperty() { return StepValueEntriesRow.idProperty; }
        protected getLocalTextPrefix() { return StepValueEntriesRow.localTextPrefix; }
        protected getNameProperty() { return StepValueEntriesRow.nameProperty; }
        protected getService() { return StepValueEntriesService.baseUrl; }

        protected form = new StepValueEntriesForm(this.idPrefix);

    }
}