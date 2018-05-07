using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace FormulationManagementSystems.Administration
{
    public partial class PermissionCheckEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "FormulationManagementSystems.Administration.PermissionCheckEditor";

        public PermissionCheckEditorAttribute()
            : base(Key)
        {
        }

        public Boolean ShowRevoke
        {
            get { return GetOption<Boolean>("showRevoke"); }
            set { SetOption("showRevoke", value); }
        }
    }
}

