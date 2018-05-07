
namespace FormulationManagementSystems.VDSCSQL.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("VDSCSQL"), Module("VDSCSQL"), TableName("[dbo].[ValueEntriesData]")]
    [DisplayName("Value Entries Data"), InstanceName("Value Entries Data")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class ValueEntriesDataRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Bulk Batch Data"), ForeignKey("[dbo].[BulkBatchData]", "Id"), LeftJoin("jBulkBatchData"), TextualField("BulkBatchDataSourceTank")]
        public Int32? BulkBatchDataId
        {
            get { return Fields.BulkBatchDataId[this]; }
            set { Fields.BulkBatchDataId[this] = value; }
        }

        [DisplayName("Step Value Entries"), ForeignKey("[dbo].[StepValueEntries]", "Id"), LeftJoin("jStepValueEntries"), TextualField("StepValueEntriesDescription")]
        public Int32? StepValueEntriesId
        {
            get { return Fields.StepValueEntriesId[this]; }
            set { Fields.StepValueEntriesId[this] = value; }
        }

        [DisplayName("User Input"), Size(500), QuickSearch]
        public String UserInput
        {
            get { return Fields.UserInput[this]; }
            set { Fields.UserInput[this] = value; }
        }

        [DisplayName("Bulk Batch Data Bulk Batch Id"), Expression("jBulkBatchData.[BulkBatchId]")]
        public Int32? BulkBatchDataBulkBatchId
        {
            get { return Fields.BulkBatchDataBulkBatchId[this]; }
            set { Fields.BulkBatchDataBulkBatchId[this] = value; }
        }

        [DisplayName("Bulk Batch Data Source Tank"), Expression("jBulkBatchData.[SourceTank]")]
        public String BulkBatchDataSourceTank
        {
            get { return Fields.BulkBatchDataSourceTank[this]; }
            set { Fields.BulkBatchDataSourceTank[this] = value; }
        }

        [DisplayName("Bulk Batch Data Destination Tank"), Expression("jBulkBatchData.[DestinationTank]")]
        public String BulkBatchDataDestinationTank
        {
            get { return Fields.BulkBatchDataDestinationTank[this]; }
            set { Fields.BulkBatchDataDestinationTank[this] = value; }
        }

        [DisplayName("Bulk Batch Data Ingredient"), Expression("jBulkBatchData.[Ingredient]")]
        public String BulkBatchDataIngredient
        {
            get { return Fields.BulkBatchDataIngredient[this]; }
            set { Fields.BulkBatchDataIngredient[this] = value; }
        }

        [DisplayName("Bulk Batch Data Ingredient Number"), Expression("jBulkBatchData.[IngredientNumber]")]
        public Int32? BulkBatchDataIngredientNumber
        {
            get { return Fields.BulkBatchDataIngredientNumber[this]; }
            set { Fields.BulkBatchDataIngredientNumber[this] = value; }
        }

        [DisplayName("Bulk Batch Data Phase"), Expression("jBulkBatchData.[Phase]")]
        public String BulkBatchDataPhase
        {
            get { return Fields.BulkBatchDataPhase[this]; }
            set { Fields.BulkBatchDataPhase[this] = value; }
        }

        [DisplayName("Bulk Batch Data Phase Number"), Expression("jBulkBatchData.[PhaseNumber]")]
        public Int32? BulkBatchDataPhaseNumber
        {
            get { return Fields.BulkBatchDataPhaseNumber[this]; }
            set { Fields.BulkBatchDataPhaseNumber[this] = value; }
        }

        [DisplayName("Bulk Batch Data Start Time"), Expression("jBulkBatchData.[StartTime]")]
        public DateTime? BulkBatchDataStartTime
        {
            get { return Fields.BulkBatchDataStartTime[this]; }
            set { Fields.BulkBatchDataStartTime[this] = value; }
        }

        [DisplayName("Bulk Batch Data End Time"), Expression("jBulkBatchData.[EndTime]")]
        public DateTime? BulkBatchDataEndTime
        {
            get { return Fields.BulkBatchDataEndTime[this]; }
            set { Fields.BulkBatchDataEndTime[this] = value; }
        }

        [DisplayName("Bulk Batch Data Operator"), Expression("jBulkBatchData.[Operator]")]
        public String BulkBatchDataOperator
        {
            get { return Fields.BulkBatchDataOperator[this]; }
            set { Fields.BulkBatchDataOperator[this] = value; }
        }

        [DisplayName("Bulk Batch Data Supervisor Override"), Expression("jBulkBatchData.[SupervisorOverride]")]
        public String BulkBatchDataSupervisorOverride
        {
            get { return Fields.BulkBatchDataSupervisorOverride[this]; }
            set { Fields.BulkBatchDataSupervisorOverride[this] = value; }
        }

        [DisplayName("Bulk Batch Data Addition Qty"), Expression("jBulkBatchData.[AdditionQty]")]
        public Double? BulkBatchDataAdditionQty
        {
            get { return Fields.BulkBatchDataAdditionQty[this]; }
            set { Fields.BulkBatchDataAdditionQty[this] = value; }
        }

        [DisplayName("Bulk Batch Data Status"), Expression("jBulkBatchData.[Status]")]
        public String BulkBatchDataStatus
        {
            get { return Fields.BulkBatchDataStatus[this]; }
            set { Fields.BulkBatchDataStatus[this] = value; }
        }

        [DisplayName("Bulk Batch Data Scale Check Operator"), Expression("jBulkBatchData.[ScaleCheckOperator]")]
        public String BulkBatchDataScaleCheckOperator
        {
            get { return Fields.BulkBatchDataScaleCheckOperator[this]; }
            set { Fields.BulkBatchDataScaleCheckOperator[this] = value; }
        }

        [DisplayName("Bulk Batch Data Scale Check Wt"), Expression("jBulkBatchData.[ScaleCheckWt]")]
        public Int32? BulkBatchDataScaleCheckWt
        {
            get { return Fields.BulkBatchDataScaleCheckWt[this]; }
            set { Fields.BulkBatchDataScaleCheckWt[this] = value; }
        }

        [DisplayName("Bulk Batch Data Scale Id"), Expression("jBulkBatchData.[ScaleId]")]
        public String BulkBatchDataScaleId
        {
            get { return Fields.BulkBatchDataScaleId[this]; }
            set { Fields.BulkBatchDataScaleId[this] = value; }
        }

        [DisplayName("Bulk Batch Data Valves Open"), Expression("jBulkBatchData.[ValvesOpen]")]
        public String BulkBatchDataValvesOpen
        {
            get { return Fields.BulkBatchDataValvesOpen[this]; }
            set { Fields.BulkBatchDataValvesOpen[this] = value; }
        }

        [DisplayName("Bulk Batch Data Valve Open Bypass"), Expression("jBulkBatchData.[ValveOpenBypass]")]
        public String BulkBatchDataValveOpenBypass
        {
            get { return Fields.BulkBatchDataValveOpenBypass[this]; }
            set { Fields.BulkBatchDataValveOpenBypass[this] = value; }
        }

        [DisplayName("Bulk Batch Data Valves Close"), Expression("jBulkBatchData.[ValvesClose]")]
        public String BulkBatchDataValvesClose
        {
            get { return Fields.BulkBatchDataValvesClose[this]; }
            set { Fields.BulkBatchDataValvesClose[this] = value; }
        }

        [DisplayName("Bulk Batch Data Valve Close Bypass"), Expression("jBulkBatchData.[ValveCloseBypass]")]
        public String BulkBatchDataValveCloseBypass
        {
            get { return Fields.BulkBatchDataValveCloseBypass[this]; }
            set { Fields.BulkBatchDataValveCloseBypass[this] = value; }
        }

        [DisplayName("Bulk Batch Data Recipe Phase Id"), Expression("jBulkBatchData.[RecipePhaseId]")]
        public Int32? BulkBatchDataRecipePhaseId
        {
            get { return Fields.BulkBatchDataRecipePhaseId[this]; }
            set { Fields.BulkBatchDataRecipePhaseId[this] = value; }
        }

        [DisplayName("Bulk Batch Data Current Step Index"), Expression("jBulkBatchData.[CurrentStepIndex]")]
        public Int32? BulkBatchDataCurrentStepIndex
        {
            get { return Fields.BulkBatchDataCurrentStepIndex[this]; }
            set { Fields.BulkBatchDataCurrentStepIndex[this] = value; }
        }

        [DisplayName("Bulk Batch Data Operator Id"), Expression("jBulkBatchData.[OperatorId]")]
        public Int32? BulkBatchDataOperatorId
        {
            get { return Fields.BulkBatchDataOperatorId[this]; }
            set { Fields.BulkBatchDataOperatorId[this] = value; }
        }

        [DisplayName("Bulk Batch Data Supervisor Override Id"), Expression("jBulkBatchData.[SupervisorOverrideId]")]
        public Int32? BulkBatchDataSupervisorOverrideId
        {
            get { return Fields.BulkBatchDataSupervisorOverrideId[this]; }
            set { Fields.BulkBatchDataSupervisorOverrideId[this] = value; }
        }

        [DisplayName("Bulk Batch Data Src Start Wt"), Expression("jBulkBatchData.[SrcStartWt]")]
        public Double? BulkBatchDataSrcStartWt
        {
            get { return Fields.BulkBatchDataSrcStartWt[this]; }
            set { Fields.BulkBatchDataSrcStartWt[this] = value; }
        }

        [DisplayName("Bulk Batch Data Dst Start Wt"), Expression("jBulkBatchData.[DstStartWt]")]
        public Double? BulkBatchDataDstStartWt
        {
            get { return Fields.BulkBatchDataDstStartWt[this]; }
            set { Fields.BulkBatchDataDstStartWt[this] = value; }
        }

        [DisplayName("Bulk Batch Data Src End Wt"), Expression("jBulkBatchData.[SrcEndWt]")]
        public Double? BulkBatchDataSrcEndWt
        {
            get { return Fields.BulkBatchDataSrcEndWt[this]; }
            set { Fields.BulkBatchDataSrcEndWt[this] = value; }
        }

        [DisplayName("Bulk Batch Data Dst End Wt"), Expression("jBulkBatchData.[DstEndWt]")]
        public Double? BulkBatchDataDstEndWt
        {
            get { return Fields.BulkBatchDataDstEndWt[this]; }
            set { Fields.BulkBatchDataDstEndWt[this] = value; }
        }

        [DisplayName("Bulk Batch Data Phase Tank Remembered"), Expression("jBulkBatchData.[PhaseTankRemembered]")]
        public String BulkBatchDataPhaseTankRemembered
        {
            get { return Fields.BulkBatchDataPhaseTankRemembered[this]; }
            set { Fields.BulkBatchDataPhaseTankRemembered[this] = value; }
        }

        [DisplayName("Step Value Entries Description"), Expression("jStepValueEntries.[Description]")]
        public String StepValueEntriesDescription
        {
            get { return Fields.StepValueEntriesDescription[this]; }
            set { Fields.StepValueEntriesDescription[this] = value; }
        }

        [DisplayName("Step Value Entries Recipe Phase Id"), Expression("jStepValueEntries.[RecipePhaseId]")]
        public Int32? StepValueEntriesRecipePhaseId
        {
            get { return Fields.StepValueEntriesRecipePhaseId[this]; }
            set { Fields.StepValueEntriesRecipePhaseId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.UserInput; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ValueEntriesDataRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field BulkBatchDataId;
            public Int32Field StepValueEntriesId;
            public StringField UserInput;

            public Int32Field BulkBatchDataBulkBatchId;
            public StringField BulkBatchDataSourceTank;
            public StringField BulkBatchDataDestinationTank;
            public StringField BulkBatchDataIngredient;
            public Int32Field BulkBatchDataIngredientNumber;
            public StringField BulkBatchDataPhase;
            public Int32Field BulkBatchDataPhaseNumber;
            public DateTimeField BulkBatchDataStartTime;
            public DateTimeField BulkBatchDataEndTime;
            public StringField BulkBatchDataOperator;
            public StringField BulkBatchDataSupervisorOverride;
            public DoubleField BulkBatchDataAdditionQty;
            public StringField BulkBatchDataStatus;
            public StringField BulkBatchDataScaleCheckOperator;
            public Int32Field BulkBatchDataScaleCheckWt;
            public StringField BulkBatchDataScaleId;
            public StringField BulkBatchDataValvesOpen;
            public StringField BulkBatchDataValveOpenBypass;
            public StringField BulkBatchDataValvesClose;
            public StringField BulkBatchDataValveCloseBypass;
            public Int32Field BulkBatchDataRecipePhaseId;
            public Int32Field BulkBatchDataCurrentStepIndex;
            public Int32Field BulkBatchDataOperatorId;
            public Int32Field BulkBatchDataSupervisorOverrideId;
            public DoubleField BulkBatchDataSrcStartWt;
            public DoubleField BulkBatchDataDstStartWt;
            public DoubleField BulkBatchDataSrcEndWt;
            public DoubleField BulkBatchDataDstEndWt;
            public StringField BulkBatchDataPhaseTankRemembered;

            public StringField StepValueEntriesDescription;
            public Int32Field StepValueEntriesRecipePhaseId;
		}
    }
}
