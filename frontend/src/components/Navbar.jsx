
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import { Menu, Phone, Mail } from "lucide-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-2 border-b border-gray-100"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-primary h-10 w-10 rounded-lg flex items-center justify-center">
            <span className="text-secondary font-bold text-2xl">P</span>
          </div>
          <span className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-primary' : 'text-white'}`}>
            PONTEGGI
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {["Servizi", "Progetti", "Chi Siamo", "Sicurezza"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className={`text-sm font-medium hover:text-secondary transition-colors ${
                isScrolled ? "text-gray-700" : "text-gray-200"
              }`}
            >
              {item}
            </a>
          ))}
          <Button 
            className="bg-secondary text-primary hover:bg-secondary/90 font-semibold"
            onClick={() => document.getElementById("contatti")?.scrollIntoView({ behavior: "smooth" })}
          >
            Richiedi Preventivo
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={isScrolled ? "text-primary" : "text-white"}>
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-10">
                {["Servizi", "Progetti", "Chi Siamo", "Sicurezza"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-lg font-medium text-gray-800 hover:text-primary"
                  >
                    {item}
                  </a>
                ))}
                <Button 
                  className="w-full bg-primary text-white hover:bg-primary/90"
                  onClick={() => document.getElementById("contatti")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Richiedi Preventivo
                </Button>
                
                <div className="mt-8 border-t pt-6 space-y-4">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Phone className="h-4 w-4" />
                    <span>+39 02 123 4567</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Mail className="h-4 w-4" />
                    <span>info@ponteggi.it</span>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
