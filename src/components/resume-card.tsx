"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";

interface Skill {
  readonly name: string;
  readonly icon: string;
}

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  period: string;
  description?: string;
  skills?: readonly Skill[];
}
export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  period,
  description,
  skills,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Link
      href={href || "#"}
      className="block cursor-pointer"
      onClick={handleClick}
    >
      <Card
        className={cn(
          "flex",
          description && "hover:shadow-md transition-shadow cursor-pointer"
        )}
      >
        <div className="flex-none">
          <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain"
            />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-grow ml-4 items-center flex-col group">
          <CardHeader>
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                {title}
                {description && (
                  <ChevronRightIcon
                    className={cn(
                      "size-4 ml-1 transform transition-all duration-300 ease-out",
                      isExpanded ? "rotate-90" : "rotate-0",
                      "group-hover:translate-x-1"
                    )}
                  />
                )}
              </h3>
              <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                {period}
              </div>
            </div>
            {subtitle && (
              <div className="font-sans text-xs text-muted-foreground">
                {subtitle}
              </div>
            )}
            {description && !isExpanded && (
              <div className="text-xs text-muted-foreground italic">
                Click to view details...
              </div>
            )}
          </CardHeader>
          {description && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,
                height: isExpanded ? "auto" : 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="px-6 pb-4 text-xs sm:text-sm text-muted-foreground"
              style={{ overflow: "hidden" }}
            >
              <div className="border-l-2 border-muted pl-4">
                {/* Split description into bullet points */}
                {description
                  .split("–")
                  .filter((point) => point.trim())
                  .map((point, index) => (
                    <div key={index} className="flex items-start mb-2">
                      <span className="text-foreground mr-2 mt-0.5">–</span>
                      <span className="text-muted-foreground">
                        {point.trim()}
                      </span>
                    </div>
                  ))}
                {skills && skills.length > 0 && (
                  <div className="space-y-2 mt-4">
                    <h4 className="text-xs font-semibold text-foreground">
                      Technologies & Skills:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="flex items-center gap-1.5 py-1 px-2 text-xs"
                        >
                          <Image
                            src={skill.icon}
                            alt={skill.name}
                            className="w-3 h-3"
                            width={12}
                            height={12}
                          />
                          {skill.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </Card>
    </Link>
  );
};
