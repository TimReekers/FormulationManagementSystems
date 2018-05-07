
namespace FormulationManagementSystems.VDSCSQL.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("VDSCSQL"), Module("VDSCSQL"), TableName("[dbo].[ValveList]")]
    [DisplayName("Valve List"), InstanceName("Valve List")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class ValveListRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Valve Name"), Size(255), NotNull, QuickSearch]
        public String ValveName
        {
            get { return Fields.ValveName[this]; }
            set { Fields.ValveName[this] = value; }
        }

        [DisplayName("Valve Barcode"), Size(255), NotNull]
        public String ValveBarcode
        {
            get { return Fields.ValveBarcode[this]; }
            set { Fields.ValveBarcode[this] = value; }
        }

        [DisplayName("Valve Description"), Size(255)]
        public String ValveDescription
        {
            get { return Fields.ValveDescription[this]; }
            set { Fields.ValveDescription[this] = value; }
        }

        [DisplayName("Bldg")]
        public Int32? Bldg
        {
            get { return Fields.Bldg[this]; }
            set { Fields.Bldg[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ValveName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ValveListRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField ValveName;
            public StringField ValveBarcode;
            public StringField ValveDescription;
            public Int32Field Bldg;
		}
    }
}
