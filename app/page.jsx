import HireUs from "@/components/HireUs";
import Journey from "@/components/Journey";
import ProfileCard from "@/components/ProfileCard";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

const Home = () => {
  return (
    <section className="max-w-6xl mx-auto p-2">
      <ProfileCard />
      <Projects />
      <Skills />
      <Journey />
      <HireUs />
    </section>
  );
};

export default Home;
