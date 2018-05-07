
namespace FormulationManagementSystems.VDSCSQL.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("VDSCSQL/Manager"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ManagerRow))]
    public class ManagerController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/VDSCSQL/Manager/ManagerIndex.cshtml");
        }
    }
}