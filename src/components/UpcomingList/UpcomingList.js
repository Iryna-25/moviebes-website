import { Title, MovieImg, MovieColumn, } from "./UpcomingList.styled";
import { Box } from "components/Box";
import { NavLink } from "react-router-dom";

export const UpcomingList = ({movies}) => {
    return (
        <>
            <Title>Upcoming</Title>
            <Box as={"ul"} display="grid" gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))" gridGap="1em" padding="0 20px">
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
            </Box>
        </>
    );
};

