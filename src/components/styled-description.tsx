import { DATA, calculateExperience } from "@/data/resume";

export function StyledDescription() {
  const experience = calculateExperience();
  const description = `Frontend React Developer with ${experience.totalText} building modern web applications with React.js, JavaScript & TypeScript.`;

  // Replace YOE pattern with styled version
  const styledDescription = description.replace(
    /(\d+(?:\.\d+)?\s+YOE)/g,
    '<span class="text-blue-600 font-semibold">$1</span>'
  );

  return (
    <span
      dangerouslySetInnerHTML={{
        __html: styledDescription,
      }}
    />
  );
}
