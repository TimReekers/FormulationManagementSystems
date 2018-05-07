
namespace FormulationManagementSystems.VDSCSQL {
    export class BulkScanForm extends Serenity.PrefixedContext {
        static formKey = 'VDSCSQL.BulkScan';
    }

    export interface BulkScanForm {
        BulkBatchDataId: Serenity.IntegerEditor;
        Barcode: Serenity.StringEditor;
        ScanDate: Serenity.DateEditor;
        MaterialQty: Serenity.DecimalEditor;
        Operator: Serenity.StringEditor;
        LotNumber: Serenity.StringEditor;
        QtyDate: Serenity.DateEditor;
    }

    [,
        ['BulkBatchDataId', () => Serenity.IntegerEditor],
        ['Barcode', () => Serenity.StringEditor],
        ['ScanDate', () => Serenity.DateEditor],
        ['MaterialQty', () => Serenity.DecimalEditor],
        ['Operator', () => Serenity.StringEditor],
        ['LotNumber', () => Serenity.StringEditor],
        ['QtyDate', () => Serenity.DateEditor]
    ].forEach(x => Object.defineProperty(BulkScanForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}