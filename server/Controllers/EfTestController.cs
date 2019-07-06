using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [Route("Ef")]
    public class EfTestController : Controller

    {
        [HttpGet]
        [Route("test")]
        public IActionResult Test()
        {
            return Ok("All is well too");
        }
    }
}
