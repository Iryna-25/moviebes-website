import React from "react";
import { Title, Subtitle} from "./Header.styled";

const Header = ({title, subtitle}) => (
    <div>
        <Title> { title } </Title>
        <Subtitle> { subtitle } </Subtitle>
    </div>
);

export default Header;