
namespace FormulationManagementSystems.VDSCSQL {
    export interface VdscAreaGroupRow {
        Id?: number;
        DepartmentId?: number;
        ListOrder?: number;
        ManagerId?: number;
        ManagerName?: string;
    }

    export namespace VdscAreaGroupRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'VDSCSQL.VdscAreaGroup';

        export namespace Fields {
            export declare const Id;
            export declare const DepartmentId;
            export declare const ListOrder;
            export declare const ManagerId;
            export declare const ManagerName;
        }

        [
            'Id',
            'DepartmentId',
            'ListOrder',
            'ManagerId',
            'ManagerName'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}