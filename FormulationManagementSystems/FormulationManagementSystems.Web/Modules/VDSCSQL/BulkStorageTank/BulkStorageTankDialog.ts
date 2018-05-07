
namespace FormulationManagementSystems.VDSCSQL {

    @Serenity.Decorators.registerClass()
    export class BulkStorageTankDialog extends Serenity.EntityDialog<BulkStorageTankRow, any> {
        protected getFormKey() { return BulkStorageTankForm.formKey; }
        protected getIdProperty() { return BulkStorageTankRow.idProperty; }
        protected getLocalTextPrefix() { return BulkStorageTankRow.localTextPrefix; }
        protected getNameProperty() { return BulkStorageTankRow.nameProperty; }
        protected getService() { return BulkStorageTankService.baseUrl; }

        protected form = new BulkStorageTankForm(this.idPrefix);

    }
}