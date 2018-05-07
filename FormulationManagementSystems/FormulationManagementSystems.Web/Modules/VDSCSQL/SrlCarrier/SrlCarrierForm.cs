
namespace FormulationManagementSystems.VDSCSQL.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("VDSCSQL.SrlCarrier")]
    [BasedOnRow(typeof(Entities.SrlCarrierRow), CheckNames = true)]
    public class SrlCarrierForm
    {
        public String CarrierName { get; set; }
    }
}