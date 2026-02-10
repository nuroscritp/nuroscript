"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // 🔒 Lock body scroll when menu is open (PROFESSIONAL FIX)
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinkClass = (path: string) =>
    `relative transition ${
      pathname === path
        ? "text-white after:absolute after:left-0 after:-bottom-4 after:h-[2px] after:w-full after:bg-white"
        : "text-white hover:text-gray-400"
    }`;

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="w-full px-10 py-4 flex items-center justify-between bg-black">
        {/* Logo */}
        <h1 className="text-white text-xl lg:text-2xl font-medium">
          nuroscript
        </h1>

        {/* Hamburger (mobile + small desktop) */}
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="lg:hidden"
          aria-label="Open menu"
        >
          <Image
            src="/hamburger.png"
            alt=""
            width={30}
            height={22}
            aria-hidden="true"
            className="transition hover:scale-110"
          />
        </button>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex gap-20">
          <li><Link href="/" className={navLinkClass("/")}>Home</Link></li>
          <li><Link href="/products" className={navLinkClass("/products")}>Products</Link></li>
          <li><Link href="/about" className={navLinkClass("/about")}>About Us</Link></li>
          <li><Link href="/contact" className={navLinkClass("/contact")}>Contact Us</Link></li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/login"
            className="px-5 py-1.5 border-2 border-white rounded-lg text-white hover:bg-gray-700"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="px-5 py-1.5 bg-white text-black rounded-lg hover:bg-gray-700 hover:text-white"
          >
            Sign Up
          </Link>
        </div>
      </nav>

      {/* ================= OVERLAY ================= */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`lg:hidden fixed inset-0 bg-black/40 z-40 transition-opacity duration-300
          ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      />

      {/* ================= SIDE MENU (RIGHT) ================= */}
      <aside
        className={`lg:hidden fixed top-0 right-0 h-screen w-[60%] bg-[#4f4f4f] z-50
          transform transition-transform duration-300
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
          overflow-y-auto`}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
          className="p-5"
        >
          <Image
            src="/close.png"
            alt=""
            width={15}
            height={15}
            aria-hidden="true"
            className="transition hover:scale-110"
          />
        </button>

        {/* Mobile Nav Links */}
        <ul className="flex flex-col gap-6 p-5 text-white">
          <li><Link className="hover:text-[#181818]" href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link className="hover:text-[#181818]" href="/products" onClick={() => setMenuOpen(false)}>Products</Link></li>
          <li><Link className="hover:text-[#181818]" href="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
          <li><Link className="hover:text-[#181818]" href="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>

          <hr className="my-4 opacity-30" />

          <li><Link className="hover:text-[#181818]" href="/login" onClick={() => setMenuOpen(false)}>Login</Link></li>
          <li><Link className="hover:text-[#181818]" href="/signup" onClick={() => setMenuOpen(false)}>Sign Up</Link></li>
        </ul>
      </aside>
    </>
  );
}
