
namespace FormulationManagementSystems.VDSCSQL.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("VDSCSQL"), Module("VDSCSQL"), TableName("[dbo].[Customer]")]
    [DisplayName("Customer"), InstanceName("Customer")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class CustomerRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Company"), Size(50), QuickSearch]
        public String Company
        {
            get { return Fields.Company[this]; }
            set { Fields.Company[this] = value; }
        }

        [DisplayName("Customer Ident"), Size(255)]
        public String CustomerIdent
        {
            get { return Fields.CustomerIdent[this]; }
            set { Fields.CustomerIdent[this] = value; }
        }

        [DisplayName("Customer Name"), Size(255)]
        public String CustomerName
        {
            get { return Fields.CustomerName[this]; }
            set { Fields.CustomerName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Company; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CustomerRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Company;
            public StringField CustomerIdent;
            public StringField CustomerName;
		}
    }
}
