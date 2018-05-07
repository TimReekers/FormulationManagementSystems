
namespace FormulationManagementSystems.VDSCSQL {

    @Serenity.Decorators.registerClass()
    export class SrcDstPathDialog extends Serenity.EntityDialog<SrcDstPathRow, any> {
        protected getFormKey() { return SrcDstPathForm.formKey; }
        protected getIdProperty() { return SrcDstPathRow.idProperty; }
        protected getLocalTextPrefix() { return SrcDstPathRow.localTextPrefix; }
        protected getNameProperty() { return SrcDstPathRow.nameProperty; }
        protected getService() { return SrcDstPathService.baseUrl; }

        protected form = new SrcDstPathForm(this.idPrefix);

    }
}