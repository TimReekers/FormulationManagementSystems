
namespace FormulationManagementSystems.VDSCSQL.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("VDSCSQL"), Module("VDSCSQL"), TableName("[dbo].[VdscDepartment]")]
    [DisplayName("Vdsc Department"), InstanceName("Vdsc Department")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class VdscDepartmentRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Department Str"), Size(50), QuickSearch]
        public String DepartmentStr
        {
            get { return Fields.DepartmentStr[this]; }
            set { Fields.DepartmentStr[this] = value; }
        }

        [DisplayName("Department Cd"), Size(50)]
        public String DepartmentCd
        {
            get { return Fields.DepartmentCd[this]; }
            set { Fields.DepartmentCd[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.DepartmentStr; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public VdscDepartmentRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField DepartmentStr;
            public StringField DepartmentCd;
		}
    }
}
