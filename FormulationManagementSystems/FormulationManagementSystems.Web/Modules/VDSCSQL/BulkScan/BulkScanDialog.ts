
namespace FormulationManagementSystems.VDSCSQL {

    @Serenity.Decorators.registerClass()
    export class BulkScanDialog extends Serenity.EntityDialog<BulkScanRow, any> {
        protected getFormKey() { return BulkScanForm.formKey; }
        protected getIdProperty() { return BulkScanRow.idProperty; }
        protected getLocalTextPrefix() { return BulkScanRow.localTextPrefix; }
        protected getNameProperty() { return BulkScanRow.nameProperty; }
        protected getService() { return BulkScanService.baseUrl; }

        protected form = new BulkScanForm(this.idPrefix);

    }
}