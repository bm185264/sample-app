using System.Collections;
using System.Collections.Generic;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using sample_app.Controllers.Models;

namespace sample_app.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PhotoController : ControllerBase
    {
        private readonly IHttpClientFactory _httpClientFactory;

        public PhotoController(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }

        [HttpGet("{albumId}")]
        public async Task<IEnumerable<PhotoModel>> GetPhotos(int albumId)
        {
            var request = new HttpRequestMessage(
                HttpMethod.Get,
                "https://jsonplaceholder.typicode.com/photos?albumId=" + albumId
            );
            
            HttpClient httpClient = _httpClientFactory.CreateClient();
            
            HttpResponseMessage httpResponseMessage = await httpClient.SendAsync(request);
            var content = await httpResponseMessage.Content.ReadAsStringAsync();
            
            var photos = JsonSerializer.Deserialize<List<PhotoModel>>(content);
            
            return photos;
        }
    }
}