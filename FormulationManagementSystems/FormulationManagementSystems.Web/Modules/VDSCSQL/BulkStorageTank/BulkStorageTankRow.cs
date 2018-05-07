
namespace FormulationManagementSystems.VDSCSQL.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("VDSCSQL"), Module("VDSCSQL"), TableName("[dbo].[BulkStorageTank]")]
    [DisplayName("Bulk Storage Tank"), InstanceName("Bulk Storage Tank")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class BulkStorageTankRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
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

        [DisplayName("Product"), Size(50), QuickSearch]
        public String Product
        {
            get { return Fields.Product[this]; }
            set { Fields.Product[this] = value; }
        }

        [DisplayName("Building"), Size(20)]
        public String Building
        {
            get { return Fields.Building[this]; }
            set { Fields.Building[this] = value; }
        }

        [DisplayName("Bay"), Size(255)]
        public String Bay
        {
            get { return Fields.Bay[this]; }
            set { Fields.Bay[this] = value; }
        }

        [DisplayName("Tank"), Size(255)]
        public String Tank
        {
            get { return Fields.Tank[this]; }
            set { Fields.Tank[this] = value; }
        }

        [DisplayName("Capacity")]
        public Double? Capacity
        {
            get { return Fields.Capacity[this]; }
            set { Fields.Capacity[this] = value; }
        }

        [DisplayName("Dimension"), Column("dimension"), Size(15)]
        public String Dimension
        {
            get { return Fields.Dimension[this]; }
            set { Fields.Dimension[this] = value; }
        }

        [DisplayName("Vapor Pressure Adjusted To76 F")]
        public Double? VaporPressureAdjustedTo76F
        {
            get { return Fields.VaporPressureAdjustedTo76F[this]; }
            set { Fields.VaporPressureAdjustedTo76F[this] = value; }
        }

        [DisplayName("Vapor Pressure")]
        public Double? VaporPressure
        {
            get { return Fields.VaporPressure[this]; }
            set { Fields.VaporPressure[this] = value; }
        }

        [DisplayName("Strap Chart")]
        public Int32? StrapChart
        {
            get { return Fields.StrapChart[this]; }
            set { Fields.StrapChart[this] = value; }
        }

        [DisplayName("Shipment Clearance")]
        public Boolean? ShipmentClearance
        {
            get { return Fields.ShipmentClearance[this]; }
            set { Fields.ShipmentClearance[this] = value; }
        }

        [DisplayName("Tank Barcode"), Size(255)]
        public String TankBarcode
        {
            get { return Fields.TankBarcode[this]; }
            set { Fields.TankBarcode[this] = value; }
        }

        [DisplayName("Bulk Tank")]
        public Boolean? BulkTank
        {
            get { return Fields.BulkTank[this]; }
            set { Fields.BulkTank[this] = value; }
        }

        [DisplayName("Flash Point"), Size(50)]
        public String FlashPoint
        {
            get { return Fields.FlashPoint[this]; }
            set { Fields.FlashPoint[this] = value; }
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

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Product; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public BulkStorageTankRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field CustomerId;
            public Int32Field MaterialId;
            public StringField Product;
            public StringField Building;
            public StringField Bay;
            public StringField Tank;
            public DoubleField Capacity;
            public StringField Dimension;
            public DoubleField VaporPressureAdjustedTo76F;
            public DoubleField VaporPressure;
            public Int32Field StrapChart;
            public BooleanField ShipmentClearance;
            public StringField TankBarcode;
            public BooleanField BulkTank;
            public StringField FlashPoint;

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
		}
    }
}
