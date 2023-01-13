import { MoviesColumn, MovieImg, SearchedMovieGrid } from "./MoviesList.styled";
import { NavLink } from "react-router-dom";
import { LoadMoreButton } from "components/LoadMore/LoadMoreButton";

export const MoviesList = ({ movies, loadMore }) => {
    return (
        <div>
            <SearchedMovieGrid>
                {movies.map(movie => (
                    <MoviesColumn key={movie.id}>
                        <NavLink to={`/moviespage/${movie.id}`}>
                            <MovieImg
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt="poster" />
                        </NavLink>
                    </MoviesColumn>
                ))}
            </SearchedMovieGrid>
            {movies.length >=1 && <LoadMoreButton loadMore={loadMore} />}
        </div>
    );
};