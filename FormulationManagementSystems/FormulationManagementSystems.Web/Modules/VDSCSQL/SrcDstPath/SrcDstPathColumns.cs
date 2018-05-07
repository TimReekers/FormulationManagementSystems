
namespace FormulationManagementSystems.VDSCSQL.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("VDSCSQL.SrcDstPath")]
    [BasedOnRow(typeof(Entities.SrcDstPathRow), CheckNames = true)]
    public class SrcDstPathColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String SrcTankProduct { get; set; }
        [EditLink]
        public String SrcPath { get; set; }
        public String DstTankProduct { get; set; }
        public String DstPath { get; set; }
        public String PathState { get; set; }
    }
}