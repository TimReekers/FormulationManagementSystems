
namespace FormulationManagementSystems.VDSCSQL {
    export class AdditonFormForm extends Serenity.PrefixedContext {
        static formKey = 'VDSCSQL.AdditonForm';
    }

    export interface AdditonFormForm {
        FormId: Serenity.IntegerEditor;
        Description: Serenity.StringEditor;
    }

    [,
        ['FormId', () => Serenity.IntegerEditor],
        ['Description', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(AdditonFormForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}