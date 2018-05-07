
namespace FormulationManagementSystems.VDSCSQL.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("VDSCSQL.SrlBulkStorageTankData")]
    [BasedOnRow(typeof(Entities.SrlBulkStorageTankDataRow), CheckNames = true)]
    public class SrlBulkStorageTankDataForm
    {
        public Int32 BulkStorageTankId { get; set; }
        public Int32 MaterialId { get; set; }
        public DateTime ChangeDate { get; set; }
        public String Notes { get; set; }
        public byte[] CleanoutResults { get; set; }
    }
}