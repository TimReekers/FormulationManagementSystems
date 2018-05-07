
namespace FormulationManagementSystems.VDSCSQL.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("VDSCSQL.SrlMsds")]
    [BasedOnRow(typeof(Entities.SrlMsdsRow), CheckNames = true)]
    public class SrlMsdsForm
    {
        public Int32 MaterialId { get; set; }
        public byte[] StorageFile { get; set; }
    }
}