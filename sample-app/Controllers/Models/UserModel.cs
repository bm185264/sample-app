using System.Text.Json.Serialization;

namespace sample_app.Controllers.Models
{
    public class UserModel
    {
        [JsonPropertyName("id")]
        public int Id { get; set; }
        
        [JsonPropertyName("name")]
        public string Name { get; set; }
    }
}