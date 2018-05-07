
namespace FormulationManagementSystems.VDSCSQL.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("VDSCSQL/AdditonForm"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.AdditonFormRow))]
    public class AdditonFormController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/VDSCSQL/AdditonForm/AdditonFormIndex.cshtml");
        }
    }
}