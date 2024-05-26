
namespace IcotakuScrapperDocumentation.Server
{
    public class Program
    {
        public static async Task Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            //Cors
            builder.Services.AddCors();

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            //Initialise la connexion à la base de données SQLite
            IcotakuScrapper.DatabaseHandler.InitializeConnexion(IcotakuScrapper.DatabaseHandler.TestDbFilePath);

            //Crée les tables de la base de données SQLite
            await IcotakuScrapper.DatabaseHandler.CreateTablesAsync();
            
            //Interdit l'accès au contenu adulte au sein de l'application
            IcotakuScrapper.Options.IsAccessingToAdultContent = false;
            
            //Autorise l'accès au contenu explicite au sein de l'application
            IcotakuScrapper.Options.IsAccessingToExplicitContent = true;
            
            var app = builder.Build();

            app.UseCors(x => x.AllowAnyHeader().AllowAnyMethod().WithOrigins("https://localhost:5173"));

            app.UseDefaultFiles();
            app.UseStaticFiles();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.MapFallbackToFile("/index.html");

            app.Run();
        }
    }
}
