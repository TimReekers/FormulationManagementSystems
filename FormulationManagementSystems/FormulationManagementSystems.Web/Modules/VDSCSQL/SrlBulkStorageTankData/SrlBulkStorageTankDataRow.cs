
namespace FormulationManagementSystems.VDSCSQL.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("VDSCSQL"), Module("VDSCSQL"), TableName("[dbo].[SRL_BulkStorageTankData]")]
    [DisplayName("Srl Bulk Storage Tank Data"), InstanceName("Srl Bulk Storage Tank Data")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class SrlBulkStorageTankDataRow : Row, IIdRow, INameRow
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

        [DisplayName("Material Id"), Column("MaterialID")]
        public Int32? MaterialId
        {
            get { return Fields.MaterialId[this]; }
            set { Fields.MaterialId[this] = value; }
        }

        [DisplayName("Change Date")]
        public DateTime? ChangeDate
        {
            get { return Fields.ChangeDate[this]; }
            set { Fields.ChangeDate[this] = value; }
        }

        [DisplayName("Notes"), QuickSearch]
        public String Notes
        {
            get { return Fields.Notes[this]; }
            set { Fields.Notes[this] = value; }
        }

        [DisplayName("Cleanout Results"), Size(50)]
        public byte[] CleanoutResults
        {
            get { return Fields.CleanoutResults[this]; }
            set { Fields.CleanoutResults[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Notes; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SrlBulkStorageTankDataRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field BulkStorageTankId;
            public Int32Field MaterialId;
            public DateTimeField ChangeDate;
            public StringField Notes;
            public ByteArrayField CleanoutResults;
		}
    }
}
