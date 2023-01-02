import { HomePageContent } from "components/HomePageContent/HomePageContent";
import { useEffect, useState } from "react";
import { getUpcomingMovies } from "services/api";
import SliderHome from "../components/SliderHome/SliderHome";

export const HomePage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getUpcomingMovies().then(data => {
            setMovies(data.results);
        });
    }, []);

    return (
        <>
        {/* <SliderHome/> */}
        <HomePageContent movies={ movies } />
        </>
    )
};

