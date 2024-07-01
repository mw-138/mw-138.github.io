import PageTemplate from "@/components/PageTemplate";
import { Separator } from "@/components/ui/separator";
import { ChevronsDown } from "lucide-react";
import Nav from "../components/Nav";
import {
  MovieVideo,
  getAllMovies,
  getMovieBackdropUrl,
  getMovieById,
  getMovieVideos,
} from "../dataFetching";

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

  if (!movie) return;

  const videos = await getMovieVideos(movie);
  const showMedia = videos.results.length > 0;

  return (
    <PageTemplate hideNavbar>
      <Nav />
      <div
        className="h-screen bg-black/80 bg-cover bg-center bg-blend-overlay"
        style={{
          backgroundImage: `url('${getMovieBackdropUrl(movie)}')`,
        }}
      >
        <div className="space-y-4 px-10 py-20">
          <h1 className="text-4xl font-bold text-white">{movie?.title}</h1>
          <p className="text-gray-300">{movie.overview}</p>
        </div>
        {showMedia && (
          <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 select-none items-center justify-center gap-2">
            <ChevronsDown />
            More
          </div>
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
    // <iframe
    //   id="ytplayer"
    //   width="100%"
    //   height="720px"
    //   src={`https://www.youtube.com/embed/${movieVideo.key}?autoplay=0&origin=http://example.com&controls=0&rel=1`}
    // />
    <iframe
      width="100%"
      height="760"
      src={`https://www.youtube.com/embed/${movieVideo.key}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    />
  );
}
