"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/resume", label: "Resume" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="border-b-4 border-cmyk-black bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-bold text-xl tracking-tighter hover:text-cmyk-magenta transition-colors">
              BMAT2434
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`inline-flex items-center px-1 pt-1 border-b-4 text-sm font-medium transition-colors ${
                    isActive
                      ? "border-cmyk-cyan text-cmyk-black"
                      : "border-transparent text-gray-500 hover:border-cmyk-yellow hover:text-cmyk-black"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          {/* Mobile menu button could go here, omitting for simplicity/cleanliness unless requested */}
        </div>
      </div>
    </nav>
  );
}
