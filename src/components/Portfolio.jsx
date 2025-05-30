import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import {
  FaBriefcase,
  FaCog,
  FaDesktop,
  FaEnvelope,
  FaExternalLinkAlt,
  FaGithub,
  FaGraduationCap,
  FaLinkedin,
  FaMoon,
  FaPhone,
  FaProjectDiagram,
  FaServer,
  FaSun,
  FaTools,
  FaUser,
  FaCopy,
  FaBars,
  FaTimes,
  FaDownload,
  FaCode,
  FaRocket,
  FaChevronDown,
  FaPaperPlane,
} from "react-icons/fa";

import Resume from "../assets/Akash_Vinchankar_Resume.pdf";
import Cocktail from "../assets/Cocktail.png";
import picofme from "../assets/picofme.png";
import thetaravu from "../assets/thetaravu.png";
import tmdb from "../assets/Tmdb.png";
import YTClone from "../assets/YTClone.png";

const skillIcons = {
  "React.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  SCSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "Redux Toolkit": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  PostgreSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  Golang: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "RESTful APIs": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Performance Optimization": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg",
  "Responsive Design": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  "VS Code": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  JIRA: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
  Axios: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg",
  "Context API": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
};

const Portfolio = () => {
  const [theme, setTheme] = useState("light");
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Calculate years of experience from October 2021
  const calculateExperience = () => {
    const startDate = new Date('2021-10-01');
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate - startDate);
    const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);
    return Math.round(diffYears * 10) / 10; // Round to 1 decimal place
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "experience", "projects", "education", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      if (type === "email") {
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
      } else if (type === "phone") {
        setPhoneCopied(true);
        setTimeout(() => setPhoneCopied(false), 2000);
      }
    });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 overflow-x-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900' 
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
    }`}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-gray-900/80 border-gray-700/50' 
          : 'bg-white/80 border-gray-200/50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className={`text-2xl font-bold transition-colors duration-300 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Akash<span className="text-blue-600">Vinchankar</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                    activeSection === item.id
                      ? theme === 'dark' 
                        ? "text-blue-400 border-b-2 border-blue-400"
                        : "text-blue-600 border-b-2 border-blue-600"
                      : theme === 'dark'
                        ? "text-gray-300 hover:text-blue-300"
                        : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-colors duration-300 ${
                  theme === 'dark' 
                    ? 'bg-gray-800 hover:bg-gray-700' 
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
                aria-label="Toggle Theme"
              >
                {theme === "light" ? (
                  <FaMoon className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`} />
                ) : (
                  <FaSun className="text-yellow-500 text-lg" />
                )}
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`md:hidden p-2 rounded-full transition-colors duration-300 ${
                  theme === 'dark' 
                    ? 'bg-gray-800 hover:bg-gray-700' 
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {isMenuOpen ? (
                  <FaTimes className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`} />
                ) : (
                  <FaBars className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`} />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className={`md:hidden py-4 space-y-2 backdrop-blur-lg rounded-lg mt-2 transition-colors duration-300 ${
              theme === 'dark' ? 'bg-gray-800/90' : 'bg-white/90'
            }`}>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                    activeSection === item.id
                      ? theme === 'dark'
                        ? "text-blue-400 bg-blue-400/10"
                        : "text-blue-600 bg-blue-100"
                      : theme === 'dark'
                        ? "text-gray-300 hover:text-blue-300 hover:bg-gray-700/50"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
        <div className={`absolute inset-0 animate-pulse ${
          theme === 'dark' 
            ? 'bg-gradient-to-br from-blue-500/10 to-purple-500/10' 
            : 'bg-gradient-to-br from-blue-200/30 to-purple-200/30'
        }`}></div>
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <div className="mb-8 animate-fade-in">
            <img
              src={picofme}
              alt="Akash Vinchankar"
              className={`w-48 h-48 md:w-56 md:h-56 rounded-full border-4 shadow-2xl mx-auto mb-8 transition-transform duration-500 hover:scale-105 ${
                theme === 'dark' 
                  ? 'border-blue-400 hover:shadow-blue-500/50' 
                  : 'border-blue-500 hover:shadow-blue-300/50'
              }`}
            />
          </div>

          <div className="space-y-6 animate-slide-up">
            <h1 className={`text-5xl md:text-7xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Akash Vinchankar
              </span>
            </h1>
            <p className={`text-xl md:text-2xl mb-8 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Frontend Developer | React.js Specialist | Building Digital Experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection("projects")}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center"
              >
                <FaRocket className="mr-2 group-hover:animate-bounce" />
                View My Work
              </button>
              <a
                href={Resume}
                download="Akash_Vinchankar_Resume.pdf"
                className={`group px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center border-2 ${
                  theme === 'dark' 
                    ? 'border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-gray-900' 
                    : 'border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white'
                }`}
              >
                <FaDownload className="mr-2 group-hover:animate-bounce" />
                Download Resume
              </a>
            </div>
          </div>

          <div className="mt-16 animate-fade-in">
            <button
              onClick={() => scrollToSection("about")}
              className={`transition-colors duration-300 ${
                theme === 'dark' 
                  ? 'text-gray-400 hover:text-blue-400' 
                  : 'text-gray-500 hover:text-blue-600'
              }`}
            >
              <FaChevronDown className="text-3xl mx-auto animate-bounce" />
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Section */}
        <ModernSection id="about" title="About Me" icon={<FaUser className="mr-3" size={32} />} theme={theme}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className={`text-lg leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                I&apos;m a passionate Frontend Developer with over{" "}
                <span className="font-semibold text-blue-600">{calculateExperience()} years</span> of
                experience crafting beautiful, responsive, and user-friendly web
                applications. I specialize in React.js and modern web technologies.
              </p>
              <p className={`text-lg leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                My journey in web development started with a curiosity about how
                websites work, and it has evolved into a passion for creating
                digital experiences that make a difference. I believe in writing
                clean, maintainable code and staying up-to-date with the latest
                industry trends.
              </p>
              <div className="flex space-x-6">
                <SocialLink
                  href="https://github.com/akashvinchankar"
                  icon={<FaGithub size={32} />}
                  theme={theme}
                />
                <SocialLink
                  href="https://www.linkedin.com/in/akash-vinchankar"
                  icon={<FaLinkedin size={32} />}
                  theme={theme}
                />
              </div>
            </div>
            <div className={`p-8 rounded-2xl backdrop-blur-sm border transition-colors duration-300 ${
              theme === 'dark' 
                ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-white/10' 
                : 'bg-gradient-to-br from-blue-100/50 to-purple-100/50 border-gray-200'
            }`}>
              <h3 className={`text-2xl font-bold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Quick Stats
              </h3>
              <div className="space-y-4">
                <StatItem label="Years of Experience" value={`${calculateExperience()}+`} theme={theme} />
                <StatItem label="Projects Completed" value="15+" theme={theme} />
                <StatItem label="Technologies Mastered" value="12+" theme={theme} />
                <StatItem label="LeetCode Problems" value="250+" theme={theme} />
              </div>
            </div>
          </div>
        </ModernSection>

        {/* Skills Section */}
        <ModernSection id="skills" title="Skills & Technologies" icon={<FaTools className="mr-3" size={32} />} theme={theme}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <SkillCategory
              title="Frontend"
              icon={<FaDesktop size={28} className="text-blue-400" />}
              skills={[
                { name: "JavaScript", logo: skillIcons["JavaScript"] },
                { name: "TypeScript", logo: skillIcons["TypeScript"] },
                { name: "React.js", logo: skillIcons["React.js"] },
                { name: "Redux Toolkit", logo: skillIcons["Redux Toolkit"] },
                { name: "HTML", logo: skillIcons["HTML"] },
                { name: "CSS", logo: skillIcons["CSS"] },
                { name: "SCSS", logo: skillIcons["SCSS"] },
                { name: "Tailwind CSS", logo: skillIcons["Tailwind CSS"] },
              ]}
              theme={theme}
            />
            <SkillCategory
              title="Backend"
              icon={<FaServer size={28} className="text-blue-400" />}
              skills={[
                { name: "Golang", logo: skillIcons["Golang"] },
                { name: "PostgreSQL", logo: skillIcons["PostgreSQL"] },
              ]}
              theme={theme}
            />
            <SkillCategory
              title="Tools & Other"
              icon={<FaCog size={28} className="text-blue-400" />}
              skills={[
                { name: "Git", logo: skillIcons["Git"] },
                { name: "RESTful APIs", logo: skillIcons["RESTful APIs"] },
                { name: "Performance Optimization", logo: skillIcons["Performance Optimization"] },
                { name: "Responsive Design", logo: skillIcons["Responsive Design"] },
                { name: "VS Code", logo: skillIcons["VS Code"] },
                { name: "JIRA", logo: skillIcons["JIRA"] },
              ]}
              theme={theme}
            />
          </div>
        </ModernSection>

        {/* Experience Section */}
        <ModernSection id="experience" title="Work Experience" icon={<FaBriefcase className="mr-3" size={32} />} theme={theme}>
          <div className="space-y-8">
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
              skills={["React.js", "TypeScript", "SCSS", "PostgreSQL", "Golang", "RESTful APIs", "JIRA"]}
              theme={theme}
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
              skills={["React.js", "Redux Toolkit", "Tailwind CSS", "JIRA"]}
              theme={theme}
            />
          </div>
        </ModernSection>

        {/* Projects Section */}
        <ModernSection id="projects" title="Featured Projects" icon={<FaProjectDiagram className="mr-3" size={32} />} theme={theme}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              title="Movies Directory App"
              description="A comprehensive movie library application with features like 'Add to Favorites' and sorting based on ratings, popularity, and genre. Built using React.js, Axios, and the open-source Movies API."
              imageUrl={tmdb}
              demoLink="https://imdb-akashv.netlify.app/"
              codeLink="https://github.com/akashvinchankar/IMDB/tree/master/imdb"
              skills={["React.js", "JavaScript", "Axios"]}
              theme={theme}
            />
            <ProjectCard
              title="Cocktails Directory"
              description="An interactive web application to browse and search various drink recipes using keywords. Built using React.js and the Context API."
              imageUrl={Cocktail}
              demoLink="https://cocktails-directory-akv.netlify.app/"
              codeLink="https://github.com/akashvinchankar/cocktails-directory"
              skills={["React.js", "JavaScript", "Axios", "Context API"]}
              theme={theme}
            />
            <ProjectCard
              title="The Taravu"
              description="A web application for seeing the prices of heavy machinery and equipment. Built using React.js, Axios, and scraping data from the web."
              imageUrl={thetaravu}
              demoLink="https://thetaravu.com/"
              codeLink="https://github.com/akashvinchankar/bid-my-asset"
              skills={["React.js", "JavaScript", "Axios"]}
              theme={theme}
            />
            <ProjectCard
              title="Youtube Clone"
              description="A clone of the popular video-sharing platform YouTube. Built using React.js, Redux Toolkit, and the YouTube Data API."
              imageUrl={YTClone}
              demoLink="https://tube-akash-v.netlify.app/"
              codeLink="https://github.com/akashvinchankar/tube-akash"
              skills={["React.js", "Redux Toolkit", "Axios"]}
              theme={theme}
            />
          </div>
        </ModernSection>

        {/* Education Section */}
        <ModernSection id="education" title="Education" icon={<FaGraduationCap className="mr-3" size={32} />} theme={theme}>
          <div className={`p-8 rounded-2xl backdrop-blur-sm border transition-colors duration-300 ${
            theme === 'dark' 
              ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-white/10' 
              : 'bg-gradient-to-br from-blue-100/50 to-purple-100/50 border-gray-200'
          }`}>
            <h3 className={`text-3xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Bachelor&apos;s Degree in Engineering
            </h3>
            <p className={`text-xl mb-2 ${
              theme === 'dark' ? 'text-blue-300' : 'text-blue-600'
            }`}>
              Shri Sant Gajanan Maharaj College of Engineering
            </p>
            <p className={`text-lg ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              2017 - 2021 | CGPA: 9.5/10.0
            </p>
          </div>
        </ModernSection>

        {/* Contact Section */}
        <ModernSection id="contact" title="Get In Touch" icon={<FaPaperPlane className="mr-3" size={32} />} theme={theme}>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className={`text-2xl font-bold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Let&apos;s work together!
              </h3>
              <p className={`text-lg leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                I&apos;m always open to discussing new opportunities,
                interesting projects, or just having a chat about technology and
                development.
              </p>

              <div className="space-y-4">
                <ContactItem
                  icon={<FaEnvelope className="text-blue-400" />}
                  label="Email"
                  value="akashvinchankar@gmail.com"
                  onCopy={() => copyToClipboard("akashvinchankar@gmail.com", "email")}
                  copied={emailCopied}
                  theme={theme}
                />
                <ContactItem
                  icon={<FaPhone className="text-blue-400" />}
                  label="Phone"
                  value="+91 96043 46378"
                  onCopy={() => copyToClipboard("+919604346378", "phone")}
                  copied={phoneCopied}
                  theme={theme}
                />
              </div>

              <div className="flex space-x-6 pt-4">
                <SocialLink
                  href="https://github.com/akashvinchankar"
                  icon={<FaGithub size={32} />}
                  theme={theme}
                />
                <SocialLink
                  href="https://www.linkedin.com/in/akash-vinchankar"
                  icon={<FaLinkedin size={32} />}
                  theme={theme}
                />
              </div>
            </div>

            <div className={`p-8 rounded-2xl backdrop-blur-sm border transition-colors duration-300 ${
              theme === 'dark' 
                ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-white/10' 
                : 'bg-gradient-to-br from-blue-100/50 to-purple-100/50 border-gray-200'
            }`}>
              <h4 className={`text-xl font-bold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Additional Info
              </h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <FaCode className="text-blue-400" />
                  <div>
                    <p className={`font-medium ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>LeetCode Profile</p>
                    <a
                      href="https://leetcode.com/akashvinchankar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`transition-colors ${
                        theme === 'dark' 
                          ? 'text-blue-300 hover:text-blue-200' 
                          : 'text-blue-600 hover:text-blue-500'
                      }`}
                    >
                      250+ Problems Solved
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <FaDownload className="text-blue-400" />
                  <div>
                    <p className={`font-medium ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>Resume</p>
                    <a
                      href={Resume}
                      download="Akash_Vinchankar_Resume.pdf"
                      className={`transition-colors ${
                        theme === 'dark' 
                          ? 'text-blue-300 hover:text-blue-200' 
                          : 'text-blue-600 hover:text-blue-500'
                      }`}
                    >
                      Download CV
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ModernSection>
      </div>

      {/* Footer */}
      <footer className={`backdrop-blur-lg border-t py-8 transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-gray-900/50 border-gray-700/50' 
          : 'bg-white/50 border-gray-200/50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
            &copy; 2025 Akash Vinchankar. Built with React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

// Modern Section Component
const ModernSection = ({ id, title, icon, children, theme }) => (
  <section id={id} className="mb-20 py-16">
    <div className={`backdrop-blur-lg rounded-3xl border p-8 shadow-2xl transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-white/5 border-white/10' 
        : 'bg-white/70 border-gray-200'
    }`}>
      <h2 className={`text-3xl md:text-4xl font-bold mb-12 flex items-center ${
        theme === 'dark' ? 'text-white' : 'text-gray-900'
      }`}>
        <span className="text-blue-600">{icon}</span>
        {title}
      </h2>
      {children}
    </div>
  </section>
);

ModernSection.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  children: PropTypes.node.isRequired,
  theme: PropTypes.string.isRequired,
};

// Stats Item Component
const StatItem = ({ label, value, theme }) => (
  <div className="flex justify-between items-center">
    <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>{label}</span>
    <span className={`font-bold text-xl ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>{value}</span>
  </div>
);

StatItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
};

// Contact Item Component
const ContactItem = ({ icon, label, value, onCopy, copied, theme }) => (
  <div className={`flex items-center space-x-4 p-4 rounded-lg border transition-colors duration-300 ${
    theme === 'dark' 
      ? 'bg-white/5 border-white/10' 
      : 'bg-gray-50 border-gray-200'
  }`}>
    <div className="text-2xl">{icon}</div>
    <div className="flex-1">
      <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{label}</p>
      <p className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{value}</p>
    </div>
    <button
      onClick={onCopy}
      className={`p-2 rounded-lg transition-colors ${
        theme === 'dark' 
          ? 'bg-blue-500/20 hover:bg-blue-500/30' 
          : 'bg-blue-100 hover:bg-blue-200'
      }`}
      title="Copy to clipboard"
    >
      <FaCopy className="text-blue-400" />
    </button>
    {copied && (
      <span className="text-green-400 text-sm animate-fade-in">Copied!</span>
    )}
  </div>
);

ContactItem.propTypes = {
  icon: PropTypes.element.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onCopy: PropTypes.func.isRequired,
  copied: PropTypes.bool.isRequired,
  theme: PropTypes.string.isRequired,
};

const SocialLink = ({ href, icon, theme }) => (
  <a
    href={href}
    className={`transition-all duration-300 transform hover:scale-110 ${
      theme === 'dark' 
        ? 'text-gray-400 hover:text-blue-400' 
        : 'text-gray-600 hover:text-blue-600'
    }`}
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
  theme: PropTypes.string.isRequired,
};

const SkillCategory = ({ title, icon, skills, theme }) => (
  <div className={`p-8 rounded-2xl backdrop-blur-sm border hover:border-blue-400/30 transition-all duration-300 group ${
    theme === 'dark' 
      ? 'bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-white/10' 
      : 'bg-gradient-to-br from-blue-50/80 to-purple-50/80 border-gray-200'
  }`}>
    <h3 className={`text-2xl font-bold mb-6 flex items-center group-hover:text-blue-300 transition-colors ${
      theme === 'dark' ? 'text-white' : 'text-gray-900'
    }`}>
      {icon}
      <span className="ml-3">{title}</span>
    </h3>
    <div className="grid grid-cols-2 gap-4">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className={`flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors ${
            theme === 'dark' ? 'bg-white/5' : 'bg-white/50'
          }`}
        >
          <img src={skill.logo} alt={skill.name} className="w-8 h-8" />
          <span className={`font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>{skill.name}</span>
        </div>
      ))}
    </div>
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
  theme: PropTypes.string.isRequired,
};

const ExperienceCard = ({ company, position, period, responsibilities, skills, theme }) => (
  <div className={`relative p-8 rounded-2xl backdrop-blur-sm border hover:border-blue-400/30 transition-all duration-300 group ${
    theme === 'dark' 
      ? 'bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-white/10' 
      : 'bg-gradient-to-br from-blue-50/80 to-purple-50/80 border-gray-200'
  }`}>
    <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-400 to-purple-400 rounded-l-2xl"></div>
    <div className="pl-6">
      <h3 className={`text-2xl font-bold mb-2 group-hover:text-blue-300 transition-colors ${
        theme === 'dark' ? 'text-white' : 'text-gray-900'
      }`}>
        {company}
      </h3>
      <p className={`text-xl font-semibold mb-2 ${
        theme === 'dark' ? 'text-blue-300' : 'text-blue-600'
      }`}>{position}</p>
      <p className={`text-lg italic mb-6 ${
        theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
      }`}>{period}</p>
      <ul className={`list-disc list-inside space-y-3 mb-6 ${
        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
      }`}>
        {responsibilities.map((resp, index) => (
          <li key={index} className="text-base leading-relaxed">
            {resp}
          </li>
        ))}
      </ul>
      {skills && skills.length > 0 && <SkillsList skills={skills} theme={theme} />}
    </div>
  </div>
);

ExperienceCard.propTypes = {
  company: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  responsibilities: PropTypes.arrayOf(PropTypes.string).isRequired,
  skills: PropTypes.array,
  theme: PropTypes.string.isRequired,
};

const ProjectCard = ({ title, description, imageUrl, demoLink, codeLink, skills, theme }) => (
  <div className={`backdrop-blur-lg rounded-2xl border overflow-hidden hover:border-blue-400/30 transition-all duration-300 transform hover:-translate-y-2 group ${
    theme === 'dark' 
      ? 'bg-white/5 border-white/10' 
      : 'bg-white/70 border-gray-200'
  }`}>
    <div className="h-64 overflow-hidden">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
      />
    </div>
    <div className="p-6">
      <h3 className={`text-2xl font-bold mb-3 group-hover:text-blue-300 transition-colors ${
        theme === 'dark' ? 'text-white' : 'text-gray-900'
      }`}>
        {title}
      </h3>
      <p className={`mb-6 leading-relaxed ${
        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
      }`}>{description}</p>
      <SkillsList skills={skills} theme={theme} />
      <div className={`flex justify-between items-center mt-6 pt-4 border-t ${
        theme === 'dark' ? 'border-white/10' : 'border-gray-200'
      }`}>
        <a
          href={demoLink}
          className={`flex items-center space-x-2 font-medium transition-colors ${
            theme === 'dark' 
              ? 'text-blue-400 hover:text-blue-300' 
              : 'text-blue-600 hover:text-blue-500'
          }`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaExternalLinkAlt />
          <span>Live Demo</span>
        </a>
        <a
          href={codeLink}
          className={`flex items-center space-x-2 font-medium transition-colors ${
            theme === 'dark' 
              ? 'text-blue-400 hover:text-blue-300' 
              : 'text-blue-600 hover:text-blue-500'
          }`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
          <span>View Code</span>
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
  skills: PropTypes.arrayOf(PropTypes.string),
  theme: PropTypes.string.isRequired,
};

const SkillsList = ({ skills, theme }) => (
  <div className="mt-4">
    <h4 className={`font-semibold mb-3 ${
      theme === 'dark' ? 'text-blue-300' : 'text-blue-600'
    }`}>Technologies Used:</h4>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className={`flex items-center py-2 px-4 rounded-full text-sm font-medium border transition-colors ${
            theme === 'dark' 
              ? 'bg-blue-500/20 text-blue-200 border-blue-400/30' 
              : 'bg-blue-100 text-blue-700 border-blue-300'
          }`}
        >
          <img src={skillIcons[skill]} alt={skill} className="w-4 h-4 mr-2" />
          {skill}
        </span>
      ))}
    </div>
  </div>
);

SkillsList.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  theme: PropTypes.string.isRequired,
};

export default Portfolio;
