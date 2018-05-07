
namespace FormulationManagementSystems.VDSCSQL.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("VDSCSQL/EmployeePhoto"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.EmployeePhotoRow))]
    public class EmployeePhotoController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/VDSCSQL/EmployeePhoto/EmployeePhotoIndex.cshtml");
        }
    }
}