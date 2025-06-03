using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace MoviesApi.Models
{
    public class Genre
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(50)]
        public string Name { get; set; }

        // Relaciones
        public ICollection<MediaGenre> MediaGenres { get; set; }
    }
}