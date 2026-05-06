import { cn } from "@/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

interface NavItem {
  name: string;
  href: string;
}
interface NavProp {
  item: NavItem;
}

const navigation: NavItem[] = [
  { name: "Prediction", href: "/games/prediction" },
  { name: "Eliminator", href: "/games/eliminator" },
  { name: "Daily Quizzical", href: "/games/daily-quizzical" },
  { name: "General Knowledge", href: "/games/general-knowledge" },
  { name: "Wallet", href: "/wallet" },
  { name: "Performance", href: "performance" },
];
const NavItemComponent = ({ item }: NavProp) => {
  const pathname = usePathname();
  return (
    <Link
      key={item.href}
      href={item.href}
      className={`block text-center py-2  rounded-full bg-zinc-700/40 mt-1 text-lg transition-colors ${
       pathname === item.href
          ? "text-white bg-primary-gradient"
           : "text-gray-100 hover:text-white"
      }`}
    >
      {item.name}
    </Link>
  );
};

const EnhancedSidebar = ({ isOpen, onToggle }: SidebarProps) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 lg:hidden"
          onClick={onToggle}
        >
          <div
            className={cn(
              "fixed inset-y-0 left-0 z-50 flex flex-col border-3 rounded-xl border-blue-600 overflow-hidden",
              isOpen
                ? "w-64 translate-x-0"
                : "-translate-x-full lg:translate-x-0",
            )}
          >
            <nav className="flex-1 space-y-2 p-2 bg-secondary-gradient overflow-y-auto">
              {navigation.map((item) => (
                <NavItemComponent key={item.href} item={item} />
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default EnhancedSidebar;
