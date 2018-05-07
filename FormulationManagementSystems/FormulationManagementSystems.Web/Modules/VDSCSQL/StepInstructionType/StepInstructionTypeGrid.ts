
namespace FormulationManagementSystems.VDSCSQL {

    @Serenity.Decorators.registerClass()
    export class StepInstructionTypeGrid extends Serenity.EntityGrid<StepInstructionTypeRow, any> {
        protected getColumnsKey() { return 'VDSCSQL.StepInstructionType'; }
        protected getDialogType() { return StepInstructionTypeDialog; }
        protected getIdProperty() { return StepInstructionTypeRow.idProperty; }
        protected getLocalTextPrefix() { return StepInstructionTypeRow.localTextPrefix; }
        protected getService() { return StepInstructionTypeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}