import React from "react";
import { ButtonGoogleStyle, GoogleSvg} from "./ButtonGoogle.styled";
import Svg from "../../../assets/icons/Google.svg";

const ButtonGoogle = ({text}) => (
    <>
    <ButtonGoogleStyle>
            <GoogleSvg>
            <img src={Svg} alt="Google-logo" />
        </GoogleSvg>
        {text}
    </ButtonGoogleStyle>

        </>
);
export default ButtonGoogle;