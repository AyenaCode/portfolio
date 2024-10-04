import { Header } from "../_components/Header";
import { Hero } from "../_components/Hero";
import { ShowCase } from "../_components/ShowCase";
import { Work } from "../_components/Work";
const page = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Work />
      <ShowCase />
    </div>
  );
};

export default page;
