
namespace FormulationManagementSystems.VDSCSQL.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("VDSCSQL/Employee"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.EmployeeRow))]
    public class EmployeeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/VDSCSQL/Employee/EmployeeIndex.cshtml");
        }
    }
}