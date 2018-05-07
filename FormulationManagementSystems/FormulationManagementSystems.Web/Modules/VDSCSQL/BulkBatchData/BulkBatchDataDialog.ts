
namespace FormulationManagementSystems.VDSCSQL {

    @Serenity.Decorators.registerClass()
    export class BulkBatchDataDialog extends Serenity.EntityDialog<BulkBatchDataRow, any> {
        protected getFormKey() { return BulkBatchDataForm.formKey; }
        protected getIdProperty() { return BulkBatchDataRow.idProperty; }
        protected getLocalTextPrefix() { return BulkBatchDataRow.localTextPrefix; }
        protected getNameProperty() { return BulkBatchDataRow.nameProperty; }
        protected getService() { return BulkBatchDataService.baseUrl; }

        protected form = new BulkBatchDataForm(this.idPrefix);

    }
}