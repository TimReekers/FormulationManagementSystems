
namespace FormulationManagementSystems.VDSCSQL {

    @Serenity.Decorators.registerClass()
    export class VdscAreaDialog extends Serenity.EntityDialog<VdscAreaRow, any> {
        protected getFormKey() { return VdscAreaForm.formKey; }
        protected getIdProperty() { return VdscAreaRow.idProperty; }
        protected getLocalTextPrefix() { return VdscAreaRow.localTextPrefix; }
        protected getNameProperty() { return VdscAreaRow.nameProperty; }
        protected getService() { return VdscAreaService.baseUrl; }

        protected form = new VdscAreaForm(this.idPrefix);

    }
}