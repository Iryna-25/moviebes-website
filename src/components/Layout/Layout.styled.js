import styled from "styled-components";

export const LayoutBox = styled.div`
display: grid;
grid-template-columns: 200px 1fr;
`;

export const OutletWrapper = styled.main`
    margin: 0 0 0 200px;

    @media(max-width:${({theme}) => theme.layout.mobile}) {
        margin: 0;
}
`;