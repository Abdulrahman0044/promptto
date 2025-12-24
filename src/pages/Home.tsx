import Services from "../components/services";
import Projects from "../components/projects";
import Cta from "../components/cta";
import Hero from "../components/hero";
import Starts from "../components/starts";

const Home = () => {
  return (
    <>
      <Hero />
      <Starts />
      <Services />
      <Projects />
      <Cta />
    </>
  );
};

export default Home;
