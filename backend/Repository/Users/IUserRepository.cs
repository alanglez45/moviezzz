
using MoviesApi.DTOs;
using MoviesApi.DTOs.Auth;
using MoviesApi.DTOs.User;
using MoviesApi.Models;

namespace MoviesApi.Repositories.Users
{
    public interface IUserReposiroty
    {
        ICollection<User> GetUsers();
        User GetUser(int id);
        bool IsUniqueUser(string email);
        Task<LoginResponseDto> Login(LoginRequestDto loginRequest);
        Task<User> Register(RegisterUserDto registerRequest);
    }
}