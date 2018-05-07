
namespace FormulationManagementSystems.VDSCSQL {
    export interface SrlBulkTerminalClearanceRow {
        Id?: number;
        BulkStorageTankId?: number;
        ClearanceDate?: string;
        ClearanceName?: string;
        ClearRemovalText?: string;
        ClearanceRemoveDate?: string;
        ClearanceRemovalName?: string;
        LotNumber?: string;
        ClearanceDuration?: number;
        TankClearance?: boolean;
    }

    export namespace SrlBulkTerminalClearanceRow {
        export const idProperty = 'Id';
        export const nameProperty = 'ClearanceName';
        export const localTextPrefix = 'VDSCSQL.SrlBulkTerminalClearance';

        export namespace Fields {
            export declare const Id;
            export declare const BulkStorageTankId;
            export declare const ClearanceDate;
            export declare const ClearanceName;
            export declare const ClearRemovalText;
            export declare const ClearanceRemoveDate;
            export declare const ClearanceRemovalName;
            export declare const LotNumber;
            export declare const ClearanceDuration;
            export declare const TankClearance;
        }

        [
            'Id',
            'BulkStorageTankId',
            'ClearanceDate',
            'ClearanceName',
            'ClearRemovalText',
            'ClearanceRemoveDate',
            'ClearanceRemovalName',
            'LotNumber',
            'ClearanceDuration',
            'TankClearance'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}