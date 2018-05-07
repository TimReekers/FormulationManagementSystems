
namespace FormulationManagementSystems.VDSCSQL.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("VDSCSQL/Consumption"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ConsumptionRow))]
    public class ConsumptionController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/VDSCSQL/Consumption/ConsumptionIndex.cshtml");
        }
    }
}