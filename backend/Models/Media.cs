using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MoviesApi.Models
{
    public class Media
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(200)]
        public string Title { get; set; }

        public string Overview { get; set; }

        [StringLength(255)]
        public string PosterPath { get; set; }

        public DateTime? ReleaseDate { get; set; }

        [Column(TypeName = "decimal(3,1)")]
        public decimal VoteAverage { get; set; }

        [Required]
        [StringLength(1)]
        public string MediaType { get; set; } // 'M' for Movie, 'S' for Series

        public int? Seasons { get; set; }

        public int? TotalEpisodes { get; set; }

        public int? DurationMinutes { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        // Relaciones
        public ICollection<MediaGenre> MediaGenres { get; set; }
        public ICollection<Favorite> Favorites { get; set; }
    }
}