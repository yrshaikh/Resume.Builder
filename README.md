# Resume.Builder

## Server
1. Powered by .NET Core 2.2
2. Run using VS-Code/VS/Rider.
3. Should be hosted on http://localhost:5000
4. http://localhost:5000/health should return "ok"

## Client
1. Uses React & Redux with Bootstrap
2. Run npm install
3. Run npm start
4. Should be hosted on http://localhost:8080/

## Swagger

- Swagger URL - http://localhost:5000/swagger/index.html

## Docker

Using mysql as our database.

1. run `dotnet ef migrations add InitialCreate`.
2. Run `Update-Database` from the package manager console after selecting Database.EntityFramework project.

## Testing WebAPI

To make sure that EF migrations and Docker mysql are configured correctly
and working as expected, there are 2 test endpoints to use

1. http://localhost:5000/ef/insert will insert into the test table.
2. http://localhost:5000/ef/read will read top 5 rows from the test table.

