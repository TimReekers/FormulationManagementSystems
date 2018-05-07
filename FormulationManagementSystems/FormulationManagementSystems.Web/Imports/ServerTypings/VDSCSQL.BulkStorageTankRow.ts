
namespace FormulationManagementSystems.VDSCSQL {
    export interface BulkStorageTankRow {
        Id?: number;
        CustomerId?: number;
        MaterialId?: number;
        Product?: string;
        Building?: string;
        Bay?: string;
        Tank?: string;
        Capacity?: number;
        Dimension?: string;
        VaporPressureAdjustedTo76F?: number;
        VaporPressure?: number;
        StrapChart?: number;
        ShipmentClearance?: boolean;
        TankBarcode?: string;
        BulkTank?: boolean;
        FlashPoint?: string;
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
    }

    export namespace BulkStorageTankRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Product';
        export const localTextPrefix = 'VDSCSQL.BulkStorageTank';

        export namespace Fields {
            export declare const Id;
            export declare const CustomerId;
            export declare const MaterialId;
            export declare const Product;
            export declare const Building;
            export declare const Bay;
            export declare const Tank;
            export declare const Capacity;
            export declare const Dimension;
            export declare const VaporPressureAdjustedTo76F;
            export declare const VaporPressure;
            export declare const StrapChart;
            export declare const ShipmentClearance;
            export declare const TankBarcode;
            export declare const BulkTank;
            export declare const FlashPoint;
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
        }

        [
            'Id',
            'CustomerId',
            'MaterialId',
            'Product',
            'Building',
            'Bay',
            'Tank',
            'Capacity',
            'Dimension',
            'VaporPressureAdjustedTo76F',
            'VaporPressure',
            'StrapChart',
            'ShipmentClearance',
            'TankBarcode',
            'BulkTank',
            'FlashPoint',
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
            'MaterialBarcode'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}