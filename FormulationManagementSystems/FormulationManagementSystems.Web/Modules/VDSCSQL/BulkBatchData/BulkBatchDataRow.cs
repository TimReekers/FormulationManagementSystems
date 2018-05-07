
namespace FormulationManagementSystems.VDSCSQL.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("VDSCSQL"), Module("VDSCSQL"), TableName("[dbo].[BulkBatchData]")]
    [DisplayName("Bulk Batch Data"), InstanceName("Bulk Batch Data")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class BulkBatchDataRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Bulk Batch Id")]
        public Int32? BulkBatchId
        {
            get { return Fields.BulkBatchId[this]; }
            set { Fields.BulkBatchId[this] = value; }
        }

        [DisplayName("Source Tank"), Size(25), QuickSearch]
        public String SourceTank
        {
            get { return Fields.SourceTank[this]; }
            set { Fields.SourceTank[this] = value; }
        }

        [DisplayName("Destination Tank"), Size(25)]
        public String DestinationTank
        {
            get { return Fields.DestinationTank[this]; }
            set { Fields.DestinationTank[this] = value; }
        }

        [DisplayName("Ingredient"), Size(255)]
        public String Ingredient
        {
            get { return Fields.Ingredient[this]; }
            set { Fields.Ingredient[this] = value; }
        }

        [DisplayName("Ingredient Number")]
        public Int32? IngredientNumber
        {
            get { return Fields.IngredientNumber[this]; }
            set { Fields.IngredientNumber[this] = value; }
        }

        [DisplayName("Phase"), Size(255)]
        public String Phase
        {
            get { return Fields.Phase[this]; }
            set { Fields.Phase[this] = value; }
        }

        [DisplayName("Phase Number")]
        public Int32? PhaseNumber
        {
            get { return Fields.PhaseNumber[this]; }
            set { Fields.PhaseNumber[this] = value; }
        }

        [DisplayName("Start Time")]
        public DateTime? StartTime
        {
            get { return Fields.StartTime[this]; }
            set { Fields.StartTime[this] = value; }
        }

        [DisplayName("End Time")]
        public DateTime? EndTime
        {
            get { return Fields.EndTime[this]; }
            set { Fields.EndTime[this] = value; }
        }

        [DisplayName("Operator"), Size(255)]
        public String Operator
        {
            get { return Fields.Operator[this]; }
            set { Fields.Operator[this] = value; }
        }

        [DisplayName("Supervisor Override"), Size(255)]
        public String SupervisorOverride
        {
            get { return Fields.SupervisorOverride[this]; }
            set { Fields.SupervisorOverride[this] = value; }
        }

        [DisplayName("Addition Qty")]
        public Double? AdditionQty
        {
            get { return Fields.AdditionQty[this]; }
            set { Fields.AdditionQty[this] = value; }
        }

        [DisplayName("Status"), Size(255)]
        public String Status
        {
            get { return Fields.Status[this]; }
            set { Fields.Status[this] = value; }
        }

        [DisplayName("Scale Check Operator"), Size(255)]
        public String ScaleCheckOperator
        {
            get { return Fields.ScaleCheckOperator[this]; }
            set { Fields.ScaleCheckOperator[this] = value; }
        }

        [DisplayName("Scale Check Wt")]
        public Int32? ScaleCheckWt
        {
            get { return Fields.ScaleCheckWt[this]; }
            set { Fields.ScaleCheckWt[this] = value; }
        }

        [DisplayName("Scale Id"), Size(25)]
        public String ScaleId
        {
            get { return Fields.ScaleId[this]; }
            set { Fields.ScaleId[this] = value; }
        }

        [DisplayName("Valves Open"), Size(255)]
        public String ValvesOpen
        {
            get { return Fields.ValvesOpen[this]; }
            set { Fields.ValvesOpen[this] = value; }
        }

        [DisplayName("Valve Open Bypass"), Size(255)]
        public String ValveOpenBypass
        {
            get { return Fields.ValveOpenBypass[this]; }
            set { Fields.ValveOpenBypass[this] = value; }
        }

        [DisplayName("Valves Close"), Size(255)]
        public String ValvesClose
        {
            get { return Fields.ValvesClose[this]; }
            set { Fields.ValvesClose[this] = value; }
        }

        [DisplayName("Valve Close Bypass"), Size(255)]
        public String ValveCloseBypass
        {
            get { return Fields.ValveCloseBypass[this]; }
            set { Fields.ValveCloseBypass[this] = value; }
        }

        [DisplayName("Recipe Phase Id")]
        public Int32? RecipePhaseId
        {
            get { return Fields.RecipePhaseId[this]; }
            set { Fields.RecipePhaseId[this] = value; }
        }

        [DisplayName("Current Step Index")]
        public Int32? CurrentStepIndex
        {
            get { return Fields.CurrentStepIndex[this]; }
            set { Fields.CurrentStepIndex[this] = value; }
        }

        [DisplayName("Operator Id")]
        public Int32? OperatorId
        {
            get { return Fields.OperatorId[this]; }
            set { Fields.OperatorId[this] = value; }
        }

        [DisplayName("Supervisor Override Id")]
        public Int32? SupervisorOverrideId
        {
            get { return Fields.SupervisorOverrideId[this]; }
            set { Fields.SupervisorOverrideId[this] = value; }
        }

        [DisplayName("Src Start Wt")]
        public Double? SrcStartWt
        {
            get { return Fields.SrcStartWt[this]; }
            set { Fields.SrcStartWt[this] = value; }
        }

        [DisplayName("Dst Start Wt")]
        public Double? DstStartWt
        {
            get { return Fields.DstStartWt[this]; }
            set { Fields.DstStartWt[this] = value; }
        }

        [DisplayName("Src End Wt")]
        public Double? SrcEndWt
        {
            get { return Fields.SrcEndWt[this]; }
            set { Fields.SrcEndWt[this] = value; }
        }

        [DisplayName("Dst End Wt")]
        public Double? DstEndWt
        {
            get { return Fields.DstEndWt[this]; }
            set { Fields.DstEndWt[this] = value; }
        }

        [DisplayName("Phase Tank Remembered"), Size(50)]
        public String PhaseTankRemembered
        {
            get { return Fields.PhaseTankRemembered[this]; }
            set { Fields.PhaseTankRemembered[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.SourceTank; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public BulkBatchDataRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field BulkBatchId;
            public StringField SourceTank;
            public StringField DestinationTank;
            public StringField Ingredient;
            public Int32Field IngredientNumber;
            public StringField Phase;
            public Int32Field PhaseNumber;
            public DateTimeField StartTime;
            public DateTimeField EndTime;
            public StringField Operator;
            public StringField SupervisorOverride;
            public DoubleField AdditionQty;
            public StringField Status;
            public StringField ScaleCheckOperator;
            public Int32Field ScaleCheckWt;
            public StringField ScaleId;
            public StringField ValvesOpen;
            public StringField ValveOpenBypass;
            public StringField ValvesClose;
            public StringField ValveCloseBypass;
            public Int32Field RecipePhaseId;
            public Int32Field CurrentStepIndex;
            public Int32Field OperatorId;
            public Int32Field SupervisorOverrideId;
            public DoubleField SrcStartWt;
            public DoubleField DstStartWt;
            public DoubleField SrcEndWt;
            public DoubleField DstEndWt;
            public StringField PhaseTankRemembered;
		}
    }
}
