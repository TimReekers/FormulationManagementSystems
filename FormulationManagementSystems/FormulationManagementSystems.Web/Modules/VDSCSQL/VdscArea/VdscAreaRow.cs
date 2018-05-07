
namespace FormulationManagementSystems.VDSCSQL.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("VDSCSQL"), Module("VDSCSQL"), TableName("[dbo].[VdscArea]")]
    [DisplayName("Vdsc Area"), InstanceName("Vdsc Area")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class VdscAreaRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Vdsc Area Group"), ForeignKey("[dbo].[VdscAreaGroup]", "Id"), LeftJoin("jVdscAreaGroup")]
        public Int32? VdscAreaGroupId
        {
            get { return Fields.VdscAreaGroupId[this]; }
            set { Fields.VdscAreaGroupId[this] = value; }
        }

        [DisplayName("Area"), Size(255), NotNull, QuickSearch]
        public String Area
        {
            get { return Fields.Area[this]; }
            set { Fields.Area[this] = value; }
        }

        [DisplayName("List Order")]
        public Int32? ListOrder
        {
            get { return Fields.ListOrder[this]; }
            set { Fields.ListOrder[this] = value; }
        }

        [DisplayName("Vdsc Area Group Department Id"), Expression("jVdscAreaGroup.[DepartmentId]")]
        public Int32? VdscAreaGroupDepartmentId
        {
            get { return Fields.VdscAreaGroupDepartmentId[this]; }
            set { Fields.VdscAreaGroupDepartmentId[this] = value; }
        }

        [DisplayName("Vdsc Area Group List Order"), Expression("jVdscAreaGroup.[ListOrder]")]
        public Int32? VdscAreaGroupListOrder
        {
            get { return Fields.VdscAreaGroupListOrder[this]; }
            set { Fields.VdscAreaGroupListOrder[this] = value; }
        }

        [DisplayName("Vdsc Area Group Manager Id"), Expression("jVdscAreaGroup.[ManagerId]")]
        public Int32? VdscAreaGroupManagerId
        {
            get { return Fields.VdscAreaGroupManagerId[this]; }
            set { Fields.VdscAreaGroupManagerId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Area; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public VdscAreaRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field VdscAreaGroupId;
            public StringField Area;
            public Int32Field ListOrder;

            public Int32Field VdscAreaGroupDepartmentId;
            public Int32Field VdscAreaGroupListOrder;
            public Int32Field VdscAreaGroupManagerId;
		}
    }
}
