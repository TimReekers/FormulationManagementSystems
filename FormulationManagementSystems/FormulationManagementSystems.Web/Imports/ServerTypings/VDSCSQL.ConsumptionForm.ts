
namespace FormulationManagementSystems.VDSCSQL {
    export class ConsumptionForm extends Serenity.PrefixedContext {
        static formKey = 'VDSCSQL.Consumption';
    }

    export interface ConsumptionForm {
        RecipePhaseId: Serenity.IntegerEditor;
        IngredientNumber: Serenity.IntegerEditor;
        IngredientMaterialId: Serenity.IntegerEditor;
        Percentage: Serenity.DecimalEditor;
        OptionalIngredient: Serenity.BooleanEditor;
        SrcDstPathIds: Serenity.StringEditor;
        TimeExpectation: Serenity.IntegerEditor;
        OpPrcHighLmt: Serenity.DecimalEditor;
        OpPrcLwLmt: Serenity.DecimalEditor;
        TlPrcHighLmt: Serenity.DecimalEditor;
        TlPrcLwLmt: Serenity.DecimalEditor;
        StepDescription: Serenity.StringEditor;
        HTemp1: Serenity.IntegerEditor;
        LTemp1: Serenity.IntegerEditor;
        AmPrcHighLmt: Serenity.DecimalEditor;
        AmPrcLwLmt: Serenity.DecimalEditor;
    }

    [,
        ['RecipePhaseId', () => Serenity.IntegerEditor],
        ['IngredientNumber', () => Serenity.IntegerEditor],
        ['IngredientMaterialId', () => Serenity.IntegerEditor],
        ['Percentage', () => Serenity.DecimalEditor],
        ['OptionalIngredient', () => Serenity.BooleanEditor],
        ['SrcDstPathIds', () => Serenity.StringEditor],
        ['TimeExpectation', () => Serenity.IntegerEditor],
        ['OpPrcHighLmt', () => Serenity.DecimalEditor],
        ['OpPrcLwLmt', () => Serenity.DecimalEditor],
        ['TlPrcHighLmt', () => Serenity.DecimalEditor],
        ['TlPrcLwLmt', () => Serenity.DecimalEditor],
        ['StepDescription', () => Serenity.StringEditor],
        ['HTemp1', () => Serenity.IntegerEditor],
        ['LTemp1', () => Serenity.IntegerEditor],
        ['AmPrcHighLmt', () => Serenity.DecimalEditor],
        ['AmPrcLwLmt', () => Serenity.DecimalEditor]
    ].forEach(x => Object.defineProperty(ConsumptionForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}