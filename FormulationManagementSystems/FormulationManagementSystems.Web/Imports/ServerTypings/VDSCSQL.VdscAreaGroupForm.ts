
namespace FormulationManagementSystems.VDSCSQL {
    export class VdscAreaGroupForm extends Serenity.PrefixedContext {
        static formKey = 'VDSCSQL.VdscAreaGroup';
    }

    export interface VdscAreaGroupForm {
        DepartmentId: Serenity.IntegerEditor;
        ListOrder: Serenity.IntegerEditor;
        ManagerId: Serenity.IntegerEditor;
    }

    [,
        ['DepartmentId', () => Serenity.IntegerEditor],
        ['ListOrder', () => Serenity.IntegerEditor],
        ['ManagerId', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(VdscAreaGroupForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}