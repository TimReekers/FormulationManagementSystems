
namespace FormulationManagementSystems.VDSCSQL.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("VDSCSQL.Recipe")]
    [BasedOnRow(typeof(Entities.RecipeRow), CheckNames = true)]
    public class RecipeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String MaterialVdscCode { get; set; }
        [EditLink]
        public String Description { get; set; }
        public String DescriptionNotes { get; set; }
        public Double BatchQty { get; set; }
        public Double WeightRangeHigh { get; set; }
        public Double WeightRangeLow { get; set; }
    }
}