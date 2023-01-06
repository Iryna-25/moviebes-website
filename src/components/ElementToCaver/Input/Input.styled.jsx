import styled from "styled-components";

export const InputStyle = styled.input `
    font-family: ${p => p.theme.fonts.body};

    display: flex;
    width: 395px;
    height: 17px;
    padding: 21px 25px;
    margin: 30px auto;
    border: none;
    background: linear-gradient(#4D4B4B, #4D4B4B) center bottom 5px /calc(100% - 10px) 1px no-repeat; 

    color: ${p => p.theme.colors.thirdTextColor};
`