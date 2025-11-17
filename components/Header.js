import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur-md bg-white shadow-sm transition">
      <div className="flex items-center justify-between max-w-6xl mx-auto p-4">
        {/* Logo */}
        <Link href="/">
          <span className="text-2xl font-semibold text-slate-900 hover:text-blue-500 transition cursor-pointer">
            LEADMAA
          </span>
        </Link>

        {/* CTA Button */}
        <a
          href="#form"
          className="px-4 py-2 rounded-full text-white font-medium bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition shadow-md"
        >
          Contact Us
        </a>
      </div>
    </header>
  );
}
