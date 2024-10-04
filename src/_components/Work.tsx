import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Project1 from "@/src/assets/imgs/projet1/burger.png";
import Image from "next/image";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";
import { FaGithubAlt } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import { PiProjectorScreenChartBold } from "react-icons/pi";
import { Container } from "./Container";
import { Code } from "./Hero";

const WorkCard = () => {
  return (
    <Card className="p-2 shadow-2xl">
      <h4 className="text-lg font-bold">Nom du projet</h4>
      <p className="text-sm">Description du projet</p>
      <Image
        src={Project1}
        alt="Photo du projet application de cuisine"
        className="object-cover"
      />

      <div className="flex justify-center gap-2">
        <Button className="shadow-2xl bg-accent hover:bg-accent/40">
          <PiProjectorScreenChartBold className="mr-2 text-primary" />
          <span className="text-xs">Voir le projet</span>
        </Button>
        <Button className="shadow-2xl bg-accent hover:bg-accent/40">
          <FaGithubAlt className="mr-2 text-primary" />
          <span className="text-xs">Voir le code</span>
        </Button>
      </div>
    </Card>
  );
};

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
      <h3 className="text-2xl font-bold mt-16">Mes 4 derniers projets</h3>
      <p className="lg:text-lg text-muted-foreground py-4">
        Ils ont booté leurs visibilités et gagner plus de
        <Code>clients fidèles</Code> grâce à mon expertise.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
      </div>
    </Container>
  );
};
