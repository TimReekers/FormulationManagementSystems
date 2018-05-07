
namespace FormulationManagementSystems.VDSCSQL.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("VDSCSQL.RecipePhase")]
    [BasedOnRow(typeof(Entities.RecipePhaseRow), CheckNames = true)]
    public class RecipePhaseColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String RecipeDescription { get; set; }
        [EditLink]
        public String PhaseName { get; set; }
        public Int32 PhaseNumber { get; set; }
        public Boolean PhaseOptional { get; set; }
        public String Procedure { get; set; }
        public String PackagingInstructions { get; set; }
    }
}