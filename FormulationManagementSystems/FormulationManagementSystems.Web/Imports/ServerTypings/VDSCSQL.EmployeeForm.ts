
namespace FormulationManagementSystems.VDSCSQL {
    export class EmployeeForm extends Serenity.PrefixedContext {
        static formKey = 'VDSCSQL.Employee';
    }

    export interface EmployeeForm {
        EmployeeIdent1: Serenity.StringEditor;
        VdscAreaId1: Serenity.IntegerEditor;
        FirstName1: Serenity.StringEditor;
        LastName1: Serenity.StringEditor;
        TeamLeader1: Serenity.BooleanEditor;
        AreaManager1: Serenity.BooleanEditor;
        OvertimePreference1: Serenity.BooleanEditor;
        Shift1: Serenity.StringEditor;
        ForkliftLicense1: Serenity.BooleanEditor;
        ShippingEmployee1: Serenity.BooleanEditor;
        EmploymentTerminated1: Serenity.BooleanEditor;
        EmpTermDate1: Serenity.DateEditor;
        EmpTermReason1: Serenity.StringEditor;
        VdscDepartmentId1: Serenity.IntegerEditor;
        EmpStartDate1: Serenity.DateEditor;
        EmpPhoneNum1: Serenity.StringEditor;
        EmpPhoneNum21: Serenity.StringEditor;
        EmpAddress1: Serenity.StringEditor;
        EmpTitle1: Serenity.StringEditor;
        EmpTimeCardNum1: Serenity.StringEditor;
        EmpLockerNum1: Serenity.StringEditor;
        UserName1: Serenity.StringEditor;
        Password1: Serenity.StringEditor;
    }

    [,
        ['EmployeeIdent1', () => Serenity.StringEditor],
        ['VdscAreaId1', () => Serenity.IntegerEditor],
        ['FirstName1', () => Serenity.StringEditor],
        ['LastName1', () => Serenity.StringEditor],
        ['TeamLeader1', () => Serenity.BooleanEditor],
        ['AreaManager1', () => Serenity.BooleanEditor],
        ['OvertimePreference1', () => Serenity.BooleanEditor],
        ['Shift1', () => Serenity.StringEditor],
        ['ForkliftLicense1', () => Serenity.BooleanEditor],
        ['ShippingEmployee1', () => Serenity.BooleanEditor],
        ['EmploymentTerminated1', () => Serenity.BooleanEditor],
        ['EmpTermDate1', () => Serenity.DateEditor],
        ['EmpTermReason1', () => Serenity.StringEditor],
        ['VdscDepartmentId1', () => Serenity.IntegerEditor],
        ['EmpStartDate1', () => Serenity.DateEditor],
        ['EmpPhoneNum1', () => Serenity.StringEditor],
        ['EmpPhoneNum21', () => Serenity.StringEditor],
        ['EmpAddress1', () => Serenity.StringEditor],
        ['EmpTitle1', () => Serenity.StringEditor],
        ['EmpTimeCardNum1', () => Serenity.StringEditor],
        ['EmpLockerNum1', () => Serenity.StringEditor],
        ['UserName1', () => Serenity.StringEditor],
        ['Password1', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(EmployeeForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}