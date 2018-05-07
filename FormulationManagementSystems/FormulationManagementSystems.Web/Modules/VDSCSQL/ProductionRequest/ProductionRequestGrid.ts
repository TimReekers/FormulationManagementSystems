
namespace FormulationManagementSystems.VDSCSQL {

    @Serenity.Decorators.registerClass()
    export class ProductionRequestGrid extends Serenity.EntityGrid<ProductionRequestRow, any> {
        protected getColumnsKey() { return 'VDSCSQL.ProductionRequest'; }
        protected getDialogType() { return ProductionRequestDialog; }
        protected getIdProperty() { return ProductionRequestRow.idProperty; }
        protected getLocalTextPrefix() { return ProductionRequestRow.localTextPrefix; }
        protected getService() { return ProductionRequestService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}