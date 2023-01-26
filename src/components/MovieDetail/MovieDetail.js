import {
  MovieTitleContainer,
  PosterContainer,
  MovieOverview,
  GeneresContainer,
  OverviewContainer,
  MovieDetailSection,
  LenguagesContainer,
  Tagline,
  SmallDitielsContainer,
  SmallOverviewTitle,
  BackButton,
  OverviewTitle,
} from './MovieDetail.styled';
import { AiFillStar } from 'react-icons/ai';
import { AiFillCaretLeft } from "react-icons/ai";

export const MovieDetail = ({ movie }) => {
  return (
    <MovieDetailSection>
      <PosterContainer>
        <div>
          <AiFillStar />
          <span>{Math.trunc(movie.vote_average)}</span>
        </div>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt="poster"
        />
      </PosterContainer>
      <OverviewContainer>
        <BackButton><AiFillCaretLeft/>Back</BackButton>
        <MovieTitleContainer>
          <h1>{movie.title}</h1>
          <p>({movie.release_date})</p>
        </MovieTitleContainer>
        <Tagline>{movie.tagline ? `- ${movie.tagline} -` : ``}</Tagline>
        <OverviewTitle>Genres:</OverviewTitle>
        <GeneresContainer>
          {movie.genres.map(g => (
            <li key={g.id}>{g.name}</li>
          ))}
        </GeneresContainer>
        <OverviewTitle>Overview:</OverviewTitle>
        <MovieOverview>{movie.overview}</MovieOverview>
        <SmallDitielsContainer>
          <SmallOverviewTitle>Runtime:</SmallOverviewTitle>
          <MovieOverview>{movie.runtime} min.</MovieOverview>
        </SmallDitielsContainer>
        <SmallDitielsContainer>
          <SmallOverviewTitle>Status:</SmallOverviewTitle>
          <MovieOverview>{movie.status}</MovieOverview>
        </SmallDitielsContainer>
        <SmallDitielsContainer>
          <SmallOverviewTitle>Languages:</SmallOverviewTitle>
          <LenguagesContainer>
            {movie.spoken_languages.map((g, i) => (
              <li key={i}>{g.english_name}</li>
            ))}
          </LenguagesContainer>
        </SmallDitielsContainer>
        <SmallDitielsContainer>
          <SmallOverviewTitle>Budget:</SmallOverviewTitle>
          <MovieOverview>
            {movie.budget > 0 ? movie.budget : `unknown`} USD
          </MovieOverview>
        </SmallDitielsContainer>
        <SmallDitielsContainer>
          <SmallOverviewTitle>Production Country:</SmallOverviewTitle>
          <LenguagesContainer>
            {movie.production_countries.map((g, i) => (
              <li key={i}>{g.name}</li>
            ))}
          </LenguagesContainer>
        </SmallDitielsContainer>
      </OverviewContainer>
    </MovieDetailSection>
  );
};
