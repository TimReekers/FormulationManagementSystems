
namespace FormulationManagementSystems.VDSCSQL {

    @Serenity.Decorators.registerClass()
    export class RecipeDialog extends Serenity.EntityDialog<RecipeRow, any> {
        protected getFormKey() { return RecipeForm.formKey; }
        protected getIdProperty() { return RecipeRow.idProperty; }
        protected getLocalTextPrefix() { return RecipeRow.localTextPrefix; }
        protected getNameProperty() { return RecipeRow.nameProperty; }
        protected getService() { return RecipeService.baseUrl; }

        protected form = new RecipeForm(this.idPrefix);

    }
}