
namespace FormulationManagementSystems.VDSCSQL {
    export interface MaterialRow {
        Id?: number;
        VdscCode?: string;
        Description?: string;
        CustomerId?: number;
        CustomerIdent?: string;
        Gmid?: string;
        CustomerPartNumber?: string;
        UnitOfMeasure?: string;
        Density?: number;
        UnitQty?: number;
        MaterialCode?: string;
        MaterialType?: string;
        ProductionGoal?: number;
        Discontinued?: boolean;
        Msds?: string;
        PalletSpaceWt?: number;
        BulkSr?: boolean;
        Drysr?: boolean;
        HotBoxItem?: boolean;
        Barcode?: string;
        CustomerCompany?: string;
        CustomerCustomerIdent?: string;
        CustomerName?: string;
    }

    export namespace MaterialRow {
        export const idProperty = 'Id';
        export const nameProperty = 'VdscCode';
        export const localTextPrefix = 'VDSCSQL.Material';

        export namespace Fields {
            export declare const Id;
            export declare const VdscCode;
            export declare const Description;
            export declare const CustomerId;
            export declare const CustomerIdent;
            export declare const Gmid;
            export declare const CustomerPartNumber;
            export declare const UnitOfMeasure;
            export declare const Density;
            export declare const UnitQty;
            export declare const MaterialCode;
            export declare const MaterialType;
            export declare const ProductionGoal;
            export declare const Discontinued;
            export declare const Msds;
            export declare const PalletSpaceWt;
            export declare const BulkSr;
            export declare const Drysr;
            export declare const HotBoxItem;
            export declare const Barcode;
            export declare const CustomerCompany;
            export declare const CustomerCustomerIdent;
            export declare const CustomerName;
        }

        [
            'Id',
            'VdscCode',
            'Description',
            'CustomerId',
            'CustomerIdent',
            'Gmid',
            'CustomerPartNumber',
            'UnitOfMeasure',
            'Density',
            'UnitQty',
            'MaterialCode',
            'MaterialType',
            'ProductionGoal',
            'Discontinued',
            'Msds',
            'PalletSpaceWt',
            'BulkSr',
            'Drysr',
            'HotBoxItem',
            'Barcode',
            'CustomerCompany',
            'CustomerCustomerIdent',
            'CustomerName'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}