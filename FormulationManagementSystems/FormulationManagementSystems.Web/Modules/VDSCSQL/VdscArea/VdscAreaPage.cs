
namespace FormulationManagementSystems.VDSCSQL.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("VDSCSQL/VdscArea"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.VdscAreaRow))]
    public class VdscAreaController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/VDSCSQL/VdscArea/VdscAreaIndex.cshtml");
        }
    }
}