
namespace FormulationManagementSystems.VDSCSQL.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("VDSCSQL/SrcDstPath"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SrcDstPathRow))]
    public class SrcDstPathController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/VDSCSQL/SrcDstPath/SrcDstPathIndex.cshtml");
        }
    }
}