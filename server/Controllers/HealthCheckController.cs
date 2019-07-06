

using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [Route("health")]
    public class HealthCheckController : Controller
    {
        [HttpGet]
        public IActionResult Index()
        {
            return Ok("All is well");
        }
    }
}
