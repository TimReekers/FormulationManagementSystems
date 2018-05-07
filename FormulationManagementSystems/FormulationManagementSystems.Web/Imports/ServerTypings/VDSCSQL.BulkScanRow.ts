
namespace FormulationManagementSystems.VDSCSQL {
    export interface BulkScanRow {
        Id?: number;
        BulkBatchDataId?: number;
        Barcode?: string;
        ScanDate?: string;
        MaterialQty?: number;
        Operator?: string;
        LotNumber?: string;
        QtyDate?: string;
    }

    export namespace BulkScanRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Barcode';
        export const localTextPrefix = 'VDSCSQL.BulkScan';

        export namespace Fields {
            export declare const Id;
            export declare const BulkBatchDataId;
            export declare const Barcode;
            export declare const ScanDate;
            export declare const MaterialQty;
            export declare const Operator;
            export declare const LotNumber;
            export declare const QtyDate;
        }

        [
            'Id',
            'BulkBatchDataId',
            'Barcode',
            'ScanDate',
            'MaterialQty',
            'Operator',
            'LotNumber',
            'QtyDate'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}