
namespace FormulationManagementSystems.VDSCSQL {
    export class StepInstructionTypeForm extends Serenity.PrefixedContext {
        static formKey = 'VDSCSQL.StepInstructionType';
    }

    export interface StepInstructionTypeForm {
        StepInstructionName: Serenity.StringEditor;
    }

    [,
        ['StepInstructionName', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(StepInstructionTypeForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}