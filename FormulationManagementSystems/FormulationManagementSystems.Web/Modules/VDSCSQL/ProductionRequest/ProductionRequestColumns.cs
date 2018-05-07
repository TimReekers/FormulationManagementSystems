
namespace FormulationManagementSystems.VDSCSQL.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("VDSCSQL.ProductionRequest")]
    [BasedOnRow(typeof(Entities.ProductionRequestRow), CheckNames = true)]
    public class ProductionRequestColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public DateTime DateCreated { get; set; }
        public String CustomerCompany { get; set; }
        public String MaterialVdscCode { get; set; }
        public String RecipeDescription { get; set; }
        public String VdscArea { get; set; }
        public Int32 QuantityRequested { get; set; }
        public Int32 Operators { get; set; }
        [EditLink]
        public String Status { get; set; }
        public DateTime BeginDate { get; set; }
        public DateTime EndDate { get; set; }
        public String Attachments { get; set; }
        public String Notes { get; set; }
        public Boolean UseAlternateRecipe { get; set; }
        public Boolean ComputeBatch { get; set; }
    }
}