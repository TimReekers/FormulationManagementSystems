
namespace FormulationManagementSystems.VDSCSQL.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("VDSCSQL/Recipe"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.RecipeRow))]
    public class RecipeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/VDSCSQL/Recipe/RecipeIndex.cshtml");
        }
    }
}