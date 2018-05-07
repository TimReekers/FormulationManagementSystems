
namespace FormulationManagementSystems.VDSCSQL {
    export class CustomerForm extends Serenity.PrefixedContext {
        static formKey = 'VDSCSQL.Customer';
    }

    export interface CustomerForm {
        Company: Serenity.StringEditor;
        CustomerIdent: Serenity.StringEditor;
        CustomerName: Serenity.StringEditor;
    }

    [,
        ['Company', () => Serenity.StringEditor],
        ['CustomerIdent', () => Serenity.StringEditor],
        ['CustomerName', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(CustomerForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}