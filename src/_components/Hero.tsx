import { cn } from "@/lib/utils";
import Image from "next/image";
import { ComponentPropsWithoutRef } from "react";
import { FaCode } from "react-icons/fa";
import { SiReactos } from "react-icons/si";
import Photo from "../assets/imgs/photo.png";
import { Container } from "./Container";

export const Code = ({
  children,
  ...props
}: ComponentPropsWithoutRef<"span">) => {
  return (
    <span
      {...props}
      className={cn(
        "bg-accent/30 font-mono text-foreground border border-accent rounded-md px-1 mx-1 inline-block",
        props.className
      )}
    >
      {children}
    </span>
  );
};

export const Hero = () => {
  return (
    <Container className="py-8 relative">
      <div className="w-2/3 text-center md:ml-5 md:text-left">
        <h1 className="text-2xl md:text-4xl font-bold mb-2 lg:mb-4">
          <Code className="ml-0 py-0">
            <FaCode className="inline-block mr-1 text-primary" />
            Développeur
          </Code>
          front-end React
        </h1>
        <h2 className="text-xs md:text-md lg:text-lg text-muted-foreground md:mb-6">
          Je vous aide à concevoir des applications
          <Code>
            <SiReactos className="inline-block mr-1" />
            web performantes
          </Code>
          qui offrent des expériences utilisateur fluides boostant ainsi la
          satisfaction et la fidélité.
        </h2>
      </div>
      <Image
        src={Photo}
        alt="Photo de moi"
        width={300}
        height={300}
        className="absolute top-0 right-16 md:top-3 md:right-28 rounded-full w-full max-w-28 md:max-w-32 lg:max-w-40 object-cover"
      />
    </Container>
  );
};
