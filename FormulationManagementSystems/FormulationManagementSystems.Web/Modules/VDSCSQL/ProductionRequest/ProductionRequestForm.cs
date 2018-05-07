
namespace FormulationManagementSystems.VDSCSQL.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("VDSCSQL.ProductionRequest")]
    [BasedOnRow(typeof(Entities.ProductionRequestRow), CheckNames = true)]
    public class ProductionRequestForm
    {
        public DateTime DateCreated { get; set; }
        public Int32 CustomerId { get; set; }
        public Int32 MaterialId { get; set; }
        public Int32 RecipeId { get; set; }
        public Int32 VdscAreaId { get; set; }
        public Int32 QuantityRequested { get; set; }
        public Int32 Operators { get; set; }
        public String Status { get; set; }
        public DateTime BeginDate { get; set; }
        public DateTime EndDate { get; set; }
        public String Attachments { get; set; }
        public String Notes { get; set; }
        public Boolean UseAlternateRecipe { get; set; }
        public Boolean ComputeBatch { get; set; }
    }
}