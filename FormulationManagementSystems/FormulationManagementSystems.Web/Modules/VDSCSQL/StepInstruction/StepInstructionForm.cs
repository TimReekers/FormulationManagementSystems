
namespace FormulationManagementSystems.VDSCSQL.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("VDSCSQL.StepInstruction")]
    [BasedOnRow(typeof(Entities.StepInstructionRow), CheckNames = true)]
    public class StepInstructionForm
    {
        public Int32 ConsumptionId { get; set; }
        public Int32 StepInstructionTypeId { get; set; }
        public Int32 Index { get; set; }
        public String Instruct1 { get; set; }
        public String Hint1 { get; set; }
        public String ScanValue1 { get; set; }
        public String ErrorMsg1 { get; set; }
    }
}