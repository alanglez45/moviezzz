using AutoMapper;
using MoviesApi.DTOs.User;
using MoviesApi.Models;

namespace MoviesApi.MoviesMapper
{
    public class MoviesMapper : Profile
    {
        public MoviesMapper()
        {
            CreateMap<User, UserDto>().ReverseMap();
        }
    }
}