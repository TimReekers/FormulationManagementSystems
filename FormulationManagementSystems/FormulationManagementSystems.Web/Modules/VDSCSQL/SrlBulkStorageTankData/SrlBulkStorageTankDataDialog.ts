
namespace FormulationManagementSystems.VDSCSQL {

    @Serenity.Decorators.registerClass()
    export class SrlBulkStorageTankDataDialog extends Serenity.EntityDialog<SrlBulkStorageTankDataRow, any> {
        protected getFormKey() { return SrlBulkStorageTankDataForm.formKey; }
        protected getIdProperty() { return SrlBulkStorageTankDataRow.idProperty; }
        protected getLocalTextPrefix() { return SrlBulkStorageTankDataRow.localTextPrefix; }
        protected getNameProperty() { return SrlBulkStorageTankDataRow.nameProperty; }
        protected getService() { return SrlBulkStorageTankDataService.baseUrl; }

        protected form = new SrlBulkStorageTankDataForm(this.idPrefix);

    }
}