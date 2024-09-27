import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import {
  FaBriefcase,
  FaCode,
  FaUser,
  FaCog,
  FaEnvelope,
  FaExternalLinkAlt,
  FaGithub,
  FaGlobe,
  FaGraduationCap,
  FaLinkedin,
  FaMoon,
  FaPhone,
  FaServer,
  FaSun,
} from "react-icons/fa";

const Portfolio = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-900 dark:to-indigo-950 font-sans transition-colors duration-300">
      <div className="max-w-7xl mx-auto p-4 sm:p-8">
        <nav className="flex justify-end mb-8">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? (
              <FaMoon className="text-indigo-600 text-lg" />
            ) : (
              <FaSun className="text-yellow-400 text-lg" />
            )}
          </button>
        </nav>

        <header className="mb-16 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 transition-all duration-300">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex flex-col md:flex-row items-center mb-6 md:mb-0">
              <img
                src="/src/assets/picofme.png"
                alt="Akash Vinchankar"
                className="w-40 h-40 rounded-full border-4 border-indigo-500 shadow-lg mb-4 md:mb-0 md:mr-8 transition-transform duration-300 transform hover:scale-105"
              />
              <div className="text-center md:text-left">
                <h1 className="text-4xl sm:text-5xl font-bold mb-2 text-gray-800 dark:text-white">
                  Akash Vinchankar
                </h1>
                <p className="text-xl sm:text-2xl text-indigo-600 dark:text-indigo-400 mb-4">
                  Frontend Developer
                </p>
                <div className="flex justify-center md:justify-start space-x-8">
                  <SocialLink
                    href="https://github.com/akashvinchankar"
                    icon={<FaGithub size={28} />}
                  />
                  <SocialLink
                    href="https://www.linkedin.com/in/akash-vinchankar"
                    icon={<FaLinkedin size={28} />}
                  />
                  <SocialLink
                    href="mailto:akashvinchankar@gmail.com"
                    icon={<FaEnvelope size={28} />}
                  />
                  <SocialLink
                    href="tel:+919604346378"
                    icon={<FaPhone size={28} />}
                  />
                </div>
              </div>
            </div>
            <div className="mt-6 md:mt-0">
              <a
                href="/src/assets/Akash Vinchankar Resume Sept 2024.pdf"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 px-6 rounded-full shadow-lg hover:from-indigo-600 hover:to-purple-700 transition duration-300 flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="mr-2 text-lg">Download CV</span>
                <FaExternalLinkAlt size={20} />
              </a>
            </div>
          </div>
        </header>

        <Section title="About Me" icon={<FaUser className="mr-2" size={28} />}>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            Frontend Developer with 3 years of experience in JavaScript,
            React.js, and TypeScript. Skilled in building scalable, maintainable
            web applications and optimizing performance. Passionate about
            creating intuitive user interfaces and solving complex problems
            through elegant code.
          </p>
        </Section>

        <Section title="Skills" icon={<FaCode className="mr-2" size={28} />}>
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8">
            <SkillCategory
              title="Frontend"
              icon={<FaGlobe size={28} className="text-indigo-500" />}
              skills={[
                {
                  name: "JavaScript",
                  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
                },
                {
                  name: "TypeScript",
                  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
                },
                {
                  name: "React.js",
                  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                },
                {
                  name: "Redux Toolkit",
                  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
                },
                {
                  name: "HTML",
                  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
                },
                {
                  name: "CSS",
                  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
                },
                {
                  name: "SCSS",
                  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
                },
                {
                  name: "Tailwind CSS",
                  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
                },
              ]}
            />
            <SkillCategory
              title="Backend"
              icon={<FaServer size={28} className="text-indigo-500" />}
              skills={[
                {
                  name: "SQL",
                  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
                },
                {
                  name: "Golang",
                  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg",
                },
              ]}
            />
            <SkillCategory
              title="Tools & Other"
              icon={<FaCog size={28} className="text-indigo-500" />}
              skills={[
                {
                  name: "Git",
                  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
                },
                {
                  name: "RESTful APIs",
                  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
                },
                {
                  name: "Performance Optimization",
                  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg",
                },
                {
                  name: "Responsive Design",
                  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
                },
                {
                  name: "VS Code",
                  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
                },
                {
                  name: "JIRA",
                  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
                },
              ]}
            />
          </div>
        </Section>

        <Section
          title="Work Experience"
          icon={<FaBriefcase className="mr-2" size={28} />}
        >
          <div className="space-y-12">
            <ExperienceCard
              company="Qubecinema Technologies Pvt. Ltd"
              position="Associate Software Engineer"
              period="Dec 2022 - Present"
              responsibilities={[
                "Developed features for Qube Slate using React.js, TypeScript, and SCSS.",
                "Migrated from class components to functional components, improving code maintainability.",
                "Implemented API caching, reducing server load and costs by 30%, enhancing performance.",
                "Created reusable components for filters, uploading CSVs, reducing feature development time by 25%.",
                "Contributed to backend API development and search optimization with SQL and Golang.",
                "Documented features and incorporated business feedback, increasing user satisfaction by 35%.",
              ]}
            />
            <ExperienceCard
              company="Cognizant Technologies Pvt. Ltd"
              position="Programmer Analyst"
              period="Oct 2021 - Nov 2022"
              responsibilities={[
                "Developed a UI dashboard for a major food chain using React.js, increasing user engagement.",
                "Enhanced the codebase for readability and maintainability by introducing pre-deployment checks, reducing bug reports by 30%.",
                "Collaborated with backend developers and UX designers, improving project delivery times.",
              ]}
            />
          </div>
        </Section>

        <Section title="Projects" icon={<FaCode className="mr-2" size={28} />}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              title="Movies Directory App"
              description="A comprehensive movie library application with features like 'Add to Favorites' and sorting based on ratings, popularity, and genre. Built using React.js, Axios, and the open-source Movies API."
              imageUrl="/src/assets/Tmdb.png"
              demoLink="https://imdb-akashv.netlify.app/"
              codeLink="https://github.com/akashvinchankar/IMDB/tree/master/imdb"
            />
            <ProjectCard
              title="Cocktails Directory"
              description="An interactive web application to browse and search various drink recipes using keywords. Built using React.js and the Context API."
              imageUrl="/src/assets/Cocktail.png"
              demoLink="https://cocktails-directory-akv.netlify.app/"
              codeLink="https://github.com/akashvinchankar/cocktails-directory"
            />
          </div>
        </Section>

        <Section
          title="Education"
          icon={<FaGraduationCap className="mr-2" size={28} />}
        >
          <div className="bg-gradient-to-r from-indigo-50 to-purple-100 dark:from-gray-800 dark:to-indigo-900 p-6 rounded-lg shadow-md transition-transform duration-300 hover:shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Bachelor&apos;s Degree
            </h3>
            <p className="text-xl sm:text-2xl text-indigo-600 dark:text-indigo-400 mb-1">
              Shri Sant Gajanan Maharaj College of Engineering
            </p>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300">
              2017 - 2021 | CGPA: 9.5/10.0
            </p>
          </div>
        </Section>

        <footer className="text-center text-gray-600 dark:text-gray-400">
          <p className="mb-4 text-lg flex items-center justify-center">
            <img
              src="https://cdn.iconscout.com/icon/free/png-512/free-leetcode-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-4-pack-logos-icons-2944960.png?f=webp&w=256"
              alt="LeetCode Logo"
              className="h-6 w-6 mr-2"
            />
            LeetCode Profile:{" "}
            <a
              href="https://leetcode.com/akashvinchankar"
              className="text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              akashvinchankar
            </a>{" "}
            — Solved 250+ Questions
          </p>
          <p className="text-sm">
            &copy; 2024 Akash Vinchankar. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

