import { ContactForm } from "../_components/ContactForm";
import { Footer } from "../_components/Footer";
import { Header } from "../_components/Header";
import { Hero } from "../_components/Hero";
import { ShowCase } from "../_components/ShowCase";
import { Work } from "../_components/Work";
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
