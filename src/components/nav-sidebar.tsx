"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Home, User, Briefcase, Code, Mail } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function NavSidebar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const navItems = [
    { id: "hero", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "work", label: "Work", icon: Briefcase },
    { id: "projects", label: "Projects", icon: Code },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col gap-4">
      {navItems.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <Tooltip key={item.id}>
            <TooltipTrigger asChild>
              <Link
                href={`#${item.id}`}
                className={cn(
                  "relative p-3 rounded-full transition-all duration-300 border hover:scale-110",
                  isActive
                    ? "bg-primary text-primary-foreground border-primary shadow-lg scale-110"
                    : "bg-background/80 backdrop-blur-sm hover:bg-muted border-border text-muted-foreground"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(`#${item.id}`)?.scrollIntoView({
                    behavior: "smooth",
                  });
                  setActiveSection(item.id);
                }}
              >
                <item.icon className="size-5" />
                <span className="sr-only">{item.label}</span>
                {isActive && (
                  <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 w-0 h-0 border-y-[6px] border-y-transparent border-l-[8px] border-l-primary animate-in fade-in zoom-in duration-300" />
                )}
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>{item.label}</p>
            </TooltipContent>
          </Tooltip>
        );
      })}
    </div>
  );
}
