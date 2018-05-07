
namespace FormulationManagementSystems.VDSCSQL.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("VDSCSQL.SrcDstPath")]
    [BasedOnRow(typeof(Entities.SrcDstPathRow), CheckNames = true)]
    public class SrcDstPathForm
    {
        public Int32 SrcTankId { get; set; }
        public String SrcPath { get; set; }
        public Int32 DstTankId { get; set; }
        public String DstPath { get; set; }
        public String PathState { get; set; }
    }
}