// CSS Modules
declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

// Global CSS imports (for side-effect imports)
declare module "*.css";
