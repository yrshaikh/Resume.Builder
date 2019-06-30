

using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [Route("healthcheck")]
    public class HealthCheckController : Controller
    {
        [HttpGet]
        [Route("test")]
        public IActionResult Index()
        {
            return Ok("All is well");
        }
    }
}
