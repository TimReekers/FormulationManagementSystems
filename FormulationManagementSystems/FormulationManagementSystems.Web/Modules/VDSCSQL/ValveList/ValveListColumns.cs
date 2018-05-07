
namespace FormulationManagementSystems.VDSCSQL.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("VDSCSQL.ValveList")]
    [BasedOnRow(typeof(Entities.ValveListRow), CheckNames = true)]
    public class ValveListColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String ValveName { get; set; }
        public String ValveBarcode { get; set; }
        public String ValveDescription { get; set; }
        public Int32 Bldg { get; set; }
    }
}