"use client"

import { useRouter } from "next/navigation";

 
export default function Error() {
const router = useRouter();
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-background text-center p-6 overflow-hidden">
      {/* Icon */}
      <div className="mb-6 text-red-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto h-24 w-24"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v4m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
          />
        </svg>
      </div>

      {/* Text */}
      <h1 className="text-2xl font-bold text-foreground mb-2">
        Oops! Something went wrong.
      </h1>
      <p className="text-muted-foreground mb-6">
         An unexpected error occurred
      </p>

      {/* Retry Button */}
      <button
        onClick={() => router.refresh()}
        className="px-6 py-3 rounded-lg bg-card text-white hover:bg-card/50 transition-colors"
      >
        Try Again
      </button>
    </div>
  );
}
