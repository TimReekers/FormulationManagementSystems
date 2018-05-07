
namespace FormulationManagementSystems.VDSCSQL {

    @Serenity.Decorators.registerClass()
    export class RecipeGrid extends Serenity.EntityGrid<RecipeRow, any> {
        protected getColumnsKey() { return 'VDSCSQL.Recipe'; }
        protected getDialogType() { return RecipeDialog; }
        protected getIdProperty() { return RecipeRow.idProperty; }
        protected getLocalTextPrefix() { return RecipeRow.localTextPrefix; }
        protected getService() { return RecipeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}