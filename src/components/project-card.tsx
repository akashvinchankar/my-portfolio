import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { ShineBorder } from "./magicui/shine-border";

// Technology icons mapping
const getTechIcon = (techName: string) => {
  const iconMap: { [key: string]: string } = {
    "React.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    "Axios": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg",
    "TMDB API": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    "Redux Toolkit": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    "YT API": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "Context API": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "Web Scraping": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  };
  return iconMap[techName] || "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg";
};

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <Card
      className={cn(
        "group flex flex-col overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 ease-out h-full hover:border-border hover:-translate-y-1",
        className
      )}
    >
      <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />

      {/* Image/Video Section */}
      <div className="relative overflow-hidden">
        <Link
          href={href || "#"}
          target={href ? "_blank" : undefined}
          rel={href ? "noopener noreferrer" : undefined}
          className="block cursor-pointer"
        >
          {video && (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="pointer-events-none mx-auto h-40 w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
            />
          )}
          {image && (
            <Image
              src={image}
              alt={title}
              width={500}
              height={300}
              className="h-40 w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
            />
          )}
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        </Link>
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1 p-3">
        <CardHeader className="p-0 pb-2">
          <div className="space-y-1.5">
            <CardTitle className="text-base font-semibold leading-tight group-hover:text-primary transition-colors duration-200">
              {title}
            </CardTitle>
            <div className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </div>
          </div>
        </CardHeader>

        {/* Tags Section */}
        <CardContent className="p-0 flex-1">
          {tags && tags.length > 0 && (
            <div className="space-y-1.5 mb-3">
              {/* First row */}
              <div className="flex flex-wrap gap-1">
                {tags?.slice(0, Math.ceil(tags.length / 2)).map((tag) => (
                  <Badge
                    className="px-1.5 py-1 text-[10px] font-medium bg-secondary/80 hover:bg-secondary transition-colors flex items-center gap-1"
                    variant="secondary"
                    key={tag}
                  >
                    <Image
                      src={getTechIcon(tag)}
                      alt={tag}
                      width={12}
                      height={12}
                      className="w-3 h-3"
                    />
                    {tag}
                  </Badge>
                ))}
              </div>
              {/* Second row */}
              {tags.length > Math.ceil(tags.length / 2) && (
                <div className="flex flex-wrap gap-1">
                  {tags?.slice(Math.ceil(tags.length / 2)).map((tag) => (
                    <Badge
                      className="px-1.5 py-1 text-[10px] font-medium bg-secondary/80 hover:bg-secondary transition-colors flex items-center gap-1"
                      variant="secondary"
                      key={tag}
                    >
                      <Image
                        src={getTechIcon(tag)}
                        alt={tag}
                        width={12}
                        height={12}
                        className="w-3 h-3"
                      />
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          )}
        </CardContent>

        {/* Links Section */}
        <CardFooter className="p-0 pt-2 border-t border-border/20">
          {links && links.length > 0 && (
            <div className="flex flex-row gap-2 w-full pt-2">
              {links?.map((link, idx) => (
                <Link
                  href={link?.href}
                  key={idx}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Badge
                    className="w-full justify-center gap-1.5 px-3 py-1.5 text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-pointer"
                    variant="outline"
                  >
                    {link.icon}
                    {link.type}
                  </Badge>
                </Link>
              ))}
            </div>
          )}
        </CardFooter>
      </div>
    </Card>
  );
}
