using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using sample_app.Controllers.Models;

namespace sample_app.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AlbumController : ControllerBase
    {
        private readonly IHttpClientFactory _httpClientFactory;

        public AlbumController(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }
        
        [HttpGet("{userId}")]
        public async Task<IEnumerable<AlbumModel>> GetUserAlbums(int userId)
        {
            var request = new HttpRequestMessage(
                HttpMethod.Get,
                "https://jsonplaceholder.typicode.com/users/" + userId + "/albums"
            );
            
            HttpClient httpClient = _httpClientFactory.CreateClient();
            
            HttpResponseMessage httpResponseMessage = await httpClient.SendAsync(request);
            var content = await httpResponseMessage.Content.ReadAsStringAsync();
            
            var albums = JsonSerializer.Deserialize<List<AlbumModel>>(content);

            foreach (var album in albums)
            {
                request = new HttpRequestMessage(
                    HttpMethod.Get,
                    "https://jsonplaceholder.typicode.com/photos?albumId=" + album.Id
                );

                httpResponseMessage = await httpClient.SendAsync(request);
                content = await httpResponseMessage.Content.ReadAsStringAsync();

                var photos = JsonSerializer.Deserialize<List<PhotoModel>>(content);
                if (photos.Count > 0)
                {
                    album.Thumbnail = photos.FirstOrDefault();
                }
            }
            
            return albums;
        }
    }
}