import Navbar from "@/components/layout/Navbar/Navbar";
import AboutMe from "./about/page";
import Projects from "./projects/page";
import ContactMe from "./contactMe/page";
import Hero from "./hero/page";
import Skills from "./skills/page";
import { Footer } from "@/components";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}
