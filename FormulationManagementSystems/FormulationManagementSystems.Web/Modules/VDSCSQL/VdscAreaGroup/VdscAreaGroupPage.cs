
namespace FormulationManagementSystems.VDSCSQL.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("VDSCSQL/VdscAreaGroup"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.VdscAreaGroupRow))]
    public class VdscAreaGroupController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/VDSCSQL/VdscAreaGroup/VdscAreaGroupIndex.cshtml");
        }
    }
}