"use client";

import { DATA } from "@/data/resume";
import { ResumeCard } from "@/components/resume-card";
import { StyledDescription } from "@/components/styled-description";
import { CopyButton } from "@/components/copy-button";
import { ProjectCard } from "@/components/project-card";
import { AnimatedCounter } from "@/components/animated-counter";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ShineBorder } from "@/components/magicui/shine-border";
import { Icons } from "@/components/icons";
import Link from "next/link";
import Image from "next/image";
import { useState, useMemo, useEffect } from "react";
import Markdown from "react-markdown";

// Animation delay constant
const BLUR_FADE_DELAY = 0.25;

// Calculate dynamic experience since October 2021
function calculateExperience(): {
  years: number;
  months: number;
  totalText: string;
} {
  const startDate = new Date(2021, 9, 1); // October 2021 (month is 0-indexed)
  const currentDate = new Date();

  let years = currentDate.getFullYear() - startDate.getFullYear();
  let months = currentDate.getMonth() - startDate.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  // Round up to the next month (upper limit)
  months++;
  if (months >= 12) {
    years++;
    months = 0;
  }

  // Calculate decimal years and cap to upper limit (e.g., 3.9 YOE)
  // Always round up to show the maximum experience for the period
  const decimalYears = Math.ceil((years + months / 12) * 10) / 10;
  const totalText = `${decimalYears} YOE`;

  return { years, months, totalText };
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: DATA.name,
  url: DATA.url,
  image: DATA.avatarUrl,
  sameAs: [DATA.contact.social.LinkedIn.url, DATA.contact.social.GitHub.url],
  jobTitle: "Frontend Developer",
  worksFor: {
    "@type": "Organization",
    name: "Qubecinema Technologies Pvt. Ltd",
  },
  alumniOf: {
    "@type": "Organization",
    name: "Shri Sant Gajanan Maharaj College of Engineering",
  },
  knowsAbout: [
    "React.js",
    "TypeScript",
    "JavaScript",
    "Frontend Development",
    "Web Development",
    "Software Engineering",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
};

export default function Page() {
  const [experience, setExperience] = useState({
    years: 0,
    months: 0,
    totalText: "0 YOE",
  });
  const dynamicSummary = `Frontend React Developer with **${experience.totalText}** of experience specializing in React.js, JavaScript, TypeScript, and modern frontend technologies. Expert in building responsive, user-friendly web applications with focus on performance optimization, state management, and exceptional user experiences. Passionate about clean code, component architecture, and staying current with the latest frontend trends and best practices.`;

  const [selectedTech, setSelectedTech] = useState<string>("All");

  // Calculate experience on client side only to avoid hydration mismatch
  useEffect(() => {
    setExperience(calculateExperience());
  }, []);

  // Get all unique technologies from projects
  const allTechnologies = useMemo(() => {
    const techSet = new Set<string>();
    DATA.projects.forEach((project) => {
      project.technologies.forEach((tech) => techSet.add(tech));
    });
    return ["All", ...Array.from(techSet).sort()];
  }, []);

  // Filter projects based on selected technology
  const filteredProjects = useMemo(() => {
    if (selectedTech === "All") return DATA.projects;
    return DATA.projects.filter((project) =>
      project.technologies.some((tech: string) => tech === selectedTech)
    );
  }, [selectedTech]);

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="flex flex-col min-h-[100dvh] space-y-12 lg:space-y-16">
        {/* Hero Section */}
        <section id="hero">
          <div className="mx-auto w-full max-w-4xl space-y-8">
            <div className="gap-2 flex justify-between">
              <div className="flex-col flex flex-1 space-y-1.5">
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                  yOffset={8}
                  text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
                />
                <BlurFade delay={BLUR_FADE_DELAY}>
                  <div className="max-w-[700px] md:text-xl">
                    <StyledDescription />
                  </div>
                </BlurFade>
                <BlurFade delay={BLUR_FADE_DELAY * 2}>
                  <div className="flex gap-2 pt-4">
                    <Link
                      href={DATA.contact.social.LinkedIn?.url || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors gap-2"
                    >
                      <Icons.linkedin className="size-4 lg:size-5" />
                      Connect on LinkedIn
                    </Link>
                    <Link
                      href={DATA.resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 transition-colors gap-2"
                    >
                      <Icons.fileText className="size-4 lg:size-5" />
                      View Resume
                    </Link>
                  </div>
                </BlurFade>
              </div>
              <BlurFade delay={BLUR_FADE_DELAY}>
                <Avatar className="size-40 border lg:size-48">
                  <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
                  <AvatarImage
                    alt={DATA.name}
                    src={DATA.avatarUrl}
                    className="object-cover"
                  />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
              </BlurFade>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about">
          <div className="flex min-h-0 flex-col gap-y-8">
            <BlurFade delay={BLUR_FADE_DELAY * 3}>
              <div className="text-center space-y-4">
                <div className="inline-block rounded-lg bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 text-sm font-medium shadow-lg">
                  About Me
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Passionate Developer
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                  Crafting digital experiences with modern technologies and
                  innovative solutions. Specialized in React.js, TypeScript, and
                  building scalable web applications.
                </p>
              </div>
            </BlurFade>
          </div>
        </section>

        {/* Statistics Section */}
        <section id="stats">
          <div className="flex min-h-0 flex-col gap-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <BlurFade delay={BLUR_FADE_DELAY * 4.5}>
                <div className="group relative text-center p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-600/10 hover:from-purple-500/20 hover:to-pink-600/20 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 border border-purple-500/20">
                  <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">
                    <AnimatedCounter
                      value={experience.years + experience.months / 12}
                      duration={2000}
                      suffix="+"
                    />
                  </div>
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                    Years Experience
                  </p>
                </div>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 5}>
                <div className="group relative text-center p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-600/10 hover:from-blue-500/20 hover:to-cyan-600/20 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 border border-blue-500/20">
                  <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-3">
                    <AnimatedCounter
                      value={DATA.skills.length}
                      duration={2000}
                      suffix="+"
                    />
                  </div>
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                    Technologies
                  </p>
                </div>
              </BlurFade>
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section id="work">
          <div className="flex min-h-0 flex-col gap-y-8">
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <div className="text-center space-y-4">
                <div className="inline-block rounded-lg bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 text-sm font-medium shadow-lg">
                  Professional Journey
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Work Experience
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  My professional path in software development and the companies
                  I've contributed to.
                </p>
              </div>
            </BlurFade>
            <div className="grid gap-6 md:gap-8">
              {DATA.work.map((work, id) => (
                <BlurFade
                  key={work.company}
                  delay={BLUR_FADE_DELAY * 6 + id * 0.05}
                >
                  <ResumeCard
                    logoUrl={work.logoUrl}
                    altText={work.company}
                    title={work.company}
                    subtitle={work.title}
                    href={work.href}
                    period={`${work.start} - ${work.end ?? "Present"}`}
                    description={work.description}
                    skills={work.skills}
                  />
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <div className="flex min-h-0 flex-col gap-y-8">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <div className="text-center space-y-4">
                <div className="inline-block rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 text-sm font-medium shadow-lg">
                  Technical Expertise
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Technical Skills
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  A comprehensive toolkit of modern technologies and frameworks
                  I use to build exceptional digital experiences.
                </p>
              </div>
            </BlurFade>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {DATA.skills.map((skill, id) => (
                <BlurFade
                  key={skill.name}
                  delay={BLUR_FADE_DELAY * 10 + id * 0.05}
                >
                  <div className="group relative h-32">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                    <div className="relative flex flex-col items-center justify-center h-full p-6 rounded-xl border border-border/30 bg-gradient-to-br from-card to-card/50 hover:from-card/80 hover:to-card/30 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 group-hover:border-primary/50">
                      <div className="relative mb-3">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          className="size-10 sm:size-12 relative z-10 group-hover:scale-110 transition-transform duration-300 filter group-hover:brightness-110"
                          width={48}
                          height={48}
                          loading="lazy"
                          sizes="48px"
                        />
                      </div>
                      <span className="text-sm font-semibold text-center leading-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">
                        {skill.name}
                      </span>
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <div className="flex min-h-0 flex-col gap-y-8">
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <div className="text-center space-y-4">
                <div className="inline-block rounded-lg bg-gradient-to-r from-cyan-500 to-teal-600 text-white px-4 py-2 text-sm font-medium shadow-lg">
                  Portfolio Showcase
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Featured Projects
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  A collection of projects that demonstrate my skills in
                  frontend development, problem-solving, and user experience
                  design.
                </p>
              </div>
            </BlurFade>

            {/* Technology Filter */}
            <BlurFade delay={BLUR_FADE_DELAY * 11.5}>
              <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                {allTechnologies.map((tech) => (
                  <Button
                    key={tech}
                    variant={selectedTech === tech ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedTech(tech)}
                    className="transition-all duration-200 hover:scale-105"
                  >
                    {tech}
                  </Button>
                ))}
              </div>
            </BlurFade>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 max-w-6xl mx-auto">
              {filteredProjects.map((project, id) => (
                <BlurFade
                  key={project.title}
                  delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                >
                  <ProjectCard
                    title={project.title}
                    href={project.href}
                    description={project.description}
                    dates={project.dates}
                    tags={project.technologies}
                    image={project.image}
                    video={project.video}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <div className="flex min-h-0 flex-col gap-y-8">
            <BlurFade delay={BLUR_FADE_DELAY * 18}>
              <div className="text-center space-y-4">
                <div className="inline-block rounded-lg bg-gradient-to-r from-emerald-500 to-green-600 text-white px-4 py-2 text-sm font-medium shadow-lg">
                  Get In Touch
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Let's Connect
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Ready to collaborate? I'd love to hear about your project
                  ideas and how we can work together.
                </p>
              </div>
            </BlurFade>

            {/* Contact Info Cards */}
            <div className="max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <BlurFade delay={BLUR_FADE_DELAY * 18.5}>
                  <div className="flex items-start gap-4 p-6 rounded-lg bg-card hover:bg-accent/50 transition-colors duration-300 border border-border/40">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icons.email className="size-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email</h3>
                      <CopyButton
                        text={DATA.contact.email}
                        className="text-muted-foreground hover:text-foreground transition-colors p-0 h-auto font-normal text-base border-0 bg-transparent break-words"
                      >
                        {DATA.contact.email}
                      </CopyButton>
                    </div>
                  </div>
                </BlurFade>

                <BlurFade delay={BLUR_FADE_DELAY * 19}>
                  <div className="flex items-start gap-4 p-6 rounded-lg bg-card hover:bg-accent/50 transition-colors duration-300 border border-border/40">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icons.phone className="size-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Phone</h3>
                      <CopyButton
                        text={DATA.contact.tel}
                        className="text-muted-foreground hover:text-foreground transition-colors p-0 h-auto font-normal text-base border-0 bg-transparent break-words"
                      >
                        {DATA.contact.tel}
                      </CopyButton>
                    </div>
                  </div>
                </BlurFade>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border/20 bg-muted/20">
          <div className="container mx-auto px-4 py-8">
            <BlurFade delay={BLUR_FADE_DELAY * 19}>
              <div className="flex flex-col items-center justify-center gap-6 text-center">
                {/* Copyright and Built Info */}
                <div className="flex flex-col items-center gap-2">
                  <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} {DATA.name}. All rights
                    reserved.
                  </p>
                  <p className="text-xs text-muted-foreground/70 flex items-center gap-1">
                    Built with <span className="text-red-500">❤️</span> using
                    Next.js, TypeScript & Tailwind CSS
                  </p>
                </div>
              </div>
            </BlurFade>
          </div>
        </footer>
      </main>
    </>
  );
}
