
namespace FormulationManagementSystems.VDSCSQL {
    export interface SrlBulkMovementDataRow {
        Id?: number;
        SrlBulkMovementId?: number;
        BulkStorageTankId?: number;
        StartPhysical?: number;
        EndPhysical?: number;
        MovementQuantity?: number;
    }

    export namespace SrlBulkMovementDataRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'VDSCSQL.SrlBulkMovementData';

        export namespace Fields {
            export declare const Id;
            export declare const SrlBulkMovementId;
            export declare const BulkStorageTankId;
            export declare const StartPhysical;
            export declare const EndPhysical;
            export declare const MovementQuantity;
        }

        [
            'Id',
            'SrlBulkMovementId',
            'BulkStorageTankId',
            'StartPhysical',
            'EndPhysical',
            'MovementQuantity'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}