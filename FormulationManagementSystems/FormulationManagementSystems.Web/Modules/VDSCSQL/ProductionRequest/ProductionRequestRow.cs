
namespace FormulationManagementSystems.VDSCSQL.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("VDSCSQL"), Module("VDSCSQL"), TableName("[dbo].[ProductionRequest]")]
    [DisplayName("Production Request"), InstanceName("Production Request")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class ProductionRequestRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Date Created")]
        public DateTime? DateCreated
        {
            get { return Fields.DateCreated[this]; }
            set { Fields.DateCreated[this] = value; }
        }

        [DisplayName("Customer"), ForeignKey("[dbo].[Customer]", "Id"), LeftJoin("jCustomer"), TextualField("CustomerCompany")]
        public Int32? CustomerId
        {
            get { return Fields.CustomerId[this]; }
            set { Fields.CustomerId[this] = value; }
        }

        [DisplayName("Material"), ForeignKey("[dbo].[Material]", "Id"), LeftJoin("jMaterial"), TextualField("MaterialVdscCode")]
        public Int32? MaterialId
        {
            get { return Fields.MaterialId[this]; }
            set { Fields.MaterialId[this] = value; }
        }

        [DisplayName("Recipe"), ForeignKey("[dbo].[Recipe]", "Id"), LeftJoin("jRecipe"), TextualField("RecipeDescription")]
        public Int32? RecipeId
        {
            get { return Fields.RecipeId[this]; }
            set { Fields.RecipeId[this] = value; }
        }

        [DisplayName("Vdsc Area"), ForeignKey("[dbo].[VdscArea]", "Id"), LeftJoin("jVdscArea"), TextualField("VdscArea")]
        public Int32? VdscAreaId
        {
            get { return Fields.VdscAreaId[this]; }
            set { Fields.VdscAreaId[this] = value; }
        }

        [DisplayName("Quantity Requested")]
        public Int32? QuantityRequested
        {
            get { return Fields.QuantityRequested[this]; }
            set { Fields.QuantityRequested[this] = value; }
        }

        [DisplayName("Operators")]
        public Int32? Operators
        {
            get { return Fields.Operators[this]; }
            set { Fields.Operators[this] = value; }
        }

        [DisplayName("Status"), Size(255), QuickSearch]
        public String Status
        {
            get { return Fields.Status[this]; }
            set { Fields.Status[this] = value; }
        }

        [DisplayName("Begin Date")]
        public DateTime? BeginDate
        {
            get { return Fields.BeginDate[this]; }
            set { Fields.BeginDate[this] = value; }
        }

        [DisplayName("End Date")]
        public DateTime? EndDate
        {
            get { return Fields.EndDate[this]; }
            set { Fields.EndDate[this] = value; }
        }

        [DisplayName("Attachments"), Size(8000)]
        public String Attachments
        {
            get { return Fields.Attachments[this]; }
            set { Fields.Attachments[this] = value; }
        }

        [DisplayName("Notes")]
        public String Notes
        {
            get { return Fields.Notes[this]; }
            set { Fields.Notes[this] = value; }
        }

        [DisplayName("Use Alternate Recipe"), NotNull]
        public Boolean? UseAlternateRecipe
        {
            get { return Fields.UseAlternateRecipe[this]; }
            set { Fields.UseAlternateRecipe[this] = value; }
        }

        [DisplayName("Compute Batch"), NotNull]
        public Boolean? ComputeBatch
        {
            get { return Fields.ComputeBatch[this]; }
            set { Fields.ComputeBatch[this] = value; }
        }

        [DisplayName("Customer Company"), Expression("jCustomer.[Company]")]
        public String CustomerCompany
        {
            get { return Fields.CustomerCompany[this]; }
            set { Fields.CustomerCompany[this] = value; }
        }

        [DisplayName("Customer Customer Ident"), Expression("jCustomer.[CustomerIdent]")]
        public String CustomerCustomerIdent
        {
            get { return Fields.CustomerCustomerIdent[this]; }
            set { Fields.CustomerCustomerIdent[this] = value; }
        }

        [DisplayName("Customer Customer Name"), Expression("jCustomer.[CustomerName]")]
        public String CustomerName
        {
            get { return Fields.CustomerName[this]; }
            set { Fields.CustomerName[this] = value; }
        }

        [DisplayName("Material Vdsc Code"), Expression("jMaterial.[VdscCode]")]
        public String MaterialVdscCode
        {
            get { return Fields.MaterialVdscCode[this]; }
            set { Fields.MaterialVdscCode[this] = value; }
        }

        [DisplayName("Material Description"), Expression("jMaterial.[Description]")]
        public String MaterialDescription
        {
            get { return Fields.MaterialDescription[this]; }
            set { Fields.MaterialDescription[this] = value; }
        }

        [DisplayName("Material Customer Id"), Expression("jMaterial.[CustomerId]")]
        public Int32? MaterialCustomerId
        {
            get { return Fields.MaterialCustomerId[this]; }
            set { Fields.MaterialCustomerId[this] = value; }
        }

        [DisplayName("Material Customer Ident"), Expression("jMaterial.[CustomerIdent]")]
        public String MaterialCustomerIdent
        {
            get { return Fields.MaterialCustomerIdent[this]; }
            set { Fields.MaterialCustomerIdent[this] = value; }
        }

        [DisplayName("Material Gmid"), Expression("jMaterial.[GMID]")]
        public String MaterialGmid
        {
            get { return Fields.MaterialGmid[this]; }
            set { Fields.MaterialGmid[this] = value; }
        }

        [DisplayName("Material Customer Part Number"), Expression("jMaterial.[CustomerPartNumber]")]
        public String MaterialCustomerPartNumber
        {
            get { return Fields.MaterialCustomerPartNumber[this]; }
            set { Fields.MaterialCustomerPartNumber[this] = value; }
        }

        [DisplayName("Material Unit Of Measure"), Expression("jMaterial.[UnitOfMeasure]")]
        public String MaterialUnitOfMeasure
        {
            get { return Fields.MaterialUnitOfMeasure[this]; }
            set { Fields.MaterialUnitOfMeasure[this] = value; }
        }

        [DisplayName("Material Density"), Expression("jMaterial.[Density]")]
        public Double? MaterialDensity
        {
            get { return Fields.MaterialDensity[this]; }
            set { Fields.MaterialDensity[this] = value; }
        }

        [DisplayName("Material Unit Qty"), Expression("jMaterial.[UnitQty]")]
        public Double? MaterialUnitQty
        {
            get { return Fields.MaterialUnitQty[this]; }
            set { Fields.MaterialUnitQty[this] = value; }
        }

        [DisplayName("Material Material Code"), Expression("jMaterial.[MaterialCode]")]
        public String MaterialMaterialCode
        {
            get { return Fields.MaterialMaterialCode[this]; }
            set { Fields.MaterialMaterialCode[this] = value; }
        }

        [DisplayName("Material Material Type"), Expression("jMaterial.[MaterialType]")]
        public String MaterialMaterialType
        {
            get { return Fields.MaterialMaterialType[this]; }
            set { Fields.MaterialMaterialType[this] = value; }
        }

        [DisplayName("Material Production Goal"), Expression("jMaterial.[ProductionGoal]")]
        public Double? MaterialProductionGoal
        {
            get { return Fields.MaterialProductionGoal[this]; }
            set { Fields.MaterialProductionGoal[this] = value; }
        }

        [DisplayName("Material Discontinued"), Expression("jMaterial.[Discontinued]")]
        public Boolean? MaterialDiscontinued
        {
            get { return Fields.MaterialDiscontinued[this]; }
            set { Fields.MaterialDiscontinued[this] = value; }
        }

        [DisplayName("Material Msds"), Expression("jMaterial.[MSDS]")]
        public String MaterialMsds
        {
            get { return Fields.MaterialMsds[this]; }
            set { Fields.MaterialMsds[this] = value; }
        }

        [DisplayName("Material Pallet Space Wt"), Expression("jMaterial.[PalletSpaceWt]")]
        public Double? MaterialPalletSpaceWt
        {
            get { return Fields.MaterialPalletSpaceWt[this]; }
            set { Fields.MaterialPalletSpaceWt[this] = value; }
        }

        [DisplayName("Material Bulk Sr"), Expression("jMaterial.[BulkSR]")]
        public Boolean? MaterialBulkSr
        {
            get { return Fields.MaterialBulkSr[this]; }
            set { Fields.MaterialBulkSr[this] = value; }
        }

        [DisplayName("Material Drysr"), Expression("jMaterial.[DRYSR]")]
        public Boolean? MaterialDrysr
        {
            get { return Fields.MaterialDrysr[this]; }
            set { Fields.MaterialDrysr[this] = value; }
        }

        [DisplayName("Material Hot Box Item"), Expression("jMaterial.[HotBoxItem]")]
        public Boolean? MaterialHotBoxItem
        {
            get { return Fields.MaterialHotBoxItem[this]; }
            set { Fields.MaterialHotBoxItem[this] = value; }
        }

        [DisplayName("Material Barcode"), Expression("jMaterial.[Barcode]")]
        public String MaterialBarcode
        {
            get { return Fields.MaterialBarcode[this]; }
            set { Fields.MaterialBarcode[this] = value; }
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

        [DisplayName("Vdsc Area Vdsc Area Group Id"), Expression("jVdscArea.[VdscAreaGroupId]")]
        public Int32? VdscAreaVdscAreaGroupId
        {
            get { return Fields.VdscAreaVdscAreaGroupId[this]; }
            set { Fields.VdscAreaVdscAreaGroupId[this] = value; }
        }

        [DisplayName("Vdsc Area Area"), Expression("jVdscArea.[Area]")]
        public String VdscArea
        {
            get { return Fields.VdscArea[this]; }
            set { Fields.VdscArea[this] = value; }
        }

        [DisplayName("Vdsc Area List Order"), Expression("jVdscArea.[ListOrder]")]
        public Int32? VdscAreaListOrder
        {
            get { return Fields.VdscAreaListOrder[this]; }
            set { Fields.VdscAreaListOrder[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Status; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ProductionRequestRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public DateTimeField DateCreated;
            public Int32Field CustomerId;
            public Int32Field MaterialId;
            public Int32Field RecipeId;
            public Int32Field VdscAreaId;
            public Int32Field QuantityRequested;
            public Int32Field Operators;
            public StringField Status;
            public DateTimeField BeginDate;
            public DateTimeField EndDate;
            public StringField Attachments;
            public StringField Notes;
            public BooleanField UseAlternateRecipe;
            public BooleanField ComputeBatch;

            public StringField CustomerCompany;
            public StringField CustomerCustomerIdent;
            public StringField CustomerName;

            public StringField MaterialVdscCode;
            public StringField MaterialDescription;
            public Int32Field MaterialCustomerId;
            public StringField MaterialCustomerIdent;
            public StringField MaterialGmid;
            public StringField MaterialCustomerPartNumber;
            public StringField MaterialUnitOfMeasure;
            public DoubleField MaterialDensity;
            public DoubleField MaterialUnitQty;
            public StringField MaterialMaterialCode;
            public StringField MaterialMaterialType;
            public DoubleField MaterialProductionGoal;
            public BooleanField MaterialDiscontinued;
            public StringField MaterialMsds;
            public DoubleField MaterialPalletSpaceWt;
            public BooleanField MaterialBulkSr;
            public BooleanField MaterialDrysr;
            public BooleanField MaterialHotBoxItem;
            public StringField MaterialBarcode;

            public Int32Field RecipeMaterialId;
            public StringField RecipeDescription;
            public StringField RecipeDescriptionNotes;
            public DoubleField RecipeBatchQty;
            public DoubleField RecipeWeightRangeHigh;
            public DoubleField RecipeWeightRangeLow;

            public Int32Field VdscAreaVdscAreaGroupId;
            public StringField VdscArea;
            public Int32Field VdscAreaListOrder;
		}
    }
}
