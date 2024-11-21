"use client";

import { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PiProjectorScreenChartBold } from "react-icons/pi";
import { FaGithubAlt } from "react-icons/fa";

type Project = {
  id: number;
  title: string;
  description: string;
  images: StaticImageData[];
  demoLink: string;
  githubLink: string;
  tags: string[];
};

export const WorkCard = ({ project }: { project: Project }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const next = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
      );
    };

    timeoutRef.current = setInterval(next, 3000);

    return () => {
      if (timeoutRef.current) {
        clearInterval(timeoutRef.current);
      }
    };
  }, [project.images.length]);

  return (
    <Card className="p-4 shadow-2xl hover:scale-[1.02] transition-transform">
      <h4 className="text-lg font-bold">{project.title}</h4>
      <p className="text-sm text-muted-foreground my-2">
        {project.description}
      </p>

      <div className="relative w-full h-[200px] mb-4">
        <Image
          src={project.images[currentIndex]}
          alt={`${project.title} - image ${currentIndex + 1}`}
          fill
          className="object-cover rounded-md transition-opacity duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-accent/20 text-primary px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex justify-center gap-2">
        <Button asChild className="shadow-2xl bg-accent hover:bg-accent/40">
          <Link href={project.demoLink} target="_blank">
            <PiProjectorScreenChartBold className="mr-2 text-primary" />
            <span className="text-xs">Voir le projet</span>
          </Link>
        </Button>
        <Button asChild className="shadow-2xl bg-accent hover:bg-accent/40">
          <Link href={project.githubLink} target="_blank">
            <FaGithubAlt className="mr-2 text-primary" />
            <span className="text-xs">Voir le code</span>
          </Link>
        </Button>
      </div>
    </Card>
  );
};
