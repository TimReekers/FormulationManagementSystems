
namespace FormulationManagementSystems.VDSCSQL {
    export interface ProductionRequestRow {
        Id?: number;
        DateCreated?: string;
        CustomerId?: number;
        MaterialId?: number;
        RecipeId?: number;
        VdscAreaId?: number;
        QuantityRequested?: number;
        Operators?: number;
        Status?: string;
        BeginDate?: string;
        EndDate?: string;
        Attachments?: string;
        Notes?: string;
        UseAlternateRecipe?: boolean;
        ComputeBatch?: boolean;
        CustomerCompany?: string;
        CustomerCustomerIdent?: string;
        CustomerName?: string;
        MaterialVdscCode?: string;
        MaterialDescription?: string;
        MaterialCustomerId?: number;
        MaterialCustomerIdent?: string;
        MaterialGmid?: string;
        MaterialCustomerPartNumber?: string;
        MaterialUnitOfMeasure?: string;
        MaterialDensity?: number;
        MaterialUnitQty?: number;
        MaterialMaterialCode?: string;
        MaterialMaterialType?: string;
        MaterialProductionGoal?: number;
        MaterialDiscontinued?: boolean;
        MaterialMsds?: string;
        MaterialPalletSpaceWt?: number;
        MaterialBulkSr?: boolean;
        MaterialDrysr?: boolean;
        MaterialHotBoxItem?: boolean;
        MaterialBarcode?: string;
        RecipeMaterialId?: number;
        RecipeDescription?: string;
        RecipeDescriptionNotes?: string;
        RecipeBatchQty?: number;
        RecipeWeightRangeHigh?: number;
        RecipeWeightRangeLow?: number;
        VdscAreaGroupId?: number;
        VdscArea?: string;
        VdscAreaListOrder?: number;
    }

    export namespace ProductionRequestRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Status';
        export const localTextPrefix = 'VDSCSQL.ProductionRequest';

        export namespace Fields {
            export declare const Id;
            export declare const DateCreated;
            export declare const CustomerId;
            export declare const MaterialId;
            export declare const RecipeId;
            export declare const VdscAreaId;
            export declare const QuantityRequested;
            export declare const Operators;
            export declare const Status;
            export declare const BeginDate;
            export declare const EndDate;
            export declare const Attachments;
            export declare const Notes;
            export declare const UseAlternateRecipe;
            export declare const ComputeBatch;
            export declare const CustomerCompany;
            export declare const CustomerCustomerIdent;
            export declare const CustomerName;
            export declare const MaterialVdscCode;
            export declare const MaterialDescription;
            export declare const MaterialCustomerId;
            export declare const MaterialCustomerIdent;
            export declare const MaterialGmid;
            export declare const MaterialCustomerPartNumber;
            export declare const MaterialUnitOfMeasure;
            export declare const MaterialDensity;
            export declare const MaterialUnitQty;
            export declare const MaterialMaterialCode;
            export declare const MaterialMaterialType;
            export declare const MaterialProductionGoal;
            export declare const MaterialDiscontinued;
            export declare const MaterialMsds;
            export declare const MaterialPalletSpaceWt;
            export declare const MaterialBulkSr;
            export declare const MaterialDrysr;
            export declare const MaterialHotBoxItem;
            export declare const MaterialBarcode;
            export declare const RecipeMaterialId;
            export declare const RecipeDescription;
            export declare const RecipeDescriptionNotes;
            export declare const RecipeBatchQty;
            export declare const RecipeWeightRangeHigh;
            export declare const RecipeWeightRangeLow;
            export declare const VdscAreaGroupId;
            export declare const VdscArea;
            export declare const VdscAreaListOrder;
        }

        [
            'Id',
            'DateCreated',
            'CustomerId',
            'MaterialId',
            'RecipeId',
            'VdscAreaId',
            'QuantityRequested',
            'Operators',
            'Status',
            'BeginDate',
            'EndDate',
            'Attachments',
            'Notes',
            'UseAlternateRecipe',
            'ComputeBatch',
            'CustomerCompany',
            'CustomerCustomerIdent',
            'CustomerName',
            'MaterialVdscCode',
            'MaterialDescription',
            'MaterialCustomerId',
            'MaterialCustomerIdent',
            'MaterialGmid',
            'MaterialCustomerPartNumber',
            'MaterialUnitOfMeasure',
            'MaterialDensity',
            'MaterialUnitQty',
            'MaterialMaterialCode',
            'MaterialMaterialType',
            'MaterialProductionGoal',
            'MaterialDiscontinued',
            'MaterialMsds',
            'MaterialPalletSpaceWt',
            'MaterialBulkSr',
            'MaterialDrysr',
            'MaterialHotBoxItem',
            'MaterialBarcode',
            'RecipeMaterialId',
            'RecipeDescription',
            'RecipeDescriptionNotes',
            'RecipeBatchQty',
            'RecipeWeightRangeHigh',
            'RecipeWeightRangeLow',
            'VdscAreaGroupId',
            'VdscArea',
            'VdscAreaListOrder'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}