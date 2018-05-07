
namespace FormulationManagementSystems.VDSCSQL.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("VDSCSQL.VdscAreaGroup")]
    [BasedOnRow(typeof(Entities.VdscAreaGroupRow), CheckNames = true)]
    public class VdscAreaGroupForm
    {
        public Int32 DepartmentId { get; set; }
        public Int32 ListOrder { get; set; }
        public Int32 ManagerId { get; set; }
    }
}