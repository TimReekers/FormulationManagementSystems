
namespace FormulationManagementSystems.VDSCSQL {
    export class StepValueEntriesForm extends Serenity.PrefixedContext {
        static formKey = 'VDSCSQL.StepValueEntries';
    }

    export interface StepValueEntriesForm {
        Description: Serenity.StringEditor;
        RecipePhaseId: Serenity.IntegerEditor;
    }

    [,
        ['Description', () => Serenity.StringEditor],
        ['RecipePhaseId', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(StepValueEntriesForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}