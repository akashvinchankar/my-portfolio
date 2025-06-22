import { Icons } from "@/components/icons";
import { HomeIcon, MailIcon } from "lucide-react";

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

const experience = calculateExperience();

export const DATA = {
  name: "Akash Vinchankar",
  initials: "AV",
  url: "https://akashvinchankar.dev",
  location: "Mumbai, Maharashtra, India",
  locationLink: "https://www.google.com/maps/place/mumbai",
  description: `Frontend React Developer with ${experience.totalText} of experience building modern web applications using React.js, TypeScript, and modern frontend technologies.`,
  summary: `Frontend React Developer with **${experience.totalText}** of experience specializing in React.js, TypeScript, and modern frontend technologies. Expert in building responsive, user-friendly web applications with focus on performance optimization, state management, and exceptional user experiences. Passionate about clean code, component architecture, and staying current with the latest frontend trends and best practices.`,
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
      badges: ["React.js", "TypeScript", "Material UI", "SCSS"],
      location: "Mumbai, India",
      title: "Frontend Developer",
      logoUrl:
        "https://media.licdn.com/dms/image/v2/C510BAQEK_yAFtVSNFg/company-logo_200_200/company-logo_200_200/0/1630627571909/qube_cinema_media_technologies_pvt_ltd_logo?e=2147483647&v=beta&t=iVLblLxP2AW0WglJl8CLrhrla-cwkkKzEysMov85rtM",
      start: "Dec 2022",
      end: "Present",
      description:
        "– Built responsive frontend modules for Qube Slate platform using React.js, TypeScript, and Material UI – Migrated class components to functional components with custom hooks for better performance – Optimized frontend performance and state management, improving user experience by 35% – Developed reusable UI component library with responsive design patterns – Integrated with RESTful APIs and collaborated with backend teams on Golang microservices",
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
          name: "SCSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
        },
        {
          name: "Material UI",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
        },
        {
          name: "Performance Optimization",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg",
        },
        {
          name: "Git",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
          name: "RESTful APIs",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Golang",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg",
        },
      ],
    },
    {
      company: "Cognizant Technologies Pvt. Ltd",
      href: "https://www.cognizant.com/",
      badges: ["React.js", "Redux Toolkit", "Tailwind CSS"],
      location: "Pune, India",
      title: "Programmer Analyst",
      logoUrl:
        "https://companieslogo.com/img/orig/CTSH-82a8444b.png?t=1720244491",
      start: "Oct 2021",
      end: "Nov 2022",
      description:
        "– Developed a React.js + Redux dashboard with responsive layouts and dynamic charts – Implemented automated tests with Jest and CI/CD workflows, reducing QA bugs by 30% – Collaborated with backend teams to integrate RESTful APIs and optimize user experience",
      skills: [
        {
          name: "React.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Redux Toolkit",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
        },
        {
          name: "Tailwind CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
          name: "HTML",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "Responsive Design",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        },
        {
          name: "RESTful APIs",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
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
    },
  ],
  projects: [
    {
      title: "Movies Directory App (TMDB)",
      href: "https://imdb-akashv.netlify.app/",
      dates: "",
      active: true,
      description:
        "React.js movie discovery platform with client-side routing, debounced search, and performance optimizations.",
      technologies: ["React.js", "JavaScript", "Axios", "TMDB API", "CSS"],
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
      title: "YouTube Clone",
      href: "https://tube-akash-v.netlify.app/",
      dates: "",
      active: true,
      description:
        "YouTube clone with React.js, Redux Toolkit, and YouTube Data API featuring complete video streaming.",
      technologies: [
        "React.js",
        "Redux Toolkit",
        "Axios",
        "YT API",
        "CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://tube-akash-v.netlify.app/",
          icon: <Icons.globe className="size-4" />,
        },
        {
          type: "Source",
          href: "https://github.com/akashvinchankar/tube-akash",
          icon: <Icons.github className="size-4" />,
        },
      ],
      image: "/YTClone.png",
      video: "",
    },
    {
      title: "Cocktails Directory",
      href: "https://cocktails-directory-akv.netlify.app/",
      dates: "",
      active: true,
      description:
        "Progressive web app with React.js and Context API featuring dynamic filtering and mobile-first design.",
      technologies: ["React.js", "JavaScript", "Axios", "Context API", "CSS"],
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
    {
      title: "The Taravu",
      href: "https://thetaravu.com/",
      dates: "",
      active: true,
      description:
        "Web application for heavy machinery pricing with React.js, real-time data scraping, and equipment listings.",
      technologies: ["React.js", "JavaScript", "Axios", "Web Scraping", "CSS"],
      links: [
        {
          type: "Website",
          href: "https://thetaravu.com/",
          icon: <Icons.globe className="size-4" />,
        },
        {
          type: "Source",
          href: "https://github.com/akashvinchankar/bid-my-asset",
          icon: <Icons.github className="size-4" />,
        },
      ],
      image: "/thetaravu.png",
      video: "",
    },
  ],
} as const;