const Section = ({ title, icon, children }) => (
  <section className="mb-16 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 transition-all duration-300">
    <h2 className="text-2xl sm:text-2xl font-bold mb-6 text-indigo-600 dark:text-indigo-400 flex items-center">
      {icon}
      {title}
    </h2>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  children: PropTypes.node.isRequired,
};

const SocialLink = ({ href, icon }) => (
  <a
    href={href}
    className="text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition duration-300"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Social Link"
  >
    {icon}
  </a>
);

SocialLink.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

const SkillCategory = ({ title, icon, skills }) => (
  <div className="bg-gradient-to-r from-indigo-50 to-purple-100 dark:from-gray-800 dark:to-indigo-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <h3 className="text-2xl font-semibold mb-4 flex items-center text-indigo-600 dark:text-indigo-400">
      {icon}
      <span className="ml-2">{title}</span>
    </h3>
    <ul className="grid grid-cols-2 gap-4">
      {skills.map((skill) => (
        <li key={skill.name} className="flex items-center space-x-2">
          <img src={skill.logo} alt={skill.name} className="w-6 h-6" />
          <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
        </li>
      ))}
    </ul>
  </div>
);

SkillCategory.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      logo: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const ExperienceCard = ({ company, position, period, responsibilities }) => (
  <div className="relative bg-gradient-to-r from-indigo-50 to-purple-100 dark:from-gray-800 dark:to-indigo-900 p-6 rounded-lg shadow-md transition-transform duration-300 hover:shadow-xl">
    <div className="absolute left-0 top-0 h-full w-1 bg-indigo-600 rounded-l-lg"></div>
    <div className="pl-6">
      <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">
        {company}
      </h3>
      <p className="text-xl text-gray-800 dark:text-white font-medium mb-1">
        {position}
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-400 italic mb-4">
        {period}
      </p>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
        {responsibilities.map((resp, index) => (
          <li key={index} className="text-base leading-relaxed">
            {resp}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

ExperienceCard.propTypes = {
  company: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  responsibilities: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const ProjectCard = ({ title, description, imageUrl, demoLink, codeLink }) => (
  <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 transform hover:scale-105">
    <div className="h-64 overflow-hidden">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover object-top"
      />
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">
        {title}
      </h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
      <div className="flex justify-between">
        <a
          href={demoLink}
          className="text-indigo-500 dark:text-indigo-400 hover:underline flex items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="mr-1">Live Demo</span>
          <FaExternalLinkAlt size={16} />
        </a>
        <a
          href={codeLink}
          className="text-indigo-500 dark:text-indigo-400 hover:underline flex items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="mr-1">View Code</span>
          <FaGithub size={16} />
        </a>
      </div>
    </div>
  </div>
);

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  demoLink: PropTypes.string.isRequired,
  codeLink: PropTypes.string.isRequired,
};

export default Portfolio;
