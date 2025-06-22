import { DATA } from "@/data/resume";

export function StyledDescription() {
  const { description } = DATA;

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
