
namespace FormulationManagementSystems.VDSCSQL {
    export class SrlBulkTerminalClearanceForm extends Serenity.PrefixedContext {
        static formKey = 'VDSCSQL.SrlBulkTerminalClearance';
    }

    export interface SrlBulkTerminalClearanceForm {
        BulkStorageTankId: Serenity.IntegerEditor;
        ClearanceDate: Serenity.DateEditor;
        ClearanceName: Serenity.StringEditor;
        ClearRemovalText: Serenity.StringEditor;
        ClearanceRemoveDate: Serenity.DateEditor;
        ClearanceRemovalName: Serenity.StringEditor;
        LotNumber: Serenity.StringEditor;
        ClearanceDuration: Serenity.DecimalEditor;
        TankClearance: Serenity.BooleanEditor;
    }

    [,
        ['BulkStorageTankId', () => Serenity.IntegerEditor],
        ['ClearanceDate', () => Serenity.DateEditor],
        ['ClearanceName', () => Serenity.StringEditor],
        ['ClearRemovalText', () => Serenity.StringEditor],
        ['ClearanceRemoveDate', () => Serenity.DateEditor],
        ['ClearanceRemovalName', () => Serenity.StringEditor],
        ['LotNumber', () => Serenity.StringEditor],
        ['ClearanceDuration', () => Serenity.DecimalEditor],
        ['TankClearance', () => Serenity.BooleanEditor]
    ].forEach(x => Object.defineProperty(SrlBulkTerminalClearanceForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}