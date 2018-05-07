
namespace FormulationManagementSystems.VDSCSQL.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("VDSCSQL/BulkBatch"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.BulkBatchRow))]
    public class BulkBatchController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/VDSCSQL/BulkBatch/BulkBatchIndex.cshtml");
        }
    }
}