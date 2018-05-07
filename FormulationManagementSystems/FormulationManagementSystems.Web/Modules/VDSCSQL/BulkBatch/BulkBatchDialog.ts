
namespace FormulationManagementSystems.VDSCSQL {

    @Serenity.Decorators.registerClass()
    export class BulkBatchDialog extends Serenity.EntityDialog<BulkBatchRow, any> {
        protected getFormKey() { return BulkBatchForm.formKey; }
        protected getIdProperty() { return BulkBatchRow.idProperty; }
        protected getLocalTextPrefix() { return BulkBatchRow.localTextPrefix; }
        protected getNameProperty() { return BulkBatchRow.nameProperty; }
        protected getService() { return BulkBatchService.baseUrl; }

        protected form = new BulkBatchForm(this.idPrefix);

    }
}