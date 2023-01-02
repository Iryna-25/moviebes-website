import { Box } from "components/Box";
import { NavLink } from "react-router-dom";

export const UpcomingList = ({movies}) => {
    return (
        <>
            <h1>Upcoming</h1>
            <Box as={"ul"} display="grid" gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))" gridGap="1rem">
                {movies.map(movie => (
                    <li key={movie.id}>
                        <NavLink to={`/moviespage/${movie.id}`}>
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt="poster"
                                width={"262px"}
                            />
                        </NavLink>
                    </li>
                ))}
            </Box>
        </>
    );
};

