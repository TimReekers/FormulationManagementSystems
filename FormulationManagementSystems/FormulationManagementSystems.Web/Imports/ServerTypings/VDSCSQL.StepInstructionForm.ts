
namespace FormulationManagementSystems.VDSCSQL {
    export class StepInstructionForm extends Serenity.PrefixedContext {
        static formKey = 'VDSCSQL.StepInstruction';
    }

    export interface StepInstructionForm {
        ConsumptionId: Serenity.IntegerEditor;
        StepInstructionTypeId: Serenity.IntegerEditor;
        Index: Serenity.IntegerEditor;
        Instruct1: Serenity.StringEditor;
        Hint1: Serenity.StringEditor;
        ScanValue1: Serenity.StringEditor;
        ErrorMsg1: Serenity.StringEditor;
    }

    [,
        ['ConsumptionId', () => Serenity.IntegerEditor],
        ['StepInstructionTypeId', () => Serenity.IntegerEditor],
        ['Index', () => Serenity.IntegerEditor],
        ['Instruct1', () => Serenity.StringEditor],
        ['Hint1', () => Serenity.StringEditor],
        ['ScanValue1', () => Serenity.StringEditor],
        ['ErrorMsg1', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(StepInstructionForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}