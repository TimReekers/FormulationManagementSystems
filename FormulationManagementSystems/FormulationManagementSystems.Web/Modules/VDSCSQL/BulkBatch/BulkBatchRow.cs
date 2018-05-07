
namespace FormulationManagementSystems.VDSCSQL.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("VDSCSQL"), Module("VDSCSQL"), TableName("[dbo].[BulkBatch]")]
    [DisplayName("Bulk Batch"), InstanceName("Bulk Batch")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class BulkBatchRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Production Request"), ForeignKey("[dbo].[ProductionRequest]", "Id"), LeftJoin("jProductionRequest"), TextualField("ProductionRequestStatus")]
        public Int32? ProductionRequestId
        {
            get { return Fields.ProductionRequestId[this]; }
            set { Fields.ProductionRequestId[this] = value; }
        }

        [DisplayName("Batch Number"), NotNull]
        public Int32? BatchNumber
        {
            get { return Fields.BatchNumber[this]; }
            set { Fields.BatchNumber[this] = value; }
        }

        [DisplayName("Batch Tank"), Size(10), QuickSearch]
        public String BatchTank
        {
            get { return Fields.BatchTank[this]; }
            set { Fields.BatchTank[this] = value; }
        }

        [DisplayName("Date Created")]
        public DateTime? DateCreated
        {
            get { return Fields.DateCreated[this]; }
            set { Fields.DateCreated[this] = value; }
        }

        [DisplayName("Date Completed")]
        public DateTime? DateCompleted
        {
            get { return Fields.DateCompleted[this]; }
            set { Fields.DateCompleted[this] = value; }
        }

        [DisplayName("Batch Quantity")]
        public Double? BatchQuantity
        {
            get { return Fields.BatchQuantity[this]; }
            set { Fields.BatchQuantity[this] = value; }
        }

        [DisplayName("Batch Active")]
        public Boolean? BatchActive
        {
            get { return Fields.BatchActive[this]; }
            set { Fields.BatchActive[this] = value; }
        }

        [DisplayName("Fp Qty"), Column("FPQty")]
        public Int32? FpQty
        {
            get { return Fields.FpQty[this]; }
            set { Fields.FpQty[this] = value; }
        }

        [DisplayName("Receiving Tank"), Size(255)]
        public String ReceivingTank
        {
            get { return Fields.ReceivingTank[this]; }
            set { Fields.ReceivingTank[this] = value; }
        }

        [DisplayName("Recipe Id")]
        public Int32? RecipeId
        {
            get { return Fields.RecipeId[this]; }
            set { Fields.RecipeId[this] = value; }
        }

        [DisplayName("Production Request Date Created"), Expression("jProductionRequest.[DateCreated]")]
        public DateTime? ProductionRequestDateCreated
        {
            get { return Fields.ProductionRequestDateCreated[this]; }
            set { Fields.ProductionRequestDateCreated[this] = value; }
        }

        [DisplayName("Production Request Customer Id"), Expression("jProductionRequest.[CustomerId]")]
        public Int32? ProductionRequestCustomerId
        {
            get { return Fields.ProductionRequestCustomerId[this]; }
            set { Fields.ProductionRequestCustomerId[this] = value; }
        }

        [DisplayName("Production Request Material Id"), Expression("jProductionRequest.[MaterialId]")]
        public Int32? ProductionRequestMaterialId
        {
            get { return Fields.ProductionRequestMaterialId[this]; }
            set { Fields.ProductionRequestMaterialId[this] = value; }
        }

        [DisplayName("Production Request Recipe Id"), Expression("jProductionRequest.[RecipeId]")]
        public Int32? ProductionRequestRecipeId
        {
            get { return Fields.ProductionRequestRecipeId[this]; }
            set { Fields.ProductionRequestRecipeId[this] = value; }
        }

        [DisplayName("Production Request Vdsc Area Id"), Expression("jProductionRequest.[VdscAreaId]")]
        public Int32? ProductionRequestVdscAreaId
        {
            get { return Fields.ProductionRequestVdscAreaId[this]; }
            set { Fields.ProductionRequestVdscAreaId[this] = value; }
        }

        [DisplayName("Production Request Quantity Requested"), Expression("jProductionRequest.[QuantityRequested]")]
        public Int32? ProductionRequestQuantityRequested
        {
            get { return Fields.ProductionRequestQuantityRequested[this]; }
            set { Fields.ProductionRequestQuantityRequested[this] = value; }
        }

        [DisplayName("Production Request Operators"), Expression("jProductionRequest.[Operators]")]
        public Int32? ProductionRequestOperators
        {
            get { return Fields.ProductionRequestOperators[this]; }
            set { Fields.ProductionRequestOperators[this] = value; }
        }

        [DisplayName("Production Request Status"), Expression("jProductionRequest.[Status]")]
        public String ProductionRequestStatus
        {
            get { return Fields.ProductionRequestStatus[this]; }
            set { Fields.ProductionRequestStatus[this] = value; }
        }

        [DisplayName("Production Request Begin Date"), Expression("jProductionRequest.[BeginDate]")]
        public DateTime? ProductionRequestBeginDate
        {
            get { return Fields.ProductionRequestBeginDate[this]; }
            set { Fields.ProductionRequestBeginDate[this] = value; }
        }

        [DisplayName("Production Request End Date"), Expression("jProductionRequest.[EndDate]")]
        public DateTime? ProductionRequestEndDate
        {
            get { return Fields.ProductionRequestEndDate[this]; }
            set { Fields.ProductionRequestEndDate[this] = value; }
        }

        [DisplayName("Production Request Attachments"), Expression("jProductionRequest.[Attachments]")]
        public String ProductionRequestAttachments
        {
            get { return Fields.ProductionRequestAttachments[this]; }
            set { Fields.ProductionRequestAttachments[this] = value; }
        }

        [DisplayName("Production Request Notes"), Expression("jProductionRequest.[Notes]")]
        public String ProductionRequestNotes
        {
            get { return Fields.ProductionRequestNotes[this]; }
            set { Fields.ProductionRequestNotes[this] = value; }
        }

        [DisplayName("Production Request Use Alternate Recipe"), Expression("jProductionRequest.[UseAlternateRecipe]")]
        public Boolean? ProductionRequestUseAlternateRecipe
        {
            get { return Fields.ProductionRequestUseAlternateRecipe[this]; }
            set { Fields.ProductionRequestUseAlternateRecipe[this] = value; }
        }

        [DisplayName("Production Request Compute Batch"), Expression("jProductionRequest.[ComputeBatch]")]
        public Boolean? ProductionRequestComputeBatch
        {
            get { return Fields.ProductionRequestComputeBatch[this]; }
            set { Fields.ProductionRequestComputeBatch[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.BatchTank; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public BulkBatchRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field ProductionRequestId;
            public Int32Field BatchNumber;
            public StringField BatchTank;
            public DateTimeField DateCreated;
            public DateTimeField DateCompleted;
            public DoubleField BatchQuantity;
            public BooleanField BatchActive;
            public Int32Field FpQty;
            public StringField ReceivingTank;
            public Int32Field RecipeId;

            public DateTimeField ProductionRequestDateCreated;
            public Int32Field ProductionRequestCustomerId;
            public Int32Field ProductionRequestMaterialId;
            public Int32Field ProductionRequestRecipeId;
            public Int32Field ProductionRequestVdscAreaId;
            public Int32Field ProductionRequestQuantityRequested;
            public Int32Field ProductionRequestOperators;
            public StringField ProductionRequestStatus;
            public DateTimeField ProductionRequestBeginDate;
            public DateTimeField ProductionRequestEndDate;
            public StringField ProductionRequestAttachments;
            public StringField ProductionRequestNotes;
            public BooleanField ProductionRequestUseAlternateRecipe;
            public BooleanField ProductionRequestComputeBatch;
		}
    }
}
