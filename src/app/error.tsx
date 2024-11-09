"use client";

import {useEffect} from "react";

interface ErrorBoundaryProps {
  error: Error & {digest?: string};
  reset: () => void;
}

export default function Error({error, reset}: ErrorBoundaryProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center gap-4 p-4">
      <div className="max-w-[90%] w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
        <div className="bg-red-50 dark:bg-red-900/30 p-4 border-b border-red-100 dark:border-red-900/50">
          <h2 className="text-xl font-bold text-red-700 dark:text-red-400">
            Something went wrong!
          </h2>
        </div>

        <div className="p-4">
          <div className="mb-4">
            <p className="text-gray-800 dark:text-gray-200 font-medium">
              Error Message:
            </p>
            <p className="text-red-600 dark:text-red-400">{error.message}</p>
          </div>

          {process.env.NODE_ENV === "development" && (
            <div className="mb-4">
              <p className="text-gray-800 dark:text-gray-200 font-medium mb-2">
                Debug Information:
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-md">
                <pre className="text-sm overflow-auto whitespace-pre-wrap text-gray-800 dark:text-gray-200">
                  {error.stack}
                </pre>
                {error.digest && (
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Digest: {error.digest}
                  </p>
                )}
              </div>
            </div>
          )}

          <div className="flex justify-center mt-4">
            <button
              onClick={reset}
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200">
              Try again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
