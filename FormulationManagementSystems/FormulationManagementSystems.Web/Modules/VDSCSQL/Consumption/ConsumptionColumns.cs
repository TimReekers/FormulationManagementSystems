
namespace FormulationManagementSystems.VDSCSQL.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("VDSCSQL.Consumption")]
    [BasedOnRow(typeof(Entities.ConsumptionRow), CheckNames = true)]
    public class ConsumptionColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String RecipePhasePhaseName { get; set; }
        public Int32 IngredientNumber { get; set; }
        public String IngredientMaterialVdscCode { get; set; }
        public Double Percentage { get; set; }
        public Boolean OptionalIngredient { get; set; }
        [EditLink]
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