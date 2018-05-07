
namespace FormulationManagementSystems.VDSCSQL.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("VDSCSQL"), Module("VDSCSQL"), TableName("[dbo].[EmployeeOvertime]")]
    [DisplayName("Employee Overtime"), InstanceName("Employee Overtime")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class EmployeeOvertimeRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Employee"), ForeignKey("[dbo].[Employee]", "Id"), LeftJoin("jEmployee"), TextualField("EmployeeIdent")]
        public Int32? EmployeeId
        {
            get { return Fields.EmployeeId[this]; }
            set { Fields.EmployeeId[this] = value; }
        }

        [DisplayName("Date Worked")]
        public DateTime? DateWorked
        {
            get { return Fields.DateWorked[this]; }
            set { Fields.DateWorked[this] = value; }
        }

        [DisplayName("Vdsc Area"), ForeignKey("[dbo].[VdscArea]", "Id"), LeftJoin("jVdscArea"), TextualField("Area")]
        public Int32? VdscAreaId
        {
            get { return Fields.VdscAreaId[this]; }
            set { Fields.VdscAreaId[this] = value; }
        }

        [DisplayName("Product"), Size(255), QuickSearch]
        public String Product
        {
            get { return Fields.Product[this]; }
            set { Fields.Product[this] = value; }
        }

        [DisplayName("Days Of Overtime Worked")]
        public Int32? DaysOfOvertimeWorked
        {
            get { return Fields.DaysOfOvertimeWorked[this]; }
            set { Fields.DaysOfOvertimeWorked[this] = value; }
        }

        [DisplayName("Employee Ident"), Expression("jEmployee.[EmployeeIdent]")]
        public String EmployeeIdent
        {
            get { return Fields.EmployeeIdent[this]; }
            set { Fields.EmployeeIdent[this] = value; }
        }

        [DisplayName("Employee Vdsc Area Id"), Expression("jEmployee.[VdscAreaId]")]
        public Int32? EmployeeVdscAreaId
        {
            get { return Fields.VdscAreaId[this]; }
            set { Fields.VdscAreaId[this] = value; }
        }

        [DisplayName("Employee First Name"), Expression("jEmployee.[FirstName]")]
        public String EmployeeFirstName
        {
            get { return Fields.EmployeeFirstName[this]; }
            set { Fields.EmployeeFirstName[this] = value; }
        }

        [DisplayName("Employee Last Name"), Expression("jEmployee.[LastName]")]
        public String EmployeeLastName
        {
            get { return Fields.EmployeeLastName[this]; }
            set { Fields.EmployeeLastName[this] = value; }
        }

        [DisplayName("Employee Team Leader"), Expression("jEmployee.[TeamLeader]")]
        public Boolean? EmployeeTeamLeader
        {
            get { return Fields.EmployeeTeamLeader[this]; }
            set { Fields.EmployeeTeamLeader[this] = value; }
        }

        [DisplayName("Employee Area Manager"), Expression("jEmployee.[AreaManager]")]
        public Boolean? EmployeeAreaManager
        {
            get { return Fields.EmployeeAreaManager[this]; }
            set { Fields.EmployeeAreaManager[this] = value; }
        }

        [DisplayName("Employee Overtime Preference"), Expression("jEmployee.[OvertimePreference]")]
        public Boolean? EmployeeOvertimePreference
        {
            get { return Fields.EmployeeOvertimePreference[this]; }
            set { Fields.EmployeeOvertimePreference[this] = value; }
        }

        [DisplayName("Employee Shift"), Expression("jEmployee.[Shift]")]
        public String EmployeeShift
        {
            get { return Fields.EmployeeShift[this]; }
            set { Fields.EmployeeShift[this] = value; }
        }

        [DisplayName("Employee Forklift License"), Expression("jEmployee.[ForkliftLicense]")]
        public Boolean? EmployeeForkliftLicense
        {
            get { return Fields.EmployeeForkliftLicense[this]; }
            set { Fields.EmployeeForkliftLicense[this] = value; }
        }

        [DisplayName("Employee Shipping Employee"), Expression("jEmployee.[ShippingEmployee]")]
        public Boolean? EmployeeShippingEmployee
        {
            get { return Fields.EmployeeShippingEmployee[this]; }
            set { Fields.EmployeeShippingEmployee[this] = value; }
        }

        [DisplayName("Employee Employment Terminated"), Expression("jEmployee.[EmploymentTerminated]")]
        public Boolean? EmployeeEmploymentTerminated
        {
            get { return Fields.EmployeeEmploymentTerminated[this]; }
            set { Fields.EmployeeEmploymentTerminated[this] = value; }
        }

        [DisplayName("Employee Emp Term Date"), Expression("jEmployee.[EmpTermDate]")]
        public DateTime? EmployeeEmpTermDate
        {
            get { return Fields.EmployeeEmpTermDate[this]; }
            set { Fields.EmployeeEmpTermDate[this] = value; }
        }

        [DisplayName("Employee Emp Term Reason"), Expression("jEmployee.[EmpTermReason]")]
        public String EmployeeEmpTermReason
        {
            get { return Fields.EmployeeEmpTermReason[this]; }
            set { Fields.EmployeeEmpTermReason[this] = value; }
        }

        [DisplayName("Employee Vdsc Department Id"), Expression("jEmployee.[VdscDepartmentID]")]
        public Int32? EmployeeVdscDepartmentId
        {
            get { return Fields.EmployeeVdscDepartmentId[this]; }
            set { Fields.EmployeeVdscDepartmentId[this] = value; }
        }

        [DisplayName("Employee Emp Start Date"), Expression("jEmployee.[EmpStartDate]")]
        public DateTime? EmployeeEmpStartDate
        {
            get { return Fields.EmployeeEmpStartDate[this]; }
            set { Fields.EmployeeEmpStartDate[this] = value; }
        }

        [DisplayName("Employee Emp Phone Num"), Expression("jEmployee.[EmpPhoneNum]")]
        public String EmployeeEmpPhoneNum
        {
            get { return Fields.EmployeeEmpPhoneNum[this]; }
            set { Fields.EmployeeEmpPhoneNum[this] = value; }
        }

        [DisplayName("Employee Emp Phone Num2"), Expression("jEmployee.[EmpPhoneNum2]")]
        public String EmployeeEmpPhoneNum2
        {
            get { return Fields.EmployeeEmpPhoneNum2[this]; }
            set { Fields.EmployeeEmpPhoneNum2[this] = value; }
        }

        [DisplayName("Employee Emp Address"), Expression("jEmployee.[EmpAddress]")]
        public String EmployeeEmpAddress
        {
            get { return Fields.EmployeeEmpAddress[this]; }
            set { Fields.EmployeeEmpAddress[this] = value; }
        }

        [DisplayName("Employee Emp Title"), Expression("jEmployee.[EmpTitle]")]
        public String EmployeeEmpTitle
        {
            get { return Fields.EmployeeEmpTitle[this]; }
            set { Fields.EmployeeEmpTitle[this] = value; }
        }

        [DisplayName("Employee Emp Time Card Num"), Expression("jEmployee.[EmpTimeCardNum]")]
        public String EmployeeEmpTimeCardNum
        {
            get { return Fields.EmployeeEmpTimeCardNum[this]; }
            set { Fields.EmployeeEmpTimeCardNum[this] = value; }
        }

        [DisplayName("Employee Emp Locker Num"), Expression("jEmployee.[EmpLockerNum]")]
        public String EmployeeEmpLockerNum
        {
            get { return Fields.EmployeeEmpLockerNum[this]; }
            set { Fields.EmployeeEmpLockerNum[this] = value; }
        }

        [DisplayName("Employee User Name"), Expression("jEmployee.[UserName]")]
        public String EmployeeUserName
        {
            get { return Fields.EmployeeUserName[this]; }
            set { Fields.EmployeeUserName[this] = value; }
        }

        [DisplayName("Employee Password"), Expression("jEmployee.[Password]")]
        public String EmployeePassword
        {
            get { return Fields.EmployeePassword[this]; }
            set { Fields.EmployeePassword[this] = value; }
        }

        [DisplayName("Vdsc Area Group Id"), Expression("jVdscArea.[VdscAreaGroupId]")]
        public Int32? VdscAreaGroupId
        {
            get { return Fields.VdscAreaGroupId[this]; }
            set { Fields.VdscAreaGroupId[this] = value; }
        }

        [DisplayName("Vdsc Area"), Expression("jVdscArea.[Area]")]
        public String Area
        {
            get { return Fields.Area[this]; }
            set { Fields.Area[this] = value; }
        }

        [DisplayName("Vdsc Area List Order"), Expression("jVdscArea.[ListOrder]")]
        public Int32? VdscAreaListOrder
        {
            get { return Fields.VdscAreaListOrder[this]; }
            set { Fields.VdscAreaListOrder[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Product; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public EmployeeOvertimeRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field EmployeeId;
            public DateTimeField DateWorked;
            public Int32Field VdscAreaId;
            public StringField Product;
            public Int32Field DaysOfOvertimeWorked;

            public StringField EmployeeIdent;
            public Int32Field EmployeeVdscAreaId;
            public StringField EmployeeFirstName;
            public StringField EmployeeLastName;
            public BooleanField EmployeeTeamLeader;
            public BooleanField EmployeeAreaManager;
            public BooleanField EmployeeOvertimePreference;
            public StringField EmployeeShift;
            public BooleanField EmployeeForkliftLicense;
            public BooleanField EmployeeShippingEmployee;
            public BooleanField EmployeeEmploymentTerminated;
            public DateTimeField EmployeeEmpTermDate;
            public StringField EmployeeEmpTermReason;
            public Int32Field EmployeeVdscDepartmentId;
            public DateTimeField EmployeeEmpStartDate;
            public StringField EmployeeEmpPhoneNum;
            public StringField EmployeeEmpPhoneNum2;
            public StringField EmployeeEmpAddress;
            public StringField EmployeeEmpTitle;
            public StringField EmployeeEmpTimeCardNum;
            public StringField EmployeeEmpLockerNum;
            public StringField EmployeeUserName;
            public StringField EmployeePassword;

            public Int32Field VdscAreaGroupId;
            public StringField Area;
            public Int32Field VdscAreaListOrder;
		}
    }
}
