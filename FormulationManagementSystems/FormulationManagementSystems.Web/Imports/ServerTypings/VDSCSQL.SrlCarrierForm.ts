
namespace FormulationManagementSystems.VDSCSQL {
    export class SrlCarrierForm extends Serenity.PrefixedContext {
        static formKey = 'VDSCSQL.SrlCarrier';
    }

    export interface SrlCarrierForm {
        CarrierName: Serenity.StringEditor;
    }

    [,
        ['CarrierName', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(SrlCarrierForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}