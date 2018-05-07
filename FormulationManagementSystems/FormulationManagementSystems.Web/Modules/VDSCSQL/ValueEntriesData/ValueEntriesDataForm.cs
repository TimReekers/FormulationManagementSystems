
namespace FormulationManagementSystems.VDSCSQL.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("VDSCSQL.ValueEntriesData")]
    [BasedOnRow(typeof(Entities.ValueEntriesDataRow), CheckNames = true)]
    public class ValueEntriesDataForm
    {
        public Int32 BulkBatchDataId { get; set; }
        public Int32 StepValueEntriesId { get; set; }
        public String UserInput { get; set; }
    }
}