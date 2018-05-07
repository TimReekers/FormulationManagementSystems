
namespace FormulationManagementSystems.VDSCSQL.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("VDSCSQL/SrlBulkStorageTankData"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SrlBulkStorageTankDataRow))]
    public class SrlBulkStorageTankDataController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/VDSCSQL/SrlBulkStorageTankData/SrlBulkStorageTankDataIndex.cshtml");
        }
    }
}