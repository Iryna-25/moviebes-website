import styled from 'styled-components';

export const MovieDetailSection = styled.section`
  display: flex;
  padding: 20px;
  margin: 0;
`;

export const PosterContainer = styled.div`
  position: relative;

  img {
    min-width: 322px;
    border-radius: 30px;
  }

  div {
    position: absolute;
    display: flex;

    top: 1rem;
    right: 1rem;
  }

  svg {
    color: #f07427;
    height: 24px;
    width: 24px;
    margin: 0px 0 0 5px;
  }
  span {
    display: block;
    font-size: 22px;
  }
`;

export const MovieTitleContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  max-width: 700px;

  h1 {
    font-size: 25px;
    font-weight: 700;
    margin: 0 0 0 0;
  }

  p {
    font-size: 20px;
    font-weight: 700;
    margin: 0 0 0 5px;
  }
`;

export const Tagline = styled.blockquote`
  font-style: italic;
`;

export const GeneresContainer = styled.ul`
  color: ${({ theme }) => theme.colors.secondaryTextColor};
  display: flex;
  flex-wrap: wrap;
  margin: 0px 0px 0px -50px;

  li {
    font-weight: 400;
    text-align: center;
    font-size: 10px;
    border: 1px solid #e8e8e8;
    border-radius: 15px;
    padding: 4px 10px;
    margin: 0px 0px 0px 10px;
  }
`;

export const OverviewTitle = styled.p`
  font-size: 18px;
  margin: 25px 0 15px 0px;
`;

export const OverviewContainer = styled.div`
  padding: 20px;
  width: 700px;
`;

export const MovieOverview = styled.p`
  font-weight: 400;
  font-size: 16px;
  margin: 0px 0px 0px 0px;
`;

export const LenguagesContainer = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;

  & > li {
    margin: 0 5px 0px 5px;
  }
`;

export const SmallDitielsContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 20px 0 0 0;
`;

export const SmallOverviewTitle = styled.p`
  font-size: 18px;
  margin: 0 10px 0 0;
`;

export const BackButton = styled.button`
  display: block;
  margin: 0 0 20px 0;
  padding: 5px 15px;
`;
