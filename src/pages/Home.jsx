//Hooks
import { useState, useEffect } from "react"
import { ClipLoader } from "react-spinners";
import useRequest from "../hooks/useRequest";

//Components
import MovieCard from "../components/MovieCard"

//Css
import './MoviesGrid.css'


//URL's
const apiURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Home = () => {

    const [topMovies, setTopMovies] = useState([]);
    const topRatedUrl = `${apiURL}/top_rated?api_key=${apiKey}`;
    const { data, loading, error } = useRequest(topRatedUrl);

    useEffect(() => {
        if (data && data.results) {
            setTopMovies(data.results);
        }
    }, [data]);

    return (
        <div className="container">
            <h2 className="title">Melhores Filmes:</h2>
            <div className="movies-container">
            {loading && (
                    <div className="loading-container">
                        <ClipLoader color="#f7d354" size={50} />
                    </div>
                )}
                {!loading && topMovies.length === 0 && <p>Nenhum filme encontrado.</p>}
                {topMovies.length > 0 && (
                    topMovies.map((movie) => (<MovieCard key={movie.id} movie={movie} />))
                )}
            </div>
        </div>
    )
}

export default Home