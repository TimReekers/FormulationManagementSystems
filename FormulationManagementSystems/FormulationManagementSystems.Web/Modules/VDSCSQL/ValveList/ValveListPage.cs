
namespace FormulationManagementSystems.VDSCSQL.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("VDSCSQL/ValveList"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ValveListRow))]
    public class ValveListController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/VDSCSQL/ValveList/ValveListIndex.cshtml");
        }
    }
}