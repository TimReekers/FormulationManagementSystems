
namespace FormulationManagementSystems.VDSCSQL {
    export interface BulkBatchRow {
        Id?: number;
        ProductionRequestId?: number;
        BatchNumber?: number;
        BatchTank?: string;
        DateCreated?: string;
        DateCompleted?: string;
        BatchQuantity?: number;
        BatchActive?: boolean;
        FpQty?: number;
        ReceivingTank?: string;
        RecipeId?: number;
        ProductionRequestDateCreated?: string;
        ProductionRequestCustomerId?: number;
        ProductionRequestMaterialId?: number;
        ProductionRequestRecipeId?: number;
        ProductionRequestVdscAreaId?: number;
        ProductionRequestQuantityRequested?: number;
        ProductionRequestOperators?: number;
        ProductionRequestStatus?: string;
        ProductionRequestBeginDate?: string;
        ProductionRequestEndDate?: string;
        ProductionRequestAttachments?: string;
        ProductionRequestNotes?: string;
        ProductionRequestUseAlternateRecipe?: boolean;
        ProductionRequestComputeBatch?: boolean;
    }

    export namespace BulkBatchRow {
        export const idProperty = 'Id';
        export const nameProperty = 'BatchTank';
        export const localTextPrefix = 'VDSCSQL.BulkBatch';

        export namespace Fields {
            export declare const Id;
            export declare const ProductionRequestId;
            export declare const BatchNumber;
            export declare const BatchTank;
            export declare const DateCreated;
            export declare const DateCompleted;
            export declare const BatchQuantity;
            export declare const BatchActive;
            export declare const FpQty;
            export declare const ReceivingTank;
            export declare const RecipeId;
            export declare const ProductionRequestDateCreated;
            export declare const ProductionRequestCustomerId;
            export declare const ProductionRequestMaterialId;
            export declare const ProductionRequestRecipeId;
            export declare const ProductionRequestVdscAreaId;
            export declare const ProductionRequestQuantityRequested;
            export declare const ProductionRequestOperators;
            export declare const ProductionRequestStatus;
            export declare const ProductionRequestBeginDate;
            export declare const ProductionRequestEndDate;
            export declare const ProductionRequestAttachments;
            export declare const ProductionRequestNotes;
            export declare const ProductionRequestUseAlternateRecipe;
            export declare const ProductionRequestComputeBatch;
        }

        [
            'Id',
            'ProductionRequestId',
            'BatchNumber',
            'BatchTank',
            'DateCreated',
            'DateCompleted',
            'BatchQuantity',
            'BatchActive',
            'FpQty',
            'ReceivingTank',
            'RecipeId',
            'ProductionRequestDateCreated',
            'ProductionRequestCustomerId',
            'ProductionRequestMaterialId',
            'ProductionRequestRecipeId',
            'ProductionRequestVdscAreaId',
            'ProductionRequestQuantityRequested',
            'ProductionRequestOperators',
            'ProductionRequestStatus',
            'ProductionRequestBeginDate',
            'ProductionRequestEndDate',
            'ProductionRequestAttachments',
            'ProductionRequestNotes',
            'ProductionRequestUseAlternateRecipe',
            'ProductionRequestComputeBatch'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}