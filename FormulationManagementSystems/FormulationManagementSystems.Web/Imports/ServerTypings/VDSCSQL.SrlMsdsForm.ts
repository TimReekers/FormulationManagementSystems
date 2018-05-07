
namespace FormulationManagementSystems.VDSCSQL {
    export class SrlMsdsForm extends Serenity.PrefixedContext {
        static formKey = 'VDSCSQL.SrlMsds';
    }

    export interface SrlMsdsForm {
        MaterialId: Serenity.IntegerEditor;
        StorageFile: Serenity.StringEditor;
    }

    [,
        ['MaterialId', () => Serenity.IntegerEditor],
        ['StorageFile', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(SrlMsdsForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}