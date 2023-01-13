import styled from "styled-components";

export const LoadMoreWrapper = styled.div`
    display: flex;
    justify-content: center;
`
export const LoadMore = styled.button`
    width: 320px;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 10px;
    border-radius: 20px;
    color: ${({ theme }) => theme.colors.primaryTextColor};
    background-color: ${({ theme }) => theme.colors.accentColor};
    cursor: pointer;
    transition: all 0.3s ease 0s;
    &:hover{
        background-color: ${({ theme }) => theme.colors.accentHoverColor};
        color: ${({ theme }) => theme.colors.accentColor};
    }
`