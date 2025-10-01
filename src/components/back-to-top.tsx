"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-20 right-4 z-40 size-12 rounded-full bg-primary/90 hover:bg-primary shadow-lg transition-all duration-300 hover:scale-110",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
      )}
      size="icon"
      aria-label="Back to top"
    >
      <ChevronUp className="size-5" />
    </Button>
  );
}
