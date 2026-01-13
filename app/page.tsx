"use client";

import { Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar/Navbar";
import Hero from "./hero/page";
import { Footer, LazySection, LoadingSpinner } from "@/components";

const AboutMe = dynamic(() => import("./about/page"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const Skills = dynamic(() => import("./skills/page"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const Projects = dynamic(() => import("./projects/page"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const ContactMe = dynamic(() => import("./contactMe/page"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

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
      <Suspense fallback={<LoadingSpinner />}>
        <LazySection id="about">
          <AboutMe />
        </LazySection>

        <LazySection id="skills">
          <Skills />
        </LazySection>

        <LazySection id="projects">
          <Projects />
        </LazySection>

        <LazySection id="contact">
          <ContactMe />
        </LazySection>

        <LazySection id="footer">
          <Footer />
        </LazySection>
      </Suspense>
    </div>
  );
}
