import { Suspense, lazy, ComponentType } from 'react';

// Generic loading skeleton
const DefaultSkeleton = () => (
  <div className="animate-pulse">
    <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-muted rounded w-1/2"></div>
  </div>
);

// Higher-order component for lazy loading with suspense
export function withLazy<T extends ComponentType<any>>(
  componentImport: () => Promise<{ default: T }>,
  LoadingComponent: ComponentType = DefaultSkeleton
) {
  const LazyComponent = lazy(componentImport);
  
  return function WrappedComponent(props: any) {
    return (
      <Suspense fallback={<LoadingComponent />}>
        <LazyComponent {...props} />
      </Suspense>
    );
  };
}

// Preload component for critical above-the-fold content
export function preloadComponent(componentImport: () => Promise<any>) {
  if (typeof window !== 'undefined') {
    // Only preload in browser
    componentImport();
  }
}
