using AutoMapper;
using MoviesApi.Data;
using MoviesApi.DTOs;
using MoviesApi.DTOs.Auth;
using MoviesApi.DTOs.User;
using MoviesApi.Models;


namespace MoviesApi.Repositories.Users
{
    public class UserRepository : IUserReposiroty
    {
        private readonly AppDbContext _bd;
        // private string _secretKey;
        private readonly IMapper _mapper;
        private readonly JwtHelper _jwtHelper;

        //IConfiguration accede a appsettings desde cualquier lugar
        public UserRepository(AppDbContext bd, /* IConfiguration config */ IMapper mapper, JwtHelper jwtHelper)
        {
            _bd = bd;
            _mapper = mapper;
            _jwtHelper = jwtHelper; 
            // _secretKey = config.GetValue<string>("ApiSettings:secretKey");
        }
        public User GetUser(int id)
        {
            return _bd.Users.FirstOrDefault(user => user.Id == id);
        }

        public ICollection<User> GetUsers()
        {
            return _bd.Users.OrderBy(user => user.Id).ToList();
        }

        public bool IsUniqueUser(string email)
        {
            var user = _bd.Users.FirstOrDefault(user => user.Email == email);
            if (user == null)
            {
                return true;
            }
            return false;
        }

        public async Task<LoginResponseDto> Login(LoginRequestDto loginRequest)
        {
             var user = _bd.Users.FirstOrDefault(u => u.Email == loginRequest.Email);

            if (user == null)
            {
                // Usuario no encontrado
                return null;
            }

            // Verificar que la contraseña proporcionada coincide con el hash en la base de datos
            bool isPasswordValid = BCrypt.Net.BCrypt.Verify(loginRequest.Password, user.Password);
            
            if (!isPasswordValid)
            {
                // Contraseña incorrecta
                return null;
            }

            var token = _jwtHelper.GenerateJwtToken(user, 2); // 2 horas de expiración


           
            return new LoginResponseDto()
            {
                User = _mapper.Map<UserDto>(user),
                Token = token
            };
        }

        public async Task<User> Register(RegisterUserDto registerRequest)
        {
            var hashedPassword = BCrypt.Net.BCrypt.HashPassword(registerRequest.Password);

            User newUser = new User()
            {
                Name = registerRequest.Name,
                Email = registerRequest.Email,
                Password = hashedPassword,
            };

            _bd.Users.Add(newUser);
            await _bd.SaveChangesAsync();
            newUser.Password = hashedPassword;
            return newUser;
        }
    }

}