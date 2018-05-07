
namespace FormulationManagementSystems.VDSCSQL.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("VDSCSQL/StepInstruction"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.StepInstructionRow))]
    public class StepInstructionController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/VDSCSQL/StepInstruction/StepInstructionIndex.cshtml");
        }
    }
}