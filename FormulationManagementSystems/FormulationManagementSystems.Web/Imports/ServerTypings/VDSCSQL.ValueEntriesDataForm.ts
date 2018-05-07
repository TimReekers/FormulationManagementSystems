
namespace FormulationManagementSystems.VDSCSQL {
    export class ValueEntriesDataForm extends Serenity.PrefixedContext {
        static formKey = 'VDSCSQL.ValueEntriesData';
    }

    export interface ValueEntriesDataForm {
        BulkBatchDataId: Serenity.IntegerEditor;
        StepValueEntriesId: Serenity.IntegerEditor;
        UserInput: Serenity.StringEditor;
    }

    [,
        ['BulkBatchDataId', () => Serenity.IntegerEditor],
        ['StepValueEntriesId', () => Serenity.IntegerEditor],
        ['UserInput', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(ValueEntriesDataForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}