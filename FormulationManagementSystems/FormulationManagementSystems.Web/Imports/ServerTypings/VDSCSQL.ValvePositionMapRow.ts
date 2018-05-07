
namespace FormulationManagementSystems.VDSCSQL {
    export interface ValvePositionMapRow {
        Id?: number;
        SrcDstPathId?: number;
        ValveListId?: number;
        ValveOrderNumber?: number;
        ValvePosition?: string;
        SrcDstPathSrcTankId?: number;
        SrcDstPathSrcPath?: string;
        SrcDstPathDstTankId?: number;
        SrcDstPathDstPath?: string;
        SrcDstPathPathState?: string;
        ValveListValveName?: string;
        ValveListValveBarcode?: string;
        ValveListValveDescription?: string;
        ValveListBldg?: number;
    }

    export namespace ValvePositionMapRow {
        export const idProperty = 'Id';
        export const nameProperty = 'ValvePosition';
        export const localTextPrefix = 'VDSCSQL.ValvePositionMap';

        export namespace Fields {
            export declare const Id;
            export declare const SrcDstPathId;
            export declare const ValveListId;
            export declare const ValveOrderNumber;
            export declare const ValvePosition;
            export declare const SrcDstPathSrcTankId;
            export declare const SrcDstPathSrcPath;
            export declare const SrcDstPathDstTankId;
            export declare const SrcDstPathDstPath;
            export declare const SrcDstPathPathState;
            export declare const ValveListValveName;
            export declare const ValveListValveBarcode;
            export declare const ValveListValveDescription;
            export declare const ValveListBldg;
        }

        [
            'Id',
            'SrcDstPathId',
            'ValveListId',
            'ValveOrderNumber',
            'ValvePosition',
            'SrcDstPathSrcTankId',
            'SrcDstPathSrcPath',
            'SrcDstPathDstTankId',
            'SrcDstPathDstPath',
            'SrcDstPathPathState',
            'ValveListValveName',
            'ValveListValveBarcode',
            'ValveListValveDescription',
            'ValveListBldg'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}