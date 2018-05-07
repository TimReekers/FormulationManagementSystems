
namespace FormulationManagementSystems.VDSCSQL {
    export interface RecipePhaseRow {
        Id?: number;
        RecipeId?: number;
        PhaseName?: string;
        PhaseNumber?: number;
        PhaseOptional?: boolean;
        Procedure?: string;
        PackagingInstructions?: string;
        RecipeMaterialId?: number;
        RecipeDescription?: string;
        RecipeDescriptionNotes?: string;
        RecipeBatchQty?: number;
        RecipeWeightRangeHigh?: number;
        RecipeWeightRangeLow?: number;
    }

    export namespace RecipePhaseRow {
        export const idProperty = 'Id';
        export const nameProperty = 'PhaseName';
        export const localTextPrefix = 'VDSCSQL.RecipePhase';

        export namespace Fields {
            export declare const Id;
            export declare const RecipeId;
            export declare const PhaseName;
            export declare const PhaseNumber;
            export declare const PhaseOptional;
            export declare const Procedure;
            export declare const PackagingInstructions;
            export declare const RecipeMaterialId;
            export declare const RecipeDescription;
            export declare const RecipeDescriptionNotes;
            export declare const RecipeBatchQty;
            export declare const RecipeWeightRangeHigh;
            export declare const RecipeWeightRangeLow;
        }

        [
            'Id',
            'RecipeId',
            'PhaseName',
            'PhaseNumber',
            'PhaseOptional',
            'Procedure',
            'PackagingInstructions',
            'RecipeMaterialId',
            'RecipeDescription',
            'RecipeDescriptionNotes',
            'RecipeBatchQty',
            'RecipeWeightRangeHigh',
            'RecipeWeightRangeLow'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}