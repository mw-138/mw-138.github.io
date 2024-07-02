import PageTemplate from "@/components/PageTemplate";
import { Separator } from "@/components/ui/separator";
import { ChevronsDown } from "lucide-react";
import { notFound } from "next/navigation";
import Nav from "../components/Nav";
import {
  MovieVideo,
  getAllMovies,
  getMovieBackdropUrl,
  getMovieById,
  getMovieVideos,
} from "../dataFetching";
import { formatCurrency } from "@/lib/utils";

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}) {
  const movie = await getMovieById(id);
  const title = movie ? movie.title : "No Movie Found";
  return {
    title,
  };
}

export async function generateStaticParams() {
  const movies = await getAllMovies();
  return movies.map((movie) => ({
    id: movie.id.toString(),
  }));
}

export default async function page({
  params: { id },
}: {
  params: { id: string };
}) {
  const movie = await getMovieById(id);

  if (!movie) return notFound();

  const videos = await getMovieVideos(movie);
  const showMedia = videos.results.length > 0;

  function getSpokenLanguages(): string {
    if (!movie?.spoken_languages) return "No languages found.";
    const spokenLanguagesNames = movie?.spoken_languages.map(
      (lang) => lang.english_name,
    );
    return spokenLanguagesNames.join(", ");
  }

  return (
    <PageTemplate hideNavbar>
      <Nav />
      <div
        className="h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url('${getMovieBackdropUrl(movie)}')`,
        }}
      >
        <div className="absolute bottom-0 left-0 flex max-h-[600px] w-full bg-gradient-to-b from-transparent to-black p-10">
          <div className="flex flex-1 flex-col rounded-lg bg-black/50 p-10 backdrop-blur-md lg:flex-row lg:gap-10">
            <div className="flex-1">
              <h1 className="line-clamp-1 text-4xl font-bold text-white">
                {movie?.title}
              </h1>
              <h2 className="pt-4 text-xl font-semibold">Overview</h2>
              <p className="line-clamp-2 text-gray-300 lg:line-clamp-none">
                {movie.overview}
              </p>
            </div>
            <div className="flex-1">
              <h2 className="pt-4 text-xl font-semibold">Languages</h2>
              <p className="line-clamp-2 text-gray-300 lg:line-clamp-none">
                {getSpokenLanguages()}
              </p>
              <h2 className="pt-4 text-xl font-semibold">Release Date</h2>
              <p className="text-gray-300">{movie.release_date}</p>
              <h2 className="pt-4 text-xl font-semibold">Budget</h2>
              <p className="text-gray-300">
                {formatCurrency(movie.budget, "en-US", "USD", 0)}
              </p>
            </div>
          </div>
        </div>
        {showMedia && (
          <ChevronsDown className="absolute bottom-2 left-1/2 flex -translate-x-1/2 select-none items-center justify-center gap-2" />
        )}
      </div>
      {showMedia && (
        <div className="p-10">
          <h1 className="text-4xl font-bold text-white">Media</h1>
          <Separator className="my-4" />
          <div className="flex flex-col gap-4">
            {videos.results.map((video, index) => (
              <VideoPlayer key={index} movieVideo={video} />
            ))}
            {/* <VideoPlayer movieVideo={videos.results[0]} /> */}
          </div>
        </div>
      )}
    </PageTemplate>
  );
}

function VideoPlayer({ movieVideo }: { movieVideo: MovieVideo }) {
  if (movieVideo.site !== "YouTube") return <p>Source not found</p>;
  return (
    <iframe
      width="100%"
      height="760"
      src={`https://www.youtube.com/embed/${movieVideo.key}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    />
  );
}
