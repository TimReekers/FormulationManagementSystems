
namespace FormulationManagementSystems.VDSCSQL {
    export class SrlBulkMovementDataForm extends Serenity.PrefixedContext {
        static formKey = 'VDSCSQL.SrlBulkMovementData';
    }

    export interface SrlBulkMovementDataForm {
        SrlBulkMovementId: Serenity.IntegerEditor;
        BulkStorageTankId: Serenity.IntegerEditor;
        StartPhysical: Serenity.DecimalEditor;
        EndPhysical: Serenity.DecimalEditor;
        MovementQuantity: Serenity.DecimalEditor;
    }

    [,
        ['SrlBulkMovementId', () => Serenity.IntegerEditor],
        ['BulkStorageTankId', () => Serenity.IntegerEditor],
        ['StartPhysical', () => Serenity.DecimalEditor],
        ['EndPhysical', () => Serenity.DecimalEditor],
        ['MovementQuantity', () => Serenity.DecimalEditor]
    ].forEach(x => Object.defineProperty(SrlBulkMovementDataForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}