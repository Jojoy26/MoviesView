import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import {useParams } from "react-router-dom";
import { Movie, useMovies } from "../../contexts/MoviesContext";
import MovieWidget from "./components/movieComponent";
import MoviesController from "./components/moviesListControllerComponent";
import Search from "./components/SearchComponent";
import * as C from "./styles"
import { CircularProgress } from '@mui/material';


const SearchPage = () => {

    const { name, page } = useParams();
    
    const { listMovies, getMovies, error } = useMovies();

    useEffect(() => {
        getMovies(name, page);
        console.log("Olá")
    },[page, name])

    return (
        <C.Container>
            <Search/>
            {
                error !== "" ? <C.Column>
                        <C.IconError/>
                        <C.ErrorText>{error}</C.ErrorText>
                        </C.Column> : 
                    <>
                        {
                            name !== undefined && listMovies.length > 0 ? 
                        <>
                        
                        <C.Grid>
                            {listMovies.map((item: Movie, index) => {
                            return <MovieWidget key={index} title={item.title} 
                            img={item.img} 
                            year={item.year} 
                            imdbID={item.imdbID}/>
                                })}
                        </C.Grid>
                                <MoviesController search={name} page={page !== undefined ? page : ""}/>
                        </> : null
                }
                    </>
            }
            
            
        </C.Container>
    );
}

export default SearchPage;