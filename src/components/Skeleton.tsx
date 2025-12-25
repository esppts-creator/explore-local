import { cn } from '@/lib/utils';

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div 
      className={cn(
        "relative bg-secondary rounded-xl overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-muted/30 to-transparent animate-shimmer" />
    </div>
  );
}

export function FeaturedCardSkeleton() {
  return (
    <div className="flex-shrink-0 w-[300px] h-[380px] rounded-2xl overflow-hidden">
      <Skeleton className="w-full h-full" />
    </div>
  );
}

export function PlaceCardSkeleton() {
  return (
    <div className="flex gap-4 p-3 bg-card rounded-2xl border border-border/50">
      <Skeleton className="w-20 h-20 rounded-xl shrink-0" />
      <div className="flex-1 flex flex-col justify-center gap-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3 w-1/2" />
        <Skeleton className="h-5 w-16 rounded-full" />
      </div>
    </div>
  );
}
