
namespace FormulationManagementSystems.VDSCSQL.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("VDSCSQL.BulkScan")]
    [BasedOnRow(typeof(Entities.BulkScanRow), CheckNames = true)]
    public class BulkScanColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public Int32 BulkBatchDataId { get; set; }
        [EditLink]
        public String Barcode { get; set; }
        public DateTime ScanDate { get; set; }
        public Double MaterialQty { get; set; }
        public String Operator { get; set; }
        public String LotNumber { get; set; }
        public DateTime QtyDate { get; set; }
    }
}