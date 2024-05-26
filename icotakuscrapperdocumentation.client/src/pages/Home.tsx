import AlertComponent, {AlertIcon, AlertMode} from '../components/Alert';
import QuoteComponent from '../components/Quote';
import PaginationComponent from '../components/Pagination';

const HomePage = () => {

    return (
        <>
            <header className="documentation-main-header">
                <div className="title-container">
                    <span className="emoji">👋🏾</span>
                    <h1>Bienvenue</h1>
                </div>
                <p className="description"></p>
            </header>
            <div className="icotaku-logo-container">
                <a href="https://anime.icotaku.com/"><img src="/logo-icotaku.png" id="welcome-img"
                                                          alt="logo d'icotaku pointant vers son site"/></a>
            </div>
            <section id="before-start" className="docSection --level1">
                <header className="docSection__header">
                    <h2 className="docSection__header__title">Avant de commencer</h2>
                </header>
                <AlertComponent
                    content={"Cet outils a été développé car le site Icotaku.com permet l’obtention de ses informations librement à condition de citer la source, je cite :"}
                    icon={AlertIcon.Info} mode={AlertMode.Info}/>
                <QuoteComponent
                    content={<>Puis-je utiliser le contenu d'Icotaku sur mon site ?<br/>A condition de citer la source,
                        vous pouvez utiliser/citer les synopsis/informations de Icotaku. Les textes d'Icotaku sont
                        disponibles sous les termes de la licence de documentation libre GNU (GFDL). Attention ! Toutes
                        les œuvres présentées sur Icotaku appartiennent à leurs auteurs respectifs. <a
                            href="https://communaute.icotaku.com/faq.html#6">Voir la FAQ Icotaku</a></>}/>
                <AlertComponent
                    content={"Je tiens à préciser que ce projet est une initiative personnelle et n'a pas été mandaté ou approuvé par Icotaku.com. L'utilisation du nom et du logo d'Icotaku.com dans le projet actuel est strictement limitée à une citation de source conforme à leurs directives."}
                    icon={AlertIcon.Warning} mode={AlertMode.Warning}/>
                <AlertComponent
                    content={"Le logo Icotaku et le nom Icotaku présenté dans la documentation appartiennent à l'association Icotaku."}
                    icon={AlertIcon.Info} mode={AlertMode.Info}/>
                <AlertComponent
                    content={"Toutes les œuvres présentées dans la documentation appartiennent à leurs auteurs respectifs."}
                    icon={AlertIcon.Info} mode={AlertMode.Info}/>
            </section>
            <section id="project-presentation" className="docSection --level1">
                <header className="docSection__header">
                    <h2 className="docSection__header__title">Présentation du projet</h2>
                </header>
                <p>Ce projet permet l'obtention et le stockage local de synopsis d'animés (pour le moment) depuis le
                    site web de l'association Icotaku vers une base de données SQLite via la méthode du scraping.</p>
                <section id="what-is-scraping" className="docSection --level2">
                    <header className="docSection__header">
                        <h3 className="docSection__header__title">Qu'est-ce que le scraping</h3>
                    </header>
                    <p>Le scraping (ou "scrappage") est une méthode utilisée pour extraire des données à partir du site
                        web d'Icotaku en analysant leur structure HTML ou en simulant le comportement d'un utilisateur
                        pour récupérer des informations.</p>
                </section>
                <section id="objectifs" className="docSection --level2">
                    <header className="docSection__header">
                        <h3 className="docSection__header__title">Objectif(s)</h3>
                    </header>
                    <p>Aucune API Icotaku officielle n'est disponible pour accéder à ses ressources, de ce fait ce
                        projet a pour objectif le développement d'une API non officiel et dédiée afin d'offrir aux
                        développeurs un accès structuré et fiable aux données d'Icotaku.</p>
                </section>
            </section>
            <section id="contribution" className="docSection --level1">
                <header className="docSection__header">
                    <h2 className="docSection__header__title">Contribution</h2>
                </header>
                <p>Si vous trouvez que ce projet mérite une contribution, alors on y va ensemble.</p>
            </section>
            <section id="soutient-icotaku" className="docSection --level1">
                <header className="docSection__header">
                    <h2 className="docSection__header__title">Soutenez Icotaku.com</h2>
                </header>
                <p>Sauf erreur de ma part mais je n'ai trouvé aucun autre site ou plateforme assez bien structuré(e) et
                    permettant l'utilisation de leur ressource gratuitement et sans contrepartie contraignante. Vraiment
                    un grand merci Icotaku !</p>
            </section>
            <section id="license" className="docSection --level1">
                <header className="docSection__header">
                    <h2 className="docSection__header__title">Utilisation</h2>
                </header>
                <p>Ce projet est libre, vous pouvez le modifier, simplement n'oubliez pas que la documentation
                    d'Icotaku.com est sous licence de documentation libre GNU (GFDL).</p>
            </section>
            <section id="exclusion" className="docSection --level1">
                <header className="docSection__header">
                    <h2 className="docSection__header__title">Exclusion de responsabilités</h2>
                </header>
                <AlertComponent content={<>
                    Le projet est fourni "tel quel", sans aucune garantie, expresse ou implicite.
                    <br/><br/>
                    Le développeur n'assume aucune responsabilité quant à l'exactitude, à la fiabilité ou à la
                    disponibilité du projet.
                    <br/><br/>
                    Le développeur n'est pas responsable des pertes ou dommages résultant de l'utilisation du projet
                    dans le votre ou de l'impossibilité de l'utiliser.
                </>} icon={AlertIcon.Danger} mode={AlertMode.Danger}/>
            </section>
            <PaginationComponent hasPreviousPage={false} hasNextPage={true} previousPageTitle={"Restituer une fiche"}
                                 nextPageTitle={"Restituer une fiche"} previousPageLink={"#"} nextPageLink={"#"}/>
        </>
    );
}

export default HomePage;