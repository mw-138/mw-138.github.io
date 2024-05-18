import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";
import { Projects } from "@/_data/Projects";

export default function Home() {
  const getHighlightedProjects = () => {
    return Projects.filter((project) => project.isHighlighted).slice(0, 4);
  };

  return (
    <main>
      <Navbar />
      <section className="hero min-h-screen bg-base-200 bg-[url('/projects/coin_catcher/screenshot_01.png')] bg-blend-overlay">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hi, I&apos;m Matthew Watson</h1>
            <p className="py-6">
              I am a programmer from the United Kingdom with 7+ years of
              experience using Unity and C#.
            </p>
            <div className="flex justify-center items-center gap-5">
              <Link className="btn btn-primary" href="/about">
                About Me
              </Link>
              <Link className="btn btn-primary" href="/projects/coin_catcher">
                Visit Highlighted Project
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-base-300 flex flex-col p-20">
        <h1 className="text-3xl font-bold">Highlighted Projects</h1>
        <div className="divider" />
        <div className="flex justify-between flex-1">
          {getHighlightedProjects().map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
