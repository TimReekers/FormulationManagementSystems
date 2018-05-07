
namespace FormulationManagementSystems.VDSCSQL.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("VDSCSQL.SrlBulkTerminalClearance")]
    [BasedOnRow(typeof(Entities.SrlBulkTerminalClearanceRow), CheckNames = true)]
    public class SrlBulkTerminalClearanceForm
    {
        public Int32 BulkStorageTankId { get; set; }
        public DateTime ClearanceDate { get; set; }
        public String ClearanceName { get; set; }
        public String ClearRemovalText { get; set; }
        public DateTime ClearanceRemoveDate { get; set; }
        public String ClearanceRemovalName { get; set; }
        public String LotNumber { get; set; }
        public Double ClearanceDuration { get; set; }
        public Boolean TankClearance { get; set; }
    }
}