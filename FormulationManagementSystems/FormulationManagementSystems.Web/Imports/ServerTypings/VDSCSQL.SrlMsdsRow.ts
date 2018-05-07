
namespace FormulationManagementSystems.VDSCSQL {
    export interface SrlMsdsRow {
        Id?: number;
        MaterialId?: number;
        StorageFile?: number[];
    }

    export namespace SrlMsdsRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'VDSCSQL.SrlMsds';

        export namespace Fields {
            export declare const Id;
            export declare const MaterialId;
            export declare const StorageFile;
        }

        [
            'Id',
            'MaterialId',
            'StorageFile'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}