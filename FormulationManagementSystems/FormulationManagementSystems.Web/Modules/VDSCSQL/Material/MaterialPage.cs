
namespace FormulationManagementSystems.VDSCSQL.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("VDSCSQL/Material"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.MaterialRow))]
    public class MaterialController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/VDSCSQL/Material/MaterialIndex.cshtml");
        }
    }
}