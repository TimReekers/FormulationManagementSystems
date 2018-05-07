
namespace FormulationManagementSystems.VDSCSQL {
    export interface StepInstructionRow {
        Id?: number;
        ConsumptionId?: number;
        StepInstructionTypeId?: number;
        Index?: number;
        Instruct1?: string;
        Hint1?: string;
        ScanValue1?: string;
        ErrorMsg1?: string;
        ConsumptionRecipePhaseId?: number;
        ConsumptionIngredientNumber?: number;
        ConsumptionIngredientMaterialId?: number;
        ConsumptionPercentage?: number;
        ConsumptionOptionalIngredient?: boolean;
        ConsumptionSrcDstPathIds?: string;
        ConsumptionTimeExpectation?: number;
        ConsumptionOpPrcHighLmt?: number;
        ConsumptionOpPrcLwLmt?: number;
        ConsumptionTlPrcHighLmt?: number;
        ConsumptionTlPrcLwLmt?: number;
        ConsumptionStepDescription?: string;
        ConsumptionHTemp1?: number;
        ConsumptionLTemp1?: number;
        ConsumptionAmPrcHighLmt?: number;
        ConsumptionAmPrcLwLmt?: number;
        StepInstructionTypeStepInstructionName?: string;
    }

    export namespace StepInstructionRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Instruct1';
        export const localTextPrefix = 'VDSCSQL.StepInstruction';

        export namespace Fields {
            export declare const Id;
            export declare const ConsumptionId;
            export declare const StepInstructionTypeId;
            export declare const Index;
            export declare const Instruct1;
            export declare const Hint1;
            export declare const ScanValue1;
            export declare const ErrorMsg1;
            export declare const ConsumptionRecipePhaseId;
            export declare const ConsumptionIngredientNumber;
            export declare const ConsumptionIngredientMaterialId;
            export declare const ConsumptionPercentage;
            export declare const ConsumptionOptionalIngredient;
            export declare const ConsumptionSrcDstPathIds;
            export declare const ConsumptionTimeExpectation;
            export declare const ConsumptionOpPrcHighLmt;
            export declare const ConsumptionOpPrcLwLmt;
            export declare const ConsumptionTlPrcHighLmt;
            export declare const ConsumptionTlPrcLwLmt;
            export declare const ConsumptionStepDescription;
            export declare const ConsumptionHTemp1;
            export declare const ConsumptionLTemp1;
            export declare const ConsumptionAmPrcHighLmt;
            export declare const ConsumptionAmPrcLwLmt;
            export declare const StepInstructionTypeStepInstructionName;
        }

        [
            'Id',
            'ConsumptionId',
            'StepInstructionTypeId',
            'Index',
            'Instruct1',
            'Hint1',
            'ScanValue1',
            'ErrorMsg1',
            'ConsumptionRecipePhaseId',
            'ConsumptionIngredientNumber',
            'ConsumptionIngredientMaterialId',
            'ConsumptionPercentage',
            'ConsumptionOptionalIngredient',
            'ConsumptionSrcDstPathIds',
            'ConsumptionTimeExpectation',
            'ConsumptionOpPrcHighLmt',
            'ConsumptionOpPrcLwLmt',
            'ConsumptionTlPrcHighLmt',
            'ConsumptionTlPrcLwLmt',
            'ConsumptionStepDescription',
            'ConsumptionHTemp1',
            'ConsumptionLTemp1',
            'ConsumptionAmPrcHighLmt',
            'ConsumptionAmPrcLwLmt',
            'StepInstructionTypeStepInstructionName'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}