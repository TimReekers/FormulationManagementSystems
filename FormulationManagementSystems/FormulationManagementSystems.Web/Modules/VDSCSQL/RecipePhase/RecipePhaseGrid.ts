
namespace FormulationManagementSystems.VDSCSQL {

    @Serenity.Decorators.registerClass()
    export class RecipePhaseGrid extends Serenity.EntityGrid<RecipePhaseRow, any> {
        protected getColumnsKey() { return 'VDSCSQL.RecipePhase'; }
        protected getDialogType() { return RecipePhaseDialog; }
        protected getIdProperty() { return RecipePhaseRow.idProperty; }
        protected getLocalTextPrefix() { return RecipePhaseRow.localTextPrefix; }
        protected getService() { return RecipePhaseService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}