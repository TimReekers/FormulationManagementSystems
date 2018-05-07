
namespace FormulationManagementSystems.VDSCSQL.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("VDSCSQL.RecipePhase")]
    [BasedOnRow(typeof(Entities.RecipePhaseRow), CheckNames = true)]
    public class RecipePhaseForm
    {
        public Int32 RecipeId { get; set; }
        public String PhaseName { get; set; }
        public Int32 PhaseNumber { get; set; }
        public Boolean PhaseOptional { get; set; }
        public String Procedure { get; set; }
        public String PackagingInstructions { get; set; }
    }
}