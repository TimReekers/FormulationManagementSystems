
namespace FormulationManagementSystems.VDSCSQL.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("VDSCSQL.Recipe")]
    [BasedOnRow(typeof(Entities.RecipeRow), CheckNames = true)]
    public class RecipeForm
    {
        public Int32 MaterialId { get; set; }
        public String Description { get; set; }
        public String DescriptionNotes { get; set; }
        public Double BatchQty { get; set; }
        public Double WeightRangeHigh { get; set; }
        public Double WeightRangeLow { get; set; }
    }
}