
namespace FormulationManagementSystems.VDSCSQL.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("VDSCSQL"), Module("VDSCSQL"), TableName("[dbo].[SRL_MSDS]")]
    [DisplayName("Srl Msds"), InstanceName("Srl Msds")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class SrlMsdsRow : Row, IIdRow
    {
        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Material Id"), Column("MaterialID")]
        public Int32? MaterialId
        {
            get { return Fields.MaterialId[this]; }
            set { Fields.MaterialId[this] = value; }
        }

        [DisplayName("Storage File")]
        public byte[] StorageFile
        {
            get { return Fields.StorageFile[this]; }
            set { Fields.StorageFile[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SrlMsdsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field MaterialId;
            public ByteArrayField StorageFile;
		}
    }
}
