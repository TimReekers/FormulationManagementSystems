
namespace FormulationManagementSystems.VDSCSQL {
    export class ValveListForm extends Serenity.PrefixedContext {
        static formKey = 'VDSCSQL.ValveList';
    }

    export interface ValveListForm {
        ValveName: Serenity.StringEditor;
        ValveBarcode: Serenity.StringEditor;
        ValveDescription: Serenity.StringEditor;
        Bldg: Serenity.IntegerEditor;
    }

    [,
        ['ValveName', () => Serenity.StringEditor],
        ['ValveBarcode', () => Serenity.StringEditor],
        ['ValveDescription', () => Serenity.StringEditor],
        ['Bldg', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(ValveListForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}