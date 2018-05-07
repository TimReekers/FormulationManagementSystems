
namespace FormulationManagementSystems.VDSCSQL {
    export interface SrlCarrierRow {
        Id?: number;
        CarrierName?: string;
    }

    export namespace SrlCarrierRow {
        export const idProperty = 'Id';
        export const nameProperty = 'CarrierName';
        export const localTextPrefix = 'VDSCSQL.SrlCarrier';

        export namespace Fields {
            export declare const Id;
            export declare const CarrierName;
        }

        [
            'Id',
            'CarrierName'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}