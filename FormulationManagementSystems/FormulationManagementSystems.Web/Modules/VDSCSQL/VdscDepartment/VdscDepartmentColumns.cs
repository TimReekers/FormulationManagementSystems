
namespace FormulationManagementSystems.VDSCSQL.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("VDSCSQL.VdscDepartment")]
    [BasedOnRow(typeof(Entities.VdscDepartmentRow), CheckNames = true)]
    public class VdscDepartmentColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String DepartmentStr { get; set; }
        public String DepartmentCd { get; set; }
    }
}