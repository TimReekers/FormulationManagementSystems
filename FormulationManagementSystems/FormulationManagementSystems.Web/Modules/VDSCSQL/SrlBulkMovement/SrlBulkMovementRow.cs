
namespace FormulationManagementSystems.VDSCSQL.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("VDSCSQL"), Module("VDSCSQL"), TableName("[dbo].[SRL_BulkMovement]")]
    [DisplayName("Srl Bulk Movement"), InstanceName("Srl Bulk Movement")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class SrlBulkMovementRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Carrier Id"), Column("CarrierID")]
        public Int32? CarrierId
        {
            get { return Fields.CarrierId[this]; }
            set { Fields.CarrierId[this] = value; }
        }

        [DisplayName("Trailer Number"), Size(50), QuickSearch]
        public String TrailerNumber
        {
            get { return Fields.TrailerNumber[this]; }
            set { Fields.TrailerNumber[this] = value; }
        }

        [DisplayName("Tank Id"), Column("TankID")]
        public Int32? TankId
        {
            get { return Fields.TankId[this]; }
            set { Fields.TankId[this] = value; }
        }

        [DisplayName("Movement Type"), Size(50)]
        public String MovementType
        {
            get { return Fields.MovementType[this]; }
            set { Fields.MovementType[this] = value; }
        }

        [DisplayName("Billof Lading"), Size(50)]
        public String BillofLading
        {
            get { return Fields.BillofLading[this]; }
            set { Fields.BillofLading[this] = value; }
        }

        [DisplayName("Start Weigh Time")]
        public DateTime? StartWeighTime
        {
            get { return Fields.StartWeighTime[this]; }
            set { Fields.StartWeighTime[this] = value; }
        }

        [DisplayName("Start Pump Time")]
        public DateTime? StartPumpTime
        {
            get { return Fields.StartPumpTime[this]; }
            set { Fields.StartPumpTime[this] = value; }
        }

        [DisplayName("End Pump Time")]
        public DateTime? EndPumpTime
        {
            get { return Fields.EndPumpTime[this]; }
            set { Fields.EndPumpTime[this] = value; }
        }

        [DisplayName("End Weigh Time")]
        public DateTime? EndWeighTime
        {
            get { return Fields.EndWeighTime[this]; }
            set { Fields.EndWeighTime[this] = value; }
        }

        [DisplayName("Operator Id"), Column("OperatorID")]
        public Int32? OperatorId
        {
            get { return Fields.OperatorId[this]; }
            set { Fields.OperatorId[this] = value; }
        }

        [DisplayName("Movement Start Date")]
        public DateTime? MovementStartDate
        {
            get { return Fields.MovementStartDate[this]; }
            set { Fields.MovementStartDate[this] = value; }
        }

        [DisplayName("Entrance Location"), Size(50)]
        public String EntranceLocation
        {
            get { return Fields.EntranceLocation[this]; }
            set { Fields.EntranceLocation[this] = value; }
        }

        [DisplayName("Previous Material Id"), Column("PreviousMaterialID"), Size(50)]
        public String PreviousMaterialId
        {
            get { return Fields.PreviousMaterialId[this]; }
            set { Fields.PreviousMaterialId[this] = value; }
        }

        [DisplayName("Movement Area"), Size(50)]
        public String MovementArea
        {
            get { return Fields.MovementArea[this]; }
            set { Fields.MovementArea[this] = value; }
        }

        [DisplayName("Movement End Date")]
        public DateTime? MovementEndDate
        {
            get { return Fields.MovementEndDate[this]; }
            set { Fields.MovementEndDate[this] = value; }
        }

        [DisplayName("Gross Weight")]
        public Double? GrossWeight
        {
            get { return Fields.GrossWeight[this]; }
            set { Fields.GrossWeight[this] = value; }
        }

        [DisplayName("Tare Weight")]
        public Double? TareWeight
        {
            get { return Fields.TareWeight[this]; }
            set { Fields.TareWeight[this] = value; }
        }

        [DisplayName("Notes")]
        public String Notes
        {
            get { return Fields.Notes[this]; }
            set { Fields.Notes[this] = value; }
        }

        [DisplayName("Movement Quantity")]
        public Double? MovementQuantity
        {
            get { return Fields.MovementQuantity[this]; }
            set { Fields.MovementQuantity[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.TrailerNumber; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SrlBulkMovementRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field CarrierId;
            public StringField TrailerNumber;
            public Int32Field TankId;
            public StringField MovementType;
            public StringField BillofLading;
            public DateTimeField StartWeighTime;
            public DateTimeField StartPumpTime;
            public DateTimeField EndPumpTime;
            public DateTimeField EndWeighTime;
            public Int32Field OperatorId;
            public DateTimeField MovementStartDate;
            public StringField EntranceLocation;
            public StringField PreviousMaterialId;
            public StringField MovementArea;
            public DateTimeField MovementEndDate;
            public DoubleField GrossWeight;
            public DoubleField TareWeight;
            public StringField Notes;
            public DoubleField MovementQuantity;
		}
    }
}
