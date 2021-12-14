import { MutableRefObject, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMovies } from "../../../../contexts/MoviesContext";
import * as C from "./styles"


const Search = () => {

    const [focused, setFocused] = useState(false);
    const navigate = useNavigate();
    const searchRef = useRef() as MutableRefObject<HTMLInputElement>;
    const { getMovies } = useMovies();

    const handleSearchMovie = () => {
        if(searchRef.current.value !== ""){
            navigate(`/search/${searchRef.current.value}/${1}`);
            getMovies(searchRef.current.value, "1");
        }
    }

    return (
        <C.Row>
            <C.SearchIcon $focus={focused}/>
            <input ref={searchRef} onFocus={() => {
                setFocused(true);
                }}
                onBlur={() => {
                setFocused(false);
            }} type="text" placeholder="Search movies"/>
            <button onClick={handleSearchMovie}>Search</button>
        </C.Row>
    );
}

export default Search;