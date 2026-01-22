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
import { NavSidebar } from "@/components/nav-sidebar";
import { ShineBorder } from "@/components/magicui/shine-border";
import { Icons } from "@/components/icons";
import Link from "next/link";
import Image from "next/image";
import { useState, useMemo, useEffect } from "react";
import Markdown from "react-markdown";
import { cn } from "../lib/utils";

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
  jobTitle: "Full Stack Developer",
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
    "Next.js",
    "Go",
    "PostgreSQL",
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
  const dynamicSummary = `Full Stack Developer with **${experience.totalText}** of experience specializing in React.js, Next.js, Go, and cloud technologies. Expert in building scalable, full-stack web applications with focus on performance optimization, database design, and exceptional user experiences. Passionate about clean code, system architecture, and modern development practices.`;

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
      <NavSidebar />
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="flex flex-col min-h-[100dvh] space-y-12 lg:space-y-16">
        {/* Hero Section */}
        <section id="hero" className="py-12 md:py-32 relative">
          <div className="mx-auto w-full max-w-7xl space-y-16">
            <div className="flex flex-col md:flex-row gap-12 items-center justify-between">
              
              {/* Text Content */}
              <div className="flex-col flex flex-1 space-y-8 text-center md:text-left z-10">
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="text-6xl font-extrabold tracking-tight sm:text-7xl xl:text-8xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 pb-4"
                  yOffset={8}
                  text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
                />
                
                <BlurFade delay={BLUR_FADE_DELAY}>
                  <p className="max-w-[600px] text-xl md:text-2xl text-muted-foreground mx-auto md:mx-0 leading-relaxed font-light">
                    <StyledDescription />
                  </p>
                </BlurFade>

                <BlurFade delay={BLUR_FADE_DELAY * 2}>
                  <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
                    <Link
                      href={DATA.contact.social.LinkedIn?.url || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105 shadow-xl shadow-primary/20 gap-2"
                    >
                      <Icons.linkedin className="size-5" />
                      Lets Connect
                    </Link>
                    <Link
                      href={DATA.resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-background border-2 border-primary/10 px-8 py-4 text-base font-medium text-foreground hover:bg-secondary/50 transition-all hover:scale-105 gap-2 backdrop-blur-sm"
                    >
                      <Icons.fileText className="size-5" />
                      View Resume
                    </Link>
                  </div>
                </BlurFade>
              </div>

              {/* Avatar / Visual */}
              <BlurFade delay={BLUR_FADE_DELAY}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-full blur-[100px] opacity-30" />
                  <div className="relative p-2 rounded-full border-2 border-white/10 bg-white/5 backdrop-blur-md">
                    <Avatar className="size-64 md:size-80 lg:size-96 border-4 border-background shadow-2xl relative">
                      <AvatarImage
                        alt={DATA.name}
                        src={DATA.avatarUrl}
                        className="object-cover"
                      />
                      <AvatarFallback>{DATA.initials}</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
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
                  Full Stack Engineer
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                  Crafting scalable digital experiences with modern technologies. 
                  Specialized in building full-stack applications with <strong>React.js, Next.js, Go, PostgreSQL, and AWS</strong>.
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
        {/* Work Experience Section - Timeline Style */}
        <section id="work">
          <div className="flex min-h-0 flex-col gap-y-12">
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <div className="text-center space-y-4 max-w-2xl mx-auto">
                <div className="inline-block rounded-full bg-orange-100 text-orange-600 dark:bg-orange-950/30 dark:text-orange-400 px-3 py-1 text-sm font-medium">
                  Career Path
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Work Experience
                </h2>
                <p className="text-muted-foreground text-lg">
                  My professional journey and the impact I've made along the way.
                </p>
              </div>
            </BlurFade>
            
            <div className="relative max-w-4xl mx-auto pl-6 md:pl-0">
              {/* Timeline Line */}
              <div className="absolute left-6 md:left-[50%] top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />
              <div className="absolute left-6 top-0 bottom-0 w-px bg-border -translate-x-1/2 md:hidden" />

              <div className="space-y-12">
                {DATA.work.map((work, id) => (
                  <BlurFade
                    key={work.company}
                    delay={BLUR_FADE_DELAY * 6 + id * 0.05}
                  >
                    <div className="relative grid md:grid-cols-2 gap-8 md:gap-12 items-start group">
                      {/* Timeline Dot */}
                      <div className="absolute left-6 md:left-[50%] top-0 size-4 rounded-full border-4 border-background bg-primary -translate-x-1/2 mt-1.5 z-10 shadow-sm" />

                      {/* Content Area - Left/Right alternating for desktop */}
                      <div className={cn(
                        "relative space-y-2 md:text-right md:pr-12 col-start-1 md:row-start-1", 
                        id % 2 === 0 ? "md:block" : "md:hidden"
                      )}>
                         <div className="inline-flex items-center gap-2 mb-1 md:justify-end">
                            <h3 className="text-xl font-bold">{work.company}</h3>
                            <Avatar className="size-8 border bg-muted-background dark:bg-foreground">
                              <AvatarImage src={work.logoUrl} alt={work.company} className="object-contain" />
                              <AvatarFallback>{work.company[0]}</AvatarFallback>
                            </Avatar>
                         </div>
                         <h4 className="text-lg font-medium text-primary">{work.title}</h4>
                         <p className="text-sm text-muted-foreground font-mono">{work.start} - {work.end ?? "Present"}</p>
                      </div>

                      <div className={cn(
                        "relative bg-card p-8 rounded-2xl border-2 shadow-lg hover:shadow-2xl transition-all duration-300",
                        "hover:border-primary/20 hover:-translate-y-1",
                        id % 2 === 0 ? "md:col-start-2 md:row-start-1" : "md:col-start-1 md:row-start-1"
                      )}>
                        {/* Decorative gradient blob */}
                        <div className="absolute -z-10 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl inset-0" />
                        
                        {/* Mobile Header (visible only on mobile) */}
                        <div className="md:hidden flex items-center gap-4 mb-6 pb-6 border-b border-border/50">
                           <Avatar className="size-14 border-2 bg-muted-background dark:bg-foreground shadow-sm">
                              <AvatarImage src={work.logoUrl} alt={work.company} className="object-contain" />
                              <AvatarFallback>{work.company[0]}</AvatarFallback>
                            </Avatar>
                            <div>
                               <h3 className="text-xl font-bold leading-tight">{work.company}</h3>
                               <h4 className="text-base font-medium text-primary mt-1">{work.title}</h4>
                               <p className="text-sm text-muted-foreground font-mono mt-1">{work.start} - {work.end ?? "Present"}</p>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="text-muted-foreground text-sm mb-6 space-y-3">
                          {work.description.split("–").map((point, index) => {
                            const trimmedPoint = point.trim();
                            if (!trimmedPoint) return null;
                            return (
                              <div key={index} className="flex items-start gap-3">
                                <span className="block mt-2 size-1.5 rounded-full bg-primary shrink-0 shadow-[0_0_8px_rgba(var(--primary),0.5)]" />
                                <span className="leading-relaxed">{trimmedPoint}</span>
                              </div>
                            );
                          })}
                        </div>
                        
                        {/* Skills */}
                        <div className="flex flex-wrap gap-2 pt-2 border-t border-border/50">
                           {work.skills?.map((skill) => (
                              <Badge key={skill.name} variant="secondary" className="text-xs font-normal py-1 px-2 hover:bg-primary/10 hover:text-primary transition-colors cursor-default gap-1">
                                {skill.icon && <Image src={skill.icon} alt={skill.name} width={14} height={14} className="size-3.5 object-contain" />}
                                {skill.name}
                              </Badge>
                           ))}
                        </div>
                      </div>

                      {/* Desktop Header for Alternating side */}
                      <div className={cn(
                        "relative space-y-2 md:pl-12 col-start-2 md:row-start-1", 
                        id % 2 !== 0 ? "md:block" : "md:hidden"
                      )}>
                         <div className="inline-flex items-center gap-2 mb-1">
                            <Avatar className="size-8 border bg-muted-background dark:bg-foreground">
                              <AvatarImage src={work.logoUrl} alt={work.company} className="object-contain" />
                              <AvatarFallback>{work.company[0]}</AvatarFallback>
                            </Avatar>
                            <h3 className="text-xl font-bold">{work.company}</h3>
                         </div>
                         <h4 className="text-lg font-medium text-primary">{work.title}</h4>
                         <p className="text-sm text-muted-foreground font-mono">{work.start} - {work.end ?? "Present"}</p>
                      </div>

                    </div>
                  </BlurFade>
                ))}
              </div>
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
              <div className="text-center space-y-4 max-w-3xl mx-auto">
                <div className="inline-block rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground mb-2">
                  My Work
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                  Featured Projects
                </h2>
                <p className="text-muted-foreground text-lg md:text-xl">
                  A collection of projects exploring modern web technologies,
                  focusing on performance and user experience.
                </p>
              </div>
            </BlurFade>

            {/* Technology Filter Removed */}

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 max-w-6xl mx-auto">
              {DATA.projects.map((project, id) => (
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
            <div className="max-w-2xl mx-auto w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <BlurFade delay={BLUR_FADE_DELAY * 18.5}>
                  <div className="flex flex-col items-center text-center p-6 rounded-xl bg-card hover:bg-accent/50 transition-colors duration-300 border border-border/40 shadow-sm h-full">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                      <Icons.email className="size-6" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Email</h3>
                    <div className="w-full">
                      <CopyButton
                        text={DATA.contact.email}
                        className="w-full text-muted-foreground hover:text-foreground transition-colors h-auto font-normal text-sm border-0 bg-transparent break-all whitespace-normal py-1"
                      >
                        {DATA.contact.email}
                      </CopyButton>
                    </div>
                  </div>
                </BlurFade>

                <BlurFade delay={BLUR_FADE_DELAY * 19}>
                  <div className="flex flex-col items-center text-center p-6 rounded-xl bg-card hover:bg-accent/50 transition-colors duration-300 border border-border/40 shadow-sm h-full">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                      <Icons.phone className="size-6" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Phone</h3>
                    <div className="w-full">
                      <CopyButton
                        text={DATA.contact.tel}
                        className="w-full text-muted-foreground hover:text-foreground transition-colors h-auto font-normal text-sm border-0 bg-transparent py-1"
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
