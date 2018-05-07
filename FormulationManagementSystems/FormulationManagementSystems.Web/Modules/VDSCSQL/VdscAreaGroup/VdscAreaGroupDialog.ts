
namespace FormulationManagementSystems.VDSCSQL {

    @Serenity.Decorators.registerClass()
    export class VdscAreaGroupDialog extends Serenity.EntityDialog<VdscAreaGroupRow, any> {
        protected getFormKey() { return VdscAreaGroupForm.formKey; }
        protected getIdProperty() { return VdscAreaGroupRow.idProperty; }
        protected getLocalTextPrefix() { return VdscAreaGroupRow.localTextPrefix; }
        protected getService() { return VdscAreaGroupService.baseUrl; }

        protected form = new VdscAreaGroupForm(this.idPrefix);

    }
}