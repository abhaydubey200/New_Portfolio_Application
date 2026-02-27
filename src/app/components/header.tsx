import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import { Moon, Sun, Menu, X, Download } from "lucide-react";
import { useTheme } from "next-themes";

const navLinks = [
  { label: "Summary", href: "#summary" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Architecture", href: "#architecture" },
  { label: "Case Study", href: "#case-study" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" }
];

export function Header() {
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  if (!mounted) return null;

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0a0d1a]/90 backdrop-blur-xl border-b border-white/10 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-3 group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg group-hover:shadow-cyan-500/50 transition-shadow">
                <span className="text-white font-bold text-lg">AD</span>
              </div>

              <div className="hidden sm:block">
                <p className="font-bold text-white text-lg leading-none">
                  Data Analytics
                </p>
                <p className="text-xs text-cyan-400">
                  BI Engineer
                </p>
              </div>
            </motion.button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors rounded-lg hover:bg-white/5"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2">

              {/* Desktop Resume Button */}
              <a
                href="/Resume (Data Analyst).pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="sm"
                  variant="ghost"
                  className="hidden md:flex items-center gap-2 text-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/10"
                >
                  <Download className="w-4 h-4" />
                  Resume
                </Button>
              </a>

              {/* Theme Toggle */}
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-gray-300 hover:text-cyan-400 hover:bg-white/5"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </Button>

              {/* Mobile Menu Toggle */}
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden text-gray-300 hover:text-cyan-400 hover:bg-white/5"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-0 right-0 z-40 lg:hidden bg-[#0a0d1a]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          >
            <nav className="container mx-auto px-6 py-6 flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => scrollToSection(link.href)}
                  className="px-4 py-3 text-left text-gray-300 hover:text-cyan-400 transition-colors rounded-lg hover:bg-white/5"
                >
                  {link.label}
                </motion.button>
              ))}

              {/* Mobile Resume Button */}
              <a
                href="/Resume (Data Analyst).pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="sm"
                  className="w-full mt-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}