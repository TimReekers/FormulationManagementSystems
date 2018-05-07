
namespace FormulationManagementSystems.VDSCSQL.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("VDSCSQL"), Module("VDSCSQL"), TableName("[dbo].[StepInstruction]")]
    [DisplayName("Step Instruction"), InstanceName("Step Instruction")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class StepInstructionRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Consumption"), ForeignKey("[dbo].[Consumption]", "Id"), LeftJoin("jConsumption"), TextualField("ConsumptionSrcDstPathIds")]
        public Int32? ConsumptionId
        {
            get { return Fields.ConsumptionId[this]; }
            set { Fields.ConsumptionId[this] = value; }
        }

        [DisplayName("Step Instruction Type"), ForeignKey("[dbo].[StepInstructionType]", "Id"), LeftJoin("jStepInstructionType"), TextualField("StepInstructionTypeStepInstructionName")]
        public Int32? StepInstructionTypeId
        {
            get { return Fields.StepInstructionTypeId[this]; }
            set { Fields.StepInstructionTypeId[this] = value; }
        }

        [DisplayName("Index")]
        public Int32? Index
        {
            get { return Fields.Index[this]; }
            set { Fields.Index[this] = value; }
        }

        [DisplayName("Instruct1"), QuickSearch]
        public String Instruct1
        {
            get { return Fields.Instruct1[this]; }
            set { Fields.Instruct1[this] = value; }
        }

        [DisplayName("Hint1")]
        public String Hint1
        {
            get { return Fields.Hint1[this]; }
            set { Fields.Hint1[this] = value; }
        }

        [DisplayName("Scan Value1")]
        public String ScanValue1
        {
            get { return Fields.ScanValue1[this]; }
            set { Fields.ScanValue1[this] = value; }
        }

        [DisplayName("Error Msg1")]
        public String ErrorMsg1
        {
            get { return Fields.ErrorMsg1[this]; }
            set { Fields.ErrorMsg1[this] = value; }
        }

        [DisplayName("Consumption Recipe Phase Id"), Expression("jConsumption.[RecipePhaseId]")]
        public Int32? ConsumptionRecipePhaseId
        {
            get { return Fields.ConsumptionRecipePhaseId[this]; }
            set { Fields.ConsumptionRecipePhaseId[this] = value; }
        }

        [DisplayName("Consumption Ingredient Number"), Expression("jConsumption.[IngredientNumber]")]
        public Int32? ConsumptionIngredientNumber
        {
            get { return Fields.ConsumptionIngredientNumber[this]; }
            set { Fields.ConsumptionIngredientNumber[this] = value; }
        }

        [DisplayName("Consumption Ingredient Material Id"), Expression("jConsumption.[IngredientMaterialId]")]
        public Int32? ConsumptionIngredientMaterialId
        {
            get { return Fields.ConsumptionIngredientMaterialId[this]; }
            set { Fields.ConsumptionIngredientMaterialId[this] = value; }
        }

        [DisplayName("Consumption Percentage"), Expression("jConsumption.[Percentage]")]
        public Double? ConsumptionPercentage
        {
            get { return Fields.ConsumptionPercentage[this]; }
            set { Fields.ConsumptionPercentage[this] = value; }
        }

        [DisplayName("Consumption Optional Ingredient"), Expression("jConsumption.[OptionalIngredient]")]
        public Boolean? ConsumptionOptionalIngredient
        {
            get { return Fields.ConsumptionOptionalIngredient[this]; }
            set { Fields.ConsumptionOptionalIngredient[this] = value; }
        }

        [DisplayName("Consumption Src Dst Path Ids"), Expression("jConsumption.[SrcDstPathIds]")]
        public String ConsumptionSrcDstPathIds
        {
            get { return Fields.ConsumptionSrcDstPathIds[this]; }
            set { Fields.ConsumptionSrcDstPathIds[this] = value; }
        }

        [DisplayName("Consumption Time Expectation"), Expression("jConsumption.[TimeExpectation]")]
        public Int32? ConsumptionTimeExpectation
        {
            get { return Fields.ConsumptionTimeExpectation[this]; }
            set { Fields.ConsumptionTimeExpectation[this] = value; }
        }

        [DisplayName("Consumption Op Prc High Lmt"), Expression("jConsumption.[OpPrcHighLmt]")]
        public Single? ConsumptionOpPrcHighLmt
        {
            get { return Fields.ConsumptionOpPrcHighLmt[this]; }
            set { Fields.ConsumptionOpPrcHighLmt[this] = value; }
        }

        [DisplayName("Consumption Op Prc Lw Lmt"), Expression("jConsumption.[OpPrcLwLmt]")]
        public Single? ConsumptionOpPrcLwLmt
        {
            get { return Fields.ConsumptionOpPrcLwLmt[this]; }
            set { Fields.ConsumptionOpPrcLwLmt[this] = value; }
        }

        [DisplayName("Consumption Tl Prc High Lmt"), Expression("jConsumption.[TLPrcHighLmt]")]
        public Single? ConsumptionTlPrcHighLmt
        {
            get { return Fields.ConsumptionTlPrcHighLmt[this]; }
            set { Fields.ConsumptionTlPrcHighLmt[this] = value; }
        }

        [DisplayName("Consumption Tl Prc Lw Lmt"), Expression("jConsumption.[TLPrcLwLmt]")]
        public Single? ConsumptionTlPrcLwLmt
        {
            get { return Fields.ConsumptionTlPrcLwLmt[this]; }
            set { Fields.ConsumptionTlPrcLwLmt[this] = value; }
        }

        [DisplayName("Consumption Step Description"), Expression("jConsumption.[StepDescription]")]
        public String ConsumptionStepDescription
        {
            get { return Fields.ConsumptionStepDescription[this]; }
            set { Fields.ConsumptionStepDescription[this] = value; }
        }

        [DisplayName("Consumption H Temp1"), Expression("jConsumption.[HTemp1]")]
        public Int32? ConsumptionHTemp1
        {
            get { return Fields.ConsumptionHTemp1[this]; }
            set { Fields.ConsumptionHTemp1[this] = value; }
        }

        [DisplayName("Consumption L Temp1"), Expression("jConsumption.[LTemp1]")]
        public Int32? ConsumptionLTemp1
        {
            get { return Fields.ConsumptionLTemp1[this]; }
            set { Fields.ConsumptionLTemp1[this] = value; }
        }

        [DisplayName("Consumption Am Prc High Lmt"), Expression("jConsumption.[AmPrcHighLmt]")]
        public Single? ConsumptionAmPrcHighLmt
        {
            get { return Fields.ConsumptionAmPrcHighLmt[this]; }
            set { Fields.ConsumptionAmPrcHighLmt[this] = value; }
        }

        [DisplayName("Consumption Am Prc Lw Lmt"), Expression("jConsumption.[AmPrcLwLmt]")]
        public Single? ConsumptionAmPrcLwLmt
        {
            get { return Fields.ConsumptionAmPrcLwLmt[this]; }
            set { Fields.ConsumptionAmPrcLwLmt[this] = value; }
        }

        [DisplayName("Step Instruction Type Step Instruction Name"), Expression("jStepInstructionType.[StepInstructionName]")]
        public String StepInstructionTypeStepInstructionName
        {
            get { return Fields.StepInstructionTypeStepInstructionName[this]; }
            set { Fields.StepInstructionTypeStepInstructionName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Instruct1; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public StepInstructionRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field ConsumptionId;
            public Int32Field StepInstructionTypeId;
            public Int32Field Index;
            public StringField Instruct1;
            public StringField Hint1;
            public StringField ScanValue1;
            public StringField ErrorMsg1;

            public Int32Field ConsumptionRecipePhaseId;
            public Int32Field ConsumptionIngredientNumber;
            public Int32Field ConsumptionIngredientMaterialId;
            public DoubleField ConsumptionPercentage;
            public BooleanField ConsumptionOptionalIngredient;
            public StringField ConsumptionSrcDstPathIds;
            public Int32Field ConsumptionTimeExpectation;
            public SingleField ConsumptionOpPrcHighLmt;
            public SingleField ConsumptionOpPrcLwLmt;
            public SingleField ConsumptionTlPrcHighLmt;
            public SingleField ConsumptionTlPrcLwLmt;
            public StringField ConsumptionStepDescription;
            public Int32Field ConsumptionHTemp1;
            public Int32Field ConsumptionLTemp1;
            public SingleField ConsumptionAmPrcHighLmt;
            public SingleField ConsumptionAmPrcLwLmt;

            public StringField StepInstructionTypeStepInstructionName;
		}
    }
}
