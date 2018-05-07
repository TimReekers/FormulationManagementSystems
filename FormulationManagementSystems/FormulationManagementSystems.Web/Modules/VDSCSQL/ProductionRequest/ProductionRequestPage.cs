
namespace FormulationManagementSystems.VDSCSQL.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("VDSCSQL/ProductionRequest"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ProductionRequestRow))]
    public class ProductionRequestController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/VDSCSQL/ProductionRequest/ProductionRequestIndex.cshtml");
        }
    }
}