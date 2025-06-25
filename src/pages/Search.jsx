//Hooks
import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { ClipLoader } from "react-spinners";
import useRequest from "../hooks/useRequest";

//Components
import MovieCard from "../components/MovieCard"

//URL's
const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

//Css
import './MoviesGrid.css'


const Search = () => {

    const [searchParams] = useSearchParams();
    const query = searchParams.get("q");
    const [movies, setMovies] = useState([]);
    const searchQueryURL = `${searchURL}?api_key=${apiKey}&query=${query}`;
    const { data, loading, error } = useRequest(searchQueryURL);

    useEffect(() => {
        if (data && data.results) {
            setMovies(data.results);
        }
    }, [data]);


    return (
        <div className="container">
            <h2 className="title">Resultados para: <span className="query-text">{query}</span></h2>
            <div className="movies-container">
            {loading && (
                    <div className="loading-container">
                        <ClipLoader color="#f7d354" size={50} />
                    </div>
                )}
                {!loading && movies.length === 0 && <p>Nenhum filme encontrado.</p>}
                {movies.length > 0 && (
                    movies.map((movie) => (<MovieCard key={movie.id} movie={movie} />))
                )}
            </div>
        </div>
    )
}

export default Search