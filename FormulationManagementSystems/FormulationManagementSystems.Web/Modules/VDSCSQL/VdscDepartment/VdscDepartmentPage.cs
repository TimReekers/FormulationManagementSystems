
namespace FormulationManagementSystems.VDSCSQL.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("VDSCSQL/VdscDepartment"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.VdscDepartmentRow))]
    public class VdscDepartmentController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/VDSCSQL/VdscDepartment/VdscDepartmentIndex.cshtml");
        }
    }
}