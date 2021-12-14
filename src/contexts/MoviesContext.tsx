import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import apiPath from "../api/baseApiPath";
import moviesFunc from "../helper/favoritesMovie";

export type Movie = {
    title: string;
    year: string;
    imdbID: string;
    img: string
}

type MoviesContextType = {
    listMovies: Movie[];
    resultsNumber: number;
    pages: number;
    getMovies: (name: string | undefined, page: string | undefined) => void;
    error: string;
    favorites: [];
    setFavorites: any;
    
}

type Props = {
    children: ReactNode
}

const movieHelper = moviesFunc();
const listFavorites = movieHelper.getFavoritesMovies();

export const MoviesContext = createContext({} as MoviesContextType);

export const MoviesProvider = ({children}: Props) => {

    

    const [listMovies, setListMovies] = useState<Movie[]>([]);
    const [error, setError] = useState("");

    const [resultsNumber, setResultsNumber] = useState<number>(0);
    const [pages, setPages] = useState<number>(0);

    const [favorites, setFavorites] = useState<[]>(listFavorites || []);
    
    const getMovies = async (name: string | undefined, page: string | undefined) => {
        setError("");
        if(name !== undefined){
            
            try{
                const result = await fetch(apiPath+`s=${name}&page=${page}`);
                const json = await result.json();

                if(Boolean(json.Error)){
                    setError(`${json.Error}`)
                    return;
                }

                const list: Movie[] = json.Search.map((item: any, index: number) => {
                    return {
                        title: item.Title,
                        year: item.Year,
                        imdbID: item.imdbID,
                        img: item.Poster
                    }
                })
                    
                setResultsNumber(json.totalResults);
                setPages(Math.round(json.totalResults / 10));
                setListMovies(list);
            } catch(e){
                console.log(e);
            }
               
        }    
    }

    useEffect(() => {
        if(favorites !== null){
            movieHelper.setFavoritesMovies(favorites);
        }
    }, [favorites])

    return (
        <MoviesContext.Provider value={{listMovies, resultsNumber, pages, getMovies, error, favorites, setFavorites}}>
            {children}
        </MoviesContext.Provider>
    );
}

export const useMovies = () => useContext(MoviesContext);