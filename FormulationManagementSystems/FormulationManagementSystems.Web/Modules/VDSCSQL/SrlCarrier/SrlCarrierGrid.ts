
namespace FormulationManagementSystems.VDSCSQL {

    @Serenity.Decorators.registerClass()
    export class SrlCarrierGrid extends Serenity.EntityGrid<SrlCarrierRow, any> {
        protected getColumnsKey() { return 'VDSCSQL.SrlCarrier'; }
        protected getDialogType() { return SrlCarrierDialog; }
        protected getIdProperty() { return SrlCarrierRow.idProperty; }
        protected getLocalTextPrefix() { return SrlCarrierRow.localTextPrefix; }
        protected getService() { return SrlCarrierService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}