
namespace FormulationManagementSystems.VDSCSQL.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("VDSCSQL.BulkStorageTank")]
    [BasedOnRow(typeof(Entities.BulkStorageTankRow), CheckNames = true)]
    public class BulkStorageTankColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String CustomerCompany { get; set; }
        public String MaterialVdscCode { get; set; }
        [EditLink]
        public String Product { get; set; }
        public String Building { get; set; }
        public String Bay { get; set; }
        public String Tank { get; set; }
        public Double Capacity { get; set; }
        public String Dimension { get; set; }
        public Double VaporPressureAdjustedTo76F { get; set; }
        public Double VaporPressure { get; set; }
        public Int32 StrapChart { get; set; }
        public Boolean ShipmentClearance { get; set; }
        public String TankBarcode { get; set; }
        public Boolean BulkTank { get; set; }
        public String FlashPoint { get; set; }
    }
}