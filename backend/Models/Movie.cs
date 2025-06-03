using System.ComponentModel.DataAnnotations.Schema;

namespace MoviesApi.Models;

public class Movie
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Overview { get; set; }
    public string PosterPath { get; set; }
    public DateTime ReleaseDate { get; set; }
    [Column(TypeName = "decimal(3,1)")]
    public decimal VoteAverage { get; set; }
}