
namespace FormulationManagementSystems.VDSCSQL {

    @Serenity.Decorators.registerClass()
    export class StepValueEntriesGrid extends Serenity.EntityGrid<StepValueEntriesRow, any> {
        protected getColumnsKey() { return 'VDSCSQL.StepValueEntries'; }
        protected getDialogType() { return StepValueEntriesDialog; }
        protected getIdProperty() { return StepValueEntriesRow.idProperty; }
        protected getLocalTextPrefix() { return StepValueEntriesRow.localTextPrefix; }
        protected getService() { return StepValueEntriesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}