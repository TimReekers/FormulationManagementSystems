
namespace FormulationManagementSystems.VDSCSQL {
    export class BulkStorageTankForm extends Serenity.PrefixedContext {
        static formKey = 'VDSCSQL.BulkStorageTank';
    }

    export interface BulkStorageTankForm {
        CustomerId: Serenity.IntegerEditor;
        MaterialId: Serenity.IntegerEditor;
        Product: Serenity.StringEditor;
        Building: Serenity.StringEditor;
        Bay: Serenity.StringEditor;
        Tank: Serenity.StringEditor;
        Capacity: Serenity.DecimalEditor;
        Dimension: Serenity.StringEditor;
        VaporPressureAdjustedTo76F: Serenity.DecimalEditor;
        VaporPressure: Serenity.DecimalEditor;
        StrapChart: Serenity.IntegerEditor;
        ShipmentClearance: Serenity.BooleanEditor;
        TankBarcode: Serenity.StringEditor;
        BulkTank: Serenity.BooleanEditor;
        FlashPoint: Serenity.StringEditor;
    }

    [,
        ['CustomerId', () => Serenity.IntegerEditor],
        ['MaterialId', () => Serenity.IntegerEditor],
        ['Product', () => Serenity.StringEditor],
        ['Building', () => Serenity.StringEditor],
        ['Bay', () => Serenity.StringEditor],
        ['Tank', () => Serenity.StringEditor],
        ['Capacity', () => Serenity.DecimalEditor],
        ['Dimension', () => Serenity.StringEditor],
        ['VaporPressureAdjustedTo76F', () => Serenity.DecimalEditor],
        ['VaporPressure', () => Serenity.DecimalEditor],
        ['StrapChart', () => Serenity.IntegerEditor],
        ['ShipmentClearance', () => Serenity.BooleanEditor],
        ['TankBarcode', () => Serenity.StringEditor],
        ['BulkTank', () => Serenity.BooleanEditor],
        ['FlashPoint', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(BulkStorageTankForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}