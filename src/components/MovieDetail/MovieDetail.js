import { MovieTitle, TrailerContainer, MovieOverview, GeneresContainer, TitleContainer } from "./MovieDetail.styled"

export const MovieDetail = ({movie}) => {
    return (
        <section>
            <TrailerContainer>

            </TrailerContainer>
            <TitleContainer>
            <MovieTitle>
                {movie.title}
            </MovieTitle>
            <GeneresContainer>
                { movie.genres.map((g) => (<span key={g.id}>{g.name}</span>)) }
            </GeneresContainer>    
            </TitleContainer>
           
            <MovieOverview>
                {movie.overview}
            </MovieOverview>
        </section>
    )
}