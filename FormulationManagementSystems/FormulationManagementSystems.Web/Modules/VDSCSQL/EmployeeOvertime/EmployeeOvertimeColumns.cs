
namespace FormulationManagementSystems.VDSCSQL.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("VDSCSQL.EmployeeOvertime")]
    [BasedOnRow(typeof(Entities.EmployeeOvertimeRow), CheckNames = true)]
    public class EmployeeOvertimeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String EmployeeIdent { get; set; }
        public DateTime DateWorked { get; set; }
        public String VdscAreaId { get; set; }
        [EditLink]
        public String Product { get; set; }
        public Int32 DaysOfOvertimeWorked { get; set; }
    }
}