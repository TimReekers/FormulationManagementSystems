
namespace FormulationManagementSystems.VDSCSQL {
    export interface ValueEntriesDataRow {
        Id?: number;
        BulkBatchDataId?: number;
        StepValueEntriesId?: number;
        UserInput?: string;
        BulkBatchDataBulkBatchId?: number;
        BulkBatchDataSourceTank?: string;
        BulkBatchDataDestinationTank?: string;
        BulkBatchDataIngredient?: string;
        BulkBatchDataIngredientNumber?: number;
        BulkBatchDataPhase?: string;
        BulkBatchDataPhaseNumber?: number;
        BulkBatchDataStartTime?: string;
        BulkBatchDataEndTime?: string;
        BulkBatchDataOperator?: string;
        BulkBatchDataSupervisorOverride?: string;
        BulkBatchDataAdditionQty?: number;
        BulkBatchDataStatus?: string;
        BulkBatchDataScaleCheckOperator?: string;
        BulkBatchDataScaleCheckWt?: number;
        BulkBatchDataScaleId?: string;
        BulkBatchDataValvesOpen?: string;
        BulkBatchDataValveOpenBypass?: string;
        BulkBatchDataValvesClose?: string;
        BulkBatchDataValveCloseBypass?: string;
        BulkBatchDataRecipePhaseId?: number;
        BulkBatchDataCurrentStepIndex?: number;
        BulkBatchDataOperatorId?: number;
        BulkBatchDataSupervisorOverrideId?: number;
        BulkBatchDataSrcStartWt?: number;
        BulkBatchDataDstStartWt?: number;
        BulkBatchDataSrcEndWt?: number;
        BulkBatchDataDstEndWt?: number;
        BulkBatchDataPhaseTankRemembered?: string;
        StepValueEntriesDescription?: string;
        StepValueEntriesRecipePhaseId?: number;
    }

    export namespace ValueEntriesDataRow {
        export const idProperty = 'Id';
        export const nameProperty = 'UserInput';
        export const localTextPrefix = 'VDSCSQL.ValueEntriesData';

        export namespace Fields {
            export declare const Id;
            export declare const BulkBatchDataId;
            export declare const StepValueEntriesId;
            export declare const UserInput;
            export declare const BulkBatchDataBulkBatchId;
            export declare const BulkBatchDataSourceTank;
            export declare const BulkBatchDataDestinationTank;
            export declare const BulkBatchDataIngredient;
            export declare const BulkBatchDataIngredientNumber;
            export declare const BulkBatchDataPhase;
            export declare const BulkBatchDataPhaseNumber;
            export declare const BulkBatchDataStartTime;
            export declare const BulkBatchDataEndTime;
            export declare const BulkBatchDataOperator;
            export declare const BulkBatchDataSupervisorOverride;
            export declare const BulkBatchDataAdditionQty;
            export declare const BulkBatchDataStatus;
            export declare const BulkBatchDataScaleCheckOperator;
            export declare const BulkBatchDataScaleCheckWt;
            export declare const BulkBatchDataScaleId;
            export declare const BulkBatchDataValvesOpen;
            export declare const BulkBatchDataValveOpenBypass;
            export declare const BulkBatchDataValvesClose;
            export declare const BulkBatchDataValveCloseBypass;
            export declare const BulkBatchDataRecipePhaseId;
            export declare const BulkBatchDataCurrentStepIndex;
            export declare const BulkBatchDataOperatorId;
            export declare const BulkBatchDataSupervisorOverrideId;
            export declare const BulkBatchDataSrcStartWt;
            export declare const BulkBatchDataDstStartWt;
            export declare const BulkBatchDataSrcEndWt;
            export declare const BulkBatchDataDstEndWt;
            export declare const BulkBatchDataPhaseTankRemembered;
            export declare const StepValueEntriesDescription;
            export declare const StepValueEntriesRecipePhaseId;
        }

        [
            'Id',
            'BulkBatchDataId',
            'StepValueEntriesId',
            'UserInput',
            'BulkBatchDataBulkBatchId',
            'BulkBatchDataSourceTank',
            'BulkBatchDataDestinationTank',
            'BulkBatchDataIngredient',
            'BulkBatchDataIngredientNumber',
            'BulkBatchDataPhase',
            'BulkBatchDataPhaseNumber',
            'BulkBatchDataStartTime',
            'BulkBatchDataEndTime',
            'BulkBatchDataOperator',
            'BulkBatchDataSupervisorOverride',
            'BulkBatchDataAdditionQty',
            'BulkBatchDataStatus',
            'BulkBatchDataScaleCheckOperator',
            'BulkBatchDataScaleCheckWt',
            'BulkBatchDataScaleId',
            'BulkBatchDataValvesOpen',
            'BulkBatchDataValveOpenBypass',
            'BulkBatchDataValvesClose',
            'BulkBatchDataValveCloseBypass',
            'BulkBatchDataRecipePhaseId',
            'BulkBatchDataCurrentStepIndex',
            'BulkBatchDataOperatorId',
            'BulkBatchDataSupervisorOverrideId',
            'BulkBatchDataSrcStartWt',
            'BulkBatchDataDstStartWt',
            'BulkBatchDataSrcEndWt',
            'BulkBatchDataDstEndWt',
            'BulkBatchDataPhaseTankRemembered',
            'StepValueEntriesDescription',
            'StepValueEntriesRecipePhaseId'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}