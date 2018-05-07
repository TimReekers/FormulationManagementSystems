
namespace FormulationManagementSystems.VDSCSQL {

    @Serenity.Decorators.registerClass()
    export class RecipePhaseDialog extends Serenity.EntityDialog<RecipePhaseRow, any> {
        protected getFormKey() { return RecipePhaseForm.formKey; }
        protected getIdProperty() { return RecipePhaseRow.idProperty; }
        protected getLocalTextPrefix() { return RecipePhaseRow.localTextPrefix; }
        protected getNameProperty() { return RecipePhaseRow.nameProperty; }
        protected getService() { return RecipePhaseService.baseUrl; }

        protected form = new RecipePhaseForm(this.idPrefix);

    }
}