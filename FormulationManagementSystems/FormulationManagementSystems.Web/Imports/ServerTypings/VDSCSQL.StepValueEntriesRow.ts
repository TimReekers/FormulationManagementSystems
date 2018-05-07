
namespace FormulationManagementSystems.VDSCSQL {
    export interface StepValueEntriesRow {
        Id?: number;
        Description?: string;
        RecipePhaseId?: number;
    }

    export namespace StepValueEntriesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'VDSCSQL.StepValueEntries';

        export namespace Fields {
            export declare const Id;
            export declare const Description;
            export declare const RecipePhaseId;
        }

        [
            'Id',
            'Description',
            'RecipePhaseId'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}