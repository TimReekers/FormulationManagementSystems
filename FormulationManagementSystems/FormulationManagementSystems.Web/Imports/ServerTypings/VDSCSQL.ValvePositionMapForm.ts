
namespace FormulationManagementSystems.VDSCSQL {
    export class ValvePositionMapForm extends Serenity.PrefixedContext {
        static formKey = 'VDSCSQL.ValvePositionMap';
    }

    export interface ValvePositionMapForm {
        SrcDstPathId: Serenity.IntegerEditor;
        ValveListId: Serenity.IntegerEditor;
        ValveOrderNumber: Serenity.IntegerEditor;
        ValvePosition: Serenity.StringEditor;
    }

    [,
        ['SrcDstPathId', () => Serenity.IntegerEditor],
        ['ValveListId', () => Serenity.IntegerEditor],
        ['ValveOrderNumber', () => Serenity.IntegerEditor],
        ['ValvePosition', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(ValvePositionMapForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}