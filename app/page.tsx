"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar/Navbar";
import Hero from "./hero/page";
import { Footer, LazySection, LoadingSpinner } from "@/components";

const AboutMe = dynamic(() => import("./about/page"), { ssr: false });
const Skills = dynamic(() => import("./skills/page"), { ssr: false });
const Projects = dynamic(() => import("./projects/page"), { ssr: false });
const ContactMe = dynamic(() => import("./contactMe/page"), { ssr: false });

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <div>
      <Navbar />
      <Hero />
      <LazySection>
        <AboutMe />
      </LazySection>
      <LazySection>
        <Skills />
      </LazySection>
      <LazySection>
        <Projects />
      </LazySection>
      <LazySection>
        <ContactMe />
      </LazySection>
      <Footer />
    </div>
  );
}
