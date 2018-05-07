
namespace FormulationManagementSystems.VDSCSQL.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("VDSCSQL.ValvePositionMap")]
    [BasedOnRow(typeof(Entities.ValvePositionMapRow), CheckNames = true)]
    public class ValvePositionMapColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String SrcDstPathSrcPath { get; set; }
        public String ValveListValveName { get; set; }
        public Int32 ValveOrderNumber { get; set; }
        [EditLink]
        public String ValvePosition { get; set; }
    }
}