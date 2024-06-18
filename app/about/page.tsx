import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface AboutPageProps {
  title: string;
  children?: any;
}

interface SkillLevelRatingProps {
  rating: number;
}

class Skill {
  title: string;
  rating: number;

  constructor(title: string, rating: number) {
    this.title = title;
    this.rating = rating;
  }
}

const AboutPage = () => {
  const skills: Skill[] = [
    new Skill("C#", 3),
    new Skill("C++", 2),
    new Skill("Unity", 3),
    new Skill("Unreal Engine", 1.5),
    new Skill("HTML", 1.5),
    new Skill("CSS", 1.5),
    new Skill("React", 1.5),
    new Skill("Python", 1.5),
  ].sort((a, b) => b.rating - a.rating);

  const Section = (props: AboutPageProps) => {
    return (
      <section className="bg-base-200 p-5">
        <h1 className="text-2xl font-bold">{props.title}</h1>
        <div className="divider" />
        <div>{props.children}</div>
      </section>
    );
  };

  const SkillLevelRating = (props: SkillLevelRatingProps) => {
    return (
      <>
        <input
          type="range"
          min={1}
          max="4"
          value={props.rating}
          className="range cursor-default"
          step="0.5"
        />
        <div className="hidden w-full justify-between px-2 text-xs md:flex">
          <span>Beginner</span>
          <span>Intermediate</span>
          <span>Advanced</span>
          <span>Expert</span>
        </div>
      </>
    );
  };

  return (
    <>
      <Navbar />
      <Section title="About Me">
        <p>
          I am a Junior programmer from the United Kingdom with 7+ years of
          self-taught and College tuition using Unity and C#. I am also
          self-taught in many other languages and development frameworks
          featured below.
        </p>
        <br />
        <p>
          I spent 5 years at Newcastle College learning the core fundamentals of
          game development and the understanding of the game development
          process.
        </p>
        <br />
        <p>These included the following:</p>
        <ul className="ml-5 list-disc">
          <li>Programming</li>
          <li>3D Modelling</li>
          <li>Storyboarding</li>
        </ul>
        <br />
        <p>Projects I have worked on are visible in my portfolio pages.</p>
      </Section>
      <Section title="Education">
        <ul className="ml-5 list-disc">
          <li>BSc (Hons 2:1) Computer Science Degree</li>
          <li>C++ Diploma</li>
        </ul>
      </Section>
      <Section title="Technical Skills">
        <table className="table-bordered table">
          <thead>
            <tr>
              <th>Skill</th>
              <th>Experience Level</th>
            </tr>
          </thead>
          <tbody>
            {skills.map((skill, index) => (
              <tr key={index}>
                <td>{skill.title}</td>
                <td>
                  <SkillLevelRating rating={skill.rating} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>
      <Footer />
    </>
  );
};

export default AboutPage;
