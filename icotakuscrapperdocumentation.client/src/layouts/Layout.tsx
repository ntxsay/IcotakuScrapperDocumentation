import '../styles/layouts/layout.scss';
import '../styles/layouts/pageLayout.scss';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import hljs from 'highlight.js/lib/core';
import csharp from 'highlight.js/lib/languages/csharp';
import React from 'react';

const Layout = () => {

    const [theme, setTheme] = React.useState('dark-theme');
    useEffect(() => {
        hljs.registerLanguage('csharp', csharp);
        hljs.highlightAll();
    }, []);
    
    function toggleTheme() {
        const newTheme = theme === 'dark-theme' ? 'light-theme' : 'dark-theme';
        setTheme(newTheme);
        document.body.classList.remove(theme);
        document.body.classList.add(newTheme);
    }
    
    return (
        <>
        <header className="main-header">
            <nav>
                <div className="logo-container">
                    <a href="/">
                        <img src="/icotaku-55ddd056f6734e5dab2bd2a448c9ca11.jpg" alt="IcotakuScrapper"/>
                        <span>Documentation d'IcotakuScrapper</span>
                    </a>
                </div>
                <div className="content-container">
                    <button id="toggle-theme-btn" onClick={toggleTheme}><i className="fa-solid fa-circle-half-stroke"></i></button>
            </div>
        </nav>
        </header>
    <main>
        {/*Navigation de la documentation entière*/}
        <aside className="full-documentation-navigation">
            <ul>
                <li>
                    <a href="/">
                        <span className="emoji">&#x1F44B;</span><span>Bienvenue</span>
                    </a>
                </li>
                <li>
                    <a>
                        <span className="emoji">&#x1F3CC;</span><span>Démarrage et configuration</span>
                    </a>
                </li>
                <li className="section">
                    <span>LES ANIM&Eacute;S</span>
                </li>
                <li>
                    <a href="anime/scrap-sheet">
                        <span className="emoji">&#x1F578;</span><span>Scrapper une fiche</span>
                    </a>
                </li>
                <li>
                    <a>
                        <span className="emoji">&#x23EC;</span><span>Restituer une fiche</span>
                    </a>
                </li>
            </ul>
        </aside>
        <section id="documentation-container">
            <Outlet />
        </section>
        {/* Navigation de la documentation en cours */}
        <aside className="current-documentation-navigation">
            <p>Dans cette page : </p>
            <ul>
                <li>
                    <a href="#scrap_from_url">
                        <span>Scrapper une fiche via son url</span>
                    </a>
                </li>
                <li>
                    <a href="#scrap_from_id">
                        <span>Scrapper une fiche via son id</span>
                    </a>
                </li>
            </ul>
        </aside>
    </main>
        </>
    );
}

export default Layout;