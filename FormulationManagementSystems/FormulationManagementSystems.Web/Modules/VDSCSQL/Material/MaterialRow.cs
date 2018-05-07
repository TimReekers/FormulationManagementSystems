
namespace FormulationManagementSystems.VDSCSQL.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("VDSCSQL"), Module("VDSCSQL"), TableName("[dbo].[Material]")]
    [DisplayName("Material"), InstanceName("Material")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class MaterialRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Vdsc Code"), Size(255), QuickSearch]
        public String VdscCode
        {
            get { return Fields.VdscCode[this]; }
            set { Fields.VdscCode[this] = value; }
        }

        [DisplayName("Description"), Size(255)]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Customer"), ForeignKey("[dbo].[Customer]", "Id"), LeftJoin("jCustomer"), TextualField("CustomerCompany")]
        public Int32? CustomerId
        {
            get { return Fields.CustomerId[this]; }
            set { Fields.CustomerId[this] = value; }
        }

        [DisplayName("Customer Ident"), Size(255)]
        public String CustomerIdent
        {
            get { return Fields.CustomerIdent[this]; }
            set { Fields.CustomerIdent[this] = value; }
        }

        [DisplayName("Gmid"), Column("GMID"), Size(25)]
        public String Gmid
        {
            get { return Fields.Gmid[this]; }
            set { Fields.Gmid[this] = value; }
        }

        [DisplayName("Customer Part Number"), Size(255)]
        public String CustomerPartNumber
        {
            get { return Fields.CustomerPartNumber[this]; }
            set { Fields.CustomerPartNumber[this] = value; }
        }

        [DisplayName("Unit Of Measure"), Size(15)]
        public String UnitOfMeasure
        {
            get { return Fields.UnitOfMeasure[this]; }
            set { Fields.UnitOfMeasure[this] = value; }
        }

        [DisplayName("Density")]
        public Double? Density
        {
            get { return Fields.Density[this]; }
            set { Fields.Density[this] = value; }
        }

        [DisplayName("Unit Qty")]
        public Double? UnitQty
        {
            get { return Fields.UnitQty[this]; }
            set { Fields.UnitQty[this] = value; }
        }

        [DisplayName("Material Code"), Size(10)]
        public String MaterialCode
        {
            get { return Fields.MaterialCode[this]; }
            set { Fields.MaterialCode[this] = value; }
        }

        [DisplayName("Material Type"), Size(15)]
        public String MaterialType
        {
            get { return Fields.MaterialType[this]; }
            set { Fields.MaterialType[this] = value; }
        }

        [DisplayName("Production Goal")]
        public Double? ProductionGoal
        {
            get { return Fields.ProductionGoal[this]; }
            set { Fields.ProductionGoal[this] = value; }
        }

        [DisplayName("Discontinued")]
        public Boolean? Discontinued
        {
            get { return Fields.Discontinued[this]; }
            set { Fields.Discontinued[this] = value; }
        }

        [DisplayName("Msds"), Column("MSDS"), Size(8000)]
        public String Msds
        {
            get { return Fields.Msds[this]; }
            set { Fields.Msds[this] = value; }
        }

        [DisplayName("Pallet Space Wt")]
        public Double? PalletSpaceWt
        {
            get { return Fields.PalletSpaceWt[this]; }
            set { Fields.PalletSpaceWt[this] = value; }
        }

        [DisplayName("Bulk Sr"), Column("BulkSR")]
        public Boolean? BulkSr
        {
            get { return Fields.BulkSr[this]; }
            set { Fields.BulkSr[this] = value; }
        }

        [DisplayName("Drysr"), Column("DRYSR")]
        public Boolean? Drysr
        {
            get { return Fields.Drysr[this]; }
            set { Fields.Drysr[this] = value; }
        }

        [DisplayName("Hot Box Item")]
        public Boolean? HotBoxItem
        {
            get { return Fields.HotBoxItem[this]; }
            set { Fields.HotBoxItem[this] = value; }
        }

        [DisplayName("Barcode"), Size(25)]
        public String Barcode
        {
            get { return Fields.Barcode[this]; }
            set { Fields.Barcode[this] = value; }
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

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.VdscCode; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MaterialRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField VdscCode;
            public StringField Description;
            public Int32Field CustomerId;
            public StringField CustomerIdent;
            public StringField Gmid;
            public StringField CustomerPartNumber;
            public StringField UnitOfMeasure;
            public DoubleField Density;
            public DoubleField UnitQty;
            public StringField MaterialCode;
            public StringField MaterialType;
            public DoubleField ProductionGoal;
            public BooleanField Discontinued;
            public StringField Msds;
            public DoubleField PalletSpaceWt;
            public BooleanField BulkSr;
            public BooleanField Drysr;
            public BooleanField HotBoxItem;
            public StringField Barcode;

            public StringField CustomerCompany;
            public StringField CustomerCustomerIdent;
            public StringField CustomerName;
		}
    }
}
