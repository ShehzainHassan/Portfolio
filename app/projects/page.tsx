"use client";

import { ProjectCard } from "@/components";
import classes from "./Projects.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const projectsData = [
  {
    title: "Portfolio Website",
    description: "My personal portfolio showcasing projects and skills.",
    imageUrl: "/images/portfolio.png",
    tags: ["React", "Next.js", "CSS", "TypeScript"],
    siteUrl: "https://shehzain-hassan.vercel.app/",
    codeUrl: "https://github.com/ShehzainHassan/Portfolio",
  },
  {
    title: "BoxCars",
    description: "A car rental platform with modern UI and booking features.",
    imageUrl: "/images/boxcars.png",
    tags: ["React", "SignalR", "FastAPI", "Machine Learning"],
    siteUrl: "https://boxcars.live/",
    codeUrl: "https://github.com/ShehzainHassan/AutoFiFE",
  },
  {
    title: "BFM",
    description: "Business finance management dashboard with analytics.",
    imageUrl: "/images/bfm.png",
    tags: ["Next.js", "React", "TypeScript", "Recharts", "Ant Design"],
    codeUrl: "https://github.com/ShehzainHassan/BFM",
  },
  {
    title: "Rendera",
    description:
      "Rendera is a responsive web application for browsing jewelry collections.",
    imageUrl: "/images/rendera.png",
    tags: ["React", "TypeScript", "Styled Components", "Vite", "i18n"],
    siteUrl: "https://rendera-nu.vercel.app/",
    codeUrl: "https://github.com/ShehzainHassan/Rendera",
  },
];

export default function Projects() {
  return (
    <section id="projects" className={classes.projects}>
      <div className={classes.titleContainer}>
        <h1 className={classes.title}>Selected Work</h1>
        <p className={classes.description}>
          Here are a few projects I&apos;ve worked on recently.
        </p>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        loop
        grabCursor
        spaceBetween={32}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className={classes.projectsSwiper}>
        {projectsData.map((project) => (
          <SwiperSlide key={project.title} className={classes.slide}>
            <ProjectCard
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              tags={project.tags}
              siteUrl={project.siteUrl}
              codeUrl={project.codeUrl}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
