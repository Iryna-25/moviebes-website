import { MovieTitle, PosterContainer, MovieOverview, GeneresContainer, TitleContainer, MovieDetailSection } from "./MovieDetail.styled"

export const MovieDetail = ({movie}) => {
    return (
        <MovieDetailSection>
                <PosterContainer>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="poster"/>
                </PosterContainer>
                <TitleContainer>
                <MovieTitle>
                    <div><h2>{movie.title}</h2> <p>{movie.release_date}</p></div>
                    <GeneresContainer>
                        { movie.genres.map((g) => (<span key={g.id}>{g.name}</span>)) }
                    </GeneresContainer> 
                </MovieTitle>
                <MovieOverview>
                    <p>{movie.overview}</p>
                    <p>Budget: {movie.budget} USD</p>
                </MovieOverview>
                </TitleContainer>
        </MovieDetailSection>
    )
}