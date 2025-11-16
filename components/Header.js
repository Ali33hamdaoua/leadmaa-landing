import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // S'assure que le thème est monté côté client
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-slate-900/70 shadow-sm transition">
      <div className="flex items-center justify-between max-w-6xl mx-auto p-4">
        {/* Logo */}
        <Link href="/">
          <a className="text-2xl font-semibold text-slate-900 dark:text-white hover:text-blue-500 transition">
            LEADMAA
          </a>
        </Link>

        <div className="flex items-center gap-4">
          {/* Switch Thème */}
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-10 h-10 p-2 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="w-5 h-5 text-gray-100"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 text-gray-800"
              >
                <path d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 14a4 4 0 100-8 4 4 0 000 8zm7.25-3.25a.75.75 0 010 1.5h-1.5a.75.75 0 010-1.5h1.5zM3.25 10a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5h-1.5zm11.03 4.72a.75.75 0 10-1.06 1.06l1.06-1.06zm-8.56-8.56a.75.75 0 10-1.06 1.06l1.06-1.06z" />
              </svg>
            )}
          </button>

          {/* CTA Button */}
          <a
            href="#form"
            className="px-4 py-2 rounded-full text-white font-medium bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition shadow-md"
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
}
