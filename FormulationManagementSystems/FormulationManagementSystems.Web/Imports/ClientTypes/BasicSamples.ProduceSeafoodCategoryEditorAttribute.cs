using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace FormulationManagementSystems.BasicSamples
{
    public partial class ProduceSeafoodCategoryEditorAttribute : LookupEditorBaseAttribute
    {
        public const string Key = "FormulationManagementSystems.BasicSamples.ProduceSeafoodCategoryEditor";

        public ProduceSeafoodCategoryEditorAttribute()
            : base(Key)
        {
        }
    }
}

