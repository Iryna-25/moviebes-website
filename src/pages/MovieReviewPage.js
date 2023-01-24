import { Loader } from "components/Loader/Loader";
import { MovieDetail } from "components/MovieDetail/MovieDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getMovieDetail } from "services/api";

const MovieReviewPage = () => {

    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        getMovieDetail(movieId).then(setMovie)
    }, [movieId]);



    return (
        <>
            {movie === null ? <Loader/> : <MovieDetail movie={ movie } />}   
        </>
    )
};

export default MovieReviewPage;