
namespace FormulationManagementSystems.VDSCSQL {
    export interface ValveListRow {
        Id?: number;
        ValveName?: string;
        ValveBarcode?: string;
        ValveDescription?: string;
        Bldg?: number;
    }

    export namespace ValveListRow {
        export const idProperty = 'Id';
        export const nameProperty = 'ValveName';
        export const localTextPrefix = 'VDSCSQL.ValveList';

        export namespace Fields {
            export declare const Id;
            export declare const ValveName;
            export declare const ValveBarcode;
            export declare const ValveDescription;
            export declare const Bldg;
        }

        [
            'Id',
            'ValveName',
            'ValveBarcode',
            'ValveDescription',
            'Bldg'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}