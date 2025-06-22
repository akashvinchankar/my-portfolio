import { DATA } from "@/data/resume";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { CopyButton } from "@/components/copy-button";
import { StyledDescription } from "@/components/styled-description";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ShineBorder } from "@/components/magicui/shine-border";
import { Icons } from "@/components/icons";
import Link from "next/link";
import Image from "next/image";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

// Structured data for SEO
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
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
              </BlurFade>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="prose max-w-full text-pretty text-base text-muted-foreground dark:prose-invert">
              <Markdown
                components={{
                  p: ({ children }) => {
                    const text = children?.toString() || "";
                    if (text.includes("YOE")) {
                      const styledText = text.replace(
                        /(\*\*)(\d+(?:\.\d+)?\s+YOE)(\*\*)/g,
                        '<strong><span class="text-blue-600">$2</span></strong>'
                      );
                      return (
                        <p
                          dangerouslySetInnerHTML={{
                            __html: styledText,
                          }}
                        />
                      );
                    }
                    return <p>{children}</p>;
                  },
                }}
              >
                {DATA.summary}
              </Markdown>
            </div>
          </BlurFade>
        </section>

        {/* Work Experience Section */}
        <section id="work">
          <div className="flex min-h-0 flex-col gap-y-4">
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <h2 className="text-xl font-bold">Work Experience</h2>
            </BlurFade>
            <div className="grid gap-4 md:gap-6">
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

        {/* Projects Section */}
        <section id="projects">
          <div className="space-y-12 w-full py-8 lg:py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                    My Projects
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Check out my latest work
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-4xl mx-auto">
                    Here are some projects I've built using React.js,
                    TypeScript, and modern frontend technologies. Each project
                    showcases different aspects of frontend development and user
                    experience design.
                  </p>
                </div>
              </div>
            </BlurFade>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-6xl mx-auto">
              {DATA.projects.map((project, id) => (
                <BlurFade
                  key={project.title}
                  delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                >
                  <ProjectCard
                    href={project.href}
                    title={project.title}
                    description={project.description}
                    dates={project.dates}
                    tags={project.technologies}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <div className="flex min-h-0 flex-col gap-y-4">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-xl font-bold">Technical Skills</h2>
            </BlurFade>
            <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
              {DATA.skills.map((skill, id) => (
                <BlurFade
                  key={skill.name}
                  delay={BLUR_FADE_DELAY * 10 + id * 0.05}
                >
                  <Badge
                    variant="secondary"
                    className="flex items-center gap-2 py-2 px-3 hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                  >
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      className="size-3 sm:size-4"
                      width={16}
                      height={16}
                    />
                    {skill.name}
                  </Badge>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education">
          <div className="flex min-h-0 flex-col gap-y-4">
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <h2 className="text-xl font-bold">Education</h2>
            </BlurFade>
            <div className="grid gap-4 md:gap-6">
              {DATA.education.map((education, id) => (
                <BlurFade
                  key={education.school}
                  delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                >
                  <ResumeCard
                    logoUrl={education.logoUrl}
                    altText={education.school}
                    title={education.school}
                    subtitle={`${education.degree} • CGPA: ${education.cgpa}/10.0`}
                    href={education.href}
                    period={`${education.start} - ${education.end}`}
                  />
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-8 lg:py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 18}>
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Contact
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Get in Touch
                </h2>
                <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Want to chat? Just shoot me a message on{" "}
                  <Link
                    href={DATA.contact.social.LinkedIn?.url || "#"}
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </Link>{" "}
                  or{" "}
                  <Link
                    href={`mailto:${DATA.contact.email}`}
                    className="text-blue-500 hover:underline"
                  >
                    Email
                  </Link>{" "}
                  and I&apos;ll respond whenever I can. I will ignore all
                  soliciting.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-8">
                  <CopyButton
                    text={DATA.contact.email}
                    className="min-w-[250px]"
                  >
                    <Icons.email className="size-4 lg:size-5" />
                    {DATA.contact.email}
                  </CopyButton>
                  <CopyButton text={DATA.contact.tel} className="min-w-[200px]">
                    <Icons.phone className="size-4 lg:size-5" />
                    {DATA.contact.tel}
                  </CopyButton>
                </div>
              </div>
            </BlurFade>
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
