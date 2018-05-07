﻿
namespace FormulationManagementSystems.VDSCSQL {
    export class ManagerForm extends Serenity.PrefixedContext {
        static formKey = 'VDSCSQL.Manager';
    }

    export interface ManagerForm {
        ManagerName: Serenity.StringEditor;
    }

    [,
        ['ManagerName', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(ManagerForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}