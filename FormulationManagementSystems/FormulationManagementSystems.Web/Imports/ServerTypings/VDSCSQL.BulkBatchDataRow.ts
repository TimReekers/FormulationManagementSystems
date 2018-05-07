
namespace FormulationManagementSystems.VDSCSQL {
    export interface BulkBatchDataRow {
        Id?: number;
        BulkBatchId?: number;
        SourceTank?: string;
        DestinationTank?: string;
        Ingredient?: string;
        IngredientNumber?: number;
        Phase?: string;
        PhaseNumber?: number;
        StartTime?: string;
        EndTime?: string;
        Operator?: string;
        SupervisorOverride?: string;
        AdditionQty?: number;
        Status?: string;
        ScaleCheckOperator?: string;
        ScaleCheckWt?: number;
        ScaleId?: string;
        ValvesOpen?: string;
        ValveOpenBypass?: string;
        ValvesClose?: string;
        ValveCloseBypass?: string;
        RecipePhaseId?: number;
        CurrentStepIndex?: number;
        OperatorId?: number;
        SupervisorOverrideId?: number;
        SrcStartWt?: number;
        DstStartWt?: number;
        SrcEndWt?: number;
        DstEndWt?: number;
        PhaseTankRemembered?: string;
    }

    export namespace BulkBatchDataRow {
        export const idProperty = 'Id';
        export const nameProperty = 'SourceTank';
        export const localTextPrefix = 'VDSCSQL.BulkBatchData';

        export namespace Fields {
            export declare const Id;
            export declare const BulkBatchId;
            export declare const SourceTank;
            export declare const DestinationTank;
            export declare const Ingredient;
            export declare const IngredientNumber;
            export declare const Phase;
            export declare const PhaseNumber;
            export declare const StartTime;
            export declare const EndTime;
            export declare const Operator;
            export declare const SupervisorOverride;
            export declare const AdditionQty;
            export declare const Status;
            export declare const ScaleCheckOperator;
            export declare const ScaleCheckWt;
            export declare const ScaleId;
            export declare const ValvesOpen;
            export declare const ValveOpenBypass;
            export declare const ValvesClose;
            export declare const ValveCloseBypass;
            export declare const RecipePhaseId;
            export declare const CurrentStepIndex;
            export declare const OperatorId;
            export declare const SupervisorOverrideId;
            export declare const SrcStartWt;
            export declare const DstStartWt;
            export declare const SrcEndWt;
            export declare const DstEndWt;
            export declare const PhaseTankRemembered;
        }

        [
            'Id',
            'BulkBatchId',
            'SourceTank',
            'DestinationTank',
            'Ingredient',
            'IngredientNumber',
            'Phase',
            'PhaseNumber',
            'StartTime',
            'EndTime',
            'Operator',
            'SupervisorOverride',
            'AdditionQty',
            'Status',
            'ScaleCheckOperator',
            'ScaleCheckWt',
            'ScaleId',
            'ValvesOpen',
            'ValveOpenBypass',
            'ValvesClose',
            'ValveCloseBypass',
            'RecipePhaseId',
            'CurrentStepIndex',
            'OperatorId',
            'SupervisorOverrideId',
            'SrcStartWt',
            'DstStartWt',
            'SrcEndWt',
            'DstEndWt',
            'PhaseTankRemembered'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}