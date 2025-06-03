using System.ComponentModel.DataAnnotations.Schema;

namespace MoviesApi.Models
{
    public class MediaGenre
    {
        [ForeignKey("Media")]
        public int MediaId { get; set; }

        [ForeignKey("Genre")]
        public int GenreId { get; set; }

        // Propiedades de navegación
        public Media Media { get; set; }
        public Genre Genre { get; set; }
    }
}