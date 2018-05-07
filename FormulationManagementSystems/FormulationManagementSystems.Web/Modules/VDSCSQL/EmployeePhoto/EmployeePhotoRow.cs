
namespace FormulationManagementSystems.VDSCSQL.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("VDSCSQL"), Module("VDSCSQL"), TableName("[dbo].[EmployeePhoto]")]
    [DisplayName("Employee Photo"), InstanceName("Employee Photo")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class EmployeePhotoRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Employee Id"), Column("EmployeeID")]
        public Int32? EmployeeId
        {
            get { return Fields.EmployeeId[this]; }
            set { Fields.EmployeeId[this] = value; }
        }

        [DisplayName("File Name"), Size(50), QuickSearch]
        public String FileName
        {
            get { return Fields.FileName[this]; }
            set { Fields.FileName[this] = value; }
        }

        [DisplayName("Content Type"), Size(50)]
        public String ContentType
        {
            get { return Fields.ContentType[this]; }
            set { Fields.ContentType[this] = value; }
        }

        [DisplayName("Employee Photo")]
        public byte[] EmployeePhoto
        {
            get { return Fields.EmployeePhoto[this]; }
            set { Fields.EmployeePhoto[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.FileName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public EmployeePhotoRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field EmployeeId;
            public StringField FileName;
            public StringField ContentType;
            public ByteArrayField EmployeePhoto;
		}
    }
}
