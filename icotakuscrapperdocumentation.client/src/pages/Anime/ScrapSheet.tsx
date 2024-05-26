import TabComponent, {TabsProps} from "../../components/Tab.tsx";
const AnimeScrapSheetPage = () => {
    
    /*const scrapAnimeFromUrl = async (url: string) => {
        const response = await fetch(`https://localhost:5001/api/anime/scrap?url=${url}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return await response.json();
    }*/
    
    const codeScrapSheetByUrl : string = 
        `//Récupère les informations de l'anime via l'url de la fiche
var anime = await Anime.ScrapAsync("https://anime.icotaku.com/anime/5633/Dr-STONE.html");

if (anime is null)
{
    Console.WriteLine("L'anime n'a pas été trouvé");
    return;
}

//Obtient le nom de l'anime
Console.WriteLine(anime.Name);

//Obtient le nombre d'épisodes
Console.WriteLine(anime.EpisodeCount);

//obtient le synopsis
Console.WriteLine(anime.Synopsis);

//Obtient la date de sortie
Console.WriteLine(anime.ReleaseDate.ToString());

//...
`;

    const tabScrapFromUrl : TabsProps = {
        idName : "scrap_from_url",
        items : [
            { isSelected: true, id: 1, header: "C#", content: <pre><code className="language-csharp">{codeScrapSheetByUrl}</code></pre> },
        ]
    };
    
    return (
        <>
        <header className="documentation-main-header">
            <div className="title-container">
                <span className="emoji">&#x1F578;</span>
                <h1>Scrapper une fiche</h1>
            </div>
            <p className="description">Vous découvrirez, tout au long de cette section, comment scrapper une fiche.</p>
        </header>
        <div className="alert-container alert-info">
            <i className="fa-solid fa-circle-info"></i>
            <p>Lorsque que vous scrappez une fiche, elle est automatiquement stockée dans la base de données afin de limiter les appels vers le site d'Icotaku.</p>
        </div>
        <section id="scrap_from_url" className="docSection --level1">
            <header className="docSection__header">
                <h2>Scrapper une fiche via son url</h2>
            </header>
            <p>Dans l'exemple suivant, vous verrez comment scrapper la fiche de l'animé Dr. Stone via l'url complète de sa fiche <a href="https://anime.icotaku.com/anime/5633/Dr-STONE.html">https://anime.icotaku.com/anime/5633/Dr-STONE.html</a>. </p>
            <TabComponent idName={tabScrapFromUrl.idName} items={tabScrapFromUrl.items}/>
    <table>
        <thead>
        <tr>
            <th>Paramètre</th>
            <th>Type</th>
            <th>Requis</th>
            <th>Description</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>
                <code>icotakuUrl</code>
            </td>
            <td><code>string</code></td>
            <td>Oui</td>
            <td>L'url de la fiche de l'animé sur le site d'Icotaku</td>
        </tr>
        <tr>
            <td>
                <code>options</code>
            </td>
            <td>
                <code>AnimeScrapingOptions</code>
            </td>
            <td>Non</td>
            <td>indique quelles informations de l'animé doivent être scrapées</td>
        </tr>
        </tbody>
    </table>
</section>
        </>
    );
}

export default AnimeScrapSheetPage;