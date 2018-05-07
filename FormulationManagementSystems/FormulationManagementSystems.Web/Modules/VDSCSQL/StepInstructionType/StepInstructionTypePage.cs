
namespace FormulationManagementSystems.VDSCSQL.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("VDSCSQL/StepInstructionType"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.StepInstructionTypeRow))]
    public class StepInstructionTypeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/VDSCSQL/StepInstructionType/StepInstructionTypeIndex.cshtml");
        }
    }
}