
namespace FormulationManagementSystems.VDSCSQL.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("VDSCSQL/Customer"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CustomerRow))]
    public class CustomerController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/VDSCSQL/Customer/CustomerIndex.cshtml");
        }
    }
}