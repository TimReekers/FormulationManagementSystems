
namespace FormulationManagementSystems.VDSCSQL.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("VDSCSQL.EmployeeOvertime")]
    [BasedOnRow(typeof(Entities.EmployeeOvertimeRow), CheckNames = true)]
    public class EmployeeOvertimeForm
    {
        public Int32 EmployeeId { get; set; }
        public DateTime DateWorked { get; set; }
        public Int32 VdscAreaId { get; set; }
        public String Product { get; set; }
        public Int32 DaysOfOvertimeWorked { get; set; }
    }
}