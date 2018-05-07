
namespace FormulationManagementSystems.VDSCSQL {
    export interface SrcDstPathRow {
        Id?: number;
        SrcTankId?: number;
        SrcPath?: string;
        DstTankId?: number;
        DstPath?: string;
        PathState?: string;
        SrcTankCustomerId?: number;
        SrcTankMaterialId?: number;
        SrcTankProduct?: string;
        SrcTankBuilding?: string;
        SrcTankBay?: string;
        SrcTankTank?: string;
        SrcTankCapacity?: number;
        SrcTankDimension?: string;
        SrcTankVaporPressureAdjustedTo76F?: number;
        SrcTankVaporPressure?: number;
        SrcTankStrapChart?: number;
        SrcTankShipmentClearance?: boolean;
        SrcTankTankBarcode?: string;
        SrcTankBulkTank?: boolean;
        SrcTankFlashPoint?: string;
        DstTankCustomerId?: number;
        DstTankMaterialId?: number;
        DstTankProduct?: string;
        DstTankBuilding?: string;
        DstTankBay?: string;
        DstTankTank?: string;
        DstTankCapacity?: number;
        DstTankDimension?: string;
        DstTankVaporPressureAdjustedTo76F?: number;
        DstTankVaporPressure?: number;
        DstTankStrapChart?: number;
        DstTankShipmentClearance?: boolean;
        DstTankTankBarcode?: string;
        DstTankBulkTank?: boolean;
        DstTankFlashPoint?: string;
    }

    export namespace SrcDstPathRow {
        export const idProperty = 'Id';
        export const nameProperty = 'SrcPath';
        export const localTextPrefix = 'VDSCSQL.SrcDstPath';

        export namespace Fields {
            export declare const Id;
            export declare const SrcTankId;
            export declare const SrcPath;
            export declare const DstTankId;
            export declare const DstPath;
            export declare const PathState;
            export declare const SrcTankCustomerId;
            export declare const SrcTankMaterialId;
            export declare const SrcTankProduct;
            export declare const SrcTankBuilding;
            export declare const SrcTankBay;
            export declare const SrcTankTank;
            export declare const SrcTankCapacity;
            export declare const SrcTankDimension;
            export declare const SrcTankVaporPressureAdjustedTo76F;
            export declare const SrcTankVaporPressure;
            export declare const SrcTankStrapChart;
            export declare const SrcTankShipmentClearance;
            export declare const SrcTankTankBarcode;
            export declare const SrcTankBulkTank;
            export declare const SrcTankFlashPoint;
            export declare const DstTankCustomerId;
            export declare const DstTankMaterialId;
            export declare const DstTankProduct;
            export declare const DstTankBuilding;
            export declare const DstTankBay;
            export declare const DstTankTank;
            export declare const DstTankCapacity;
            export declare const DstTankDimension;
            export declare const DstTankVaporPressureAdjustedTo76F;
            export declare const DstTankVaporPressure;
            export declare const DstTankStrapChart;
            export declare const DstTankShipmentClearance;
            export declare const DstTankTankBarcode;
            export declare const DstTankBulkTank;
            export declare const DstTankFlashPoint;
        }

        [
            'Id',
            'SrcTankId',
            'SrcPath',
            'DstTankId',
            'DstPath',
            'PathState',
            'SrcTankCustomerId',
            'SrcTankMaterialId',
            'SrcTankProduct',
            'SrcTankBuilding',
            'SrcTankBay',
            'SrcTankTank',
            'SrcTankCapacity',
            'SrcTankDimension',
            'SrcTankVaporPressureAdjustedTo76F',
            'SrcTankVaporPressure',
            'SrcTankStrapChart',
            'SrcTankShipmentClearance',
            'SrcTankTankBarcode',
            'SrcTankBulkTank',
            'SrcTankFlashPoint',
            'DstTankCustomerId',
            'DstTankMaterialId',
            'DstTankProduct',
            'DstTankBuilding',
            'DstTankBay',
            'DstTankTank',
            'DstTankCapacity',
            'DstTankDimension',
            'DstTankVaporPressureAdjustedTo76F',
            'DstTankVaporPressure',
            'DstTankStrapChart',
            'DstTankShipmentClearance',
            'DstTankTankBarcode',
            'DstTankBulkTank',
            'DstTankFlashPoint'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}