using System.Net;

namespace MoviesApi.DTOs.Response
{
    public class ResponseAPI
    {
        public ResponseAPI()
        {
            ErrorMessages = new List<string>();

        }
        public HttpStatusCode StatusCode { get; set; }
        public bool IsSuccess { get; set; } = true;
        public List<string> ErrorMessages { get; set; }
        public object Result { get; set; }
    }
}