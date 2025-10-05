import { Loader2 } from 'lucide-react';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
}

export function Loading({ size = 'md', text }: LoadingProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8">
      <Loader2 className={`animate-spin text-accent ${sizeClasses[size]}`} />
      {text && (
        <p className="text-text-muted text-sm">{text}</p>
      )}
    </div>
  );
}

