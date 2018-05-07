
namespace FormulationManagementSystems.VDSCSQL {
    export class ProductionRequestForm extends Serenity.PrefixedContext {
        static formKey = 'VDSCSQL.ProductionRequest';
    }

    export interface ProductionRequestForm {
        DateCreated: Serenity.DateEditor;
        CustomerId: Serenity.IntegerEditor;
        MaterialId: Serenity.IntegerEditor;
        RecipeId: Serenity.IntegerEditor;
        VdscAreaId: Serenity.IntegerEditor;
        QuantityRequested: Serenity.IntegerEditor;
        Operators: Serenity.IntegerEditor;
        Status: Serenity.StringEditor;
        BeginDate: Serenity.DateEditor;
        EndDate: Serenity.DateEditor;
        Attachments: Serenity.StringEditor;
        Notes: Serenity.StringEditor;
        UseAlternateRecipe: Serenity.BooleanEditor;
        ComputeBatch: Serenity.BooleanEditor;
    }

    [,
        ['DateCreated', () => Serenity.DateEditor],
        ['CustomerId', () => Serenity.IntegerEditor],
        ['MaterialId', () => Serenity.IntegerEditor],
        ['RecipeId', () => Serenity.IntegerEditor],
        ['VdscAreaId', () => Serenity.IntegerEditor],
        ['QuantityRequested', () => Serenity.IntegerEditor],
        ['Operators', () => Serenity.IntegerEditor],
        ['Status', () => Serenity.StringEditor],
        ['BeginDate', () => Serenity.DateEditor],
        ['EndDate', () => Serenity.DateEditor],
        ['Attachments', () => Serenity.StringEditor],
        ['Notes', () => Serenity.StringEditor],
        ['UseAlternateRecipe', () => Serenity.BooleanEditor],
        ['ComputeBatch', () => Serenity.BooleanEditor]
    ].forEach(x => Object.defineProperty(ProductionRequestForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}