
namespace FormulationManagementSystems.VDSCSQL.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("VDSCSQL"), Module("VDSCSQL"), TableName("[dbo].[SRL_BulkMovementData]")]
    [DisplayName("Srl Bulk Movement Data"), InstanceName("Srl Bulk Movement Data")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class SrlBulkMovementDataRow : Row, IIdRow
    {
        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Srl Bulk Movement Id"), Column("SRL_BulkMovementID")]
        public Int32? SrlBulkMovementId
        {
            get { return Fields.SrlBulkMovementId[this]; }
            set { Fields.SrlBulkMovementId[this] = value; }
        }

        [DisplayName("Bulk Storage Tank Id"), Column("BulkStorageTankID")]
        public Int32? BulkStorageTankId
        {
            get { return Fields.BulkStorageTankId[this]; }
            set { Fields.BulkStorageTankId[this] = value; }
        }

        [DisplayName("Start Physical")]
        public Double? StartPhysical
        {
            get { return Fields.StartPhysical[this]; }
            set { Fields.StartPhysical[this] = value; }
        }

        [DisplayName("End Physical")]
        public Double? EndPhysical
        {
            get { return Fields.EndPhysical[this]; }
            set { Fields.EndPhysical[this] = value; }
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

        public static readonly RowFields Fields = new RowFields().Init();

        public SrlBulkMovementDataRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field SrlBulkMovementId;
            public Int32Field BulkStorageTankId;
            public DoubleField StartPhysical;
            public DoubleField EndPhysical;
            public DoubleField MovementQuantity;
		}
    }
}
