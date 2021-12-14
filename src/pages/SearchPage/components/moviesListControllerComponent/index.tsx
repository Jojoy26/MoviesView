import { useNavigate } from "react-router-dom";
import { useMovies } from "../../../../contexts/MoviesContext";
import Button from "../button";
import * as C from "./styles";

type Props = {
    search: string;
    page: string;
}

const MoviesController = ({search, page}: Props) => {

    const navigate = useNavigate();
    const { getMovies, pages, resultsNumber } = useMovies();

    const handleNextPage = () => {
        navigate(`/search/${search}/${parseInt(page)+1}`);
        getMovies(search, (parseInt(page)+1).toString());
    }

    const handlePreviousPage = () => {
        navigate(`/search/${search}/${parseInt(page)-1}`);
            getMovies(search, (parseInt(page)-1).toString());
    }

    return (
        <C.Row>
            <Button visible={page !== "1"} title="Previous" func={handlePreviousPage}/>
            <C.PageCount>
                <span>{page}/{pages}</span>
                <span>({resultsNumber} results)</span>
            </C.PageCount>
                <Button visible={parseInt(page) < pages} title="Next" func={handleNextPage}/>
        </C.Row>
    );
}

export default MoviesController;