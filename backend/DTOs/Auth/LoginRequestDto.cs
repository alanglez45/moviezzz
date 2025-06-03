using System.ComponentModel.DataAnnotations;

namespace MoviesApi.DTOs.Auth

{
    public class LoginRequestDto
    {
        [Required(ErrorMessage = "Email is required")]
        [EmailAddress(ErrorMessage = "Invalid email")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Password is required")]
        [MinLength(6, ErrorMessage = "at least 6 characters")]
        public string Password { get; set; }
    }
}