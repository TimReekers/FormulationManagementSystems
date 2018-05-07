
namespace FormulationManagementSystems.VDSCSQL.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("VDSCSQL/SrlMsds"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SrlMsdsRow))]
    public class SrlMsdsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/VDSCSQL/SrlMsds/SrlMsdsIndex.cshtml");
        }
    }
}