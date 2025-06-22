// Custom image loader for static export with optimization
export default function imageLoader({ src, width, quality }: {
  src: string;
  width: number;
  quality?: number;
}) {
  // For external URLs, return as-is but with optimization parameters
  if (src.startsWith('http')) {
    // For CDN images, add optimization parameters when possible
    if (src.includes('cdn.jsdelivr.net')) {
      return `${src}?w=${width}&q=${quality || 75}`;
    }
    return src;
  }
  
  // For local images, return optimized path
  return `${src}?w=${width}&q=${quality || 75}`;
}
