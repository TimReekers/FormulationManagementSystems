
namespace FormulationManagementSystems.VDSCSQL {

    @Serenity.Decorators.registerClass()
    export class AdditonFormGrid extends Serenity.EntityGrid<AdditonFormRow, any> {
        protected getColumnsKey() { return 'VDSCSQL.AdditonForm'; }
        protected getDialogType() { return AdditonFormDialog; }
        protected getIdProperty() { return AdditonFormRow.idProperty; }
        protected getLocalTextPrefix() { return AdditonFormRow.localTextPrefix; }
        protected getService() { return AdditonFormService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}