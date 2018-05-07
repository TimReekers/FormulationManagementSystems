
namespace FormulationManagementSystems.VDSCSQL {
    export class BulkBatchForm extends Serenity.PrefixedContext {
        static formKey = 'VDSCSQL.BulkBatch';
    }

    export interface BulkBatchForm {
        ProductionRequestId: Serenity.IntegerEditor;
        BatchNumber: Serenity.IntegerEditor;
        BatchTank: Serenity.StringEditor;
        DateCreated: Serenity.DateEditor;
        DateCompleted: Serenity.DateEditor;
        BatchQuantity: Serenity.DecimalEditor;
        BatchActive: Serenity.BooleanEditor;
        FpQty: Serenity.IntegerEditor;
        ReceivingTank: Serenity.StringEditor;
        RecipeId: Serenity.IntegerEditor;
    }

    [,
        ['ProductionRequestId', () => Serenity.IntegerEditor],
        ['BatchNumber', () => Serenity.IntegerEditor],
        ['BatchTank', () => Serenity.StringEditor],
        ['DateCreated', () => Serenity.DateEditor],
        ['DateCompleted', () => Serenity.DateEditor],
        ['BatchQuantity', () => Serenity.DecimalEditor],
        ['BatchActive', () => Serenity.BooleanEditor],
        ['FpQty', () => Serenity.IntegerEditor],
        ['ReceivingTank', () => Serenity.StringEditor],
        ['RecipeId', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(BulkBatchForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}