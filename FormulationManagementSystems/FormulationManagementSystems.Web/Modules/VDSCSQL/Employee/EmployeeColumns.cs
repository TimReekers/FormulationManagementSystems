
namespace FormulationManagementSystems.VDSCSQL.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("VDSCSQL.Employee")]
    [BasedOnRow(typeof(Entities.EmployeeRow), CheckNames = true)]
    public class EmployeeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public String EmployeeIdent { get; set; }
        [EditLink]

        public String VdscAreaId { get; set; }
        public String FirstName { get; set; }
        public String LastName{ get; set; }
        public Boolean TeamLeader { get; set; }
        public Boolean AreaManager { get; set; }
        public Boolean OvertimePreference { get; set; }
        public String Shift { get; set; }
        public Boolean ForkliftLicense { get; set; }
        public Boolean ShippingEmployee { get; set; }
        public Boolean EmploymentTerminated { get; set; }
        public DateTime EmpTermDate { get; set; }
        public String EmpTermReason { get; set; }
        public Int32 VdscDepartmentId { get; set; }
        public DateTime EmpStartDate { get; set; }
        public String EmpPhoneNum { get; set; }
        public String EmpPhoneNum2 { get; set; }
        public String EmpAddress { get; set; }
        public String EmpTitle { get; set; }
        public String EmpTimeCardNum { get; set; }
        public String EmpLockerNum { get; set; }
        public String UserName{ get; set; }
        public String Password { get; set; }
    }
}