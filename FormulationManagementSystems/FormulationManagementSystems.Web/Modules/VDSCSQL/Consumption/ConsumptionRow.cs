
namespace FormulationManagementSystems.VDSCSQL.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("VDSCSQL"), Module("VDSCSQL"), TableName("[dbo].[Consumption]")]
    [DisplayName("Consumption"), InstanceName("Consumption")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class ConsumptionRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Recipe Phase"), ForeignKey("[dbo].[RecipePhase]", "Id"), LeftJoin("jRecipePhase"), TextualField("RecipePhasePhaseName")]
        public Int32? RecipePhaseId
        {
            get { return Fields.RecipePhaseId[this]; }
            set { Fields.RecipePhaseId[this] = value; }
        }

        [DisplayName("Ingredient Number")]
        public Int32? IngredientNumber
        {
            get { return Fields.IngredientNumber[this]; }
            set { Fields.IngredientNumber[this] = value; }
        }

        [DisplayName("Ingredient Material"), ForeignKey("[dbo].[Material]", "Id"), LeftJoin("jIngredientMaterial"), TextualField("IngredientMaterialVdscCode")]
        public Int32? IngredientMaterialId
        {
            get { return Fields.IngredientMaterialId[this]; }
            set { Fields.IngredientMaterialId[this] = value; }
        }

        [DisplayName("Percentage")]
        public Double? Percentage
        {
            get { return Fields.Percentage[this]; }
            set { Fields.Percentage[this] = value; }
        }

        [DisplayName("Optional Ingredient")]
        public Boolean? OptionalIngredient
        {
            get { return Fields.OptionalIngredient[this]; }
            set { Fields.OptionalIngredient[this] = value; }
        }

        [DisplayName("Src Dst Path Ids"), QuickSearch]
        public String SrcDstPathIds
        {
            get { return Fields.SrcDstPathIds[this]; }
            set { Fields.SrcDstPathIds[this] = value; }
        }

        [DisplayName("Time Expectation")]
        public Int32? TimeExpectation
        {
            get { return Fields.TimeExpectation[this]; }
            set { Fields.TimeExpectation[this] = value; }
        }

        [DisplayName("Op Prc High Lmt")]
        public Single? OpPrcHighLmt
        {
            get { return Fields.OpPrcHighLmt[this]; }
            set { Fields.OpPrcHighLmt[this] = value; }
        }

        [DisplayName("Op Prc Lw Lmt")]
        public Single? OpPrcLwLmt
        {
            get { return Fields.OpPrcLwLmt[this]; }
            set { Fields.OpPrcLwLmt[this] = value; }
        }

        [DisplayName("Tl Prc High Lmt"), Column("TLPrcHighLmt")]
        public Single? TlPrcHighLmt
        {
            get { return Fields.TlPrcHighLmt[this]; }
            set { Fields.TlPrcHighLmt[this] = value; }
        }

        [DisplayName("Tl Prc Lw Lmt"), Column("TLPrcLwLmt")]
        public Single? TlPrcLwLmt
        {
            get { return Fields.TlPrcLwLmt[this]; }
            set { Fields.TlPrcLwLmt[this] = value; }
        }

        [DisplayName("Step Description"), Size(85)]
        public String StepDescription
        {
            get { return Fields.StepDescription[this]; }
            set { Fields.StepDescription[this] = value; }
        }

        [DisplayName("H Temp1")]
        public Int32? HTemp1
        {
            get { return Fields.HTemp1[this]; }
            set { Fields.HTemp1[this] = value; }
        }

        [DisplayName("L Temp1")]
        public Int32? LTemp1
        {
            get { return Fields.LTemp1[this]; }
            set { Fields.LTemp1[this] = value; }
        }

        [DisplayName("Am Prc High Lmt"), NotNull]
        public Single? AmPrcHighLmt
        {
            get { return Fields.AmPrcHighLmt[this]; }
            set { Fields.AmPrcHighLmt[this] = value; }
        }

        [DisplayName("Am Prc Lw Lmt"), NotNull]
        public Single? AmPrcLwLmt
        {
            get { return Fields.AmPrcLwLmt[this]; }
            set { Fields.AmPrcLwLmt[this] = value; }
        }

        [DisplayName("Recipe Phase Recipe Id"), Expression("jRecipePhase.[RecipeId]")]
        public Int32? RecipePhaseRecipeId
        {
            get { return Fields.RecipePhaseRecipeId[this]; }
            set { Fields.RecipePhaseRecipeId[this] = value; }
        }

        [DisplayName("Recipe Phase Phase Name"), Expression("jRecipePhase.[PhaseName]")]
        public String RecipePhasePhaseName
        {
            get { return Fields.RecipePhasePhaseName[this]; }
            set { Fields.RecipePhasePhaseName[this] = value; }
        }

        [DisplayName("Recipe Phase Phase Number"), Expression("jRecipePhase.[PhaseNumber]")]
        public Int32? RecipePhasePhaseNumber
        {
            get { return Fields.RecipePhasePhaseNumber[this]; }
            set { Fields.RecipePhasePhaseNumber[this] = value; }
        }

        [DisplayName("Recipe Phase Phase Optional"), Expression("jRecipePhase.[PhaseOptional]")]
        public Boolean? RecipePhasePhaseOptional
        {
            get { return Fields.RecipePhasePhaseOptional[this]; }
            set { Fields.RecipePhasePhaseOptional[this] = value; }
        }

        [DisplayName("Recipe Phase Procedure"), Expression("jRecipePhase.[Procedure]")]
        public String RecipePhaseProcedure
        {
            get { return Fields.RecipePhaseProcedure[this]; }
            set { Fields.RecipePhaseProcedure[this] = value; }
        }

        [DisplayName("Recipe Phase Packaging Instructions"), Expression("jRecipePhase.[PackagingInstructions]")]
        public String RecipePhasePackagingInstructions
        {
            get { return Fields.RecipePhasePackagingInstructions[this]; }
            set { Fields.RecipePhasePackagingInstructions[this] = value; }
        }

        [DisplayName("Ingredient Material Vdsc Code"), Expression("jIngredientMaterial.[VdscCode]")]
        public String IngredientMaterialVdscCode
        {
            get { return Fields.IngredientMaterialVdscCode[this]; }
            set { Fields.IngredientMaterialVdscCode[this] = value; }
        }

        [DisplayName("Ingredient Material Description"), Expression("jIngredientMaterial.[Description]")]
        public String IngredientMaterialDescription
        {
            get { return Fields.IngredientMaterialDescription[this]; }
            set { Fields.IngredientMaterialDescription[this] = value; }
        }

        [DisplayName("Ingredient Material Customer Id"), Expression("jIngredientMaterial.[CustomerId]")]
        public Int32? IngredientMaterialCustomerId
        {
            get { return Fields.IngredientMaterialCustomerId[this]; }
            set { Fields.IngredientMaterialCustomerId[this] = value; }
        }

        [DisplayName("Ingredient Material Customer Ident"), Expression("jIngredientMaterial.[CustomerIdent]")]
        public String IngredientMaterialCustomerIdent
        {
            get { return Fields.IngredientMaterialCustomerIdent[this]; }
            set { Fields.IngredientMaterialCustomerIdent[this] = value; }
        }

        [DisplayName("Ingredient Material Gmid"), Expression("jIngredientMaterial.[GMID]")]
        public String IngredientMaterialGmid
        {
            get { return Fields.IngredientMaterialGmid[this]; }
            set { Fields.IngredientMaterialGmid[this] = value; }
        }

        [DisplayName("Ingredient Material Customer Part Number"), Expression("jIngredientMaterial.[CustomerPartNumber]")]
        public String IngredientMaterialCustomerPartNumber
        {
            get { return Fields.IngredientMaterialCustomerPartNumber[this]; }
            set { Fields.IngredientMaterialCustomerPartNumber[this] = value; }
        }

        [DisplayName("Ingredient Material Unit Of Measure"), Expression("jIngredientMaterial.[UnitOfMeasure]")]
        public String IngredientMaterialUnitOfMeasure
        {
            get { return Fields.IngredientMaterialUnitOfMeasure[this]; }
            set { Fields.IngredientMaterialUnitOfMeasure[this] = value; }
        }

        [DisplayName("Ingredient Material Density"), Expression("jIngredientMaterial.[Density]")]
        public Double? IngredientMaterialDensity
        {
            get { return Fields.IngredientMaterialDensity[this]; }
            set { Fields.IngredientMaterialDensity[this] = value; }
        }

        [DisplayName("Ingredient Material Unit Qty"), Expression("jIngredientMaterial.[UnitQty]")]
        public Double? IngredientMaterialUnitQty
        {
            get { return Fields.IngredientMaterialUnitQty[this]; }
            set { Fields.IngredientMaterialUnitQty[this] = value; }
        }

        [DisplayName("Ingredient Material Material Code"), Expression("jIngredientMaterial.[MaterialCode]")]
        public String IngredientMaterialMaterialCode
        {
            get { return Fields.IngredientMaterialMaterialCode[this]; }
            set { Fields.IngredientMaterialMaterialCode[this] = value; }
        }

        [DisplayName("Ingredient Material Material Type"), Expression("jIngredientMaterial.[MaterialType]")]
        public String IngredientMaterialMaterialType
        {
            get { return Fields.IngredientMaterialMaterialType[this]; }
            set { Fields.IngredientMaterialMaterialType[this] = value; }
        }

        [DisplayName("Ingredient Material Production Goal"), Expression("jIngredientMaterial.[ProductionGoal]")]
        public Double? IngredientMaterialProductionGoal
        {
            get { return Fields.IngredientMaterialProductionGoal[this]; }
            set { Fields.IngredientMaterialProductionGoal[this] = value; }
        }

        [DisplayName("Ingredient Material Discontinued"), Expression("jIngredientMaterial.[Discontinued]")]
        public Boolean? IngredientMaterialDiscontinued
        {
            get { return Fields.IngredientMaterialDiscontinued[this]; }
            set { Fields.IngredientMaterialDiscontinued[this] = value; }
        }

        [DisplayName("Ingredient Material Msds"), Expression("jIngredientMaterial.[MSDS]")]
        public String IngredientMaterialMsds
        {
            get { return Fields.IngredientMaterialMsds[this]; }
            set { Fields.IngredientMaterialMsds[this] = value; }
        }

        [DisplayName("Ingredient Material Pallet Space Wt"), Expression("jIngredientMaterial.[PalletSpaceWt]")]
        public Double? IngredientMaterialPalletSpaceWt
        {
            get { return Fields.IngredientMaterialPalletSpaceWt[this]; }
            set { Fields.IngredientMaterialPalletSpaceWt[this] = value; }
        }

        [DisplayName("Ingredient Material Bulk Sr"), Expression("jIngredientMaterial.[BulkSR]")]
        public Boolean? IngredientMaterialBulkSr
        {
            get { return Fields.IngredientMaterialBulkSr[this]; }
            set { Fields.IngredientMaterialBulkSr[this] = value; }
        }

        [DisplayName("Ingredient Material Drysr"), Expression("jIngredientMaterial.[DRYSR]")]
        public Boolean? IngredientMaterialDrysr
        {
            get { return Fields.IngredientMaterialDrysr[this]; }
            set { Fields.IngredientMaterialDrysr[this] = value; }
        }

        [DisplayName("Ingredient Material Hot Box Item"), Expression("jIngredientMaterial.[HotBoxItem]")]
        public Boolean? IngredientMaterialHotBoxItem
        {
            get { return Fields.IngredientMaterialHotBoxItem[this]; }
            set { Fields.IngredientMaterialHotBoxItem[this] = value; }
        }

        [DisplayName("Ingredient Material Barcode"), Expression("jIngredientMaterial.[Barcode]")]
        public String IngredientMaterialBarcode
        {
            get { return Fields.IngredientMaterialBarcode[this]; }
            set { Fields.IngredientMaterialBarcode[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.SrcDstPathIds; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ConsumptionRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field RecipePhaseId;
            public Int32Field IngredientNumber;
            public Int32Field IngredientMaterialId;
            public DoubleField Percentage;
            public BooleanField OptionalIngredient;
            public StringField SrcDstPathIds;
            public Int32Field TimeExpectation;
            public SingleField OpPrcHighLmt;
            public SingleField OpPrcLwLmt;
            public SingleField TlPrcHighLmt;
            public SingleField TlPrcLwLmt;
            public StringField StepDescription;
            public Int32Field HTemp1;
            public Int32Field LTemp1;
            public SingleField AmPrcHighLmt;
            public SingleField AmPrcLwLmt;

            public Int32Field RecipePhaseRecipeId;
            public StringField RecipePhasePhaseName;
            public Int32Field RecipePhasePhaseNumber;
            public BooleanField RecipePhasePhaseOptional;
            public StringField RecipePhaseProcedure;
            public StringField RecipePhasePackagingInstructions;

            public StringField IngredientMaterialVdscCode;
            public StringField IngredientMaterialDescription;
            public Int32Field IngredientMaterialCustomerId;
            public StringField IngredientMaterialCustomerIdent;
            public StringField IngredientMaterialGmid;
            public StringField IngredientMaterialCustomerPartNumber;
            public StringField IngredientMaterialUnitOfMeasure;
            public DoubleField IngredientMaterialDensity;
            public DoubleField IngredientMaterialUnitQty;
            public StringField IngredientMaterialMaterialCode;
            public StringField IngredientMaterialMaterialType;
            public DoubleField IngredientMaterialProductionGoal;
            public BooleanField IngredientMaterialDiscontinued;
            public StringField IngredientMaterialMsds;
            public DoubleField IngredientMaterialPalletSpaceWt;
            public BooleanField IngredientMaterialBulkSr;
            public BooleanField IngredientMaterialDrysr;
            public BooleanField IngredientMaterialHotBoxItem;
            public StringField IngredientMaterialBarcode;
		}
    }
}
