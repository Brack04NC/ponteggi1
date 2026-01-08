
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-white/10 h-10 w-10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <span className="text-secondary font-bold text-2xl">P</span>
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                PONTEGGI
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Leader nel settore del montaggio, smontaggio e noleggio ponteggi. 
              Sicurezza e professionalità al servizio del tuo cantiere.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-b border-secondary/30 pb-2 inline-block">Menu Rapido</h3>
            <ul className="space-y-3">
              {["Home", "Servizi", "Progetti", "Chi Siamo", "Contatti"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-secondary transition-colors flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-secondary"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-b border-secondary/30 pb-2 inline-block">Contatti</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="h-5 w-5 text-secondary shrink-0 mt-1" />
                <span>Via dell'Edilizia 45,<br />20100 Milano (MI)</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="h-5 w-5 text-secondary shrink-0" />
                <span>+39 02 123 4567</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="h-5 w-5 text-secondary shrink-0" />
                <span>preventivi@ponteggi.it</span>
              </li>
            </ul>
          </div>

          {/* Certifications Column */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-b border-secondary/30 pb-2 inline-block">Certificazioni</h3>
            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="h-8 w-8 text-secondary" />
                <div>
                  <p className="font-bold text-white">Certificazione ISO</p>
                  <p className="text-xs text-gray-400">9001:2015</p>
                </div>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Operiamo nel pieno rispetto delle normative vigenti sulla sicurezza D.Lgs 81/08.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Ponteggi S.r.l. - P.IVA 12345678901</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-white transition-colors">Termini e Condizioni</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
