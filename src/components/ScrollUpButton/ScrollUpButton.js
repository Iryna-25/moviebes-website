import { useEffect, useState } from "react";
import { ScrollButton } from "./ScrollUpButton.styled";
import { IoIosArrowDropupCircle } from "react-icons/io";

export const ScrollUpButton = () => {
    
    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 1500) {
                setBackToTopButton(true);
            } else {
                setBackToTopButton(false);
            }
        })
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
      <>
            {backToTopButton && ( 
                <ScrollButton onClick={scrollUp} type="button">    
                 <IoIosArrowDropupCircle/>
                </ScrollButton>   
            )}      
      </>
    )
}