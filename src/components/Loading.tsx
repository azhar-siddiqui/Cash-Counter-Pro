import { Loader2 } from "lucide-react";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  text?: string;
}

export function LoadingSpinner({
  size = "md",
  text,
}: Readonly<LoadingSpinnerProps>) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <Loader2 className={`animate-spin text-primary ${sizeClasses[size]}`} />
      {text && <p className="mt-4 text-sm text-muted-foreground">{text}</p>}
    </div>
  );
}

export function PageSkeleton() {
  return (
    <div className="min-h-screen bg-background p-3 sm:p-6 md:p-8">
      <div className="max-w-5xl mx-auto animate-pulse">
        {/* Header skeleton */}
        <div className="flex items-center justify-between p-6 mb-8 glass-card rounded-2xl">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-muted rounded-xl"></div>
            <div>
              <div className="w-32 h-6 bg-muted rounded mb-2"></div>
              <div className="w-24 h-4 bg-muted rounded"></div>
            </div>
          </div>
          <div className="w-12 h-12 bg-muted rounded-xl"></div>
        </div>

        {/* Main content skeleton */}
        <div className="space-y-6">
          <div className="h-16 bg-muted rounded-xl"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="h-20 bg-muted rounded-xl"></div>
            ))}
          </div>
          <div className="h-32 bg-muted rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
}
