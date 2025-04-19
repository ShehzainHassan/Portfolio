import AboutMe from "./components/AboutMeSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import Hero from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectSection from "./components/ProjectSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <Hero />
        <AboutMe />
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
