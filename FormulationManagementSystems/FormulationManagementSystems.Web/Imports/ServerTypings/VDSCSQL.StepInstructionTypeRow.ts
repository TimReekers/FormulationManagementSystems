
namespace FormulationManagementSystems.VDSCSQL {
    export interface StepInstructionTypeRow {
        Id?: number;
        StepInstructionName?: string;
    }

    export namespace StepInstructionTypeRow {
        export const idProperty = 'Id';
        export const nameProperty = 'StepInstructionName';
        export const localTextPrefix = 'VDSCSQL.StepInstructionType';

        export namespace Fields {
            export declare const Id;
            export declare const StepInstructionName;
        }

        [
            'Id',
            'StepInstructionName'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}