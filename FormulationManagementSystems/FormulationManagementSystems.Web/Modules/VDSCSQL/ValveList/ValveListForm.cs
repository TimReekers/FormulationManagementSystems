
namespace FormulationManagementSystems.VDSCSQL.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("VDSCSQL.ValveList")]
    [BasedOnRow(typeof(Entities.ValveListRow), CheckNames = true)]
    public class ValveListForm
    {
        public String ValveName { get; set; }
        public String ValveBarcode { get; set; }
        public String ValveDescription { get; set; }
        public Int32 Bldg { get; set; }
    }
}