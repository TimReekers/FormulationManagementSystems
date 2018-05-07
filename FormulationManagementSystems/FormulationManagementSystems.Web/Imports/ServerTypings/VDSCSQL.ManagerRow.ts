
namespace FormulationManagementSystems.VDSCSQL {
    export interface ManagerRow {
        Id?: number;
        ManagerName?: string;
    }

    export namespace ManagerRow {
        export const idProperty = 'Id';
        export const nameProperty = 'ManagerName';
        export const localTextPrefix = 'VDSCSQL.Manager';

        export namespace Fields {
            export declare const Id;
            export declare const ManagerName;
        }

        [
            'Id',
            'ManagerName'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}