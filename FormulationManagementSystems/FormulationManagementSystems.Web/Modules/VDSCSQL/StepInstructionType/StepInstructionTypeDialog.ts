
namespace FormulationManagementSystems.VDSCSQL {

    @Serenity.Decorators.registerClass()
    export class StepInstructionTypeDialog extends Serenity.EntityDialog<StepInstructionTypeRow, any> {
        protected getFormKey() { return StepInstructionTypeForm.formKey; }
        protected getIdProperty() { return StepInstructionTypeRow.idProperty; }
        protected getLocalTextPrefix() { return StepInstructionTypeRow.localTextPrefix; }
        protected getNameProperty() { return StepInstructionTypeRow.nameProperty; }
        protected getService() { return StepInstructionTypeService.baseUrl; }

        protected form = new StepInstructionTypeForm(this.idPrefix);

    }
}