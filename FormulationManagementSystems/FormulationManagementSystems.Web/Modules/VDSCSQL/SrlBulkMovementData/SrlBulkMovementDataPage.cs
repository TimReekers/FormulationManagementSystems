
namespace FormulationManagementSystems.VDSCSQL.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("VDSCSQL/SrlBulkMovementData"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SrlBulkMovementDataRow))]
    public class SrlBulkMovementDataController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/VDSCSQL/SrlBulkMovementData/SrlBulkMovementDataIndex.cshtml");
        }
    }
}