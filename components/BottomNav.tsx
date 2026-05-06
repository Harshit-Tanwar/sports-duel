"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Flame , Store,House ,User ,LayoutGrid} from "lucide-react";
const navItems = [
  { key: "home",    label: "Home",    icon: House,        path: "/" },
  { key: "gems",    label: "Gems",    icon: Flame,     path: "/wallet" },
  { key: "games",   label: "Games",   icon: Store, path: "/games" },
  { key: "profile", label: "Profile", icon: User,        path: "/profile" },
  { key: "more",    label: "More",    icon: LayoutGrid,  path: "/casino" },
];

const BottomNav = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 inset-x-0 z-30 flex justify-center rounded-full bg-black border-t border-[#1e3a6e]">
      <div className="flex items-center w-full sm:hidden justify-around h-16 px-2 ">
        {navItems.map(({ key, label, icon: Icon, path }) => {
          const isActive = pathname === path;
          return (
            <Link
              key={key}
              href={path}
              className="flex flex-col items-center gap-1 flex-1"
            >
              <div
                className={`p-2 rounded-xl transition-colors ${
                  isActive
                    ? "bg-[#0098FF]/20 text-[#0098FF]  border-b border-[#0098FF] "
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <Icon size={22} />
              </div>
             
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
