import HireUs from "@/components/HireUs";
import Journey from "@/components/Journey";
import ProfileCard from "@/components/ProfileCard";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";

const Home = () => {
  return (
    <main>
      <ProfileCard />
      <Projects />
      <Skills />
      <About />
      <Journey />
      <HireUs />
    </main>
  );
};

export default Home;
