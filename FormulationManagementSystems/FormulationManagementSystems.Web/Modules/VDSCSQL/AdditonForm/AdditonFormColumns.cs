
namespace FormulationManagementSystems.VDSCSQL.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("VDSCSQL.AdditonForm")]
    [BasedOnRow(typeof(Entities.AdditonFormRow), CheckNames = true)]
    public class AdditonFormColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public Int32 FormId { get; set; }
        [EditLink]
        public String Description { get; set; }
    }
}