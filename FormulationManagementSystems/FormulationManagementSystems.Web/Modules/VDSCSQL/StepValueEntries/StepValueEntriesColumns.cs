
namespace FormulationManagementSystems.VDSCSQL.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("VDSCSQL.StepValueEntries")]
    [BasedOnRow(typeof(Entities.StepValueEntriesRow), CheckNames = true)]
    public class StepValueEntriesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String Description { get; set; }
        public Int32 RecipePhaseId { get; set; }
    }
}