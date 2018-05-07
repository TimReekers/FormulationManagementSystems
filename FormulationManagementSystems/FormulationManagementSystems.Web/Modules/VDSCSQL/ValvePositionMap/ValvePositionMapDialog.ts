
namespace FormulationManagementSystems.VDSCSQL {

    @Serenity.Decorators.registerClass()
    export class ValvePositionMapDialog extends Serenity.EntityDialog<ValvePositionMapRow, any> {
        protected getFormKey() { return ValvePositionMapForm.formKey; }
        protected getIdProperty() { return ValvePositionMapRow.idProperty; }
        protected getLocalTextPrefix() { return ValvePositionMapRow.localTextPrefix; }
        protected getNameProperty() { return ValvePositionMapRow.nameProperty; }
        protected getService() { return ValvePositionMapService.baseUrl; }

        protected form = new ValvePositionMapForm(this.idPrefix);

    }
}