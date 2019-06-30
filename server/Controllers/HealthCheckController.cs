using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [AllowAnonymous]
    [Route("HealthCheck")]
    public class HealthCheckController : Controller
    {
        public string Index()
        {
            return "ok";
        }
    }
}
