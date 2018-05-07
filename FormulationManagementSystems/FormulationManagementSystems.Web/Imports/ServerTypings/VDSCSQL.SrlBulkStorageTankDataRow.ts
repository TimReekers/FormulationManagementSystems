
namespace FormulationManagementSystems.VDSCSQL {
    export interface SrlBulkStorageTankDataRow {
        Id?: number;
        BulkStorageTankId?: number;
        MaterialId?: number;
        ChangeDate?: string;
        Notes?: string;
        CleanoutResults?: number[];
    }

    export namespace SrlBulkStorageTankDataRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Notes';
        export const localTextPrefix = 'VDSCSQL.SrlBulkStorageTankData';

        export namespace Fields {
            export declare const Id;
            export declare const BulkStorageTankId;
            export declare const MaterialId;
            export declare const ChangeDate;
            export declare const Notes;
            export declare const CleanoutResults;
        }

        [
            'Id',
            'BulkStorageTankId',
            'MaterialId',
            'ChangeDate',
            'Notes',
            'CleanoutResults'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}