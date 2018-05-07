
namespace FormulationManagementSystems.VDSCSQL.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("VDSCSQL"), Module("VDSCSQL"), TableName("[dbo].[Recipe]")]
    [DisplayName("Recipe"), InstanceName("Recipe")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class RecipeRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Material"), ForeignKey("[dbo].[Material]", "Id"), LeftJoin("jMaterial"), TextualField("MaterialVdscCode")]
        public Int32? MaterialId
        {
            get { return Fields.MaterialId[this]; }
            set { Fields.MaterialId[this] = value; }
        }

        [DisplayName("Description"), Size(255), QuickSearch]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Description Notes")]
        public String DescriptionNotes
        {
            get { return Fields.DescriptionNotes[this]; }
            set { Fields.DescriptionNotes[this] = value; }
        }

        [DisplayName("Batch Qty")]
        public Double? BatchQty
        {
            get { return Fields.BatchQty[this]; }
            set { Fields.BatchQty[this] = value; }
        }

        [DisplayName("Weight Range High")]
        public Double? WeightRangeHigh
        {
            get { return Fields.WeightRangeHigh[this]; }
            set { Fields.WeightRangeHigh[this] = value; }
        }

        [DisplayName("Weight Range Low")]
        public Double? WeightRangeLow
        {
            get { return Fields.WeightRangeLow[this]; }
            set { Fields.WeightRangeLow[this] = value; }
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

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Description; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public RecipeRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field MaterialId;
            public StringField Description;
            public StringField DescriptionNotes;
            public DoubleField BatchQty;
            public DoubleField WeightRangeHigh;
            public DoubleField WeightRangeLow;

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
		}
    }
}
