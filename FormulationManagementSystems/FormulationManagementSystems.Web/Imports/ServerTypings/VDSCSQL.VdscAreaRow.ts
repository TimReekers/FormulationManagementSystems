
namespace FormulationManagementSystems.VDSCSQL {
    export interface VdscAreaRow {
        Id?: number;
        VdscAreaGroupId?: number;
        Area?: string;
        ListOrder?: number;
        VdscAreaGroupDepartmentId?: number;
        VdscAreaGroupListOrder?: number;
        VdscAreaGroupManagerId?: number;
    }

    export namespace VdscAreaRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Area';
        export const localTextPrefix = 'VDSCSQL.VdscArea';

        export namespace Fields {
            export declare const Id;
            export declare const VdscAreaGroupId;
            export declare const Area;
            export declare const ListOrder;
            export declare const VdscAreaGroupDepartmentId;
            export declare const VdscAreaGroupListOrder;
            export declare const VdscAreaGroupManagerId;
        }

        [
            'Id',
            'VdscAreaGroupId',
            'Area',
            'ListOrder',
            'VdscAreaGroupDepartmentId',
            'VdscAreaGroupListOrder',
            'VdscAreaGroupManagerId'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}