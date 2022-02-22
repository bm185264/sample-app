using System;
using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Routing.Matching;

namespace sample_app.Controllers.Models
{
    public class AlbumModel
    {
        [JsonPropertyName("id")]
        public int Id { get; set; }
        
        [JsonPropertyName("title")]
        public string Title { get; set; }

        public PhotoModel Thumbnail { get; set; }
    }
}