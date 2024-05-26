import '../../styles/pages/Anime/scrapSheet.scss';
import TabComponent, {TabsProps} from "../../components/Tab.tsx";
import AlertComponent, {AlertMode, AlertIcon} from "../../components/Alert.tsx";
import React, {useState} from "react";
import PaginationComponent from "../../components/Pagination.tsx";

interface AnimeBasicData {
    Name: string;
    EpisodeCount: number;
    Synopsis: string;
    ReleaseDate: string;
}

const AnimeScrapSheetPage = () => {
    const [isScrapFromUrlRunning, setIsScrapFromUrlRunning] = useState<boolean>(false);
    const [scrapFromUrlResults, setScrapFromUrlResults] = useState<React.ReactElement | null>(null);
    const [scrapFromUrlError, setScrapFromUrlError] = useState<string | null>(null);
    const [icotakuUrl, setIcotakuUrl] = useState<string>("https://anime.icotaku.com/anime/5633/Dr-STONE.html");

    const codeScrapSheetByUrl: string =
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

    /**
     * Se produit lorsque l'utilisateur modifie le champ de l'url d'Icotaku.
     * @param event
     */
    function OnIcotakuUrlChange(event: React.ChangeEvent<HTMLInputElement>) {
        setIcotakuUrl(event.target.value);
    }

    /**
     * Se produit lorsque l'utilisateur clique sur le bouton "Essayez-le".
     * Scrappe la fiche de l'animé via l'url fournie.
     */
    async function OnPlaygroundScrapUrl() {
        setIsScrapFromUrlRunning(true);
        try {
            const response = await fetch(`https://localhost:7112/api/anime/ScrapSheetByUrl?url=${icotakuUrl}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            
            if (!response.ok) {
                console.error(response);
                const jsonError = await response.json();
                console.log(jsonError);
                setIsScrapFromUrlRunning(false);
                setScrapFromUrlError(jsonError.errors[0]);
                return;
            }
            
            const jsonData: AnimeBasicData = await response.json();
            console.log(jsonData);
            const formatData : React.ReactElement = <ul>
                <li><strong>Nom: </strong>{jsonData.Name}</li>
                <li><strong>Nombre d'épisodes: </strong>{jsonData.EpisodeCount}</li>
                <li><strong>Synopsis: </strong>{jsonData.Synopsis}</li>
                <li><strong>Date de sortie: </strong>{jsonData.ReleaseDate}</li>
            </ul>
            
            setScrapFromUrlResults(formatData);
            setScrapFromUrlError(null);
        } catch (error) {
            if (typeof error === "string") {
                setScrapFromUrlError(error);
            } else if (error instanceof Error) {
                setScrapFromUrlError(error.message);
            } else {
                setScrapFromUrlError("Une erreur inconnue s'est produite lors de la tentative de récupération de la fiche de l'animé.");
            }
        } finally {
            setIsScrapFromUrlRunning(false);
        }
    }


    /**
     * Onglets de la section "Scrapper une fiche via son url"
     */
    const tabScrapFromUrl: TabsProps = {
        idName: "scrap_from_url",
        items: [
            {
                isSelected: true,
                id: 1,
                header: "C#",
                content: <pre><code className="language-csharp">{codeScrapSheetByUrl}</code></pre>
            },
            {
                isSelected: false, id: 2, header: <>Essayez-le</>, content: <>
                    <div className="playground-params-container">
                        {
                            !isScrapFromUrlRunning
                                ? <>
                                    <span>&gt;</span>
                                    <input type="url" placeholder="Entrez l'url de la fiche anime d'Icotaku"
                                           value={icotakuUrl} onChange={OnIcotakuUrlChange}/>
                                    <button onClick={OnPlaygroundScrapUrl}><i className="fa-solid fa-play"></i> Essayez-le
                                    </button>

                                </>
                                : <p><i className="fa-solid fa-spinner fa-spin"></i> L'opération de scraping de l'animé
                                    est en cours et peut prendre jusqu'à trois minutes en fonction de la qualité de votre
                                    connexion internet.</p>
                        }
                    </div>
                    <div className="playground-results">
                        {
                            scrapFromUrlError !== null
                                ? <AlertComponent content={scrapFromUrlError ?? ""} icon={AlertIcon.Danger}
                                                  mode={AlertMode.Danger}/>
                                : scrapFromUrlResults !== null
                                    ? scrapFromUrlResults
                                    : <></>
                        }
                        
                    </div>
                </>
            }
        ]
    };


    return (
        <>
            <header className="documentation-main-header">
                <div className="title-container">
                    <span className="emoji">&#x1F578;</span>
                    <h1>Scrapper une fiche</h1>
                </div>
                <p className="description">Vous découvrirez, tout au long de cette section, comment scrapper une
                    fiche.</p>
            </header>
            <div className="alert-container alert-info">
                <i className="fa-solid fa-circle-info"></i>
                <p>Lorsque que vous scrappez une fiche, elle est automatiquement stockée dans la base de données afin de
                    limiter les appels vers le site d'Icotaku.</p>
            </div>
            <section id="scrap_from_url" className="docSection --level1">
                <header className="docSection__header">
                    <h2>Scrapper une fiche via son url</h2>
                </header>
                <p>Dans l'exemple suivant, vous verrez comment scrapper la fiche de l'animé Dr. Stone via l'url complète
                    de sa fiche <a
                        href="https://anime.icotaku.com/anime/5633/Dr-STONE.html">https://anime.icotaku.com/anime/5633/Dr-STONE.html</a>.
                </p>
                <TabComponent idName={tabScrapFromUrl.idName} items={tabScrapFromUrl.items}/>
                <AlertComponent
                    content={<>Afin d'éviter les demandes intempestives ou inutiles vers les serveurs d'icotaku, évitez d'appeler la méthode <strong>ScrapAsync</strong> utilisez plutôt la méthode <strong>GetAsync</strong> qui scrappera l'animé uniquement s'il n'est pas disponible dans la base de données locale.</>}
                    icon={AlertIcon.Warning} mode={AlertMode.Warning}/>
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
            <PaginationComponent hasPreviousPage={true} hasNextPage={true} previousPageTitle={"Restituer une fiche"}
                                 nextPageTitle={"Restituer une fiche"} previousPageLink={"#"} nextPageLink={"#"}/>
        </>
    );
}

export default AnimeScrapSheetPage;