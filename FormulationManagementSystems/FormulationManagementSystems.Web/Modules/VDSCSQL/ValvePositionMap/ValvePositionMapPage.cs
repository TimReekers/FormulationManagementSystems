
namespace FormulationManagementSystems.VDSCSQL.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("VDSCSQL/ValvePositionMap"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ValvePositionMapRow))]
    public class ValvePositionMapController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/VDSCSQL/ValvePositionMap/ValvePositionMapIndex.cshtml");
        }
    }
}