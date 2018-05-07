
namespace FormulationManagementSystems.VDSCSQL {

    @Serenity.Decorators.registerClass()
    export class StepInstructionGrid extends Serenity.EntityGrid<StepInstructionRow, any> {
        protected getColumnsKey() { return 'VDSCSQL.StepInstruction'; }
        protected getDialogType() { return StepInstructionDialog; }
        protected getIdProperty() { return StepInstructionRow.idProperty; }
        protected getLocalTextPrefix() { return StepInstructionRow.localTextPrefix; }
        protected getService() { return StepInstructionService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}