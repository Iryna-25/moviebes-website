import { HomePageContent } from "components/HomePageContent/HomePageContent";
import { Loader } from "components/Loader/Loader";
import { useEffect, useState } from "react";
import { getUpcomingMovies } from "services/api";

 const HomePage = () => {
    const [movies, setMovies] = useState(null);
    const [page, setPage] = useState(1);

    useEffect(() => {
        getUpcomingMovies(page).then(data => {
            setMovies(prevState =>(page === 1 ? data.results : [...prevState, ...data.results]));
        });
    }, [page]);

    const loadMore = () => {
        setPage(prevState => prevState + 1);
    };

    return (
        <>
        {movies === null ? <Loader/> : <HomePageContent movies={ movies } loadMore={loadMore} />}
        </>
    )
};

export default HomePage;