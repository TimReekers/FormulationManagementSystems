
namespace FormulationManagementSystems.VDSCSQL.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("VDSCSQL.ValueEntriesData")]
    [BasedOnRow(typeof(Entities.ValueEntriesDataRow), CheckNames = true)]
    public class ValueEntriesDataColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String BulkBatchDataSourceTank { get; set; }
        public String StepValueEntriesDescription { get; set; }
        [EditLink]
        public String UserInput { get; set; }
    }
}