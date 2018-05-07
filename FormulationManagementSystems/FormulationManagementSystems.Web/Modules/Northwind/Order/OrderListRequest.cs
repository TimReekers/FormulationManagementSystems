using Serenity.Services;

namespace FormulationManagementSystems.Northwind
{
    public class OrderListRequest : ListRequest
    {
        public int? ProductID { get; set; }
    }
}