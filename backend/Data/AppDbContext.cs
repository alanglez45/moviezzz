using Microsoft.EntityFrameworkCore;
using MoviesApi.Models;
namespace MoviesApi.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {

    }

    // agregar modelos, cada modelo corresponde a una tabla
    // Define tus tablas como DbSet
    public DbSet<Media> Media { get; set; }
    public DbSet<User> Users { get; set; }
    public DbSet<Genre> Genres { get; set; }
    public DbSet<Favorite> Favorites { get; set; }
    public DbSet<MediaGenre> MediaGenres { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // Configuración para la tabla Favorites (clave primaria compuesta)
        modelBuilder.Entity<Favorite>()
            .HasKey(f => new { f.UserId, f.MediaId });

        // Configuración para la tabla MediaGenres (clave primaria compuesta)
        modelBuilder.Entity<MediaGenre>()
            .HasKey(mg => new { mg.MediaId, mg.GenreId });

        // Relaciones opcionales (si necesitas configurar comportamientos específicos)
        modelBuilder.Entity<Favorite>()
            .HasOne(f => f.User)
            .WithMany(u => u.Favorites)
            .HasForeignKey(f => f.UserId)
            .OnDelete(DeleteBehavior.Cascade);

        modelBuilder.Entity<Favorite>()
            .HasOne(f => f.Media)
            .WithMany(m => m.Favorites)
            .HasForeignKey(f => f.MediaId)
            .OnDelete(DeleteBehavior.Cascade);
    }   
}