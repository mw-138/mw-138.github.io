import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";
import { Projects } from "@/_data/Projects";

export default function Home() {
  const highlightedProjects = Projects.filter(
    (project) => project.isHighlighted,
  ).slice(0, 4);

  return (
    <main>
      <Navbar />
      <section className="hero min-h-screen bg-base-200 bg-[url('/projects/coin_catcher/screenshot_01.png')] bg-blend-overlay">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-2xl font-bold md:text-5xl">
              Hi, I&apos;m Matthew Watson
            </h1>
            <p className="py-6 text-sm md:text-lg">
              I am a programmer from the United Kingdom with 7+ years of
              experience using Unity and C#.
            </p>
            <div className="flex flex-col items-center justify-center gap-5 md:flex-row">
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
      <section className="flex flex-col bg-base-300 p-20">
        <h1 className="text-3xl font-bold">Highlighted Projects</h1>
        <div className="divider" />
        <div className="flex flex-1 flex-col justify-between gap-4 md:flex-row">
          {highlightedProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
