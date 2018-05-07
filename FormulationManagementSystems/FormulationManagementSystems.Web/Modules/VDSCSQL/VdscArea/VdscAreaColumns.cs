
namespace FormulationManagementSystems.VDSCSQL.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("VDSCSQL.VdscArea")]
    [BasedOnRow(typeof(Entities.VdscAreaRow), CheckNames = true)]
    public class VdscAreaColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public Int32 VdscAreaGroupId { get; set; }
        [EditLink]
        public String Area { get; set; }
        public Int32 ListOrder { get; set; }
    }
}