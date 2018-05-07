
namespace FormulationManagementSystems.VDSCSQL.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("VDSCSQL"), Module("VDSCSQL"), TableName("[dbo].[StepInstructionType]")]
    [DisplayName("Step Instruction Type"), InstanceName("Step Instruction Type")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class StepInstructionTypeRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Step Instruction Name"), Size(100), QuickSearch]
        public String StepInstructionName
        {
            get { return Fields.StepInstructionName[this]; }
            set { Fields.StepInstructionName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.StepInstructionName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public StepInstructionTypeRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField StepInstructionName;
		}
    }
}
