"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  ChevronRightIcon,
  FileTextIcon,
  CodeIcon,
  PlusIcon,
  MinusIcon,
} from "lucide-react";
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

  const handleAccordionClick = (e: React.MouseEvent) => {
    if (description) {
      e.preventDefault();
      e.stopPropagation();
      setIsExpanded(!isExpanded);
    }
  };

  const isExternalLink = href && href.startsWith("http");
  const hasContent = description || (skills && skills.length > 0);
  const isWrappedInLink = href && !hasContent;

  const CardContent = () => (
    <Card
      className={cn(
        "flex border border-border/50 bg-card/50 backdrop-blur-sm shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 ease-out p-4 hover:border-border hover:-translate-y-1",
        hasContent && "cursor-pointer group"
      )}
      onClick={hasContent ? handleAccordionClick : undefined}
    >
      <div className="flex-none">
        <Avatar className="border size-12 bg-muted-background dark:bg-foreground">
          <AvatarImage src={logoUrl} alt={altText} className="object-contain" />
          <AvatarFallback>{altText[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex-grow ml-4 items-center flex-col group">
        <CardHeader className="p-0">
          <div className="flex items-center justify-between gap-x-2 text-base">
            <div className="flex items-center gap-x-2">
              <h3 className="font-semibold leading-none text-sm sm:text-base">
                {title}
              </h3>
              {href && !hasContent && !isWrappedInLink && (
                <Link
                  href={href}
                  target={isExternalLink ? "_blank" : undefined}
                  rel={isExternalLink ? "noopener noreferrer" : undefined}
                  className="text-blue-500 hover:text-blue-600 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ChevronRightIcon className="size-4" />
                </Link>
              )}
              {isWrappedInLink && (
                <ChevronRightIcon className="size-4 text-blue-500" />
              )}
              {hasContent && (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center size-6 rounded-full bg-blue-500/10 hover:bg-blue-500/20 transition-all duration-200 cursor-pointer"
                >
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isExpanded ? (
                      <MinusIcon className="size-3 text-blue-600" />
                    ) : (
                      <PlusIcon className="size-3 text-blue-600" />
                    )}
                  </motion.div>
                </motion.div>
              )}
            </div>
            <div className="text-sm sm:text-base tabular-nums text-muted-foreground text-right">
              {period}
            </div>
          </div>
          {subtitle && (
            <div className="text-sm text-muted-foreground mt-1">
              {subtitle}
            </div>
          )}
          {hasContent && !isExpanded && (
            <div className="flex items-center gap-3 mt-2 text-sm text-muted-foreground/60">
              {description && (
                <div className="flex items-center gap-1">
                  <div className="size-1 rounded-full bg-blue-500"></div>
                  <FileTextIcon className="size-3" />
                  <span>Details</span>
                </div>
              )}
              {skills && skills.length > 0 && (
                <div className="flex items-center gap-1">
                  <div className="size-1 rounded-full bg-green-500"></div>
                  <CodeIcon className="size-3" />
                  <span>{skills.length} Skills</span>
                  {/* Preview of first 3 skills */}
                  <div className="hidden sm:flex items-center gap-1 ml-2 opacity-100">
                    {skills.slice(0, 4).map((skill, index) => (
                      <div key={index} className="flex items-center">
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          className="size-3"
                          width={12}
                          height={12}
                        />
                        {index < 3 && skills.length > index + 1 && (
                          <span className="mx-1 text-muted-foreground/40">
                            •
                          </span>
                        )}
                      </div>
                    ))}
                    {skills.length > 4 && (
                      <span className="text-muted-foreground/40 ml-1">
                        +{skills.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </CardHeader>
        {hasContent && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isExpanded ? 1 : 0,
              height: isExpanded ? "auto" : 0,
            }}
            transition={{
              duration: 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="px-0 pb-4 text-sm sm:text-base text-muted-foreground w-full"
            style={{ overflow: "hidden" }}
          >
            <div className="border-l-2 border-muted pl-4 mt-3">
              {description && (
                <div className="mb-4">
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
                </div>
              )}
              {skills && skills.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground">
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
                          className="size-3"
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
  );

  // If there's an href and no expandable content, wrap in Link
  if (href && !hasContent) {
    return (
      <Link
        href={href}
        target={isExternalLink ? "_blank" : undefined}
        rel={isExternalLink ? "noopener noreferrer" : undefined}
        className="block"
      >
        <CardContent />
      </Link>
    );
  }

  // Otherwise, return the card without Link wrapper
  return <CardContent />;
};
