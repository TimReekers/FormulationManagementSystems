
namespace FormulationManagementSystems.VDSCSQL {
    export class VdscDepartmentForm extends Serenity.PrefixedContext {
        static formKey = 'VDSCSQL.VdscDepartment';
    }

    export interface VdscDepartmentForm {
        DepartmentStr: Serenity.StringEditor;
        DepartmentCd: Serenity.StringEditor;
    }

    [,
        ['DepartmentStr', () => Serenity.StringEditor],
        ['DepartmentCd', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(VdscDepartmentForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}