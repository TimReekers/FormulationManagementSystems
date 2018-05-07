
namespace FormulationManagementSystems.VDSCSQL {
    export interface EmployeeOvertimeRow {
        Id?: number;
        EmployeeId?: number;
        DateWorked?: string;
        VdscAreaId?: number;
        Product?: string;
        DaysOfOvertimeWorked?: number;
        EmployeeIdent?: string;
        EmployeeVdscAreaId?: number;
        EmployeeFirstName?: string;
        EmployeeLastName?: string;
        EmployeeTeamLeader?: boolean;
        EmployeeAreaManager?: boolean;
        EmployeeOvertimePreference?: boolean;
        EmployeeShift?: string;
        EmployeeForkliftLicense?: boolean;
        EmployeeShippingEmployee?: boolean;
        EmployeeEmploymentTerminated?: boolean;
        EmployeeEmpTermDate?: string;
        EmployeeEmpTermReason?: string;
        EmployeeVdscDepartmentId?: number;
        EmployeeEmpStartDate?: string;
        EmployeeEmpPhoneNum?: string;
        EmployeeEmpPhoneNum2?: string;
        EmployeeEmpAddress?: string;
        EmployeeEmpTitle?: string;
        EmployeeEmpTimeCardNum?: string;
        EmployeeEmpLockerNum?: string;
        EmployeeUserName?: string;
        EmployeePassword?: string;
        VdscAreaGroupId?: number;
        VdscArea?: string;
        VdscAreaListOrder?: number;
    }

    export namespace EmployeeOvertimeRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Product';
        export const localTextPrefix = 'VDSCSQL.EmployeeOvertime';

        export namespace Fields {
            export declare const Id;
            export declare const EmployeeId;
            export declare const DateWorked;
            export declare const VdscAreaId;
            export declare const Product;
            export declare const DaysOfOvertimeWorked;
            export declare const EmployeeIdent;
            export declare const EmployeeVdscAreaId;
            export declare const EmployeeFirstName;
            export declare const EmployeeLastName;
            export declare const EmployeeTeamLeader;
            export declare const EmployeeAreaManager;
            export declare const EmployeeOvertimePreference;
            export declare const EmployeeShift;
            export declare const EmployeeForkliftLicense;
            export declare const EmployeeShippingEmployee;
            export declare const EmployeeEmploymentTerminated;
            export declare const EmployeeEmpTermDate;
            export declare const EmployeeEmpTermReason;
            export declare const EmployeeVdscDepartmentId;
            export declare const EmployeeEmpStartDate;
            export declare const EmployeeEmpPhoneNum;
            export declare const EmployeeEmpPhoneNum2;
            export declare const EmployeeEmpAddress;
            export declare const EmployeeEmpTitle;
            export declare const EmployeeEmpTimeCardNum;
            export declare const EmployeeEmpLockerNum;
            export declare const EmployeeUserName;
            export declare const EmployeePassword;
            export declare const VdscAreaGroupId;
            export declare const VdscArea;
            export declare const VdscAreaListOrder;
        }

        [
            'Id',
            'EmployeeId',
            'DateWorked',
            'VdscAreaId',
            'Product',
            'DaysOfOvertimeWorked',
            'EmployeeIdent',
            'EmployeeVdscAreaId',
            'EmployeeFirstName',
            'EmployeeLastName',
            'EmployeeTeamLeader',
            'EmployeeAreaManager',
            'EmployeeOvertimePreference',
            'EmployeeShift',
            'EmployeeForkliftLicense',
            'EmployeeShippingEmployee',
            'EmployeeEmploymentTerminated',
            'EmployeeEmpTermDate',
            'EmployeeEmpTermReason',
            'EmployeeVdscDepartmentId',
            'EmployeeEmpStartDate',
            'EmployeeEmpPhoneNum',
            'EmployeeEmpPhoneNum2',
            'EmployeeEmpAddress',
            'EmployeeEmpTitle',
            'EmployeeEmpTimeCardNum',
            'EmployeeEmpLockerNum',
            'EmployeeUserName',
            'EmployeePassword',
            'VdscAreaGroupId',
            'VdscArea',
            'VdscAreaListOrder'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}