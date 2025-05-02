import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";

const Navbar01Page = () => {
  return (
    <div className="bg-[#0B0B0D] text-white">
      <nav className="h-16 bg-[#0B0B0D] border-b border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)] fixed top-0 left-0 w-full z-50">
        <div className="h-full flex items-center justify-between max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-6">
            <NavMenu className="text-white gap-6" />
            <Button
              variant="outline"
              className="rounded-full border-white text-black hover:bg-white/10"
            >
              Contactanos
            </Button>
            <Button className="rounded-full bg-white text-black hover:bg-gray-100">
              Portolio
            </Button>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden flex-shrink-0">
            <NavigationSheet />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar01Page;
