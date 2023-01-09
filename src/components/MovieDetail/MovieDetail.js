import { MovieTitleContainer, 
    PosterContainer, 
    MovieOverview, GeneresContainer, 
    OverviewContainer, 
    MovieDetailSection, 
    OverviewTitle } from "./MovieDetail.styled";
import {AiFillStar} from "react-icons/ai";

export const MovieDetail = ({movie}) => {
    return (
        <MovieDetailSection>
                <PosterContainer>
                    <div><AiFillStar/><span>{Math.trunc(movie.vote_average)}</span></div>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="poster"/>
                </PosterContainer>
                <OverviewContainer>
                <MovieTitleContainer>
                    <h1>{movie.title}</h1><p>({movie.release_date})</p>
                </MovieTitleContainer>
                <OverviewTitle>Genres:</OverviewTitle>
                <GeneresContainer>
                    { movie.genres.map((g) => (<li key={g.id}>{g.name}</li>)) }
                </GeneresContainer>
                <OverviewTitle>Overview:</OverviewTitle>
                <MovieOverview>
                    {movie.overview}
                </MovieOverview>
                
                </OverviewContainer>
        </MovieDetailSection>
    )
}