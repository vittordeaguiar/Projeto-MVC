using Microsoft.AspNetCore.Mvc;

namespace projeto_mvc.Controllers
{
    public class CalculadoraController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Soma(double valor1, double valor2)
        {
            var total = valor1 + valor2;
            return Ok(total);
        }

        public IActionResult Subtrai(double valor1, double valor2)
        {
            var total = valor1 - valor2;
            return Ok(total);
        }
        
        public IActionResult Multiplica(double valor1, double valor2)
        {
            var total = valor1 * valor2;
            return Ok(total);
        }

        public IActionResult Divide(double valor1, double valor2)
        {
            var total = valor1 / valor2;
            return Ok(total);
        }
    }
}
