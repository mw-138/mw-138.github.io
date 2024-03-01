import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import PortfolioCard from "@/app/components/PortfolioCard";
import React from "react";
import { GameList } from "@/_data/Games";

const GameDevelopmentPage = () => {
  return (
    <main>
      <Navbar />
      <div className="grid grid-cols-4 place-items-center place-content-center gap-10 bg-base-200 p-20">
        {GameList.map((game, index) => (
          <PortfolioCard
            key={index}
            title={game.title}
            description={game.description}
            thumbnail={game.thumbnail}
            link={game.SiteUrl()}
            pageUrl={game.pageUrl}
          />
        ))}
      </div>
      <Footer />
    </main>
  );
};

export default GameDevelopmentPage;
