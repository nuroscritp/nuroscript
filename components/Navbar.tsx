"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Navbar() {

    const pathname = usePathname();

    const navLinkClass = (path: string) =>
        `relative transition ${pathname === path
            ? "text-white after:absolute after:left-0 after:-bottom-4 after:h-[2px] after:w-full after:bg-white"
            : "text-white hover:text-[#4f4f4f]"
        }`;

    return (
        <nav className="w-full h-18 px-10 flex items-center justify-between bg-black">

            {/* Logo */}
            <h1 className="text-white text-2xl font-medium">
                nuroscript
            </h1>

            {/* Nav Links */}
            <ul className="text-white flex gap-20">
                <li>
                    <Link href="/" className={navLinkClass("/")}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/products" className={navLinkClass("/products")}>
                        Products
                    </Link>
                </li>
                <li>
                    <Link href="/about" className={navLinkClass("/about")}>
                        About Us
                    </Link>
                </li>
                <li>
                    <Link href="/contact" className={navLinkClass("/contact")}>
                        Contact Us
                    </Link>
                </li>
            </ul>

            {/* Buttons */}
            <div className="flex items-center gap-4">

                <Link
                    href="/login"
                    className="px-5 py-1.5 border-2 border-white rounded-lg text-white hover:bg-[#4f4f4f] hover:border-[#4f4f4f] cursor-pointer"
                >
                    Login
                </Link>

                <Link
                    href="/signup"
                    className="px-5 py-1.5 border-2 border-white bg-white text-black rounded-lg hover:bg-[#4f4f4f] hover:text-white hover:border-[#4f4f4f] cursor-pointer"
                >
                    Sign Up
                </Link>
            </div>

        </nav>
    );
}
