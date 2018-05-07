
namespace FormulationManagementSystems.VDSCSQL {
    export class SrlBulkStorageTankDataForm extends Serenity.PrefixedContext {
        static formKey = 'VDSCSQL.SrlBulkStorageTankData';
    }

    export interface SrlBulkStorageTankDataForm {
        BulkStorageTankId: Serenity.IntegerEditor;
        MaterialId: Serenity.IntegerEditor;
        ChangeDate: Serenity.DateEditor;
        Notes: Serenity.StringEditor;
        CleanoutResults: Serenity.StringEditor;
    }

    [,
        ['BulkStorageTankId', () => Serenity.IntegerEditor],
        ['MaterialId', () => Serenity.IntegerEditor],
        ['ChangeDate', () => Serenity.DateEditor],
        ['Notes', () => Serenity.StringEditor],
        ['CleanoutResults', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(SrlBulkStorageTankDataForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}