using Microsoft.AspNetCore.Mvc;

namespace Projeto_MVC.Controllers
{
    public class AboutController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
