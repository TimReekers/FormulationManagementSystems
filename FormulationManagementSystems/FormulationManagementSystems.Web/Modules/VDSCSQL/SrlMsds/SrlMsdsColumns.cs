
namespace FormulationManagementSystems.VDSCSQL.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("VDSCSQL.SrlMsds")]
    [BasedOnRow(typeof(Entities.SrlMsdsRow), CheckNames = true)]
    public class SrlMsdsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public Int32 MaterialId { get; set; }
        public byte[] StorageFile { get; set; }
    }
}