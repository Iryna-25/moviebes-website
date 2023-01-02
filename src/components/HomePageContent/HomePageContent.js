import { UpcomingList } from "components/UpcomingList/UpcomingList";
// import Slider from '../SliderSignUp/SliderSignUp';
// import { SliderContainer } from '../SliderSignUp/SliderSignUp.style';

export const HomePageContent = ({ movies }) => {
    return (
        <section>
            {/* <SliderContainer> <Slider slides={movies}/></SliderContainer>  */}
            <UpcomingList movies={movies} />
        </section>
    );
};
