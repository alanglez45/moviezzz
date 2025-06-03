using Microsoft.EntityFrameworkCore;
using MoviesApi.Data;
using MoviesApi.MoviesMapper;
using MoviesApi.Repositories.Users;

var builder = WebApplication.CreateBuilder(args);

// DB connection
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));


// Agregar los repositorios
builder.Services.AddScoped<IUserReposiroty, UserRepository>();

// Agregar el AutoMApper
builder.Services.AddAutoMapper(typeof(MoviesMapper));

builder.Services.AddSwaggerGen();
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();

builder.Services.AddScoped<JwtHelper>();

builder.Services.AddCors(p => p.AddPolicy("CorsPolicy", policy =>
{
    policy.WithOrigins("http://localhost:4200")
    .AllowAnyMethod()
    .AllowAnyHeader();
}));


var app = builder.Build();


app.MapGet("/test-db", (AppDbContext db) => 
    db.Database.CanConnect() ? "Conexión exitosa" : "Error");

// Configurar Swagger en la aplicación
if (app.Environment.IsDevelopment()) // Solo muestra Swagger en desarrollo
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
// http://localhost:5034/swagger/index.html

app.UseAuthentication();
app.UseAuthorization();

app.UseCors("CorsPolicy");


app.MapControllers();

app.Run();

