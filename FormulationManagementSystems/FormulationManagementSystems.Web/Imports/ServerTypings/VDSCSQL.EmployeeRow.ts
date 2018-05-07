
namespace FormulationManagementSystems.VDSCSQL {
    export interface EmployeeRow {
        Id?: number;
        EmployeeIdent1?: string;
        VdscAreaId1?: number;
        FirstName1?: string;
        LastName1?: string;
        TeamLeader1?: boolean;
        AreaManager1?: boolean;
        OvertimePreference1?: boolean;
        Shift1?: string;
        ForkliftLicense1?: boolean;
        ShippingEmployee1?: boolean;
        EmploymentTerminated1?: boolean;
        EmpTermDate1?: string;
        EmpTermReason1?: string;
        VdscDepartmentId1?: number;
        EmpStartDate1?: string;
        EmpPhoneNum1?: string;
        EmpPhoneNum21?: string;
        EmpAddress1?: string;
        EmpTitle1?: string;
        EmpTimeCardNum1?: string;
        EmpLockerNum1?: string;
        UserName1?: string;
        Password1?: string;
        EmployeeIdent?: string;
        VdscAreaId?: number;
        FirstName?: string;
        LastName?: string;
        TeamLeader?: boolean;
        AreaManager?: boolean;
        OvertimePreference?: boolean;
        Shift?: string;
        ForkliftLicense?: boolean;
        ShippingEmployee?: boolean;
        EmploymentTerminated?: boolean;
        EmpTermDate?: string;
        EmpTermReason?: string;
        VdscDepartmentId?: number;
        EmpStartDate?: string;
        EmpPhoneNum?: string;
        EmpPhoneNum2?: string;
        EmpAddress?: string;
        EmpTitle?: string;
        EmpTimeCardNum?: string;
        EmpLockerNum?: string;
        UserName?: string;
        Password?: string;
        VdscAreaGroupId?: number;
        VdscArea?: string;
        VdscAreaListOrder?: number;
    }

    export namespace EmployeeRow {
        export const idProperty = 'Id';
        export const nameProperty = 'EmployeeIdent1';
        export const localTextPrefix = 'VDSCSQL.Employee';

        export namespace Fields {
            export declare const Id;
            export declare const EmployeeIdent1;
            export declare const VdscAreaId1;
            export declare const FirstName1;
            export declare const LastName1;
            export declare const TeamLeader1;
            export declare const AreaManager1;
            export declare const OvertimePreference1;
            export declare const Shift1;
            export declare const ForkliftLicense1;
            export declare const ShippingEmployee1;
            export declare const EmploymentTerminated1;
            export declare const EmpTermDate1;
            export declare const EmpTermReason1;
            export declare const VdscDepartmentId1;
            export declare const EmpStartDate1;
            export declare const EmpPhoneNum1;
            export declare const EmpPhoneNum21;
            export declare const EmpAddress1;
            export declare const EmpTitle1;
            export declare const EmpTimeCardNum1;
            export declare const EmpLockerNum1;
            export declare const UserName1;
            export declare const Password1;
            export declare const EmployeeIdent;
            export declare const VdscAreaId;
            export declare const FirstName;
            export declare const LastName;
            export declare const TeamLeader;
            export declare const AreaManager;
            export declare const OvertimePreference;
            export declare const Shift;
            export declare const ForkliftLicense;
            export declare const ShippingEmployee;
            export declare const EmploymentTerminated;
            export declare const EmpTermDate;
            export declare const EmpTermReason;
            export declare const VdscDepartmentId;
            export declare const EmpStartDate;
            export declare const EmpPhoneNum;
            export declare const EmpPhoneNum2;
            export declare const EmpAddress;
            export declare const EmpTitle;
            export declare const EmpTimeCardNum;
            export declare const EmpLockerNum;
            export declare const UserName;
            export declare const Password;
            export declare const VdscAreaGroupId;
            export declare const VdscArea;
            export declare const VdscAreaListOrder;
        }

        [
            'Id',
            'EmployeeIdent1',
            'VdscAreaId1',
            'FirstName1',
            'LastName1',
            'TeamLeader1',
            'AreaManager1',
            'OvertimePreference1',
            'Shift1',
            'ForkliftLicense1',
            'ShippingEmployee1',
            'EmploymentTerminated1',
            'EmpTermDate1',
            'EmpTermReason1',
            'VdscDepartmentId1',
            'EmpStartDate1',
            'EmpPhoneNum1',
            'EmpPhoneNum21',
            'EmpAddress1',
            'EmpTitle1',
            'EmpTimeCardNum1',
            'EmpLockerNum1',
            'UserName1',
            'Password1',
            'EmployeeIdent',
            'VdscAreaId',
            'FirstName',
            'LastName',
            'TeamLeader',
            'AreaManager',
            'OvertimePreference',
            'Shift',
            'ForkliftLicense',
            'ShippingEmployee',
            'EmploymentTerminated',
            'EmpTermDate',
            'EmpTermReason',
            'VdscDepartmentId',
            'EmpStartDate',
            'EmpPhoneNum',
            'EmpPhoneNum2',
            'EmpAddress',
            'EmpTitle',
            'EmpTimeCardNum',
            'EmpLockerNum',
            'UserName',
            'Password',
            'VdscAreaGroupId',
            'VdscArea',
            'VdscAreaListOrder'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}