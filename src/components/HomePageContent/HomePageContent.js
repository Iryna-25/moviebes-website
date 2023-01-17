import { UpcomingList } from "components/UpcomingList/UpcomingList";
import SliderHome from "components/Sliders/SliderHome/SliderHome";
import { ScrollUpButton } from "components/ScrollUpButton/ScrollUpButton";

export const HomePageContent = ({ movies, loadMore }) => {
    
    return (
        <section>
            <SliderHome/>
            <UpcomingList movies={movies} loadMore={loadMore} />
            <ScrollUpButton/>
        </section>
    );
};
