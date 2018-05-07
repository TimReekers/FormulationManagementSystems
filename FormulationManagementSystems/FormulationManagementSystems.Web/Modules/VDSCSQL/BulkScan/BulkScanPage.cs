
namespace FormulationManagementSystems.VDSCSQL.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("VDSCSQL/BulkScan"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.BulkScanRow))]
    public class BulkScanController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/VDSCSQL/BulkScan/BulkScanIndex.cshtml");
        }
    }
}