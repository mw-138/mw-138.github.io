import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Navbar from "@/components/Navbar";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

const skillLevelOrder: { [key in SkillLevel]: number } = {
  Beginner: 1,
  Intermediate: 2,
  Advanced: 3,
  Expert: 4,
};

class Skill {
  title: string;
  level: SkillLevel;

  constructor(title: string, level: SkillLevel) {
    this.title = title;
    this.level = level;
  }
}

const AboutPage = () => {
  const skills: Skill[] = [
    new Skill("C#", "Advanced"),
    new Skill("C++", "Intermediate"),
    new Skill("Unity", "Advanced"),
    new Skill("Unreal Engine", "Beginner"),
    new Skill("HTML", "Intermediate"),
    new Skill("CSS", "Intermediate"),
    new Skill("React", "Intermediate"),
    new Skill("Python", "Beginner"),
  ].sort((a, b) => skillLevelOrder[b.level] - skillLevelOrder[a.level]);

  return (
    <>
      <Navbar />
      <MaxWidthWrapper>
        <MaxWidthWrapper className="mt-6 rounded-xl border border-muted bg-cover bg-bottom bg-blend-overlay">
          <div
            id="about_me"
            className="mx-auto flex max-w-3xl flex-col items-center py-20 text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              About Me
            </h1>
            <Separator className="my-4" />
            <p>
              I am a Junior programmer from the United Kingdom with 7+ years of
              self-taught and College tuition using Unity and C#. I am also
              self-taught in many other languages and development frameworks
              featured below.
            </p>
            <br />
            <p>
              I spent 5 years at Newcastle College learning the core
              fundamentals of game development and the understanding of the game
              development process.
            </p>
            <br />
            <p>These included the following:</p>
            <ul className="ml-5 list-none">
              <li>Programming</li>
              <li>3D Modelling</li>
              <li>Storyboarding</li>
            </ul>
            <br />
            <p>Projects I have worked on are visible in my portfolio pages.</p>
          </div>
        </MaxWidthWrapper>
        <MaxWidthWrapper className="mt-6 rounded-xl border border-muted bg-cover bg-bottom bg-blend-overlay">
          <div
            id="education"
            className="mx-auto flex max-w-3xl flex-col items-center py-20 text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Education
            </h1>
            <Separator className="my-4" />
            <ul className="ml-5 list-none">
              <li>BSc (Hons 2:1) Computer Science Degree</li>
              <li>C++ Diploma</li>
            </ul>
          </div>
        </MaxWidthWrapper>
        <MaxWidthWrapper className="mt-6 rounded-xl border border-muted bg-cover bg-bottom bg-blend-overlay">
          <div
            id="technical_skills"
            className="mx-auto flex max-w-3xl flex-col items-center py-20 text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Technical Skills
            </h1>
            <Separator className="my-4" />
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-left">Skill</TableHead>
                  <TableHead className="text-right">Experience</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {skills.map((skill, index) => (
                  <TableRow key={index}>
                    <TableCell className="text-left">{skill.title}</TableCell>
                    <TableCell className="text-right">{skill.level}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </MaxWidthWrapper>
      </MaxWidthWrapper>
    </>
  );
};

export default AboutPage;
