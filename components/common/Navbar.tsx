"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import logo from "@/public/images/logo.png";
import {Bell , Store , Gift ,ChevronDown ,Menu} from "lucide-react"
import { RiVipDiamondFill } from "react-icons/ri";

interface DropdownItem { name: string; href: string; }

interface NavDropdownProps {
  label: string; href: string;
  items?: DropdownItem[];
  pathname: string;
  onNavigate?: () => void;
}

const NavDropdown = ({ label, href, items = [], pathname, onNavigate }: NavDropdownProps) => {
  const [open, setOpen] = useState(false);
  const isActive = pathname === href || pathname.startsWith(href + "/");

  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <Link
        href={href}
        onClick={onNavigate}
        className={`flex items-center gap-1 text-sm font-medium transition-colors px-1 py-1 ${
          isActive ? "text-white border-b-2 border-[#0098FF]" : "text-gray-200 hover:text-white"
        }`}
      >
        {label}
        {items.length > 0 && (
          <ChevronDown className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
        )}
      </Link>

      {open && items.length > 0 && (
        <div className="absolute top-full left-0 mt-1 w-44 bg-[#0f1b3d] border border-[#1e3a6e] rounded-md shadow-xl z-50 py-1">
          {items.map((item) => (
            <Link
              key={item.href} href={item.href} onClick={onNavigate}
              className={`block px-4 py-2 text-sm transition-colors ${
                pathname === item.href ? "text-white bg-[#1a2f5a]" : "text-gray-300 hover:text-white hover:bg-[#1a2f5a]"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const NavLink = ({ href, label, pathname, onNavigate }: { href: string; label: string; pathname: string; onNavigate?: () => void }) => (
  <Link
    href={href} onClick={onNavigate}
    className={`text-sm font-medium transition-colors px-1 py-1 ${
      pathname === href ? "text-white border-b-2 border-[#0098FF]" : "text-gray-200 hover:text-white"
    }`}
  >
    {label}
  </Link>
);

const UserMenu = () => {
  const [open, setOpen] = useState(false);
  const userMenuItems = [
    { label: "Profile", href: "/profile" },
    { label: "Settings", href: "/settings" },
    { label: "Transactions", href: "/transactions" },
    { label: "Sign Out", href: "/sign-out" },
  ];

  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-full bg-linear-to-b from-orange-400 to-pink-500 flex items-center justify-center text-white text-xs font-bold shrink-0">
          JW
        </div>
        {/* Hide name/balance on mobile */}
        <div className="hidden sm:block space-y-1">
          <span className="text-white text-xs font-medium whitespace-nowrap flex gap-2 items-center">
            Jenny Wilson
            <ChevronDown className={`text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
          </span>
          <div className="flex items-end gap-2 text-xs leading-tight">
            <span className="text-green-400 font-semibold">$ 300000</span>
            <div className="flex items-center gap-1 text-blue-400 font-semibold">
              <RiVipDiamondFill /><span>60</span>
            </div>
          </div>
        </div>
      </button>

      {open && (
        <div className="absolute top-full right-0 mt-1 w-44 bg-[#0f1b3d] border border-[#1e3a6e] rounded-md shadow-xl z-50 py-1">
          {userMenuItems.map((item) => (
            <Link key={item.href} href={item.href}
              className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-[#1a2f5a] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobile = () => setMobileOpen(false);

  const navLinks = (
    <>
      <NavDropdown label="Games" href="/games" pathname={pathname} onNavigate={closeMobile}
        items={[
          { name: "Prediction", href: "/games/prediction" },
          { name: "Eliminator", href: "/games/eliminator" },
          { name: "Daily Quizzical", href: "/games/daily-quizzical" },
          { name: "General Knowledge", href: "/games/general-knowledge" },
        ]}
      />
      <NavLink href="/my-games" label="My Games" pathname={pathname} onNavigate={closeMobile} />
      <NavDropdown label="Create" href="/create" pathname={pathname} onNavigate={closeMobile}
        items={[
          { name: "New Game", href: "/create/new-game" },
          { name: "Templates", href: "/create/templates" },
          { name: "Draft", href: "/create/draft" },
        ]}
      />
      <NavLink href="/wallet" label="Wallet" pathname={pathname} onNavigate={closeMobile} />
      <NavLink href="/casino" label="Casino" pathname={pathname} onNavigate={closeMobile} />
    </>
  );

  return (
    <header className="bg-linear-to-r from-[#0f1f45] to-blue- border-b border-[#0f1f45] sticky top-0 z-40">
      <nav className="flex items-center justify-between px-4 md:px-6 h-14 md:h-16" aria-label="Main navigation">

        {/* Left — logo + desktop nav */}
        <div className="flex items-center gap-6 md:gap-8">
          <Link href="/" className="w-28 md:w-36 shrink-0">
            <Image src={logo} alt="Logo" />
          </Link>
          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-6">{navLinks}</div>
        </div>

        {/* Right — icons + user */}
        <div className="flex items-center gap-3 md:gap-4 text-gray-300">
          <button className="hidden md:block hover:text-white transition-colors" aria-label="Display settings">
            <span className="relative text-xl"><Store/></span>
          </button>

          <button className="hover:text-white transition-colors" aria-label="Bonuses">
            <span className="relative text-xl">
              <Gift/>
              <span className="absolute -top-1.5 -right-1.5 bg-yellow-400 text-black text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center leading-none">3</span>
            </span>
          </button>

          <button className="hover:text-white transition-colors" aria-label="Notifications">
            <span className="relative text-xl">
              <Bell />
              <span className="absolute -top-1.5 -right-1.5 bg-yellow-400 text-black text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center leading-none">1</span>
            </span>
          </button>

          <UserMenu />

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden hover:text-white transition-colors text-xl"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <Menu/> : <Menu/>}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0f1b3d] border-t border-[#1e3a6e] px-5 py-4 flex flex-col gap-4">
          {navLinks}
        </div>
      )}
    </header>
  );
};

export default Navbar;
