using System.Text.Json;
using AppsHelpers;
using IcotakuScrapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using DateTimesLib;
using LogLevel = AppsHelpers.LogLevel;

namespace IcotakuScrapperDocumentation.Server.Controllers
{
    [Route("api/anime")]
    [ApiController]
    public class AnimeController : ControllerBase
    {
        private readonly ILogger<AnimeController> _logger;
        
        public AnimeController(ILogger<AnimeController> logger)
        {
            _logger = logger;
        }
        
        [HttpGet("ScrapSheetByUrl")]
        public async Task<ActionResult<Dictionary<string, string?>>> ScrapSheetByUrlResultAsync([FromQuery] string url)
        {
            Dictionary<string, string?> results;
            List<LogState> logs = new();
            //Récupère les informations de l'anime via l'url de la fiche
            var anime = await Anime.ScrapAsync(url, IcotakuScrapper.Objects.Scrapping.AnimeScrapingOptions.Basic, new Progress<LogState>((state) =>
            {
                switch (state.Level)
                {
                    
                    case LogLevel.Info:
                    case LogLevel.Success:
                        _logger.LogInformation(state.Message);
                        break;
                    case LogLevel.Warning:
                        _logger.LogWarning(state.Message);
                        break;
                    case LogLevel.Error:
                        _logger.LogError(state.Message);
                        break;
                    default:
                        throw new ArgumentOutOfRangeException();
                }
                
                logs.Add(state);
            }));

            if (anime is null || logs.Any(w => w.Level == LogLevel.Error))
            {
                var n = new
                {
                    errors = logs.Where(w => w.Level != LogLevel.Info && w.Level != LogLevel.Success)
                        .Select(log => log.Message)
                };
                var json = JsonSerializer.Serialize(n);
                return BadRequest(json);
            }

            results =  new Dictionary<string, string?>
            {
                {"Name", anime.Name},
                {"EpisodeCount", anime.EpisodeCount.ToString()},
                {"Synopsis", anime.Synopsis},
                {"ReleaseDate", anime.ReleaseDate.GetDateLiteral()}
            };

            return results;
        }

        // GET api/<AnimeController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<AnimeController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<AnimeController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<AnimeController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
