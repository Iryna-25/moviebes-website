import { MoviesList } from "components/MoviesList/MoviesList";
import { ScrollUpButton } from "components/ScrollUpButton/ScrollUpButton";
import { SearchBar } from "components/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import { getMoviesByName } from "services/api";

export const MoviesPageContent = () => {
    const [movies, setMovies] = useState([]);
    const [movieName, setMovieName] = useState('');
    const [page, setPage] = useState(1);

    const handleFormSubmit = (value) => {
        setMovieName(value);
    };

    useEffect(() => {
        if (movieName === '') {
            return
        }

        getMoviesByName(movieName, page).then(data => {
            setMovies(prevState => (page === 1 ? data.results : [...prevState, ...data.results]));
        });

    }, [movieName, page]);

    
    const loadMore = () => {
        setPage(prevState => prevState + 1);
    };

    return (
        <section>
            <SearchBar onSubmit={handleFormSubmit} />
            <MoviesList movies={movies} loadMore={loadMore} />
            <ScrollUpButton/>
        </section>
    )
}