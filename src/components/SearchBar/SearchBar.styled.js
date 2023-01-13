import styled from "styled-components";



export const SearchContainer = styled.div`
background-color: ${({theme}) => theme.colors.sideBarBackground};
border-radius: 30px 30px 30px 30px;
margin: 44px 230px 52px 37px;
`;

export const SearchForm = styled.form`
display: inline-flex;
text-align: center;
align-items: center;

& > svg {
    color: ${({theme}) => theme.colors.primaryTextColor};
    width: 25px;
    height: 25px;
    margin: 17px 25px 17px 41px;
}

input {
background-color: ${({theme}) => theme.colors.sideBarBackground};
color: ${({theme}) => theme.colors.primaryTextColor};
border: none;
font-weight: ${({theme}) => theme.fontWeights.medium};
font-size: 25px;
padding: 10px;
outline: none;
border-radius: 30px;
}

input:focus {
    border: none;
}
`;