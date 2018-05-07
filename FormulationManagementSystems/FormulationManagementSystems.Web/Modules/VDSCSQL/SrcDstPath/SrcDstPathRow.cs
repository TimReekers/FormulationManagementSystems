
namespace FormulationManagementSystems.VDSCSQL.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("VDSCSQL"), Module("VDSCSQL"), TableName("[dbo].[SrcDstPath]")]
    [DisplayName("Src Dst Path"), InstanceName("Src Dst Path")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class SrcDstPathRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Src Tank"), ForeignKey("[dbo].[BulkStorageTank]", "Id"), LeftJoin("jSrcTank"), TextualField("SrcTankProduct")]
        public Int32? SrcTankId
        {
            get { return Fields.SrcTankId[this]; }
            set { Fields.SrcTankId[this] = value; }
        }

        [DisplayName("Src Path"), Size(255), QuickSearch]
        public String SrcPath
        {
            get { return Fields.SrcPath[this]; }
            set { Fields.SrcPath[this] = value; }
        }

        [DisplayName("Dst Tank"), ForeignKey("[dbo].[BulkStorageTank]", "Id"), LeftJoin("jDstTank"), TextualField("DstTankProduct")]
        public Int32? DstTankId
        {
            get { return Fields.DstTankId[this]; }
            set { Fields.DstTankId[this] = value; }
        }

        [DisplayName("Dst Path"), Size(255)]
        public String DstPath
        {
            get { return Fields.DstPath[this]; }
            set { Fields.DstPath[this] = value; }
        }

        [DisplayName("Path State"), Size(255)]
        public String PathState
        {
            get { return Fields.PathState[this]; }
            set { Fields.PathState[this] = value; }
        }

        [DisplayName("Src Tank Customer Id"), Expression("jSrcTank.[CustomerId]")]
        public Int32? SrcTankCustomerId
        {
            get { return Fields.SrcTankCustomerId[this]; }
            set { Fields.SrcTankCustomerId[this] = value; }
        }

        [DisplayName("Src Tank Material Id"), Expression("jSrcTank.[MaterialId]")]
        public Int32? SrcTankMaterialId
        {
            get { return Fields.SrcTankMaterialId[this]; }
            set { Fields.SrcTankMaterialId[this] = value; }
        }

        [DisplayName("Src Tank Product"), Expression("jSrcTank.[Product]")]
        public String SrcTankProduct
        {
            get { return Fields.SrcTankProduct[this]; }
            set { Fields.SrcTankProduct[this] = value; }
        }

        [DisplayName("Src Tank Building"), Expression("jSrcTank.[Building]")]
        public String SrcTankBuilding
        {
            get { return Fields.SrcTankBuilding[this]; }
            set { Fields.SrcTankBuilding[this] = value; }
        }

        [DisplayName("Src Tank Bay"), Expression("jSrcTank.[Bay]")]
        public String SrcTankBay
        {
            get { return Fields.SrcTankBay[this]; }
            set { Fields.SrcTankBay[this] = value; }
        }

        [DisplayName("Src Tank Tank"), Expression("jSrcTank.[Tank]")]
        public String SrcTankTank
        {
            get { return Fields.SrcTankTank[this]; }
            set { Fields.SrcTankTank[this] = value; }
        }

        [DisplayName("Src Tank Capacity"), Expression("jSrcTank.[Capacity]")]
        public Double? SrcTankCapacity
        {
            get { return Fields.SrcTankCapacity[this]; }
            set { Fields.SrcTankCapacity[this] = value; }
        }

        [DisplayName("Src Tank Dimension"), Expression("jSrcTank.[dimension]")]
        public String SrcTankDimension
        {
            get { return Fields.SrcTankDimension[this]; }
            set { Fields.SrcTankDimension[this] = value; }
        }

        [DisplayName("Src Tank Vapor Pressure Adjusted To76 F"), Expression("jSrcTank.[VaporPressureAdjustedTo76F]")]
        public Double? SrcTankVaporPressureAdjustedTo76F
        {
            get { return Fields.SrcTankVaporPressureAdjustedTo76F[this]; }
            set { Fields.SrcTankVaporPressureAdjustedTo76F[this] = value; }
        }

        [DisplayName("Src Tank Vapor Pressure"), Expression("jSrcTank.[VaporPressure]")]
        public Double? SrcTankVaporPressure
        {
            get { return Fields.SrcTankVaporPressure[this]; }
            set { Fields.SrcTankVaporPressure[this] = value; }
        }

        [DisplayName("Src Tank Strap Chart"), Expression("jSrcTank.[StrapChart]")]
        public Int32? SrcTankStrapChart
        {
            get { return Fields.SrcTankStrapChart[this]; }
            set { Fields.SrcTankStrapChart[this] = value; }
        }

        [DisplayName("Src Tank Shipment Clearance"), Expression("jSrcTank.[ShipmentClearance]")]
        public Boolean? SrcTankShipmentClearance
        {
            get { return Fields.SrcTankShipmentClearance[this]; }
            set { Fields.SrcTankShipmentClearance[this] = value; }
        }

        [DisplayName("Src Tank Tank Barcode"), Expression("jSrcTank.[TankBarcode]")]
        public String SrcTankTankBarcode
        {
            get { return Fields.SrcTankTankBarcode[this]; }
            set { Fields.SrcTankTankBarcode[this] = value; }
        }

        [DisplayName("Src Tank Bulk Tank"), Expression("jSrcTank.[BulkTank]")]
        public Boolean? SrcTankBulkTank
        {
            get { return Fields.SrcTankBulkTank[this]; }
            set { Fields.SrcTankBulkTank[this] = value; }
        }

        [DisplayName("Src Tank Flash Point"), Expression("jSrcTank.[FlashPoint]")]
        public String SrcTankFlashPoint
        {
            get { return Fields.SrcTankFlashPoint[this]; }
            set { Fields.SrcTankFlashPoint[this] = value; }
        }

        [DisplayName("Dst Tank Customer Id"), Expression("jDstTank.[CustomerId]")]
        public Int32? DstTankCustomerId
        {
            get { return Fields.DstTankCustomerId[this]; }
            set { Fields.DstTankCustomerId[this] = value; }
        }

        [DisplayName("Dst Tank Material Id"), Expression("jDstTank.[MaterialId]")]
        public Int32? DstTankMaterialId
        {
            get { return Fields.DstTankMaterialId[this]; }
            set { Fields.DstTankMaterialId[this] = value; }
        }

        [DisplayName("Dst Tank Product"), Expression("jDstTank.[Product]")]
        public String DstTankProduct
        {
            get { return Fields.DstTankProduct[this]; }
            set { Fields.DstTankProduct[this] = value; }
        }

        [DisplayName("Dst Tank Building"), Expression("jDstTank.[Building]")]
        public String DstTankBuilding
        {
            get { return Fields.DstTankBuilding[this]; }
            set { Fields.DstTankBuilding[this] = value; }
        }

        [DisplayName("Dst Tank Bay"), Expression("jDstTank.[Bay]")]
        public String DstTankBay
        {
            get { return Fields.DstTankBay[this]; }
            set { Fields.DstTankBay[this] = value; }
        }

        [DisplayName("Dst Tank Tank"), Expression("jDstTank.[Tank]")]
        public String DstTankTank
        {
            get { return Fields.DstTankTank[this]; }
            set { Fields.DstTankTank[this] = value; }
        }

        [DisplayName("Dst Tank Capacity"), Expression("jDstTank.[Capacity]")]
        public Double? DstTankCapacity
        {
            get { return Fields.DstTankCapacity[this]; }
            set { Fields.DstTankCapacity[this] = value; }
        }

        [DisplayName("Dst Tank Dimension"), Expression("jDstTank.[dimension]")]
        public String DstTankDimension
        {
            get { return Fields.DstTankDimension[this]; }
            set { Fields.DstTankDimension[this] = value; }
        }

        [DisplayName("Dst Tank Vapor Pressure Adjusted To76 F"), Expression("jDstTank.[VaporPressureAdjustedTo76F]")]
        public Double? DstTankVaporPressureAdjustedTo76F
        {
            get { return Fields.DstTankVaporPressureAdjustedTo76F[this]; }
            set { Fields.DstTankVaporPressureAdjustedTo76F[this] = value; }
        }

        [DisplayName("Dst Tank Vapor Pressure"), Expression("jDstTank.[VaporPressure]")]
        public Double? DstTankVaporPressure
        {
            get { return Fields.DstTankVaporPressure[this]; }
            set { Fields.DstTankVaporPressure[this] = value; }
        }

        [DisplayName("Dst Tank Strap Chart"), Expression("jDstTank.[StrapChart]")]
        public Int32? DstTankStrapChart
        {
            get { return Fields.DstTankStrapChart[this]; }
            set { Fields.DstTankStrapChart[this] = value; }
        }

        [DisplayName("Dst Tank Shipment Clearance"), Expression("jDstTank.[ShipmentClearance]")]
        public Boolean? DstTankShipmentClearance
        {
            get { return Fields.DstTankShipmentClearance[this]; }
            set { Fields.DstTankShipmentClearance[this] = value; }
        }

        [DisplayName("Dst Tank Tank Barcode"), Expression("jDstTank.[TankBarcode]")]
        public String DstTankTankBarcode
        {
            get { return Fields.DstTankTankBarcode[this]; }
            set { Fields.DstTankTankBarcode[this] = value; }
        }

        [DisplayName("Dst Tank Bulk Tank"), Expression("jDstTank.[BulkTank]")]
        public Boolean? DstTankBulkTank
        {
            get { return Fields.DstTankBulkTank[this]; }
            set { Fields.DstTankBulkTank[this] = value; }
        }

        [DisplayName("Dst Tank Flash Point"), Expression("jDstTank.[FlashPoint]")]
        public String DstTankFlashPoint
        {
            get { return Fields.DstTankFlashPoint[this]; }
            set { Fields.DstTankFlashPoint[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.SrcPath; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SrcDstPathRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field SrcTankId;
            public StringField SrcPath;
            public Int32Field DstTankId;
            public StringField DstPath;
            public StringField PathState;

            public Int32Field SrcTankCustomerId;
            public Int32Field SrcTankMaterialId;
            public StringField SrcTankProduct;
            public StringField SrcTankBuilding;
            public StringField SrcTankBay;
            public StringField SrcTankTank;
            public DoubleField SrcTankCapacity;
            public StringField SrcTankDimension;
            public DoubleField SrcTankVaporPressureAdjustedTo76F;
            public DoubleField SrcTankVaporPressure;
            public Int32Field SrcTankStrapChart;
            public BooleanField SrcTankShipmentClearance;
            public StringField SrcTankTankBarcode;
            public BooleanField SrcTankBulkTank;
            public StringField SrcTankFlashPoint;

            public Int32Field DstTankCustomerId;
            public Int32Field DstTankMaterialId;
            public StringField DstTankProduct;
            public StringField DstTankBuilding;
            public StringField DstTankBay;
            public StringField DstTankTank;
            public DoubleField DstTankCapacity;
            public StringField DstTankDimension;
            public DoubleField DstTankVaporPressureAdjustedTo76F;
            public DoubleField DstTankVaporPressure;
            public Int32Field DstTankStrapChart;
            public BooleanField DstTankShipmentClearance;
            public StringField DstTankTankBarcode;
            public BooleanField DstTankBulkTank;
            public StringField DstTankFlashPoint;
		}
    }
}
