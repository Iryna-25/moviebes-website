import Carousel from "react-3-carousel";
 
const SliderHome = () => {
//   render() {
    return (
      <Carousel
        titles={[
          "SLIDE ONE",
          "SLIDE TWO",
          "SLIDE THREE",
          "SLIDE FOUR",
          "SLIDE FIVE",
        ]}
        descriptions={[
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          " Etiam mollis ex dolor, eget gravida felis blandit id. Curabitur congue nibh et gravida volutpat.",
          "Integer tincidunt lorem non lacus laoreet, sed porta dui porttitor. ",
          "Vestibulum suscipit vel dolor sit amet bibendum.",
          "Nam ipsum enim, rutrum nec lectus eu, imperdiet dictum quam. ",
        ]}
      ></Carousel>
    );
//   }
}

export default SliderHome;