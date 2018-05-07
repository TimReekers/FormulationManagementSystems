
namespace FormulationManagementSystems.VDSCSQL.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("VDSCSQL"), Module("VDSCSQL"), TableName("[dbo].[AdditonForm]")]
    [DisplayName("Additon Form"), InstanceName("Additon Form")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class AdditonFormRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Form Id")]
        public Int32? FormId
        {
            get { return Fields.FormId[this]; }
            set { Fields.FormId[this] = value; }
        }

        [DisplayName("Description"), Size(255), QuickSearch]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Description; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AdditonFormRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field FormId;
            public StringField Description;
		}
    }
}
