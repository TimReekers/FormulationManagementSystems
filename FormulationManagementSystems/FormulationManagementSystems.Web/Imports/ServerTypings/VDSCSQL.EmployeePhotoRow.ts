
namespace FormulationManagementSystems.VDSCSQL {
    export interface EmployeePhotoRow {
        Id?: number;
        EmployeeId?: number;
        FileName?: string;
        ContentType?: string;
        EmployeePhoto?: number[];
    }

    export namespace EmployeePhotoRow {
        export const idProperty = 'Id';
        export const nameProperty = 'FileName';
        export const localTextPrefix = 'VDSCSQL.EmployeePhoto';

        export namespace Fields {
            export declare const Id;
            export declare const EmployeeId;
            export declare const FileName;
            export declare const ContentType;
            export declare const EmployeePhoto;
        }

        [
            'Id',
            'EmployeeId',
            'FileName',
            'ContentType',
            'EmployeePhoto'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}