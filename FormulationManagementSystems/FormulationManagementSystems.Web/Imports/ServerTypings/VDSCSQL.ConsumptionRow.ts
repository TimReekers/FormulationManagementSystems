
namespace FormulationManagementSystems.VDSCSQL {
    export interface ConsumptionRow {
        Id?: number;
        RecipePhaseId?: number;
        IngredientNumber?: number;
        IngredientMaterialId?: number;
        Percentage?: number;
        OptionalIngredient?: boolean;
        SrcDstPathIds?: string;
        TimeExpectation?: number;
        OpPrcHighLmt?: number;
        OpPrcLwLmt?: number;
        TlPrcHighLmt?: number;
        TlPrcLwLmt?: number;
        StepDescription?: string;
        HTemp1?: number;
        LTemp1?: number;
        AmPrcHighLmt?: number;
        AmPrcLwLmt?: number;
        RecipePhaseRecipeId?: number;
        RecipePhasePhaseName?: string;
        RecipePhasePhaseNumber?: number;
        RecipePhasePhaseOptional?: boolean;
        RecipePhaseProcedure?: string;
        RecipePhasePackagingInstructions?: string;
        IngredientMaterialVdscCode?: string;
        IngredientMaterialDescription?: string;
        IngredientMaterialCustomerId?: number;
        IngredientMaterialCustomerIdent?: string;
        IngredientMaterialGmid?: string;
        IngredientMaterialCustomerPartNumber?: string;
        IngredientMaterialUnitOfMeasure?: string;
        IngredientMaterialDensity?: number;
        IngredientMaterialUnitQty?: number;
        IngredientMaterialMaterialCode?: string;
        IngredientMaterialMaterialType?: string;
        IngredientMaterialProductionGoal?: number;
        IngredientMaterialDiscontinued?: boolean;
        IngredientMaterialMsds?: string;
        IngredientMaterialPalletSpaceWt?: number;
        IngredientMaterialBulkSr?: boolean;
        IngredientMaterialDrysr?: boolean;
        IngredientMaterialHotBoxItem?: boolean;
        IngredientMaterialBarcode?: string;
    }

    export namespace ConsumptionRow {
        export const idProperty = 'Id';
        export const nameProperty = 'SrcDstPathIds';
        export const localTextPrefix = 'VDSCSQL.Consumption';

        export namespace Fields {
            export declare const Id;
            export declare const RecipePhaseId;
            export declare const IngredientNumber;
            export declare const IngredientMaterialId;
            export declare const Percentage;
            export declare const OptionalIngredient;
            export declare const SrcDstPathIds;
            export declare const TimeExpectation;
            export declare const OpPrcHighLmt;
            export declare const OpPrcLwLmt;
            export declare const TlPrcHighLmt;
            export declare const TlPrcLwLmt;
            export declare const StepDescription;
            export declare const HTemp1;
            export declare const LTemp1;
            export declare const AmPrcHighLmt;
            export declare const AmPrcLwLmt;
            export declare const RecipePhaseRecipeId;
            export declare const RecipePhasePhaseName;
            export declare const RecipePhasePhaseNumber;
            export declare const RecipePhasePhaseOptional;
            export declare const RecipePhaseProcedure;
            export declare const RecipePhasePackagingInstructions;
            export declare const IngredientMaterialVdscCode;
            export declare const IngredientMaterialDescription;
            export declare const IngredientMaterialCustomerId;
            export declare const IngredientMaterialCustomerIdent;
            export declare const IngredientMaterialGmid;
            export declare const IngredientMaterialCustomerPartNumber;
            export declare const IngredientMaterialUnitOfMeasure;
            export declare const IngredientMaterialDensity;
            export declare const IngredientMaterialUnitQty;
            export declare const IngredientMaterialMaterialCode;
            export declare const IngredientMaterialMaterialType;
            export declare const IngredientMaterialProductionGoal;
            export declare const IngredientMaterialDiscontinued;
            export declare const IngredientMaterialMsds;
            export declare const IngredientMaterialPalletSpaceWt;
            export declare const IngredientMaterialBulkSr;
            export declare const IngredientMaterialDrysr;
            export declare const IngredientMaterialHotBoxItem;
            export declare const IngredientMaterialBarcode;
        }

        [
            'Id',
            'RecipePhaseId',
            'IngredientNumber',
            'IngredientMaterialId',
            'Percentage',
            'OptionalIngredient',
            'SrcDstPathIds',
            'TimeExpectation',
            'OpPrcHighLmt',
            'OpPrcLwLmt',
            'TlPrcHighLmt',
            'TlPrcLwLmt',
            'StepDescription',
            'HTemp1',
            'LTemp1',
            'AmPrcHighLmt',
            'AmPrcLwLmt',
            'RecipePhaseRecipeId',
            'RecipePhasePhaseName',
            'RecipePhasePhaseNumber',
            'RecipePhasePhaseOptional',
            'RecipePhaseProcedure',
            'RecipePhasePackagingInstructions',
            'IngredientMaterialVdscCode',
            'IngredientMaterialDescription',
            'IngredientMaterialCustomerId',
            'IngredientMaterialCustomerIdent',
            'IngredientMaterialGmid',
            'IngredientMaterialCustomerPartNumber',
            'IngredientMaterialUnitOfMeasure',
            'IngredientMaterialDensity',
            'IngredientMaterialUnitQty',
            'IngredientMaterialMaterialCode',
            'IngredientMaterialMaterialType',
            'IngredientMaterialProductionGoal',
            'IngredientMaterialDiscontinued',
            'IngredientMaterialMsds',
            'IngredientMaterialPalletSpaceWt',
            'IngredientMaterialBulkSr',
            'IngredientMaterialDrysr',
            'IngredientMaterialHotBoxItem',
            'IngredientMaterialBarcode'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}