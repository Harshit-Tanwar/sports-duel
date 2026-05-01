"use client";

import Image from "next/image";
import { useState } from "react";
import logo from "@/public/images/logo.png";
import { FaRegBell } from "react-icons/fa";
import { FaGift } from "react-icons/fa6";
import { FiMonitor } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
import { RiVipDiamondFill } from "react-icons/ri";

interface NavDropdownProps {
  label: string;
  items?: string[];
}

const NavDropdown = ({ label, items = [] }: NavDropdownProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="flex items-center gap-1 text-gray-200 hover:text-white text-sm font-medium transition-colors px-1 py-1"
        aria-haspopup={items.length > 0}
        aria-expanded={open}
      >
        {label}
        {items.length > 0 && (
          <FaChevronDown
            className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        )}
      </button>

      {open && items.length > 0 && (
        <div className="absolute top-full left-0 mt-1 w-40 bg-[#0f1b3d] border border-[#1e3a6e] rounded-md shadow-xl z-50 py-1">
          {items.map((item) => (
            <a
              key={item}
              href="#"
              className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-[#1a2f5a] transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

const UserMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center gap-2 ">
        <div className="w-7 h-7 rounded-full bg-linear-to-b from-orange-400 to-pink-500 flex items-center justify-center text-white text-xs font-bold shrink-0">
          JW
        </div>
        <div className="space-y-2">
        <span className="text-white text-xs font-medium whitespace-nowrap flex gap-2 items-center">
          Jenny Wilson
        <FaChevronDown
          className={`text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
        </span>
         <div className="flex items-end gap-2 text-xs leading-tight">
            <span className="text-green-400 font-semibold">$ 300000</span>
            <div className="flex items-center gap-1 text-blue-400 font-semibold">
            <RiVipDiamondFill />
              <span>60</span>
            </div>
          </div>
        </div>
      </button>

      {open && (
        <div className="absolute top-full right-0 mt-1 w-44 bg-[#0f1b3d] border border-[#1e3a6e] rounded-md shadow-xl z-50 py-1">
          {["Profile", "Settings", "Transactions", "Sign Out"].map((item) => (
            <a
              key={item}
              href="#"
              className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-[#1a2f5a] transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  return (
    <header className="w-full bg-linear-to-r from-[#0f1f45] to-blue- border-b border-[#0f1f45]">
      <nav
        className="flex items-center justify-between px-6 h-16"
        aria-label="Main navigation "
      >
        <div className="flex items-center gap-8 ">
          <div className="w-42 ">
            <Image src={logo} alt="" />
          </div>

          <div className="flex items-center gap-6">
            <NavDropdown
              label="Games"
              items={["All Games", "Featured", "Tournaments", "Live"]}
            />
            <a
              href="#"
              className="text-gray-200 hover:text-white text-sm font-medium transition-colors"
            >
              My Games
            </a>
            <NavDropdown
              label="Create"
              items={["New Game", "Templates", "Draft"]}
            />
            <a
              href="#"
              className="text-gray-200 hover:text-white text-sm font-medium transition-colors"
            >
              Wallet
            </a>
            <a
              href="#"
              className="text-gray-200 hover:text-white text-sm font-medium transition-colors"
            >
              Casino
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4 text-gray-300">
          <button
            className="hover:text-white transition-colors"
            aria-label="Display settings"
          > <span className="relative text-xl">
            <FiMonitor />
          </span>
          </button>

        
          <button
            className="hover:text-white transition-colors"
            aria-label="Bonuses"
          >
            <span className="relative text-xl">
            <FaGift />
              <span className="absolute -top-1.5 -right-1.5 bg-yellow-400 text-black text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center leading-none">
              3
            </span>
            </span>
          </button>


          <button
            className="hover:text-white transition-colors"
            aria-label="Notifications"
          >  
          <span className="relative text-xl">  
            <FaRegBell />
            <span className="absolute -top-1.5 -right-1.5 bg-yellow-400 text-black text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center leading-none">
              1
            </span>
          </span>
          </button> 

          <UserMenu />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
