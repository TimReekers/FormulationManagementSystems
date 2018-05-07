
namespace FormulationManagementSystems.VDSCSQL.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("VDSCSQL.Consumption")]
    [BasedOnRow(typeof(Entities.ConsumptionRow), CheckNames = true)]
    public class ConsumptionForm
    {
        public Int32 RecipePhaseId { get; set; }
        public Int32 IngredientNumber { get; set; }
        public Int32 IngredientMaterialId { get; set; }
        public Double Percentage { get; set; }
        public Boolean OptionalIngredient { get; set; }
        public String SrcDstPathIds { get; set; }
        public Int32 TimeExpectation { get; set; }
        public Single OpPrcHighLmt { get; set; }
        public Single OpPrcLwLmt { get; set; }
        public Single TlPrcHighLmt { get; set; }
        public Single TlPrcLwLmt { get; set; }
        public String StepDescription { get; set; }
        public Int32 HTemp1 { get; set; }
        public Int32 LTemp1 { get; set; }
        public Single AmPrcHighLmt { get; set; }
        public Single AmPrcLwLmt { get; set; }
    }
}