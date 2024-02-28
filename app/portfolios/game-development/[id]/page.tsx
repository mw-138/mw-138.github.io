import React from "react";
import GameList from "./data/games.json";
import { notFound } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Image from "next/image";

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
  return GameList.map((entry) => {
    entry.id;
  });
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
        <section className="mb-5 last:mb-0">
          <Image
            src={game.thumbnail}
            width={300}
            height={300}
            alt=""
            className="rounded-xl"
          />
        </section>
        <section className="mb-5 last:mb-0">
          <h1 className="text-2xl font-bold">Title</h1>
          <p>{game.title}</p>
        </section>
        <section className="mb-5 last:mb-0">
          <h1 className="text-2xl font-bold">Description</h1>
          <p>{game.description}</p>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default GamePage;
