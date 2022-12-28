import { HomePageContent } from "components/HomePageContent/HomePageContent";
import { useEffect, useState } from "react";
import { getTrandingMovies } from "services/api";


export const HomePage = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getTrandingMovies().then(response => {
            setMovies(response.data.results);
        });
    }, []);

    console.log(movies)

    return (
        <HomePageContent movies={ movies } />
    )
};

