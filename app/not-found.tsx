import { BadgeAlert } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-background p-6">
      <div className="max-w-2xl text-center">
        {/* Illustration / Large 404 */}
        <div className="mx-auto mb-8 flex h-40 w-40 items-center justify-center rounded-full bg-card/60 shadow-md">
          <BadgeAlert size={96} className="animate-pulse"/>
        </div>

        {/* Title */}
        <h1 className="mb-4 text-3xl font-semibold text-foreground">
          Page Not Found
        </h1>

        {/* Message */}
        <p className="mb-6 text-base text-muted-foreground">
          Sorry — the page you are looking for does not exist or may have been
          moved. Check the URL or use one of the options below.
        </p>

        {/* Actions */}
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-black shadow hover:bg-primary/90 transition"
          >
            Go to Home
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg border border-input bg-card px-5 py-3 text-sm font-medium text-foreground/90 hover:bg-card/95 transition"
          >
            Contact Us
          </Link>
        </div>

        {/* Helpful links */}
        <div className="mt-6 text-sm text-muted-foreground">
          Or check out one of our popular pages:
          <div className="mt-2 flex flex-wrap justify-center gap-2">
            <Link href="/about" className="text-primary underline">
              About Us
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/products" className="text-primary underline">
              Products
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/blog" className="text-primary underline">
              Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
