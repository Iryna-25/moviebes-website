import React from "react";
import { Wrapper, Checkmark } from "./Loader.styled";

export const Loader = () =>  {
  return (
    <Wrapper>
      <Checkmark  
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 52 52">
        <circle 
          cx="26" 
          cy="26" 
          r="26" 
          fill="none"
        />
        <path 
          fill="none" 
          stroke-linecap="round"
          d="M14.1 27.2l7.1 7.2 16.7-16.8"
        />
      </Checkmark>  
    </Wrapper>
  );
}

// export default Loader;