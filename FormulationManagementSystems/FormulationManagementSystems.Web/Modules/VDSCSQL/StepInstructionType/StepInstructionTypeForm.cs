
namespace FormulationManagementSystems.VDSCSQL.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("VDSCSQL.StepInstructionType")]
    [BasedOnRow(typeof(Entities.StepInstructionTypeRow), CheckNames = true)]
    public class StepInstructionTypeForm
    {
        public String StepInstructionName { get; set; }
    }
}