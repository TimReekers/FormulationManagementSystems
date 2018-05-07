
namespace FormulationManagementSystems.VDSCSQL.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("VDSCSQL.StepValueEntries")]
    [BasedOnRow(typeof(Entities.StepValueEntriesRow), CheckNames = true)]
    public class StepValueEntriesForm
    {
        public String Description { get; set; }
        public Int32 RecipePhaseId { get; set; }
    }
}