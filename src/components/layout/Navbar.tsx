import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Главная", path: "/" },
    { name: "О нас", path: "/about" },
    { 
      name: "Образование", 
      children: [
        { name: "Школа", path: "/school" },
        { name: "Университет", path: "/university" },
      ] 
    },
    { name: "VR/AR Технологии", path: "/technologies" },
    { name: "Контакты", path: "/contacts" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="relative w-8 h-8 rounded-full bg-gradient-to-br from-vra-blue via-vra-purple to-vra-pink glow">
                <div className="absolute inset-0.5 rounded-full bg-background flex items-center justify-center">
                  <span className="text-vra-purple font-bold">VR</span>
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight vr-gradient-text">VRA</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-2">
            {navLinks.map((link, index) => 
              !link.children ? (
                <Link 
                  key={index} 
                  to={link.path}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    location.pathname === link.path
                      ? "text-primary bg-secondary/40"
                      : "text-foreground/80 hover:text-primary hover:bg-secondary/20"
                  }`}
                >
                  {link.name}
                </Link>
              ) : (
                <DropdownMenu key={index}>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center gap-1 px-3 py-2 text-sm font-medium">
                      {link.name}
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center" className="bg-card/95 backdrop-blur-sm">
                    {link.children.map((childLink, childIndex) => (
                      <DropdownMenuItem key={childIndex} asChild>
                        <Link 
                          to={childLink.path}
                          className="cursor-pointer hover:bg-secondary/20 w-full"
                        >
                          {childLink.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              )
            )}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Link to="/login">
              <Button variant="ghost">Вход</Button>
            </Link>
            <Link to="/register">
              <Button className="bg-gradient-to-r from-vra-blue to-vra-purple hover:opacity-90">
                Регистрация
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-secondary/20"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-sm border-b border-border">
          <div className="space-y-1 px-4 py-3">
            {navLinks.map((link, index) => 
              !link.children ? (
                <Link
                  key={index}
                  to={link.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === link.path
                      ? "text-primary bg-secondary/40"
                      : "text-foreground/80 hover:text-primary hover:bg-secondary/20"
                  }`}
                >
                  {link.name}
                </Link>
              ) : (
                <div key={index} className="space-y-1">
                  <div className="px-3 py-2 text-base font-medium">
                    {link.name}
                  </div>
                  <div className="pl-4 space-y-1 border-l-2 border-secondary/50 ml-3">
                    {link.children.map((childLink, childIndex) => (
                      <Link
                        key={childIndex}
                        to={childLink.path}
                        className="block px-3 py-2 rounded-md text-sm font-medium text-foreground/80 hover:text-primary hover:bg-secondary/20"
                      >
                        {childLink.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )
            )}
            <div className="flex flex-col space-y-2 pt-4 pb-2 border-t border-border/50 mt-2">
              <Link to="/login" className="w-full">
                <Button variant="outline" className="w-full">Вход</Button>
              </Link>
              <Link to="/register" className="w-full">
                <Button className="w-full bg-gradient-to-r from-vra-blue to-vra-purple hover:opacity-90">
                  Регистрация
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
