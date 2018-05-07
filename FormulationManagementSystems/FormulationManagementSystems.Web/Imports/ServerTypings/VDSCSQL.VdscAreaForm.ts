
namespace FormulationManagementSystems.VDSCSQL {
    export class VdscAreaForm extends Serenity.PrefixedContext {
        static formKey = 'VDSCSQL.VdscArea';
    }

    export interface VdscAreaForm {
        VdscAreaGroupId: Serenity.IntegerEditor;
        Area: Serenity.StringEditor;
        ListOrder: Serenity.IntegerEditor;
    }

    [,
        ['VdscAreaGroupId', () => Serenity.IntegerEditor],
        ['Area', () => Serenity.StringEditor],
        ['ListOrder', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(VdscAreaForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}