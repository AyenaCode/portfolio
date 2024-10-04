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
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#c084fc] to-[#93c5fd] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="w-2/3 text-center md:ml-5 md:text-left">
        <h1 className="text-2xl md:text-4xl font-bold mb-2 lg:mb-4">
          <Code className="ml-0 py-0">
            <FaCode className="inline-block mr-1 text-primary" />
            Développeur
          </Code>
          front-end React
        </h1>
        <h2 className="lg:text-lg text-muted-foreground md:mb-6">
          Je vous aide à concevoir des applications
          <Code>
            <SiReactos className="inline-block mr-1" />
            web performantes
          </Code>
          qui offrent des expériences utilisateur fluides boostant ainsi la
          satisfaction client.
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
