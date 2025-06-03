using System.Net;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using MoviesApi.DTOs;
using MoviesApi.DTOs.Auth;
using MoviesApi.DTOs.Response;
using MoviesApi.DTOs.User;
using MoviesApi.Repositories.Users;

namespace MoviesApi.Controllers.Users
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUserReposiroty _usRepo;
        private readonly IMapper _mapper;
        protected ResponseAPI _responseApi;

        public UsersController(IUserReposiroty usRepo, IMapper mapper)
        {
            _usRepo = usRepo;
            _mapper = mapper;
            this._responseApi = new();
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status403Forbidden)]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public IActionResult GetUsers()
        {
            var userList = _usRepo.GetUsers();
            var userListDto = new List<UserDto>();
            foreach (var user in userList)
            {
                userListDto.Add(_mapper.Map<UserDto>(user));
            }
            return Ok(userListDto);
        }

        [HttpGet("{id:int}", Name = "Get")]
        [ProducesResponseType(StatusCodes.Status403Forbidden)]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public IActionResult GetUser(int id)
        {
            var user = _usRepo.GetUser(id);

            if (user == null)
            {
                return NotFound();
            }

            var userDto = _mapper.Map<UserDto>(user);

            return Ok(userDto);

        }

        [HttpPost("register")]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> Register([FromBody] RegisterUserDto user)
        {
            bool uniqueUser = _usRepo.IsUniqueUser(user.Email);
            if (!uniqueUser)
            {
                _responseApi.StatusCode = HttpStatusCode.BadRequest;
                _responseApi.IsSuccess = false;
                _responseApi.ErrorMessages.Add("This email is already asigned to a user");
                return BadRequest(_responseApi);
            }

            var newUser = await _usRepo.Register(user);
            if (newUser == null)
            {
                _responseApi.StatusCode = HttpStatusCode.BadRequest;
                _responseApi.IsSuccess = false;
                _responseApi.ErrorMessages.Add("Error during register");
                return BadRequest(_responseApi);
            }

            _responseApi.StatusCode = HttpStatusCode.OK;
            _responseApi.IsSuccess = true;
            return Ok(_responseApi);
        }
        
        [HttpPost("login")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> Login([FromBody] LoginRequestDto userLogin)
        {
            var loginResponse = await _usRepo.Login(userLogin);
            if (loginResponse == null || string.IsNullOrEmpty(loginResponse.Token))
            {
                _responseApi.StatusCode = HttpStatusCode.BadRequest;
                _responseApi.IsSuccess = false;
                _responseApi.ErrorMessages.Add("Either Email or password are incorrect");
                 return BadRequest(_responseApi); 
            }

            _responseApi.StatusCode = HttpStatusCode.OK;
            _responseApi.IsSuccess = true;
            _responseApi.Result = loginResponse;
            return Ok(_responseApi);
        }
    }
}