
namespace FormulationManagementSystems.VDSCSQL {
    export class EmployeePhotoForm extends Serenity.PrefixedContext {
        static formKey = 'VDSCSQL.EmployeePhoto';
    }

    export interface EmployeePhotoForm {
        EmployeeId: Serenity.IntegerEditor;
        FileName: Serenity.StringEditor;
        ContentType: Serenity.StringEditor;
        EmployeePhoto: Serenity.StringEditor;
    }

    [,
        ['EmployeeId', () => Serenity.IntegerEditor],
        ['FileName', () => Serenity.StringEditor],
        ['ContentType', () => Serenity.StringEditor],
        ['EmployeePhoto', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(EmployeePhotoForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}