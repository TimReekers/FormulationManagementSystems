
namespace FormulationManagementSystems.VDSCSQL.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("VDSCSQL"), Module("VDSCSQL"), TableName("[dbo].[Employee]")]
    [DisplayName("Employee"), InstanceName("Employee")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class EmployeeRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, ForeignKey("[dbo].[Employee]", "Id"), LeftJoin("j"), TextualField("EmployeeIdent")]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }


        [DisplayName(" Employee Ident"), Expression("j.[EmployeeIdent]")]
        public String EmployeeIdent
        {
            get { return Fields.EmployeeIdent[this]; }
            set { Fields.EmployeeIdent[this] = value; }
        }

        [DisplayName(" Vdsc Area Id"), Expression("j.[VdscAreaId]")]
        public Int32? VdscAreaId
        {
            get { return Fields.VdscAreaId[this]; }
            set { Fields.VdscAreaId[this] = value; }
        }

        [DisplayName(" First Name"), Expression("j.[FirstName]")]
        public String FirstName
        {
            get { return Fields.FirstName[this]; }
            set { Fields.FirstName[this] = value; }
        }

        [DisplayName(" Last Name"), Expression("j.[LastName]")]
        public String LastName
        {
            get { return Fields.LastName[this]; }
            set { Fields.LastName[this] = value; }
        }

        [DisplayName(" Team Leader"), Expression("j.[TeamLeader]")]
        public Boolean? TeamLeader
        {
            get { return Fields.TeamLeader[this]; }
            set { Fields.TeamLeader[this] = value; }
        }

        [DisplayName(" Area Manager"), Expression("j.[AreaManager]")]
        public Boolean? AreaManager
        {
            get { return Fields.AreaManager[this]; }
            set { Fields.AreaManager[this] = value; }
        }

        [DisplayName(" Overtime Preference"), Expression("j.[OvertimePreference]")]
        public Boolean? OvertimePreference
        {
            get { return Fields.OvertimePreference[this]; }
            set { Fields.OvertimePreference[this] = value; }
        }

        [DisplayName(" Shift"), Expression("j.[Shift]")]
        public String Shift
        {
            get { return Fields.Shift[this]; }
            set { Fields.Shift[this] = value; }
        }

        [DisplayName(" Forklift License"), Expression("j.[ForkliftLicense]")]
        public Boolean? ForkliftLicense
        {
            get { return Fields.ForkliftLicense[this]; }
            set { Fields.ForkliftLicense[this] = value; }
        }

        [DisplayName(" Shipping Employee"), Expression("j.[ShippingEmployee]")]
        public Boolean? ShippingEmployee
        {
            get { return Fields.ShippingEmployee[this]; }
            set { Fields.ShippingEmployee[this] = value; }
        }

        [DisplayName(" Employment Terminated"), Expression("j.[EmploymentTerminated]")]
        public Boolean? EmploymentTerminated
        {
            get { return Fields.EmploymentTerminated[this]; }
            set { Fields.EmploymentTerminated[this] = value; }
        }

        [DisplayName(" Emp Term Date"), Expression("j.[EmpTermDate]")]
        public DateTime? EmpTermDate
        {
            get { return Fields.EmpTermDate[this]; }
            set { Fields.EmpTermDate[this] = value; }
        }

        [DisplayName(" Emp Term Reason"), Expression("j.[EmpTermReason]")]
        public String EmpTermReason
        {
            get { return Fields.EmpTermReason[this]; }
            set { Fields.EmpTermReason[this] = value; }
        }

        [DisplayName(" Vdsc Department Id"), Expression("j.[VdscDepartmentID]")]
        public Int32? VdscDepartmentId
        {
            get { return Fields.VdscDepartmentId[this]; }
            set { Fields.VdscDepartmentId[this] = value; }
        }

        [DisplayName(" Emp Start Date"), Expression("j.[EmpStartDate]")]
        public DateTime? EmpStartDate
        {
            get { return Fields.EmpStartDate[this]; }
            set { Fields.EmpStartDate[this] = value; }
        }

        [DisplayName(" Emp Phone Num"), Expression("j.[EmpPhoneNum]")]
        public String EmpPhoneNum
        {
            get { return Fields.EmpPhoneNum[this]; }
            set { Fields.EmpPhoneNum[this] = value; }
        }

        [DisplayName(" Emp Phone Num2"), Expression("j.[EmpPhoneNum2]")]
        public String EmpPhoneNum2
        {
            get { return Fields.EmpPhoneNum2[this]; }
            set { Fields.EmpPhoneNum2[this] = value; }
        }

        [DisplayName(" Emp Address"), Expression("j.[EmpAddress]")]
        public String EmpAddress
        {
            get { return Fields.EmpAddress[this]; }
            set { Fields.EmpAddress[this] = value; }
        }

        [DisplayName(" Emp Title"), Expression("j.[EmpTitle]")]
        public String EmpTitle
        {
            get { return Fields.EmpTitle[this]; }
            set { Fields.EmpTitle[this] = value; }
        }

        [DisplayName(" Emp Time Card Num"), Expression("j.[EmpTimeCardNum]")]
        public String EmpTimeCardNum
        {
            get { return Fields.EmpTimeCardNum[this]; }
            set { Fields.EmpTimeCardNum[this] = value; }
        }

        [DisplayName(" Emp Locker Num"), Expression("j.[EmpLockerNum]")]
        public String EmpLockerNum
        {
            get { return Fields.EmpLockerNum[this]; }
            set { Fields.EmpLockerNum[this] = value; }
        }

        [DisplayName(" User Name"), Expression("j.[UserName]")]
        public String UserName
        {
            get { return Fields.UserName[this]; }
            set { Fields.UserName[this] = value; }
        }

        [DisplayName(" Password"), Expression("j.[Password]")]
        public String Password
        {
            get { return Fields.Password[this]; }
            set { Fields.Password[this] = value; }
        }

        [DisplayName("Vdsc Area Group Id"), Expression("jVdscArea.[VdscAreaGroupId]")]
        public Int32? VdscAreaGroupId
        {
            get { return Fields.VdscAreaGroupId[this]; }
            set { Fields.VdscAreaGroupId[this] = value; }
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
            get { return Fields.EmployeeIdent; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public EmployeeRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;

            public StringField EmployeeIdent;
            public Int32Field VdscAreaId;
            public StringField FirstName;
            public StringField LastName;
            public BooleanField TeamLeader;
            public BooleanField AreaManager;
            public BooleanField OvertimePreference;
            public StringField Shift;
            public BooleanField ForkliftLicense;
            public BooleanField ShippingEmployee;
            public BooleanField EmploymentTerminated;
            public DateTimeField EmpTermDate;
            public StringField EmpTermReason;
            public Int32Field VdscDepartmentId;
            public DateTimeField EmpStartDate;
            public StringField EmpPhoneNum;
            public StringField EmpPhoneNum2;
            public StringField EmpAddress;
            public StringField EmpTitle;
            public StringField EmpTimeCardNum;
            public StringField EmpLockerNum;
            public StringField UserName;
            public StringField Password;

            public Int32Field VdscAreaGroupId;
            
            public Int32Field VdscAreaListOrder;
		}
    }
}
