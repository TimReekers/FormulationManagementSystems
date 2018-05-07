
namespace FormulationManagementSystems.VDSCSQL.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("VDSCSQL.Material")]
    [BasedOnRow(typeof(Entities.MaterialRow), CheckNames = true)]
    public class MaterialForm
    {
        public String VdscCode { get; set; }
        public String Description { get; set; }
        public Int32 CustomerId { get; set; }
        public String CustomerIdent { get; set; }
        public String Gmid { get; set; }
        public String CustomerPartNumber { get; set; }
        public String UnitOfMeasure { get; set; }
        public Double Density { get; set; }
        public Double UnitQty { get; set; }
        public String MaterialCode { get; set; }
        public String MaterialType { get; set; }
        public Double ProductionGoal { get; set; }
        public Boolean Discontinued { get; set; }
        public String Msds { get; set; }
        public Double PalletSpaceWt { get; set; }
        public Boolean BulkSr { get; set; }
        public Boolean Drysr { get; set; }
        public Boolean HotBoxItem { get; set; }
        public String Barcode { get; set; }
    }
}