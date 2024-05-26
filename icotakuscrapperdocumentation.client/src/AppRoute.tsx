import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout.tsx";
import HomePage from "./pages/Home.tsx";
import AnimeScrapSheetPage from "./pages/Anime/ScrapSheet.tsx";

const AppRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="anime/scrap-sheet" element={<AnimeScrapSheetPage />} />
                
            </Route>
        </Routes>
    );
}

export default AppRoute;