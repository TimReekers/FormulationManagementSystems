
namespace FormulationManagementSystems.VDSCSQL.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("VDSCSQL.SrlBulkStorageTankData")]
    [BasedOnRow(typeof(Entities.SrlBulkStorageTankDataRow), CheckNames = true)]
    public class SrlBulkStorageTankDataColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public Int32 BulkStorageTankId { get; set; }
        public Int32 MaterialId { get; set; }
        public DateTime ChangeDate { get; set; }
        [EditLink]
        public String Notes { get; set; }
        public byte[] CleanoutResults { get; set; }
    }
}