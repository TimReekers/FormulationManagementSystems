
namespace FormulationManagementSystems.VDSCSQL.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("VDSCSQL"), Module("VDSCSQL"), TableName("[dbo].[StepValueEntries]")]
    [DisplayName("Step Value Entries"), InstanceName("Step Value Entries")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class StepValueEntriesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Description"), QuickSearch]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Recipe Phase Id")]
        public Int32? RecipePhaseId
        {
            get { return Fields.RecipePhaseId[this]; }
            set { Fields.RecipePhaseId[this] = value; }
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

        public StepValueEntriesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Description;
            public Int32Field RecipePhaseId;
		}
    }
}
