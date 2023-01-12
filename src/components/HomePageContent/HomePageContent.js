import { UpcomingList } from "components/UpcomingList/UpcomingList";
import SliderHome from "components/Sliders/SliderHome/SliderHome";

export const HomePageContent = ({ movies, loadMore }) => {
    
    return (
        <section>
            <SliderHome/>
            <UpcomingList movies={movies} loadMore={loadMore}/>
        </section>
    );
};
