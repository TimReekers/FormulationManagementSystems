
namespace FormulationManagementSystems.VDSCSQL.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("VDSCSQL.StepInstruction")]
    [BasedOnRow(typeof(Entities.StepInstructionRow), CheckNames = true)]
    public class StepInstructionColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String ConsumptionSrcDstPathIds { get; set; }
        public String StepInstructionTypeStepInstructionName { get; set; }
        public Int32 Index { get; set; }
        [EditLink]
        public String Instruct1 { get; set; }
        public String Hint1 { get; set; }
        public String ScanValue1 { get; set; }
        public String ErrorMsg1 { get; set; }
    }
}