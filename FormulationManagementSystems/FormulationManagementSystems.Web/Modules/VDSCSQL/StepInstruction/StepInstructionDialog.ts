
namespace FormulationManagementSystems.VDSCSQL {

    @Serenity.Decorators.registerClass()
    export class StepInstructionDialog extends Serenity.EntityDialog<StepInstructionRow, any> {
        protected getFormKey() { return StepInstructionForm.formKey; }
        protected getIdProperty() { return StepInstructionRow.idProperty; }
        protected getLocalTextPrefix() { return StepInstructionRow.localTextPrefix; }
        protected getNameProperty() { return StepInstructionRow.nameProperty; }
        protected getService() { return StepInstructionService.baseUrl; }

        protected form = new StepInstructionForm(this.idPrefix);

    }
}