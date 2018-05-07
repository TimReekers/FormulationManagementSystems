
namespace FormulationManagementSystems.VDSCSQL {
    export class SrlBulkMovementForm extends Serenity.PrefixedContext {
        static formKey = 'VDSCSQL.SrlBulkMovement';
    }

    export interface SrlBulkMovementForm {
        CarrierId: Serenity.IntegerEditor;
        TrailerNumber: Serenity.StringEditor;
        TankId: Serenity.IntegerEditor;
        MovementType: Serenity.StringEditor;
        BillofLading: Serenity.StringEditor;
        StartWeighTime: Serenity.DateEditor;
        StartPumpTime: Serenity.DateEditor;
        EndPumpTime: Serenity.DateEditor;
        EndWeighTime: Serenity.DateEditor;
        OperatorId: Serenity.IntegerEditor;
        MovementStartDate: Serenity.DateEditor;
        EntranceLocation: Serenity.StringEditor;
        PreviousMaterialId: Serenity.StringEditor;
        MovementArea: Serenity.StringEditor;
        MovementEndDate: Serenity.DateEditor;
        GrossWeight: Serenity.DecimalEditor;
        TareWeight: Serenity.DecimalEditor;
        Notes: Serenity.StringEditor;
        MovementQuantity: Serenity.DecimalEditor;
    }

    [,
        ['CarrierId', () => Serenity.IntegerEditor],
        ['TrailerNumber', () => Serenity.StringEditor],
        ['TankId', () => Serenity.IntegerEditor],
        ['MovementType', () => Serenity.StringEditor],
        ['BillofLading', () => Serenity.StringEditor],
        ['StartWeighTime', () => Serenity.DateEditor],
        ['StartPumpTime', () => Serenity.DateEditor],
        ['EndPumpTime', () => Serenity.DateEditor],
        ['EndWeighTime', () => Serenity.DateEditor],
        ['OperatorId', () => Serenity.IntegerEditor],
        ['MovementStartDate', () => Serenity.DateEditor],
        ['EntranceLocation', () => Serenity.StringEditor],
        ['PreviousMaterialId', () => Serenity.StringEditor],
        ['MovementArea', () => Serenity.StringEditor],
        ['MovementEndDate', () => Serenity.DateEditor],
        ['GrossWeight', () => Serenity.DecimalEditor],
        ['TareWeight', () => Serenity.DecimalEditor],
        ['Notes', () => Serenity.StringEditor],
        ['MovementQuantity', () => Serenity.DecimalEditor]
    ].forEach(x => Object.defineProperty(SrlBulkMovementForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}