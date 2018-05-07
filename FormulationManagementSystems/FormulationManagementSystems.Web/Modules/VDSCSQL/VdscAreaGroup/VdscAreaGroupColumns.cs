
namespace FormulationManagementSystems.VDSCSQL.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("VDSCSQL.VdscAreaGroup")]
    [BasedOnRow(typeof(Entities.VdscAreaGroupRow), CheckNames = true)]
    public class VdscAreaGroupColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public Int32 DepartmentId { get; set; }
        public Int32 ListOrder { get; set; }
        public String ManagerName { get; set; }
    }
}