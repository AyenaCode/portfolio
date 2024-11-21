import { ContactForm } from "./_components/ContactForm";
import { Footer } from "./_components/Footer";
import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { ShowCase } from "./_components/ShowCase";
import { Work } from "./_components/Work";
import { Metadata } from "next/types";
const page = () => {
  return (
    <>
      <Header />
      <Hero />
      <Work />
      <ShowCase />
      <ContactForm />
      <Footer />
    </>
  );
};

export default page;

export const metadata: Metadata = {
  title: "Accueil | AyenaCode - Développeur Front-end React",
  description:
    "Portfolio d'un développeur front-end React passionné par la création d'interfaces utilisateur performantes et intuitives",
};
