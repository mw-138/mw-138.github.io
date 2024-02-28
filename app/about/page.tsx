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
    new Skill("C++", 1.5),
    new Skill("HTML", 1.5),
    new Skill("CSS", 1.5),
    new Skill("React", 1.5),
    new Skill("Unity", 3),
    new Skill("Unreal Engine", 2),
    new Skill("Python", 1),
  ].sort((a, b) => b.rating - a.rating);

  const Section = (props: AboutPageProps) => {
    return (
      <section className="bg-base-200 p-5 m-5">
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
          className="range"
          step="0.5"
        />
        <div className="w-full flex justify-between text-xs px-2">
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
          I am a games programmer from the United Kingdom with 7+ years of
          self-taught and College tuition using Unity and C#.
        </p>
        <br />
        <p>
          I spent 5 years at Newcastle College learning the core fundamentals of
          game development and the understanding of the game development
          process.
        </p>
        <br />
        <p>These included the following:</p>
        <ul className="list-disc ml-5">
          <li>Programming</li>
          <li>3D Modelling</li>
          <li>Storyboarding</li>
        </ul>
        <br />
        <p>
          In my studies, I focussed more on programming as that is the area I
          hold more interest within game development.
        </p>
        <br />
        <p>Projects I have worked on are visible in my portfolio pages.</p>
      </Section>
      <Section title="Education">
        <p>BSc (Hons 2:1) Computer Science Degree</p>
      </Section>
      <Section title="Technical Skills">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
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
