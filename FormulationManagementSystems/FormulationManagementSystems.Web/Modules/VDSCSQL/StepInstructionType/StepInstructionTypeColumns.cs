
namespace FormulationManagementSystems.VDSCSQL.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("VDSCSQL.StepInstructionType")]
    [BasedOnRow(typeof(Entities.StepInstructionTypeRow), CheckNames = true)]
    public class StepInstructionTypeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String StepInstructionName { get; set; }
    }
}