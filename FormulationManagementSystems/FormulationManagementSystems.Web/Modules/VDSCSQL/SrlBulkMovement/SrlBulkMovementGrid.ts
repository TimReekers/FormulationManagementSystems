
namespace FormulationManagementSystems.VDSCSQL {

    @Serenity.Decorators.registerClass()
    export class SrlBulkMovementGrid extends Serenity.EntityGrid<SrlBulkMovementRow, any> {
        protected getColumnsKey() { return 'VDSCSQL.SrlBulkMovement'; }
        protected getDialogType() { return SrlBulkMovementDialog; }
        protected getIdProperty() { return SrlBulkMovementRow.idProperty; }
        protected getLocalTextPrefix() { return SrlBulkMovementRow.localTextPrefix; }
        protected getService() { return SrlBulkMovementService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}