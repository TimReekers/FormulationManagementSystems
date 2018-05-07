
namespace FormulationManagementSystems.VDSCSQL.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("VDSCSQL/RecipePhase"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.RecipePhaseRow))]
    public class RecipePhaseController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/VDSCSQL/RecipePhase/RecipePhaseIndex.cshtml");
        }
    }
}