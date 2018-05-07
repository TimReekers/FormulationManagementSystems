
namespace FormulationManagementSystems.VDSCSQL.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("VDSCSQL"), Module("VDSCSQL"), TableName("[dbo].[ValvePositionMap]")]
    [DisplayName("Valve Position Map"), InstanceName("Valve Position Map")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class ValvePositionMapRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Src Dst Path"), ForeignKey("[dbo].[SrcDstPath]", "Id"), LeftJoin("jSrcDstPath"), TextualField("SrcDstPathSrcPath")]
        public Int32? SrcDstPathId
        {
            get { return Fields.SrcDstPathId[this]; }
            set { Fields.SrcDstPathId[this] = value; }
        }

        [DisplayName("Valve List"), ForeignKey("[dbo].[ValveList]", "Id"), LeftJoin("jValveList"), TextualField("ValveListValveName")]
        public Int32? ValveListId
        {
            get { return Fields.ValveListId[this]; }
            set { Fields.ValveListId[this] = value; }
        }

        [DisplayName("Valve Order Number")]
        public Int32? ValveOrderNumber
        {
            get { return Fields.ValveOrderNumber[this]; }
            set { Fields.ValveOrderNumber[this] = value; }
        }

        [DisplayName("Valve Position"), Size(255), NotNull, QuickSearch]
        public String ValvePosition
        {
            get { return Fields.ValvePosition[this]; }
            set { Fields.ValvePosition[this] = value; }
        }

        [DisplayName("Src Dst Path Src Tank Id"), Expression("jSrcDstPath.[SrcTankId]")]
        public Int32? SrcDstPathSrcTankId
        {
            get { return Fields.SrcDstPathSrcTankId[this]; }
            set { Fields.SrcDstPathSrcTankId[this] = value; }
        }

        [DisplayName("Src Dst Path Src Path"), Expression("jSrcDstPath.[SrcPath]")]
        public String SrcDstPathSrcPath
        {
            get { return Fields.SrcDstPathSrcPath[this]; }
            set { Fields.SrcDstPathSrcPath[this] = value; }
        }

        [DisplayName("Src Dst Path Dst Tank Id"), Expression("jSrcDstPath.[DstTankId]")]
        public Int32? SrcDstPathDstTankId
        {
            get { return Fields.SrcDstPathDstTankId[this]; }
            set { Fields.SrcDstPathDstTankId[this] = value; }
        }

        [DisplayName("Src Dst Path Dst Path"), Expression("jSrcDstPath.[DstPath]")]
        public String SrcDstPathDstPath
        {
            get { return Fields.SrcDstPathDstPath[this]; }
            set { Fields.SrcDstPathDstPath[this] = value; }
        }

        [DisplayName("Src Dst Path Path State"), Expression("jSrcDstPath.[PathState]")]
        public String SrcDstPathPathState
        {
            get { return Fields.SrcDstPathPathState[this]; }
            set { Fields.SrcDstPathPathState[this] = value; }
        }

        [DisplayName("Valve List Valve Name"), Expression("jValveList.[ValveName]")]
        public String ValveListValveName
        {
            get { return Fields.ValveListValveName[this]; }
            set { Fields.ValveListValveName[this] = value; }
        }

        [DisplayName("Valve List Valve Barcode"), Expression("jValveList.[ValveBarcode]")]
        public String ValveListValveBarcode
        {
            get { return Fields.ValveListValveBarcode[this]; }
            set { Fields.ValveListValveBarcode[this] = value; }
        }

        [DisplayName("Valve List Valve Description"), Expression("jValveList.[ValveDescription]")]
        public String ValveListValveDescription
        {
            get { return Fields.ValveListValveDescription[this]; }
            set { Fields.ValveListValveDescription[this] = value; }
        }

        [DisplayName("Valve List Bldg"), Expression("jValveList.[Bldg]")]
        public Int32? ValveListBldg
        {
            get { return Fields.ValveListBldg[this]; }
            set { Fields.ValveListBldg[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ValvePosition; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ValvePositionMapRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field SrcDstPathId;
            public Int32Field ValveListId;
            public Int32Field ValveOrderNumber;
            public StringField ValvePosition;

            public Int32Field SrcDstPathSrcTankId;
            public StringField SrcDstPathSrcPath;
            public Int32Field SrcDstPathDstTankId;
            public StringField SrcDstPathDstPath;
            public StringField SrcDstPathPathState;

            public StringField ValveListValveName;
            public StringField ValveListValveBarcode;
            public StringField ValveListValveDescription;
            public Int32Field ValveListBldg;
		}
    }
}
