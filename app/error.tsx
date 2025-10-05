'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="w-20 h-20 bg-error bg-opacity-20 rounded-full flex items-center justify-center mx-auto">
          <span className="text-4xl">⚠️</span>
        </div>
        <h2 className="text-2xl font-bold">Something went wrong!</h2>
        <p className="text-text-muted">
          We encountered an error while loading the application.
        </p>
        <button
          onClick={reset}
          className="btn-primary"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
