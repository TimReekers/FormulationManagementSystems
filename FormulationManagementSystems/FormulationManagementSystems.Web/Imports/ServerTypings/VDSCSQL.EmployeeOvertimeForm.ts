
namespace FormulationManagementSystems.VDSCSQL {
    export class EmployeeOvertimeForm extends Serenity.PrefixedContext {
        static formKey = 'VDSCSQL.EmployeeOvertime';
    }

    export interface EmployeeOvertimeForm {
        EmployeeId: Serenity.IntegerEditor;
        DateWorked: Serenity.DateEditor;
        VdscAreaId: Serenity.IntegerEditor;
        Product: Serenity.StringEditor;
        DaysOfOvertimeWorked: Serenity.IntegerEditor;
    }

    [,
        ['EmployeeId', () => Serenity.IntegerEditor],
        ['DateWorked', () => Serenity.DateEditor],
        ['VdscAreaId', () => Serenity.IntegerEditor],
        ['Product', () => Serenity.StringEditor],
        ['DaysOfOvertimeWorked', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(EmployeeOvertimeForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}