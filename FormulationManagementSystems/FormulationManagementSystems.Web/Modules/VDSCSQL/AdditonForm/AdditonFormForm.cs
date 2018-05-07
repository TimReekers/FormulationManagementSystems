
namespace FormulationManagementSystems.VDSCSQL.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("VDSCSQL.AdditonForm")]
    [BasedOnRow(typeof(Entities.AdditonFormRow), CheckNames = true)]
    public class AdditonFormForm
    {
        public Int32 FormId { get; set; }
        public String Description { get; set; }
    }
}