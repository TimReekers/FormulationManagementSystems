
namespace FormulationManagementSystems.VDSCSQL.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("VDSCSQL/BulkStorageTank"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.BulkStorageTankRow))]
    public class BulkStorageTankController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/VDSCSQL/BulkStorageTank/BulkStorageTankIndex.cshtml");
        }
    }
}