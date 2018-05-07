
namespace FormulationManagementSystems.VDSCSQL.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("VDSCSQL.SrlBulkMovementData")]
    [BasedOnRow(typeof(Entities.SrlBulkMovementDataRow), CheckNames = true)]
    public class SrlBulkMovementDataColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public Int32 SrlBulkMovementId { get; set; }
        public Int32 BulkStorageTankId { get; set; }
        public Double StartPhysical { get; set; }
        public Double EndPhysical { get; set; }
        public Double MovementQuantity { get; set; }
    }
}