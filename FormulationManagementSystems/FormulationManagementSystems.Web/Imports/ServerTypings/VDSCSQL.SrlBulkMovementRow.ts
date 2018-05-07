
namespace FormulationManagementSystems.VDSCSQL {
    export interface SrlBulkMovementRow {
        Id?: number;
        CarrierId?: number;
        TrailerNumber?: string;
        TankId?: number;
        MovementType?: string;
        BillofLading?: string;
        StartWeighTime?: string;
        StartPumpTime?: string;
        EndPumpTime?: string;
        EndWeighTime?: string;
        OperatorId?: number;
        MovementStartDate?: string;
        EntranceLocation?: string;
        PreviousMaterialId?: string;
        MovementArea?: string;
        MovementEndDate?: string;
        GrossWeight?: number;
        TareWeight?: number;
        Notes?: string;
        MovementQuantity?: number;
    }

    export namespace SrlBulkMovementRow {
        export const idProperty = 'Id';
        export const nameProperty = 'TrailerNumber';
        export const localTextPrefix = 'VDSCSQL.SrlBulkMovement';

        export namespace Fields {
            export declare const Id;
            export declare const CarrierId;
            export declare const TrailerNumber;
            export declare const TankId;
            export declare const MovementType;
            export declare const BillofLading;
            export declare const StartWeighTime;
            export declare const StartPumpTime;
            export declare const EndPumpTime;
            export declare const EndWeighTime;
            export declare const OperatorId;
            export declare const MovementStartDate;
            export declare const EntranceLocation;
            export declare const PreviousMaterialId;
            export declare const MovementArea;
            export declare const MovementEndDate;
            export declare const GrossWeight;
            export declare const TareWeight;
            export declare const Notes;
            export declare const MovementQuantity;
        }

        [
            'Id',
            'CarrierId',
            'TrailerNumber',
            'TankId',
            'MovementType',
            'BillofLading',
            'StartWeighTime',
            'StartPumpTime',
            'EndPumpTime',
            'EndWeighTime',
            'OperatorId',
            'MovementStartDate',
            'EntranceLocation',
            'PreviousMaterialId',
            'MovementArea',
            'MovementEndDate',
            'GrossWeight',
            'TareWeight',
            'Notes',
            'MovementQuantity'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}