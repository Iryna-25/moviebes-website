import { Title, MovieImg, MovieColumn, UpcomingGrid } from "./UpcomingList.styled";
import { NavLink } from "react-router-dom";
import { LoadMoreButton } from "components/LoadMore/LoadMoreButton";

export const UpcomingList = ({movies, loadMore}) => {
    return (
        <div>
            <Title>Upcoming</Title>
            <UpcomingGrid>
                {movies.map(movie => (
                    <MovieColumn key={movie.id}>
                        <NavLink to={`/moviespage/${movie.id}`}>
                            <MovieImg
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt="poster"
                            />
                        </NavLink>
                    </MovieColumn>
                ))}       
            </UpcomingGrid>

            { movies.length >=1 && <LoadMoreButton loadMore={loadMore} /> }  
            
        </div>
    );
};

