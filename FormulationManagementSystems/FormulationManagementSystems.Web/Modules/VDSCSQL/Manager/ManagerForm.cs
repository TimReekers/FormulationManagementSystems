
namespace FormulationManagementSystems.VDSCSQL.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("VDSCSQL.Manager")]
    [BasedOnRow(typeof(Entities.ManagerRow), CheckNames = true)]
    public class ManagerForm
    {
        public String ManagerName { get; set; }
    }
}