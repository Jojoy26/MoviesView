import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MoviesProvider } from "./contexts/MoviesContext";
import SearchPage from "./pages/SearchPage";

const MainRoutes = () => {
    return (
        <BrowserRouter>
            <MoviesProvider>
                <Routes>
                    <Route path="/" element={<SearchPage/>}/>
                    <Route path="/search/:name/:page" element={<SearchPage/>}/>
                </Routes>
            </MoviesProvider>    
        </BrowserRouter>
    );
}

export default MainRoutes;