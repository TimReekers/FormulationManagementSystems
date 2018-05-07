
namespace FormulationManagementSystems.VDSCSQL.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("VDSCSQL"), Module("VDSCSQL"), TableName("[dbo].[Manager]")]
    [DisplayName("Manager"), InstanceName("Manager")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class ManagerRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Manager Name"), Size(40), QuickSearch]
        public String ManagerName
        {
            get { return Fields.ManagerName[this]; }
            set { Fields.ManagerName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ManagerName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ManagerRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField ManagerName;
		}
    }
}
