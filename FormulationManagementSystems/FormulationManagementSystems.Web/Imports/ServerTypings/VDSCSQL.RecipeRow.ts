
namespace FormulationManagementSystems.VDSCSQL {
    export interface RecipeRow {
        Id?: number;
        MaterialId?: number;
        Description?: string;
        DescriptionNotes?: string;
        BatchQty?: number;
        WeightRangeHigh?: number;
        WeightRangeLow?: number;
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
    }

    export namespace RecipeRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'VDSCSQL.Recipe';

        export namespace Fields {
            export declare const Id;
            export declare const MaterialId;
            export declare const Description;
            export declare const DescriptionNotes;
            export declare const BatchQty;
            export declare const WeightRangeHigh;
            export declare const WeightRangeLow;
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
        }

        [
            'Id',
            'MaterialId',
            'Description',
            'DescriptionNotes',
            'BatchQty',
            'WeightRangeHigh',
            'WeightRangeLow',
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
            'MaterialBarcode'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}