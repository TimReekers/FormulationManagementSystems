
namespace FormulationManagementSystems.VDSCSQL {

    @Serenity.Decorators.registerClass()
    export class ProductionRequestDialog extends Serenity.EntityDialog<ProductionRequestRow, any> {
        protected getFormKey() { return ProductionRequestForm.formKey; }
        protected getIdProperty() { return ProductionRequestRow.idProperty; }
        protected getLocalTextPrefix() { return ProductionRequestRow.localTextPrefix; }
        protected getNameProperty() { return ProductionRequestRow.nameProperty; }
        protected getService() { return ProductionRequestService.baseUrl; }

        protected form = new ProductionRequestForm(this.idPrefix);

    }
}