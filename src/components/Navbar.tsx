import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Expertise", href: "#services" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent py-8"
      )}
    >
      <div className="container px-6 mx-auto">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-4 group">
            <div className="w-10 h-10 bg-primary flex items-center justify-center text-primary-foreground font-display font-bold text-xl">
              R
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-display font-bold tracking-tight text-foreground uppercase">Rajni Bala</span>
              <span className="text-[9px] font-bold tracking-[0.2em] text-muted-foreground uppercase">Senior Developer</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[11px] font-bold tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className="w-px h-6 bg-white/10" />
            
            <Button className="rounded-none h-10 px-6 text-[10px] font-bold tracking-[0.2em] uppercase shadow-sm" asChild>
              <a href="#contact">Hire Me</a>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden w-10 h-10 flex items-center justify-center text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-background border-b border-white/5 p-8 lg:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button className="rounded-none w-full py-6 text-xs font-bold tracking-[0.2em] uppercase" asChild>
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Start a Project</a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
