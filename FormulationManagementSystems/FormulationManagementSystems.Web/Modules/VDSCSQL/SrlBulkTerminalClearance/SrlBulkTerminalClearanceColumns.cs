
namespace FormulationManagementSystems.VDSCSQL.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("VDSCSQL.SrlBulkTerminalClearance")]
    [BasedOnRow(typeof(Entities.SrlBulkTerminalClearanceRow), CheckNames = true)]
    public class SrlBulkTerminalClearanceColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public Int32 BulkStorageTankId { get; set; }
        public DateTime ClearanceDate { get; set; }
        [EditLink]
        public String ClearanceName { get; set; }
        public String ClearRemovalText { get; set; }
        public DateTime ClearanceRemoveDate { get; set; }
        public String ClearanceRemovalName { get; set; }
        public String LotNumber { get; set; }
        public Double ClearanceDuration { get; set; }
        public Boolean TankClearance { get; set; }
    }
}