namespace FormulationManagementSystems.BasicSamples {
    export interface OrderBulkActionRequest extends Serenity.ServiceRequest {
        OrderIDs?: number[];
    }
}

