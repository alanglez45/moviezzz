using System.ComponentModel.DataAnnotations.Schema;

namespace MoviesApi.Models
{
    public class Favorite
    {
        [ForeignKey("User")]
        public int UserId { get; set; }

        [ForeignKey("Media")]
        public int MediaId { get; set; }

        public DateTime AddedAt { get; set; } = DateTime.UtcNow;

        // Propiedades de navegación
        public User User { get; set; }
        public Media Media { get; set; }
    }
}