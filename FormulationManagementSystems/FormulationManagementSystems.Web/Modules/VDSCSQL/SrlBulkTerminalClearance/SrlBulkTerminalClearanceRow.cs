
namespace FormulationManagementSystems.VDSCSQL.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("VDSCSQL"), Module("VDSCSQL"), TableName("[dbo].[SRL_BulkTerminalClearance]")]
    [DisplayName("Srl Bulk Terminal Clearance"), InstanceName("Srl Bulk Terminal Clearance")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class SrlBulkTerminalClearanceRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Bulk Storage Tank Id"), Column("BulkStorageTankID")]
        public Int32? BulkStorageTankId
        {
            get { return Fields.BulkStorageTankId[this]; }
            set { Fields.BulkStorageTankId[this] = value; }
        }

        [DisplayName("Clearance Date")]
        public DateTime? ClearanceDate
        {
            get { return Fields.ClearanceDate[this]; }
            set { Fields.ClearanceDate[this] = value; }
        }

        [DisplayName("Clearance Name"), Size(50), QuickSearch]
        public String ClearanceName
        {
            get { return Fields.ClearanceName[this]; }
            set { Fields.ClearanceName[this] = value; }
        }

        [DisplayName("Clear Removal Text"), Size(50)]
        public String ClearRemovalText
        {
            get { return Fields.ClearRemovalText[this]; }
            set { Fields.ClearRemovalText[this] = value; }
        }

        [DisplayName("Clearance Remove Date")]
        public DateTime? ClearanceRemoveDate
        {
            get { return Fields.ClearanceRemoveDate[this]; }
            set { Fields.ClearanceRemoveDate[this] = value; }
        }

        [DisplayName("Clearance Removal Name"), Size(50)]
        public String ClearanceRemovalName
        {
            get { return Fields.ClearanceRemovalName[this]; }
            set { Fields.ClearanceRemovalName[this] = value; }
        }

        [DisplayName("Lot Number"), Size(50)]
        public String LotNumber
        {
            get { return Fields.LotNumber[this]; }
            set { Fields.LotNumber[this] = value; }
        }

        [DisplayName("Clearance Duration")]
        public Double? ClearanceDuration
        {
            get { return Fields.ClearanceDuration[this]; }
            set { Fields.ClearanceDuration[this] = value; }
        }

        [DisplayName("Tank Clearance")]
        public Boolean? TankClearance
        {
            get { return Fields.TankClearance[this]; }
            set { Fields.TankClearance[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ClearanceName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SrlBulkTerminalClearanceRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field BulkStorageTankId;
            public DateTimeField ClearanceDate;
            public StringField ClearanceName;
            public StringField ClearRemovalText;
            public DateTimeField ClearanceRemoveDate;
            public StringField ClearanceRemovalName;
            public StringField LotNumber;
            public DoubleField ClearanceDuration;
            public BooleanField TankClearance;
		}
    }
}
