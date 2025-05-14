"use client"; 

import { usePathname } from "next/navigation"; // ✅ Correct import for App Router
import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
import { Button } from "../components/Button";
import Link from "next/link";

export const Header = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <header
      suppressHydrationWarning={true}
      className={`py-4 border-b border-white/15 md:border-none 
        fixed top-0 left-1/2 transform -translate-x-1/2 w-[90%] z-50 rounded-xl`}
    >
      {/* Backdrop blur effect is applied universally now */}
      <div className="absolute inset-0 backdrop-blur-md -z-10 md:hidden"></div>

      <div className="container">
        <div
          className={`flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl 
            max-w-2xl mx-auto relative`}
        >
          {/* Optional blur effect for desktop */}
          <div className="absolute inset-0 backdrop-blur-md -z-10 hidden md:block"></div>
          <div>
            <div className="border h-[72px] rounded-lg inline-flex justify-center items-center border-white/15">
              <Link href="/">
                <img
                  src="./images/hero-logo-02.png"
                  alt="Hero Logo"
                  className="h-[38px] w-[30px] ml-[4px] mr-[4px]"
                />
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
            <Link href="/" className="text-white/70 hover:text-[#8af4e8] transition">Home</Link>
              <Link href="/about" className="text-white/70 hover:text-[#8af4e8] transition">About</Link>
              <Link href="/services" className="text-white/70 hover:text-[#8af4e8] transition">Services</Link>
              <Link href="/cases" className="text-white/70 hover:text-[#8af4e8] transition">Cases</Link>
              <Link href="/media" className="text-white/70 hover:text-[#8af4e8] transition">Media</Link>
              <Link href="/contact" className="text-white/70 hover:text-[#8af4e8] transition">Contact</Link>
            </nav>
          </div>
          <div className="flex gap-4 items-center">
            <Link href="/contact#section-body">
              <Button>Book Now</Button>
            </Link>
            <MenuIcon className="md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};
