
namespace FormulationManagementSystems.VDSCSQL.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("VDSCSQL"), Module("VDSCSQL"), TableName("[dbo].[VdscAreaGroup]")]
    [DisplayName("Vdsc Area Group"), InstanceName("Vdsc Area Group")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:Admin")]
    public sealed class VdscAreaGroupRow : Row, IIdRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Department Id")]
        public Int32? DepartmentId
        {
            get { return Fields.DepartmentId[this]; }
            set { Fields.DepartmentId[this] = value; }
        }

        [DisplayName("List Order")]
        public Int32? ListOrder
        {
            get { return Fields.ListOrder[this]; }
            set { Fields.ListOrder[this] = value; }
        }

        [DisplayName("Manager"), ForeignKey("[dbo].[Manager]", "Id"), LeftJoin("jManager"), TextualField("ManagerName")]
        public Int32? ManagerId
        {
            get { return Fields.ManagerId[this]; }
            set { Fields.ManagerId[this] = value; }
        }

        [DisplayName("Manager Name"), Expression("jManager.[ManagerName]")]
        public String ManagerName
        {
            get { return Fields.ManagerName[this]; }
            set { Fields.ManagerName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public VdscAreaGroupRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field DepartmentId;
            public Int32Field ListOrder;
            public Int32Field ManagerId;

            public StringField ManagerName;
		}
    }
}
