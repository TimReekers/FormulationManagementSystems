
namespace FormulationManagementSystems.VDSCSQL.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("VDSCSQL/BulkBatchData"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.BulkBatchDataRow))]
    public class BulkBatchDataController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/VDSCSQL/BulkBatchData/BulkBatchDataIndex.cshtml");
        }
    }
}