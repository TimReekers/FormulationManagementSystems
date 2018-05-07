
namespace FormulationManagementSystems.VDSCSQL.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("VDSCSQL.Customer")]
    [BasedOnRow(typeof(Entities.CustomerRow), CheckNames = true)]
    public class CustomerForm
    {
        public String Company { get; set; }
        public String CustomerIdent { get; set; }
        public String CustomerName { get; set; }
    }
}