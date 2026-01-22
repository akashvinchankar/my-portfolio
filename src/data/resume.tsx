import { Icons } from "@/components/icons";
import { HomeIcon, MailIcon } from "lucide-react";

// Calculate dynamic experience since October 2021
export function calculateExperience(): {
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

// Helper function to get YOE text with styling
export const getStyledYOE = () => calculateExperience().totalText;
export const getPlainYOE = () => calculateExperience().totalText;

export const DATA = {
  name: "Akash Vinchankar",
  initials: "AV",
  url: "https://akashvinchankar.dev",
  location: "Pune, Maharashtra, India",
  locationLink: "https://www.google.com/maps/place/pune",
  description: `Full Stack Developer with 3+ YOE building modern web applications with React.js, Next.js, Go, PostgreSQL, and AWS.`,
  summary: `Full Stack Developer with **3+ YOE** of experience building scalable applications using React.js, Next.js, Go, PostgreSQL, and AWS. Expert in designing decoupled architectures, optimizing performance, and delivering exceptional user experiences. Passionate about clean code, distributed systems, and modern web standards.`,
  styledDescription: `Full Stack Developer with <span class="text-blue-600 font-semibold">3+ YOE</span> building scalable apps with React.js, Next.js, Go & AWS.`,
  avatarUrl: "/picofme.png",
  resumeUrl:
    "https://drive.google.com/file/d/1JxgxWRdWZvBs8TqqdMnvIezy5VromKh-/view",
  skills: [
    {
      name: "React.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "SCSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "Redux Toolkit",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    },
    {
      name: "Context API",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Axios",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg",
    },
    {
      name: "Material UI",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
    },
    {
      name: "Responsive Design",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    {
      name: "Performance Optimization",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg",
    },
    {
      name: "Jest Testing",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "VS Code",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    {
      name: "JIRA",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
    },
    {
      name: "RESTful APIs",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Golang",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg",
    },
    {
      name: "AWS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "akashvinchankar@gmail.com",
    tel: "+91 9604346378",
    social: {
      email: {
        name: "Send Email",
        url: "mailto:akashvinchankar@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/akashvinchankar",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/akash-vinchankar",
        icon: Icons.linkedin,
        navbar: true,
      },
      LeetCode: {
        name: "LeetCode",
        url: "https://leetcode.com/akashvinchankar",
        icon: Icons.globe,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Qubecinema Technologies Pvt. Ltd",
      href: "https://www.qubecinema.com/",
      badges: ["React.js", "TypeScript", "Golang", "AWS", "PostgreSQL"],
      location: "Chennai, India",
      title: "Software Engineer (Full Stack)",
      logoUrl:
        "https://media.licdn.com/dms/image/v2/C510BAQEK_yAFtVSNFg/company-logo_200_200/company-logo_200_200/0/1630627571909/qube_cinema_media_technologies_pvt_ltd_logo?e=2147483647&v=beta&t=iVLblLxP2AW0WglJl8CLrhrla-cwkkKzEysMov85rtM",
      start: "Dec 2022",
      end: "Present",
      description:
        "– Developed and maintained full-stack modules for Qube Slate using React.js, TypeScript, Golang, and TailwindCSS – Designed and implemented a report generation and scheduling system using backend cron jobs and AWS services for automated report delivery and notifications - Implemented email notification workflows and message queuing using AWS SQS and SNS; used S3 for report storage and EC2 for background workers when necessary – Owned API development and optimization tasks—designing RESTful endpoints in Golang (Gin + GORM), improving query performance, and adding caching where appropriate – Built a comprehensive edit-logging / audit mechanism across the application to capture changes, support traceability, and assist debugging – Implemented robust logging and monitoring practices for campaign workflows and reporting pipelines to improve reliability",
      skills: [
        {
          name: "React.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Golang",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg",
        },
        {
          name: "AWS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        },
        {
          name: "PostgreSQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        },
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          name: "Material UI",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
        },
        {
          name: "Git",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
      ],
    },
    {
      company: "Cognizant Technologies Pvt. Ltd",
      href: "https://www.cognizant.com/",
      badges: ["React.js", "Redux Toolkit", "Ant Design"],
      location: "Pune, India",
      title: "Programmer Analyst",
      logoUrl:
        "https://companieslogo.com/img/orig/CTSH-82a8444b.png?t=1720244491",
      start: "Oct 2021",
      end: "Nov 2022",
      description:
        "– Built interactive dashboards using React.js and Redux with responsive layouts and data visualizations – Implemented Jest test suites and CI/CD workflows to improve release quality – Collaborated with backend teams to design and consume RESTful APIs and optimize integration points",
      skills: [
        {
          name: "React.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Redux",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "Jest",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
        },
      ],
    },
  ],
  education: [
    {
      school: "Shri Sant Gajanan Maharaj College of Engineering",
      href: "https://ssgmce.ac.in/",
      degree: "Bachelor's Degree in Engineering",
      logoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjX-srnJfEjGnuBKuy2A-wJzWgvNDSKATVlg&s",
      start: "2017",
      end: "2021",
      cgpa: "9.2",
    },
  ],
  projects: [
    {
      title: "Bech-Do Marketplace (Full Stack)",
      href: "https://bech-do.vercel.app/",
      dates: "Jan 2024 - Present",
      active: true,
      description:
        "Full-stack marketplace built with Next.js 15 (App Router) on the frontend and Golang (Gin + GORM) on the backend. Implemented JWT-based authentication, role-based access, product management, and real-time buyer-seller chat.",
      technologies: [
        "Next.js 15",
        "React.js",
        "Golang",
        "Gin",
        "PostgreSQL",
        "Tailwind CSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://bech-do.vercel.app/",
          icon: <Icons.globe className="size-4" />,
        },
        {
          type: "Source",
          href: "https://github.com/akashvinchankar/bech-do",
          icon: <Icons.github className="size-4" />,
        },
      ],
      image: "/bech-do.png",
      video: "",
    },
    {
      title: "Movies Directory App (TMDB)",
      href: "https://imdb-akashv.netlify.app/",
      dates: "",
      active: true,
      description:
        "Movie discovery platform built with React.js, Axios, and Material UI; implemented lazy loading, route-based code splitting, and performance optimizations.",
      technologies: ["React.js", "Axios", "Material UI", "TMDB API", "CSS"],
      links: [
        {
          type: "Website",
          href: "https://imdb-akashv.netlify.app/",
          icon: <Icons.globe className="size-4" />,
        },
        {
          type: "Source",
          href: "https://github.com/akashvinchankar/IMDB/tree/master/imdb",
          icon: <Icons.github className="size-4" />,
        },
      ],
      image: "/Tmdb.png",
      video: "",
    },
    {
      title: "Cocktails Directory Platform",
      href: "https://cocktails-directory-akv.netlify.app/",
      dates: "",
      active: true,
      description:
        "Progressive Web App using React.js and Context API with dynamic filtering and mobile-first design.",
      technologies: ["React.js", "Context API", "Axios", "CSS"],
      links: [
        {
          type: "Website",
          href: "https://cocktails-directory-akv.netlify.app/",
          icon: <Icons.globe className="size-4" />,
        },
        {
          type: "Source",
          href: "https://github.com/akashvinchankar/cocktails-directory",
          icon: <Icons.github className="size-4" />,
        },
      ],
      image: "/Cocktail.png",
      video: "",
    },
  ],
} as const;
