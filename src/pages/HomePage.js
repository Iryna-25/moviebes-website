import { HomePageContent } from "components/HomePageContent/HomePageContent";
import { useEffect, useState } from "react";
import { getUpcomingMovies } from "services/api";

export const HomePage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getUpcomingMovies().then(data => {
            setMovies(data.results);
        });
    }, []);

    return (
        <>
        <HomePageContent movies={ movies } />
        </>
    )
};

