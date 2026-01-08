
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { X, Cookie } from "lucide-react";

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem("cookieConsent");
    if (!hasAccepted) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  const handleDecline = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] animate-in slide-in-from-bottom duration-500">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex gap-4">
          <div className="hidden md:flex h-12 w-12 bg-primary/10 rounded-full items-center justify-center shrink-0">
            <Cookie className="h-6 w-6 text-primary" />
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-900">Informativa sui Cookie</h4>
            <p className="text-sm text-gray-600 max-w-2xl leading-relaxed">
              Utilizziamo cookie tecnici e di terze parti per migliorare la tua esperienza di navigazione e per analizzare il traffico. 
              Rispettiamo la tua privacy e le normative GDPR vigenti. Cliccando su "Accetta tutto", acconsenti all'uso di tutti i cookie.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <Button variant="outline" onClick={handleDecline} className="w-full sm:w-auto whitespace-nowrap">
            Solo necessari
          </Button>
          <Button onClick={handleAccept} className="w-full sm:w-auto bg-primary text-white hover:bg-primary/90 whitespace-nowrap">
            Accetta tutto
          </Button>
        </div>
        
        <button 
          onClick={handleDecline}
          className="absolute top-4 right-4 md:hidden text-gray-400 hover:text-gray-900"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};
