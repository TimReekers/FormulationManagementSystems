
namespace FormulationManagementSystems.VDSCSQL.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("VDSCSQL.VdscArea")]
    [BasedOnRow(typeof(Entities.VdscAreaRow), CheckNames = true)]
    public class VdscAreaForm
    {
        public Int32 VdscAreaGroupId { get; set; }
        public String Area { get; set; }
        public Int32 ListOrder { get; set; }
    }
}