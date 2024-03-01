import React from "react";
import { GameList } from "@/_data/Games";
import { notFound } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import Pagination from "@/app/components/Pagination";

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}) {
  const game = GameList.find((entry) => entry.id === id);
  const title = game ? game.title : "No Game Found";
  return {
    title: title,
  };
}

export async function generateStaticParams() {
  return GameList.map((game) => ({
    id: game.id,
  }));
}

const GamePage = async ({ params: { id } }: { params: { id: string } }) => {
  const game = GameList.find((entry) => entry.id === id);
  if (!game) {
    notFound();
  }
  return (
    <>
      <Navbar />
      <div className="p-5 bg-base-200 text-base-content">
        <Pagination
          className="mb-5"
          entries={[
            { label: "Home", link: "/" },
            { label: "Portfolios", link: "/portfolios" },
            {
              label: "Game Development",
              link: "/portfolios/game-development",
            },
          ]}
        />
        <div className="w-full h-fit flex">
          <div className="w-96 flex flex-col">
            {game.title && (
              <h1 className="font-extrabold text-2xl">{game.title}</h1>
            )}
            {game.description && (
              <>
                <div className="divider" />
                <p>{game.description}</p>
              </>
            )}
            {game.year && (
              <>
                <div className="divider" />
                <p>{game.year}</p>
              </>
            )}
          </div>
          <div className="divider divider-horizontal" />
          <div className="flex-1">
            {game.screenshots.length > 0 && (
              <>
                <h1 className="font-extrabold text-2xl">Screenshots</h1>
                <div className="divider" />
                <div className="carousel w-full h-96">
                  {game.screenshots.map((screenshot, index) => (
                    <div
                      key={index}
                      id={`item_${index}`}
                      className="carousel-item w-full"
                    >
                      <Image
                        src={screenshot}
                        width={0}
                        height={0}
                        alt=""
                        className="w-full object-contain"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                  {game.screenshots.map((_screenshot, index) => (
                    <a
                      key={index}
                      href={`#item_${index}`}
                      className="btn btn-xs"
                    >
                      {index + 1}
                    </a>
                  ))}
                </div>
              </>
            )}
            {game.videos.length > 0 && (
              <>
                <div className="divider" />
                <h1 className="font-extrabold text-2xl">Videos</h1>
                <div className="divider" />
              </>
            )}
            {game.screenshots.length == 0 && game.videos.length == 0 && (
              <h1>No media available</h1>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GamePage;
