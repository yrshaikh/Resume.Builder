using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using WebApi.Entities;

namespace WebApi.Controllers
{
    [Route("Ef")]
    public class EfTestController : Controller
    {
        private readonly ApplicationDbContext _dbContext;

        public EfTestController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        [Route("read")]
        public IActionResult Read()
        {
            var top5 = _dbContext.EfTests.ToList().Take(5);
            return Ok(top5);
        }
        
        [HttpGet]
        [Route("insert")]
        public IActionResult Insert()
        {
            _dbContext.EfTests.Add(new EfTest
            {
                StartDate = DateTime.Now
            });
            _dbContext.SaveChanges();
            return Ok("Inserted 1 record successfully.");
        }
    }
}
