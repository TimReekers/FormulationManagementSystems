
namespace FormulationManagementSystems.VDSCSQL.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("VDSCSQL/SrlBulkTerminalClearance"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SrlBulkTerminalClearanceRow))]
    public class SrlBulkTerminalClearanceController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/VDSCSQL/SrlBulkTerminalClearance/SrlBulkTerminalClearanceIndex.cshtml");
        }
    }
}