
namespace FormulationManagementSystems.VDSCSQL.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("VDSCSQL"), Module("VDSCSQL"), TableName("[dbo].[RecipePhase]")]
    [DisplayName("Recipe Phase"), InstanceName("Recipe Phase")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class RecipePhaseRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Recipe"), ForeignKey("[dbo].[Recipe]", "Id"), LeftJoin("jRecipe"), TextualField("RecipeDescription")]
        public Int32? RecipeId
        {
            get { return Fields.RecipeId[this]; }
            set { Fields.RecipeId[this] = value; }
        }

        [DisplayName("Phase Name"), Size(50), QuickSearch]
        public String PhaseName
        {
            get { return Fields.PhaseName[this]; }
            set { Fields.PhaseName[this] = value; }
        }

        [DisplayName("Phase Number")]
        public Int32? PhaseNumber
        {
            get { return Fields.PhaseNumber[this]; }
            set { Fields.PhaseNumber[this] = value; }
        }

        [DisplayName("Phase Optional")]
        public Boolean? PhaseOptional
        {
            get { return Fields.PhaseOptional[this]; }
            set { Fields.PhaseOptional[this] = value; }
        }

        [DisplayName("Procedure"), Size(8000)]
        public String Procedure
        {
            get { return Fields.Procedure[this]; }
            set { Fields.Procedure[this] = value; }
        }

        [DisplayName("Packaging Instructions"), Size(8000)]
        public String PackagingInstructions
        {
            get { return Fields.PackagingInstructions[this]; }
            set { Fields.PackagingInstructions[this] = value; }
        }

        [DisplayName("Recipe Material Id"), Expression("jRecipe.[MaterialId]")]
        public Int32? RecipeMaterialId
        {
            get { return Fields.RecipeMaterialId[this]; }
            set { Fields.RecipeMaterialId[this] = value; }
        }

        [DisplayName("Recipe Description"), Expression("jRecipe.[Description]")]
        public String RecipeDescription
        {
            get { return Fields.RecipeDescription[this]; }
            set { Fields.RecipeDescription[this] = value; }
        }

        [DisplayName("Recipe Description Notes"), Expression("jRecipe.[DescriptionNotes]")]
        public String RecipeDescriptionNotes
        {
            get { return Fields.RecipeDescriptionNotes[this]; }
            set { Fields.RecipeDescriptionNotes[this] = value; }
        }

        [DisplayName("Recipe Batch Qty"), Expression("jRecipe.[BatchQty]")]
        public Double? RecipeBatchQty
        {
            get { return Fields.RecipeBatchQty[this]; }
            set { Fields.RecipeBatchQty[this] = value; }
        }

        [DisplayName("Recipe Weight Range High"), Expression("jRecipe.[WeightRangeHigh]")]
        public Double? RecipeWeightRangeHigh
        {
            get { return Fields.RecipeWeightRangeHigh[this]; }
            set { Fields.RecipeWeightRangeHigh[this] = value; }
        }

        [DisplayName("Recipe Weight Range Low"), Expression("jRecipe.[WeightRangeLow]")]
        public Double? RecipeWeightRangeLow
        {
            get { return Fields.RecipeWeightRangeLow[this]; }
            set { Fields.RecipeWeightRangeLow[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.PhaseName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public RecipePhaseRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field RecipeId;
            public StringField PhaseName;
            public Int32Field PhaseNumber;
            public BooleanField PhaseOptional;
            public StringField Procedure;
            public StringField PackagingInstructions;

            public Int32Field RecipeMaterialId;
            public StringField RecipeDescription;
            public StringField RecipeDescriptionNotes;
            public DoubleField RecipeBatchQty;
            public DoubleField RecipeWeightRangeHigh;
            public DoubleField RecipeWeightRangeLow;
		}
    }
}
