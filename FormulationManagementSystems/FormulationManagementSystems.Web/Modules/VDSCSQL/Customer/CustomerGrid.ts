
namespace FormulationManagementSystems.VDSCSQL {

    @Serenity.Decorators.registerClass()
    export class CustomerGrid extends Serenity.EntityGrid<CustomerRow, any> {
        protected getColumnsKey() { return 'VDSCSQL.Customer'; }
        protected getDialogType() { return CustomerDialog; }
        protected getIdProperty() { return CustomerRow.idProperty; }
        protected getLocalTextPrefix() { return CustomerRow.localTextPrefix; }
        protected getService() { return CustomerService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}