
namespace FormulationManagementSystems.VDSCSQL {
    export interface CustomerRow {
        Id?: number;
        Company?: string;
        CustomerIdent?: string;
        CustomerName?: string;
    }

    export namespace CustomerRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Company';
        export const localTextPrefix = 'VDSCSQL.Customer';

        export namespace Fields {
            export declare const Id;
            export declare const Company;
            export declare const CustomerIdent;
            export declare const CustomerName;
        }

        [
            'Id',
            'Company',
            'CustomerIdent',
            'CustomerName'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}