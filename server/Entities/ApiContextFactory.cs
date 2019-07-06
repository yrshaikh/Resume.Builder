using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace WebApi.Entities
{
    public class ApiContextFactory : IDesignTimeDbContextFactory<ApplicationDbContext>
    {
        public ApiContextFactory()
        {
        }

        public ApplicationDbContext CreateDbContext(string[] args)
        {
            // todo : use conn string from config.
            var builder = new DbContextOptionsBuilder<ApplicationDbContext>();
            builder.UseMySql("Server=127.0.0.1;Database=db;Uid=root;Pwd=mysql;");
            return new ApplicationDbContext(builder.Options);
        }
    }
}