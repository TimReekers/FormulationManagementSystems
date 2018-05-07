
namespace FormulationManagementSystems.VDSCSQL.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("VDSCSQL.SrlBulkMovementData")]
    [BasedOnRow(typeof(Entities.SrlBulkMovementDataRow), CheckNames = true)]
    public class SrlBulkMovementDataForm
    {
        public Int32 SrlBulkMovementId { get; set; }
        public Int32 BulkStorageTankId { get; set; }
        public Double StartPhysical { get; set; }
        public Double EndPhysical { get; set; }
        public Double MovementQuantity { get; set; }
    }
}