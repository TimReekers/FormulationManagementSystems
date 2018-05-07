
namespace FormulationManagementSystems.VDSCSQL.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("VDSCSQL"), Module("VDSCSQL"), TableName("[dbo].[SRL_Carrier]")]
    [DisplayName("Srl Carrier"), InstanceName("Srl Carrier")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class SrlCarrierRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Carrier Name"), Size(50), QuickSearch]
        public String CarrierName
        {
            get { return Fields.CarrierName[this]; }
            set { Fields.CarrierName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CarrierName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SrlCarrierRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField CarrierName;
		}
    }
}
