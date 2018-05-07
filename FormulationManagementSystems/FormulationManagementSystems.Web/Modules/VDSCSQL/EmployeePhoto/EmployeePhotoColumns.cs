
namespace FormulationManagementSystems.VDSCSQL.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("VDSCSQL.EmployeePhoto")]
    [BasedOnRow(typeof(Entities.EmployeePhotoRow), CheckNames = true)]
    public class EmployeePhotoColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public Int32 EmployeeId { get; set; }
        [EditLink]
        public String FileName { get; set; }
        public String ContentType { get; set; }
        public byte[] EmployeePhoto { get; set; }
    }
}