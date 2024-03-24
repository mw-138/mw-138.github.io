import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PortfolioCard from "./components/PortfolioCard";
import { GameList } from "@/_data/Games";

export default function Home() {
  const getHighlightedGames = () => {
    return GameList.filter((game) => game.isHighlighted).slice(0, 4);
  };

  return (
    <main>
      <Navbar />
      <section className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hi, I&apos;m Matthew Watson</h1>
            <p className="py-6">
              I am a programmer from the United Kingdom with 7+ years of
              experience using Unity and C#.
            </p>
            <Link className="btn btn-primary" href="/about">
              About Me
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-base-300 flex flex-col p-20">
        <h1 className="text-3xl font-bold">Highlighted Games</h1>
        <div className="divider" />
        <div className="flex justify-between flex-1">
          {getHighlightedGames().map((game, index) => (
            <PortfolioCard
              key={index}
              title={game.title}
              description={game.description}
              link={game.GetSiteUrl()}
              thumbnail={game.thumbnail}
              pageUrl={game.pageUrl}
            />
          ))}
        </div>
      </section>
      {/* <section className="bg-base-200 flex flex-col p-20">
        <h1 className="text-3xl font-bold">Portfolios</h1>
        <div className="divider" />
        <div className="flex justify-between flex-1">
          <PortfolioCard
            title="Game Development"
            description=""
            link="/portfolios/game-development"
            thumbnail="https://assets-global.website-files.com/5b651f8b5fc94c4e27470a81/622227fd2ce3cc0455a88166_blog-gamedev-fullsize.png"
            pageUrl=""
          />
          <PortfolioCard
            title="Software Development"
            description=""
            link="/portfolios/software-development"
            thumbnail="https://www.perforce.com/sites/default/files/styles/social_preview_image/public/image/2020-01/image-blog-future-software-development.png?itok=eO9Fa9k-"
            pageUrl=""
          />
          <PortfolioCard
            title="Web Development"
            description=""
            link="/portfolios/web-development"
            thumbnail="https://miro.medium.com/v2/resize:fit:12000/0*tQQ7SLPOJfxaG4ZY"
            pageUrl=""
          />
        </div>
      </section> */}
      <Footer />
    </main>
  );
}
