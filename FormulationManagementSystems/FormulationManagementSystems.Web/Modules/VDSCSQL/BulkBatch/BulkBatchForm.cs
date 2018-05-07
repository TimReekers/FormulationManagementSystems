
namespace FormulationManagementSystems.VDSCSQL.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("VDSCSQL.BulkBatch")]
    [BasedOnRow(typeof(Entities.BulkBatchRow), CheckNames = true)]
    public class BulkBatchForm
    {
        public Int32 ProductionRequestId { get; set; }
        public Int32 BatchNumber { get; set; }
        public String BatchTank { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime DateCompleted { get; set; }
        public Double BatchQuantity { get; set; }
        public Boolean BatchActive { get; set; }
        public Int32 FpQty { get; set; }
        public String ReceivingTank { get; set; }
        public Int32 RecipeId { get; set; }
    }
}