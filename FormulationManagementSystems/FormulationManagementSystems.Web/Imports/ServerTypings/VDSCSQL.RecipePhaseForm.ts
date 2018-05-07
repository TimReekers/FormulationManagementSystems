
namespace FormulationManagementSystems.VDSCSQL {
    export class RecipePhaseForm extends Serenity.PrefixedContext {
        static formKey = 'VDSCSQL.RecipePhase';
    }

    export interface RecipePhaseForm {
        RecipeId: Serenity.IntegerEditor;
        PhaseName: Serenity.StringEditor;
        PhaseNumber: Serenity.IntegerEditor;
        PhaseOptional: Serenity.BooleanEditor;
        Procedure: Serenity.StringEditor;
        PackagingInstructions: Serenity.StringEditor;
    }

    [,
        ['RecipeId', () => Serenity.IntegerEditor],
        ['PhaseName', () => Serenity.StringEditor],
        ['PhaseNumber', () => Serenity.IntegerEditor],
        ['PhaseOptional', () => Serenity.BooleanEditor],
        ['Procedure', () => Serenity.StringEditor],
        ['PackagingInstructions', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(RecipePhaseForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}