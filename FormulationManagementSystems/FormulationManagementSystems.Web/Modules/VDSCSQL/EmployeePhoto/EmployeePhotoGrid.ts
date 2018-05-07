
namespace FormulationManagementSystems.VDSCSQL {

    @Serenity.Decorators.registerClass()
    export class EmployeePhotoGrid extends Serenity.EntityGrid<EmployeePhotoRow, any> {
        protected getColumnsKey() { return 'VDSCSQL.EmployeePhoto'; }
        protected getDialogType() { return EmployeePhotoDialog; }
        protected getIdProperty() { return EmployeePhotoRow.idProperty; }
        protected getLocalTextPrefix() { return EmployeePhotoRow.localTextPrefix; }
        protected getService() { return EmployeePhotoService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}