
import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CookieBanner } from '../components/CookieBanner';
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { 
  Construction, 
  Ruler, 
  Truck, 
  Hammer, 
  ShieldCheck, 
  CheckCircle2,
  ArrowRight,
  MapPin,
  Phone,
  Mail
} from "lucide-react";

// Mock data
const services = [
  {
    icon: <Construction className="h-10 w-10 text-secondary" />,
    title: "Montaggio e Smontaggio",
    description: "Servizio completo di installazione e rimozione ponteggi con personale certificato e qualificato."
  },
  {
    icon: <Truck className="h-10 w-10 text-secondary" />,
    title: "Noleggio Ponteggi",
    description: "Ampia gamma di attrezzature disponibili per il noleggio a breve e lungo termine."
  },
  {
    icon: <Hammer className="h-10 w-10 text-secondary" />,
    title: "Ristrutturazioni",
    description: "Supporto tecnico per cantieri di ristrutturazione facciate e lavori edili complessi."
  },
  {
    icon: <Ruler className="h-10 w-10 text-secondary" />,
    title: "Progettazione",
    description: "Consulenza tecnica e progettazione su misura per ogni tipo di esigenza strutturale."
  }
];

const projects = [
  {
    id: 1,
    title: "Complesso Residenziale Milano",
    category: "Ristrutturazione Facciata",
    image: "https://images.unsplash.com/photo-1619804648367-1f77e1e61f57?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "Restauro Palazzo Storico",
    category: "Ponteggio Multidirezionale",
    image: "https://images.unsplash.com/photo-1635961365604-c001fd0ea2b9?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    title: "Cantiere Industriale",
    category: "Sicurezza e Montaggio",
    image: "https://images.pexels.com/photos/35558257/pexels-photo-35558257.jpeg?auto=format&fit=crop&q=80"
  }
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1619804648367-1f77e1e61f57?auto=format&fit=crop&q=80" 
            alt="Ponteggi background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        </div>

        <div className="container relative z-10 px-4 md:px-6 pt-20 text-center md:text-left">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/90 text-primary font-bold text-sm mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              LEADER NEL SETTORE DAL 1998
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              Costruiamo il tuo <br/>
              <span className="text-secondary">Successo in Quota</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl leading-relaxed">
              Specialisti in montaggio, noleggio e progettazione di ponteggi per l'edilizia civile e industriale. 
              Sicurezza certificata e professionalità garantita.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/90 text-lg px-8 h-12 font-bold shadow-[0_0_20px_rgba(250,204,21,0.3)]">
                Richiedi Preventivo Gratuito
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 h-12 font-medium backdrop-blur-sm">
                I Nostri Progetti
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servizi" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-secondary font-bold tracking-wider uppercase text-sm mb-3">I Nostri Servizi</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">Soluzioni Complete per l'Edilizia</h3>
            <p className="text-gray-600 text-lg">Offriamo un servizio a 360° per garantire efficienza e sicurezza in ogni fase del tuo cantiere.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="p-8 text-center flex flex-col items-center h-full">
                  <div className="mb-6 p-4 rounded-full bg-slate-50 group-hover:bg-secondary/20 transition-colors">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-3">{service.title}</h4>
                  <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>
                  <a href="#contatti" className="text-primary font-semibold flex items-center gap-2 hover:text-secondary transition-colors text-sm uppercase tracking-wide">
                    Scopri di più <ArrowRight className="h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="sicurezza" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1690473768831-200986892e62?auto=format&fit=crop&q=80" 
                  alt="Sicurezza cantiere" 
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/20" />
              </div>
              {/* Floating Stat Card */}
              <div className="absolute -bottom-8 -right-8 md:right-8 bg-white p-6 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] max-w-xs border border-gray-100 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary">100%</p>
                    <p className="text-sm text-gray-500 font-medium">Conformità Normative</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <h2 className="text-secondary font-bold tracking-wider uppercase text-sm mb-3">Perché Sceglierci</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">La Sicurezza Prima di Tutto</h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Nel nostro lavoro non esistono compromessi. Ogni struttura è progettata e installata seguendo rigorosamente le normative di sicurezza vigenti (D.Lgs 81/08).
              </p>

              <div className="space-y-6">
                {[
                  { title: "Personale Qualificato", desc: "Squadre operative costantemente aggiornate e dotate di patentini specifici." },
                  { title: "Materiali Certificati", desc: "Utilizziamo solo attrezzature omologate e controllate periodicamente." },
                  { title: "Assistenza Continua", desc: "Supporto tecnico garantito per tutta la durata del cantiere." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1 h-6 w-6 rounded-full bg-secondary flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-primary mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 pt-8 border-t border-gray-100">
                 <p className="text-sm text-gray-500 italic">
                   * Tutte le nostre operazioni sono coperte da assicurazione RCT/RCO
                 </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Gallery (Vetrina) */}
      <section id="progetti" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-secondary font-bold tracking-wider uppercase text-sm mb-3">Portfolio</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white">I Nostri Ultimi Cantieri</h3>
            </div>
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:text-white hover:bg-white/10 hover:border-white">
              Vedi Tutti i Progetti
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group relative overflow-hidden rounded-xl aspect-[4/5] md:aspect-[3/4] cursor-pointer">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 transition-opacity duration-300" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-secondary text-xs font-bold uppercase tracking-wider mb-2 block">
                    {project.category}
                  </span>
                  <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                  <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100">
                    <p className="text-gray-300 text-sm mt-2">
                      Clicca per vedere i dettagli del progetto e la galleria completa.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contatti" className="py-20 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 -skew-x-12 translate-x-32 z-0 hidden lg:block" />
        
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-1/2">
               <h2 className="text-secondary font-bold tracking-wider uppercase text-sm mb-3">Contattaci</h2>
               <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">Richiedi un Preventivo</h3>
               <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                 Hai un progetto in mente? Compila il modulo per ricevere una consulenza gratuita e un preventivo personalizzato senza impegno.
               </p>

               <div className="space-y-8 mt-12">
                 <div className="flex items-start gap-4">
                   <div className="bg-slate-100 p-3 rounded-lg">
                     <MapPin className="h-6 w-6 text-primary" />
                   </div>
                   <div>
                     <h5 className="font-bold text-primary text-lg">Sede Operativa</h5>
                     <p className="text-gray-600">Via dell'Edilizia 45, 20100 Milano (MI)</p>
                   </div>
                 </div>
                 
                 <div className="flex items-start gap-4">
                   <div className="bg-slate-100 p-3 rounded-lg">
                     <Phone className="h-6 w-6 text-primary" />
                   </div>
                   <div>
                     <h5 className="font-bold text-primary text-lg">Telefono</h5>
                     <p className="text-gray-600">+39 02 123 4567</p>
                     <p className="text-sm text-gray-500">Lun - Ven: 08:00 - 18:00</p>
                   </div>
                 </div>

                 <div className="flex items-start gap-4">
                   <div className="bg-slate-100 p-3 rounded-lg">
                     <Mail className="h-6 w-6 text-primary" />
                   </div>
                   <div>
                     <h5 className="font-bold text-primary text-lg">Email</h5>
                     <p className="text-gray-600">preventivi@ponteggi.it</p>
                   </div>
                 </div>
               </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold text-gray-700">Nome e Cognome</label>
                      <Input id="name" placeholder="Mario Rossi" className="bg-gray-50 border-gray-200 focus:bg-white transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-semibold text-gray-700">Telefono</label>
                      <Input id="phone" placeholder="+39 333 1234567" className="bg-gray-50 border-gray-200 focus:bg-white transition-colors" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Aziendale</label>
                    <Input id="email" type="email" placeholder="mario.rossi@azienda.it" className="bg-gray-50 border-gray-200 focus:bg-white transition-colors" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-semibold text-gray-700">Servizio Richiesto</label>
                    <select id="service" className="flex h-10 w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                      <option value="">Seleziona un servizio...</option>
                      <option value="montaggio">Montaggio Ponteggi</option>
                      <option value="noleggio">Noleggio Attrezzature</option>
                      <option value="ristrutturazione">Ristrutturazione</option>
                      <option value="altro">Altro</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-gray-700">Dettagli Progetto</label>
                    <Textarea 
                      id="message" 
                      placeholder="Descrivi brevemente le tue esigenze (mq stimati, tipologia edificio, tempistiche...)" 
                      className="min-h-[120px] bg-gray-50 border-gray-200 focus:bg-white transition-colors resize-none" 
                    />
                  </div>

                  <div className="flex items-start gap-3 pt-2">
                     <input type="checkbox" id="privacy" className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
                     <label htmlFor="privacy" className="text-xs text-gray-500 leading-snug">
                       Ho letto l'informativa sulla privacy e acconsento al trattamento dei miei dati personali ai sensi del regolamento GDPR 679/2016.
                     </label>
                  </div>

                  <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90 h-12 text-lg font-bold shadow-lg shadow-primary/20">
                    Invia Richiesta
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CookieBanner />
      <Footer />
    </div>
  );
}
