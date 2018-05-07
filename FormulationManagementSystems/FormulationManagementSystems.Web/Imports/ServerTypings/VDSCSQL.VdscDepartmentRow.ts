
namespace FormulationManagementSystems.VDSCSQL {
    export interface VdscDepartmentRow {
        Id?: number;
        DepartmentStr?: string;
        DepartmentCd?: string;
    }

    export namespace VdscDepartmentRow {
        export const idProperty = 'Id';
        export const nameProperty = 'DepartmentStr';
        export const localTextPrefix = 'VDSCSQL.VdscDepartment';

        export namespace Fields {
            export declare const Id;
            export declare const DepartmentStr;
            export declare const DepartmentCd;
        }

        [
            'Id',
            'DepartmentStr',
            'DepartmentCd'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}