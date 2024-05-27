const ApiKey = process.env.TMDB_API_KEY;
const ApiUrl = "https://api.themoviedb.org/3";
const ApiImageUrl = "https://image.tmdb.org/t/p";
const ApiKeyParameter = `api_key=${ApiKey}`;

const Requests = {
  Popular: `${ApiUrl}/movie/popular?${ApiKeyParameter}&language=en-US&page=1`,
  Upcoming: `${ApiUrl}/movie/upcoming?${ApiKeyParameter}&language=en-US&page=1`,
  NowPlaying: `${ApiUrl}/discover/movie?${ApiKeyParameter}&language=en-US&page=1`,
  TopRated: `${ApiUrl}/discover/movie?${ApiKeyParameter}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200`,
};

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieRequest {
  dates: {
    minimum: string;
    maximum: string;
  };
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export async function performMovieQuery(url: string): Promise<MovieRequest> {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

export async function getUpcomingMovies(params?: string): Promise<Movie[]> {
  const today = new Date().toISOString().split("T")[0];
  const max_date = new Date();
  max_date.setFullYear(2025);
  const max = max_date.toISOString().split("T")[0];
  const res = await performMovieQuery(
    `${ApiUrl}/movie/upcoming?${ApiKeyParameter}&include_adult=false&include_video=false&language=en-US&page=1&with_release_type=4|3&release_date.gte={${today}}&release_date.lte={${max}}${params ?? ""}`,
  );
  // const movies = res.results.filter((movie: Movie) => {
  //   return movie.release_date > new Date().toISOString().split("T")[0];
  // });
  // return movies;
  return res.results;
}

export function getMoviePosterUrl(
  movie: Movie,
  size: string = "original",
): string {
  return `${ApiImageUrl}/${size}/${movie.poster_path}`;
}

export function getMovieBackdropUrl(
  movie: Movie,
  size: string = "original",
): string {
  return `${ApiImageUrl}/${size}/${movie.backdrop_path}`;
}

export function getRandomMovie(arr: Movie[]): Movie {
  return arr[Math.floor(Math.random() * arr.length)];
}

export async function getMovieVideos(movie: Movie): Promise<any[]> {
  const res = await fetch(
    `${ApiUrl}/movie/${movie.id}/videos?${ApiKeyParameter}`,
  );
  const data = await res.json();
  return data;
}

export async function getMovieById(id: number): Promise<Movie | undefined> {
  const res = await performMovieQuery(
    `${ApiUrl}/movie/${id}?${ApiKeyParameter}`,
  );
  console.log(res);
  return res as unknown as Movie;
}

export default Requests;
