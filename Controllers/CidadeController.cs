using Microsoft.AspNetCore.Mvc;

namespace projeto_mvc.Controllers
{
    public class CidadeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}