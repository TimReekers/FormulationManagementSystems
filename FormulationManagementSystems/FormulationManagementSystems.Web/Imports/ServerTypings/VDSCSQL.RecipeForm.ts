
namespace FormulationManagementSystems.VDSCSQL {
    export class RecipeForm extends Serenity.PrefixedContext {
        static formKey = 'VDSCSQL.Recipe';
    }

    export interface RecipeForm {
        MaterialId: Serenity.IntegerEditor;
        Description: Serenity.StringEditor;
        DescriptionNotes: Serenity.StringEditor;
        BatchQty: Serenity.DecimalEditor;
        WeightRangeHigh: Serenity.DecimalEditor;
        WeightRangeLow: Serenity.DecimalEditor;
    }

    [,
        ['MaterialId', () => Serenity.IntegerEditor],
        ['Description', () => Serenity.StringEditor],
        ['DescriptionNotes', () => Serenity.StringEditor],
        ['BatchQty', () => Serenity.DecimalEditor],
        ['WeightRangeHigh', () => Serenity.DecimalEditor],
        ['WeightRangeLow', () => Serenity.DecimalEditor]
    ].forEach(x => Object.defineProperty(RecipeForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}