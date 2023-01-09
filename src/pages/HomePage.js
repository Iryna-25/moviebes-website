import { HomePageContent } from "components/HomePageContent/HomePageContent";
import { Loader } from "components/Loader/Loader";
import { useEffect, useState } from "react";
import { getUpcomingMovies } from "services/api";

export const HomePage = () => {
    const [movies, setMovies] = useState(null);

    useEffect(() => {
        getUpcomingMovies().then(data => {
            setMovies(data.results);
        });
    }, []);

    return (
        <>
        {movies === null ? <Loader/> : <HomePageContent movies={ movies } />}
        </>
    )
};

