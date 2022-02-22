using System;
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
    public class UserController : ControllerBase
    {
        /*
         each time you get an HttpClient from the IHttpClientFactory, a new instance is returned,
         but each HttpClient uses an HttpMessageHandler that's pooled and reused by the IHttpClientFactory to reduce
         resource consumption as long as the HttpMessageHandler's liftime hasn't expired
         
         in a dependency injection eneabled app avoids: resource exhaustion by pooling HttpMessageHandler instances
         */
        private readonly IHttpClientFactory _httpClientFactory;

        public UserController(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }
        
        [HttpGet]
        public async Task<IEnumerable<UserModel>> GetUsers()
        {
            var request = new HttpRequestMessage(HttpMethod.Get, "https://jsonplaceholder.typicode.com/users");
            var httpClient = _httpClientFactory.CreateClient();
            
            HttpResponseMessage httpResponseMessage = await httpClient.SendAsync(request);
            var content = await httpResponseMessage.Content.ReadAsStringAsync();
            
            var users = JsonSerializer.Deserialize<List<UserModel>>(content);

            return users;
        }
    }
}