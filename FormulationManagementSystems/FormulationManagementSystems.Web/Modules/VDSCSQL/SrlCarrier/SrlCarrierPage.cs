
namespace FormulationManagementSystems.VDSCSQL.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("VDSCSQL/SrlCarrier"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SrlCarrierRow))]
    public class SrlCarrierController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/VDSCSQL/SrlCarrier/SrlCarrierIndex.cshtml");
        }
    }
}