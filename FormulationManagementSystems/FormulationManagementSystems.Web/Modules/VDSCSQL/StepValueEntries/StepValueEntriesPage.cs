
namespace FormulationManagementSystems.VDSCSQL.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("VDSCSQL/StepValueEntries"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.StepValueEntriesRow))]
    public class StepValueEntriesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/VDSCSQL/StepValueEntries/StepValueEntriesIndex.cshtml");
        }
    }
}