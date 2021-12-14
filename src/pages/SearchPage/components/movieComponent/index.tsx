import { useMovies } from "../../../../contexts/MoviesContext";
import * as C from "./styles"

type Props = {
    imdbID: string;
    img: string;
    title: string;
    year: string
}

const MovieWidget = ({img, title, year, imdbID}: Props) => {

    const { favorites, setFavorites } = useMovies();

    const handleAddToggleFavorites = () => {
       
        if(!favorites?.includes(imdbID as never)){
            console.log("Olá")
            const list = [...favorites]
            list.push(imdbID as never);
            setFavorites(list);
        } else {
            let list = favorites.filter((item) => {
                if(item !== imdbID){
                    console.log("Yes")
                    return item;
                }
            })
            setFavorites(list);
        }
    }

    return (
        <C.Container img={img}>
            <C.MovieHover noImage={img === "N/A"}>
                {favorites?.indexOf(imdbID as never) === -1 ? 
                <C.HeartIcon onClick={handleAddToggleFavorites}/> : 
                <C.FillHeartIcon onClick={handleAddToggleFavorites}/>}
                
                <C.Column>
                    <span>{title}</span>
                    <p>{year}</p>
                </C.Column>
            </C.MovieHover>
        </C.Container>
    );
}

export default MovieWidget;