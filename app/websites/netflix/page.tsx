import WebProjectNavigation from "@/components/WebProjectNavigation";
import Hero from "./components/Hero";
import MovieRow from "./components/MovieRow";
import Nav from "./components/Nav";
import Requests, {
  getRandomMovie,
  getUpcomingMovies,
  performMovieQuery,
} from "./dataFetching";
import PageTemplate from "@/components/PageTemplate";

const page = async () => {
  const popular = await performMovieQuery(Requests.Popular);
  const upcoming = await getUpcomingMovies();
  const nowPlaying = await performMovieQuery(Requests.NowPlaying);
  const topRated = await performMovieQuery(Requests.TopRated);
  const randomMovie = getRandomMovie(popular.results);

  return (
    <PageTemplate hideNavbar>
      <Nav />
      <Hero movie={randomMovie} />
      {[
        {
          label: "Now Playing",
          entries: nowPlaying.results,
        },
        {
          label: "Only on Netflix",
          entries: topRated.results,
        },
        {
          label: "Upcoming",
          entries: upcoming,
        },
        {
          label: "Your Next Watch",
          entries: popular.results,
        },
        {
          label: "My List",
          entries: popular.results,
        },
        {
          label: "Continue Watching",
          entries: [getRandomMovie(upcoming)],
        },
      ].map((row, index) => (
        <MovieRow
          key={index}
          rowId={index}
          title={row.label}
          movies={row.entries}
        />
      ))}
      <WebProjectNavigation />
    </PageTemplate>
  );
};

export default page;
