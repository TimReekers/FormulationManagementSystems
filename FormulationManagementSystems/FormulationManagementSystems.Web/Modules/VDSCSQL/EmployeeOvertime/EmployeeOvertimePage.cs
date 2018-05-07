
namespace FormulationManagementSystems.VDSCSQL.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("VDSCSQL/EmployeeOvertime"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.EmployeeOvertimeRow))]
    public class EmployeeOvertimeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/VDSCSQL/EmployeeOvertime/EmployeeOvertimeIndex.cshtml");
        }
    }
}