import React from "react";
import { Link } from "react-router-dom";
import { Paragraf, Item } from "./Footer.styled";

const Footer = ({text, to, link}) => (
    <Paragraf>{text} 
        <span> </span>
        <Item>
            <Link
                to={to}> 
                {link}
            </Link> 
        </Item>
    </Paragraf>
);

export default Footer;