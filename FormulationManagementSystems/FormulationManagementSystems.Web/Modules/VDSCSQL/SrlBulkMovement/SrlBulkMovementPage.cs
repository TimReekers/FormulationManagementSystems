
namespace FormulationManagementSystems.VDSCSQL.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("VDSCSQL/SrlBulkMovement"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SrlBulkMovementRow))]
    public class SrlBulkMovementController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/VDSCSQL/SrlBulkMovement/SrlBulkMovementIndex.cshtml");
        }
    }
}