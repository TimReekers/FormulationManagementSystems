
namespace FormulationManagementSystems.VDSCSQL.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("VDSCSQL.VdscDepartment")]
    [BasedOnRow(typeof(Entities.VdscDepartmentRow), CheckNames = true)]
    public class VdscDepartmentForm
    {
        public String DepartmentStr { get; set; }
        public String DepartmentCd { get; set; }
    }
}