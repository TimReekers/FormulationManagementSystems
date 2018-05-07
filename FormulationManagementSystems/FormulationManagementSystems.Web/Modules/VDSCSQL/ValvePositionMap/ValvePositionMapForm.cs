
namespace FormulationManagementSystems.VDSCSQL.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("VDSCSQL.ValvePositionMap")]
    [BasedOnRow(typeof(Entities.ValvePositionMapRow), CheckNames = true)]
    public class ValvePositionMapForm
    {
        public Int32 SrcDstPathId { get; set; }
        public Int32 ValveListId { get; set; }
        public Int32 ValveOrderNumber { get; set; }
        public String ValvePosition { get; set; }
    }
}