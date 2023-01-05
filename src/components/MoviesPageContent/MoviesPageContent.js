import { MoviesList } from "components/MoviesList/MoviesList";
import { SearchBar } from "components/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import { getMoviesByName } from "services/api";

export const MoviesPageContent = () => {
    const [movies, setMovies] = useState([]);
    const [movieName, setMovieName] = useState('');

    const handleFormSubmit = (value) => {
        setMovieName(value);
    };

    useEffect(() => {
        if (movieName === '') {
            return
        };

        getMoviesByName(movieName).then(data => {
            setMovies(data.results)
        });
    },[movieName]);

    return (
        <section>
            <SearchBar onSubmit={handleFormSubmit} />
            <MoviesList movies={ movies } />
        </section>
    )
}