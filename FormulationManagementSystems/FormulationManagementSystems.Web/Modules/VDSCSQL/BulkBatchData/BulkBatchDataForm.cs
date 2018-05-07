
namespace FormulationManagementSystems.VDSCSQL.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("VDSCSQL.BulkBatchData")]
    [BasedOnRow(typeof(Entities.BulkBatchDataRow), CheckNames = true)]
    public class BulkBatchDataForm
    {
        public Int32 BulkBatchId { get; set; }
        public String SourceTank { get; set; }
        public String DestinationTank { get; set; }
        public String Ingredient { get; set; }
        public Int32 IngredientNumber { get; set; }
        public String Phase { get; set; }
        public Int32 PhaseNumber { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public String Operator { get; set; }
        public String SupervisorOverride { get; set; }
        public Double AdditionQty { get; set; }
        public String Status { get; set; }
        public String ScaleCheckOperator { get; set; }
        public Int32 ScaleCheckWt { get; set; }
        public String ScaleId { get; set; }
        public String ValvesOpen { get; set; }
        public String ValveOpenBypass { get; set; }
        public String ValvesClose { get; set; }
        public String ValveCloseBypass { get; set; }
        public Int32 RecipePhaseId { get; set; }
        public Int32 CurrentStepIndex { get; set; }
        public Int32 OperatorId { get; set; }
        public Int32 SupervisorOverrideId { get; set; }
        public Double SrcStartWt { get; set; }
        public Double DstStartWt { get; set; }
        public Double SrcEndWt { get; set; }
        public Double DstEndWt { get; set; }
        public String PhaseTankRemembered { get; set; }
    }
}