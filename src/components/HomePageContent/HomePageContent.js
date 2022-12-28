import { Box } from "components/Box";
export const HomePageContent = ({ movies }) => {
    console.log(movies)
    return (
        <section>
            <b>Place for slider</b>
            <h1>Trending</h1>
            <Box as={"ul"} display="grid" gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))" gridGap="1rem">
                {movies.map(movie => (
                    <li key={movie.id} style={{listStyleType:'none'}}>
                        <img 
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt="poster"
                        width={"262px"}
                        />
                    </li>
                ))}
            </Box>
        </section>
    )
}