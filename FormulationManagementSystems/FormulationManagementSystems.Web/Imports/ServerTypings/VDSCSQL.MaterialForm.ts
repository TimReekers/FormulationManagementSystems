
namespace FormulationManagementSystems.VDSCSQL {
    export class MaterialForm extends Serenity.PrefixedContext {
        static formKey = 'VDSCSQL.Material';
    }

    export interface MaterialForm {
        VdscCode: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        CustomerId: Serenity.IntegerEditor;
        CustomerIdent: Serenity.StringEditor;
        Gmid: Serenity.StringEditor;
        CustomerPartNumber: Serenity.StringEditor;
        UnitOfMeasure: Serenity.StringEditor;
        Density: Serenity.DecimalEditor;
        UnitQty: Serenity.DecimalEditor;
        MaterialCode: Serenity.StringEditor;
        MaterialType: Serenity.StringEditor;
        ProductionGoal: Serenity.DecimalEditor;
        Discontinued: Serenity.BooleanEditor;
        Msds: Serenity.StringEditor;
        PalletSpaceWt: Serenity.DecimalEditor;
        BulkSr: Serenity.BooleanEditor;
        Drysr: Serenity.BooleanEditor;
        HotBoxItem: Serenity.BooleanEditor;
        Barcode: Serenity.StringEditor;
    }

    [,
        ['VdscCode', () => Serenity.StringEditor],
        ['Description', () => Serenity.StringEditor],
        ['CustomerId', () => Serenity.IntegerEditor],
        ['CustomerIdent', () => Serenity.StringEditor],
        ['Gmid', () => Serenity.StringEditor],
        ['CustomerPartNumber', () => Serenity.StringEditor],
        ['UnitOfMeasure', () => Serenity.StringEditor],
        ['Density', () => Serenity.DecimalEditor],
        ['UnitQty', () => Serenity.DecimalEditor],
        ['MaterialCode', () => Serenity.StringEditor],
        ['MaterialType', () => Serenity.StringEditor],
        ['ProductionGoal', () => Serenity.DecimalEditor],
        ['Discontinued', () => Serenity.BooleanEditor],
        ['Msds', () => Serenity.StringEditor],
        ['PalletSpaceWt', () => Serenity.DecimalEditor],
        ['BulkSr', () => Serenity.BooleanEditor],
        ['Drysr', () => Serenity.BooleanEditor],
        ['HotBoxItem', () => Serenity.BooleanEditor],
        ['Barcode', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(MaterialForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}