
namespace FormulationManagementSystems.VDSCSQL {
    export interface AdditonFormRow {
        Id?: number;
        FormId?: number;
        Description?: string;
    }

    export namespace AdditonFormRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'VDSCSQL.AdditonForm';

        export namespace Fields {
            export declare const Id;
            export declare const FormId;
            export declare const Description;
        }

        [
            'Id',
            'FormId',
            'Description'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}