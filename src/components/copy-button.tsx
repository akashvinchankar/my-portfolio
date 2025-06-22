"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { CheckIcon, CopyIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface CopyButtonProps {
  text: string;
  className?: string;
  children?: React.ReactNode;
}

export function CopyButton({ text, className, children }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={copyToClipboard}
      className={cn("gap-2", className)}
    >
      {children}
      {copied ? (
        <CheckIcon className="w-3 h-3 text-green-500" />
      ) : (
        <CopyIcon className="w-3 h-3" />
      )}
    </Button>
  );
}
