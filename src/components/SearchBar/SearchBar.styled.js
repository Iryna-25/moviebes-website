import styled from "styled-components";

// export const SearchContainer = styled.div`
// background-color: ${({theme}) => theme.colors.sideBarBackground};
// border-radius: 30px 30px 30px 30px;
// margin: 44px 230px 52px 37px;
// `;

// export const SearchForm = styled.form`
// display: inline-flex;
// text-align: center;
// align-items: center;
// justify-content: space-between;

// & > svg {
//     color: ${({theme}) => theme.colors.primaryTextColor};
//     width: 25px;
//     height: 25px;
//     margin: 17px 25px 17px 41px;
// }

// input {
// background-color: ${({theme}) => theme.colors.sideBarBackground};
// color: ${({theme}) => theme.colors.primaryTextColor};
// border: none;
// font-weight: ${({theme}) => theme.fontWeights.medium};
// font-size: 25px;
// padding: 10px;
// outline: none;
// border-radius: 30px;
// }

// input:focus {
//     border: none;
// }
// `;


export const Form = styled.form`
  margin: 30px 0px 30px 30px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.colors.sideBarBackground};
  /* Change width of the form depending if the bar is opened or not */
  width: ${props => (props.barOpened ? '70rem' : '2rem')};
  /* If bar opened, normal cursor on the whole form. If closed, show pointer on the whole form so user knows he can click to open it */
  cursor: ${props => (props.barOpened ? 'auto' : 'pointer')};
  padding: 2rem;
  height: 2rem;
  border-radius: 10rem;
  transition: width 300ms cubic-bezier(0.645, 0.045, 0.355, 1);

  @media screen and (max-width: ${({ theme }) => theme.layout.loptop}) {
    width: ${props => (props.barOpened ? '45rem' : '2rem')};
  }

  @media screen and (max-width: ${({ theme }) => theme.layout.tablet}) {
    width: ${props => (props.barOpened ? '30rem' : '2rem')};
  }

  @media screen and (max-width: ${({ theme }) => theme.layout.mobile}) {
    width: ${props => (props.barOpened ? '17.5rem' : '2rem')};
  }

  @media screen and (max-width: ${({ theme }) => theme.layout.smallMobile}) {
    width: ${props => (props.barOpened ? '14rem' : '2rem')};
  }
`;

export const Input = styled.input`
  font-size: 14px;
  line-height: 1;
  background-color: transparent;
  width: 100%;
  margin-left: ${props => (props.barOpened ? '1rem' : '0rem')};
  border: none;
  color: ${({ theme }) => theme.colors.primaryTextColor};
  transition: margin 300ms cubic-bezier(0.645, 0.045, 0.355, 1);

  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    color: white;
  }
`;

export const Button = styled.button`
  line-height: 1;
  pointer-events: ${props => (props.barOpened ? 'auto' : 'none')};
  cursor: ${props => (props.barOpened ? 'pointer' : 'none')};
  background-color: transparent;
  border: none;
  outline: none;
  color: inherit;

  & > svg {
    color: ${({ theme }) => theme.colors.primaryTextColor};
    width: 25px;
    height: 25px;
    margin: 0 auto;
  }
`;