
namespace FormulationManagementSystems.VDSCSQL.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("VDSCSQL.EmployeePhoto")]
    [BasedOnRow(typeof(Entities.EmployeePhotoRow), CheckNames = true)]
    public class EmployeePhotoForm
    {
        public Int32 EmployeeId { get; set; }
        public String FileName { get; set; }
        public String ContentType { get; set; }
        public byte[] EmployeePhoto { get; set; }
    }
}