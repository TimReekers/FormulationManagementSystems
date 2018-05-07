
namespace FormulationManagementSystems.VDSCSQL.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("VDSCSQL/ValueEntriesData"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ValueEntriesDataRow))]
    public class ValueEntriesDataController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/VDSCSQL/ValueEntriesData/ValueEntriesDataIndex.cshtml");
        }
    }
}