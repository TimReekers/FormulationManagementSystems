
namespace FormulationManagementSystems.VDSCSQL.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("VDSCSQL.SrlBulkMovement")]
    [BasedOnRow(typeof(Entities.SrlBulkMovementRow), CheckNames = true)]
    public class SrlBulkMovementForm
    {
        public Int32 CarrierId { get; set; }
        public String TrailerNumber { get; set; }
        public Int32 TankId { get; set; }
        public String MovementType { get; set; }
        public String BillofLading { get; set; }
        public DateTime StartWeighTime { get; set; }
        public DateTime StartPumpTime { get; set; }
        public DateTime EndPumpTime { get; set; }
        public DateTime EndWeighTime { get; set; }
        public Int32 OperatorId { get; set; }
        public DateTime MovementStartDate { get; set; }
        public String EntranceLocation { get; set; }
        public String PreviousMaterialId { get; set; }
        public String MovementArea { get; set; }
        public DateTime MovementEndDate { get; set; }
        public Double GrossWeight { get; set; }
        public Double TareWeight { get; set; }
        public String Notes { get; set; }
        public Double MovementQuantity { get; set; }
    }
}