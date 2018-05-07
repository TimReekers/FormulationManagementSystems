
namespace FormulationManagementSystems.VDSCSQL.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("VDSCSQL"), Module("VDSCSQL"), TableName("[dbo].[BulkScan]")]
    [DisplayName("Bulk Scan"), InstanceName("Bulk Scan")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class BulkScanRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Bulk Batch Data Id")]
        public Int32? BulkBatchDataId
        {
            get { return Fields.BulkBatchDataId[this]; }
            set { Fields.BulkBatchDataId[this] = value; }
        }

        [DisplayName("Barcode"), Size(255), QuickSearch]
        public String Barcode
        {
            get { return Fields.Barcode[this]; }
            set { Fields.Barcode[this] = value; }
        }

        [DisplayName("Scan Date")]
        public DateTime? ScanDate
        {
            get { return Fields.ScanDate[this]; }
            set { Fields.ScanDate[this] = value; }
        }

        [DisplayName("Material Qty")]
        public Double? MaterialQty
        {
            get { return Fields.MaterialQty[this]; }
            set { Fields.MaterialQty[this] = value; }
        }

        [DisplayName("Operator"), Size(255)]
        public String Operator
        {
            get { return Fields.Operator[this]; }
            set { Fields.Operator[this] = value; }
        }

        [DisplayName("Lot Number"), Size(25)]
        public String LotNumber
        {
            get { return Fields.LotNumber[this]; }
            set { Fields.LotNumber[this] = value; }
        }

        [DisplayName("Qty Date")]
        public DateTime? QtyDate
        {
            get { return Fields.QtyDate[this]; }
            set { Fields.QtyDate[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Barcode; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public BulkScanRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field BulkBatchDataId;
            public StringField Barcode;
            public DateTimeField ScanDate;
            public DoubleField MaterialQty;
            public StringField Operator;
            public StringField LotNumber;
            public DateTimeField QtyDate;
		}
    }
}
