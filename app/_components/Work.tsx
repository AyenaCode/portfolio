import { Container } from "./Container";
import { Code } from "./Hero";
import { WorkCard } from "./WorkCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MdOutgoingMail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { StaticImageData } from "next/image";

// Importez vos images
import Project1_1 from "@/assets/imgs/project1/burger.png";
import Project1_2 from "@/assets/imgs/project1/b1.png";
import Project1_3 from "@/assets/imgs/project1/b2.png";
import Project2_1 from "@/assets/imgs/project2/aura.png";
import Project2_2 from "@/assets/imgs/project2/aura2.png";

type Project = {
  id: number;
  title: string;
  description: string;
  images: StaticImageData[];
  demoLink: string;
  githubLink: string;
  tags: string[];
};

const projects: Project[] = [
  {
    id: 1,
    title: "FoodieHub",
    description:
      "Application de commande de repas en ligne avec paiement intégré et suivi de livraison en temps réel",
    images: [Project1_1, Project1_2, Project1_3],
    demoLink: "https://foodiehub.demo.com",
    githubLink: "https://github.com/username/foodiehub",
    tags: ["React", "Next.js", "Tailwind", "Stripe"],
  },
  {
    id: 2,
    title: "AURRA COM",
    description: "Site web pour une agence de communication",
    images: [Project2_1, Project2_2],
    demoLink: "https://aurra.com",
    githubLink: "https://github.com/username/aurra",
    tags: ["React", "Next.js", "Tailwind", "Framer Motion"],
  },
];

export const Work = () => {
  return (
    <Container>
      <div className="flex justify-center items-center gap-2">
        <Button className="shadow-2xl rounded-md">Me contacter</Button>
        <Button className="shadow-2xl rounded-md " variant="ghost">
          <Link
            className="flex items-center"
            href="mailto:ayenacode1@gmail.com"
            target="_blank"
          >
            <MdOutgoingMail className="text-primary h-6 w-6 mr-2" /> Mail
          </Link>
        </Button>
        <Button className="shadow-2xl rounded-md" variant="ghost">
          <Link
            className="flex items-center"
            href="https://wa.me/22893367157"
            target="_blank"
          >
            <BsWhatsapp className="text-primary h-6 w-6 mr-2" /> +228 93 36 71
            57
          </Link>
        </Button>
      </div>
      <section aria-label="Mes projets">
        <h2 className="text-2xl font-bold mt-16">Portfolio de Projets</h2>
        <p className="lg:text-lg text-muted-foreground py-4">
          Découvrez comment j'ai aidé mes clients à atteindre leurs objectifs
          avec des solutions
          <Code>web modernes</Code> et performantes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <WorkCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </Container>
  );
};
