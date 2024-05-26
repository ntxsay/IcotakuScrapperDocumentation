using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace IcotakuScrapperDocumentation.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AnimeController : ControllerBase
    {
        // GET: api/<AnimeController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
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
