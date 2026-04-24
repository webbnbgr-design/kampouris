/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { 
  Scale, 
  MapPin, 
  Phone, 
  Clock, 
  Award, 
  ChevronRight, 
  ShieldCheck, 
  Gavel, 
  Users, 
  Building2, 
  Menu, 
  X,
  ExternalLink,
  Facebook,
  Instagram,
  Linkedin
} from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Αρχική', href: '#home' },
    { name: 'Ο Βασίλειος Καμπούρης', href: '#profile' },
    { name: 'Τομείς Δικαίου', href: '#services' },
    { name: 'Διακρίσεις', href: '#awards' },
    { name: '24/7 Υποστήριξη', href: '#readiness' },
    { name: 'Επικοινωνία', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-forest">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <div className="w-10 h-10 bg-forest rounded-lg flex items-center justify-center text-gold">
            <Scale size={24} strokeWidth={1.5} />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-serif font-bold text-lg tracking-tight">KΛMΠOYPHΣ</span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold opacity-70">ΔΙΚΗΓΟΡΙΚΟ ΓΡΑΦΕΙΟ</span>
          </div>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, idx) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="text-sm font-medium hover:text-gold transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
          <motion.a
            href="tel:2321120131"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2.5 bg-forest text-white rounded-full text-xs font-bold tracking-wider flex items-center gap-2 hover:bg-forest/90 transition-all shadow-lg shadow-forest/20"
          >
            <Phone size={14} />
            2321120131
          </motion.a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-forest" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-forest hover:text-gold border-b border-gray-50 pb-2"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:2321120131"
                className="w-full mt-4 bg-forest text-white py-4 rounded-xl text-center font-bold flex items-center justify-center gap-3"
              >
                <Phone size={20} />
                2321120131
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-ivory animate-mesh">
      {/* Background elements */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-forest/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/10 text-gold rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            <Award size={14} />
            Βραβευμένη Αριστεία 2025
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-forest leading-[1.1] mb-8">
            Βασίλειος Γ. Καμπούρης:{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-forest to-forest/70">
              Δέσμευση Αριστείας
            </span>{' '}
            στην Καρδιά των Σερρών
          </h1>
          <p className="text-lg text-forest/70 leading-relaxed mb-10 max-w-lg font-light">
            Παρέχουμε νομικές υπηρεσίες υψηλού επιπέδου με έμφαση στην αξιοπιστία, το κύρος και την 24ωρη ετοιμότητα. Η βραβευμένη μας πορεία είναι η εγγύηση για την νομική σας ασφάλεια.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-forest text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-2xl shadow-forest/20"
            >
              Άμεση Επικοινωνία
              <ChevronRight size={18} />
            </motion.a>
            <motion.a
              href="#awards"
              whileHover={{ scale: 1.02 }}
              className="px-8 py-4 bg-white/50 border border-forest/10 rounded-2xl font-bold text-forest flex items-center justify-center gap-2 hover:bg-white transition-all shadow-lg shadow-black/[0.02]"
            >
              Οι Διακρίσεις μας
            </motion.a>
          </div>

          <div className="mt-12 flex items-center gap-6 opacity-60">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-ivory bg-gray-200" />
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-ivory bg-gold flex items-center justify-center text-[10px] text-ivory font-bold">+500</div>
            </div>
            <span className="text-xs font-medium tracking-wide">Εμπιστοσύνη από εκατοντάδες πολίτες των Σερρών</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_40px_100px_-15px_rgba(11,36,28,0.2)]">
            <img 
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1000" 
              alt="Professional legal environment"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/60 via-transparent to-transparent" />
            
            {/* Floating stats */}
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute top-1/2 -right-8 glass p-6 rounded-2xl shadow-xl max-w-[180px]"
            >
              <div className="text-gold flex gap-1 mb-2">
                {[1, 2, 3, 4, 5].map(i => <Award key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-2xl font-bold text-forest">8.5 / 10</p>
              <p className="text-[10px] uppercase font-bold text-forest/40 tracking-widest">Score Αριστείας</p>
            </motion.div>

            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="absolute bottom-8 left-8 forest-glass p-5 rounded-2xl shadow-xl text-white border-l-4 border-gold"
            >
              <Clock size={20} className="text-gold mb-2" />
              <p className="text-md font-bold">24/7 Ετοιμότητα</p>
              <p className="text-xs opacity-70">Νομική κάλυψη κάθε ώρα</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const AwardsSection = () => {
  const awards = [
    {
      title: "Gold Company 2025",
      subtitle: "Χρυσή Εταιρεία",
      description: "Πιστοποίηση κορυφαίας ποιότητας και πελατοκεντρικής προσέγγισης.",
      icon: <Award className="w-8 h-8" />
    },
    {
      title: "Eagles of Law 2025",
      subtitle: "Αετοί των Νομικών",
      description: "Διάκριση για την νομική επάρκεια και την ακαδημαϊκή βάση του γραφείου.",
      icon: <ShieldCheck className="w-8 h-8" />
    }
  ];

  return (
    <section id="awards" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold font-bold tracking-[.3em] uppercase text-xs mb-4"
          >
            Certified Excellence
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold text-forest"
          >
            Αντικειμενική Αναγνώριση Ποιότητας
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {awards.map((award, idx) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group h-full"
            >
              <div className="absolute inset-0 bg-gold rounded-[2.5rem] rotate-1 group-hover:rotate-0 transition-transform blur-3xl opacity-5" />
              <div className="relative bg-white border border-gray-100 p-8 md:p-12 rounded-[2.5rem] shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-2xl transition-all duration-700 flex flex-col md:flex-row gap-8 items-center text-center md:text-left h-full">
                <div className="w-24 h-24 rounded-full bg-gold/10 flex items-center justify-center text-gold relative shrink-0">
                  <div className="absolute inset-0 border-2 border-gold/20 rounded-full scale-110 group-hover:scale-125 transition-transform duration-700" />
                  {award.icon}
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-gold text-xs font-black uppercase tracking-widest mb-1 italic">{award.subtitle}</span>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-forest mb-4">{award.title}</h3>
                  <p className="text-forest/60 leading-relaxed italic">"{award.description}"</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 p-8 bg-forest rounded-[2rem] text-center text-white"
        >
          <p className="text-lg font-light opacity-90 max-w-3xl mx-auto">
            Με βαθμολογία <span className="text-gold font-bold">8.5/10</span>, το γραφείο μας κατατάσσεται στην ελίτ των νομικών υπηρεσιών του Νομού Σερρών, προσφέροντας πιστοποιημένη ασφάλεια σε κάθε υπόθεση.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const ProfileSection = () => {
  return (
    <section id="profile" className="py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
             <div className="mb-8">
              <p className="text-gold font-bold tracking-[.3em] uppercase text-xs mb-4">The Lawyer</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-forest mb-6">Βασίλειος Γ. Καμπούρης</h2>
              <div className="flex items-center gap-4 text-forest/70 mb-8">
                <div className="px-4 py-2 border border-forest/20 rounded-lg text-sm font-bold bg-white">Απόφοιτος ΑΠΘ</div>
                <div className="px-4 py-2 border border-forest/20 rounded-lg text-sm font-bold bg-white">Δικηγόρος Σερρών</div>
              </div>
              <p className="text-lg text-forest/70 leading-relaxed mb-8">
                Συνδυάζοντας την στιβαρή ακαδημαϊκή βάση του Αριστοτελείου Πανεπιστημίου Θεσσαλονίκης με την πολυετή εμπειρία στην τοπική κοινωνία των Σερρών, ο Βασίλειος Καμπούρης αποτελεί μια «σταθερή αξία» στον νομικό χώρο.
              </p>
              <p className="text-lg text-forest/70 leading-relaxed mb-8">
                Η έντονη παρουσία του στα κοινά και η αναγνωρισιμότητά του ως ένας από τους πλέον καταξιωμένους νομικούς της πόλης, εγγυώνται όχι μόνο την σωστή νομική καθοδήγηση, αλλά και την ανθρώπινη, προσβάσιμη προσέγγιση σε κάθε πρόβλημα.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 py-8 border-t border-forest/10">
              <div>
                <h4 className="text-2xl font-bold text-forest">2025</h4>
                <p className="text-xs uppercase font-bold text-forest/40 tracking-wider">Έτος Κορυφαίων Διακρίσεων</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-forest">24/7</h4>
                <p className="text-xs uppercase font-bold text-forest/40 tracking-wider">Συνεχής Νομική Ετοιμότητα</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <div className="relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-2 border-gold/30 rounded-[3rem] rotate-6 scale-95" />
              <div className="relative bg-white p-4 rounded-[3rem] shadow-2xl overflow-hidden aspect-[4/5] flex items-center justify-center bg-gradient-to-br from-ivory to-gray-100">
                <div className="text-gold opacity-20">
                   <Scale size={200} strokeWidth={0.5} />
                </div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/linen.png')] opacity-30" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "Ποινικό Δίκαιο",
      icon: <Gavel className="w-6 h-6" />,
      size: "lg",
      desc: "Εξειδικευμένη υπεράσπιση σε κάθε στάδιο της ποινικής διαδικασίας."
    },
    {
      title: "Αστικό Δίκαιο",
      icon: <Users className="w-6 h-6" />,
      size: "sm",
      desc: "Επιλύσεις οικογενειακών, εμπραγμάτων και ενοχικών διαφορών."
    },
    {
      title: "Εμπορικό Δίκαιο",
      icon: <Building2 className="w-6 h-6" />,
      size: "sm",
      desc: "Νομική υποστήριξη επιχειρήσεων και εταιρικών σχηματισμών."
    },
    {
      title: "Ακίνητα & Κτηματολόγιο",
      icon: <MapPin className="w-6 h-6" />,
      size: "md",
      desc: "Διεκπεραίωση υποθέσεων ακίνητης περιουσίας και δηλώσεων κτηματολογίου."
    },
    {
      title: "Διοικητικό Δίκαιο",
      icon: <ShieldCheck className="w-6 h-6" />,
      size: "md",
      desc: "Διαφορές με το Δημόσιο και ασφαλιστικά ταμεία."
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <p className="text-gold font-bold tracking-[.3em] uppercase text-xs mb-4">Practice Areas</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-forest">Τομείς Εξειδίκευσης</h2>
          </div>
          <p className="text-forest/60 max-w-md">
            Ολοκληρωμένες νομικές υπηρεσίες που καλύπτουν όλο το φάσμα του δικαίου, προσαρμοσμένες στις ανάγκες του σύγχρονου πολίτη.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative overflow-hidden group rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between ${
                service.size === 'lg' ? 'md:row-span-2 md:col-span-1 bg-forest text-white' : 
                service.size === 'md' ? 'md:col-span-2 text-forest bg-ivory' : 'bg-white text-forest'
              }`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-500 ${service.size === 'lg' ? 'bg-gold/20 text-gold' : 'bg-forest/5 text-forest group-hover:bg-gold/20 group-hover:text-gold'}`}>
                {service.icon}
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold mb-3">{service.title}</h3>
                <p className={`text-sm leading-relaxed ${service.size === 'lg' ? 'opacity-70' : 'text-forest/50'}`}>
                  {service.desc}
                </p>
              </div>
              <ChevronRight className={`absolute top-8 right-8 transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 ${service.size === 'lg' ? 'text-gold' : 'text-forest'}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ReadinessSection = () => {
  return (
    <section id="readiness" className="py-24 relative bg-forest text-ivory overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#D4AF37_0%,transparent_50%)] blur-[100px]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 text-gold mb-6">
            <div className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center animate-pulse">
              <Clock size={24} />
            </div>
            <span className="text-xs font-black uppercase tracking-[0.4em]">24/7 Readiness</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">
            Νομική Υποστήριξη Χωρίς Διαλείμματα.
          </h2>
          <p className="text-xl text-ivory/70 leading-relaxed mb-10 font-light italic">
            "Σε επείγοντα νομικά περιστατικά, ο χρόνος είναι ο κρισιμότερος παράγοντας. Είμαστε στη διάθεσή σας όλο το 24ωρο, για να σας προσφέρουμε την ασφάλεια που χρειάζεστε όταν την χρειάζεστε."
          </p>
          <motion.a
            href="tel:2321120131"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-4 bg-gold text-forest px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-gold/20"
          >
            Καλέστε Τώρα στο 2321120131
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10"
        >
          <div className="space-y-8">
            {[
              { title: "Άμεση Απόκριση", desc: "Ταχεία αξιολόγηση επειγουσών υποθέσεων." },
              { title: "Προσωπική Επαφή", desc: "Απευθείας επικοινωνία με τον Βασίλειο Καμπούρη." },
              { title: "Εχεμύθεια", desc: "Απόλυτη διασφάλιση του απορρήτου από το πρώτο δευτερόλεπτο." }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center shrink-0 text-gold">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                  <p className="text-ivory/50">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-gold font-bold tracking-[.3em] uppercase text-xs mb-4">Contact Details</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-forest mb-12">Επικοινωνήστε Μαζί μας</h2>
            
            <div className="space-y-10">
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-forest/5 flex items-center justify-center text-forest shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-sm uppercase font-bold text-forest/40 tracking-widest mb-1">Διεύθυνση</h4>
                  <p className="text-xl font-bold text-forest">Μεραρχίας 44, Σέρρες</p>
                  <p className="text-forest/60">Κεντρικότατο σημείο της πόλης</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-forest/5 flex items-center justify-center text-forest shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-sm uppercase font-bold text-forest/40 tracking-widest mb-1">Τηλέφωνο</h4>
                  <a href="tel:2321120131" className="text-xl font-bold text-forest hover:text-gold transition-colors">2321120131</a>
                  <p className="text-forest/60">Διαθέσιμο 24/7 για επείγοντα</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-forest/5 flex items-center justify-center text-forest shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-sm uppercase font-bold text-forest/40 tracking-widest mb-1">Ωράριο</h4>
                  <p className="text-xl font-bold text-forest">Ανοιχτά όλο το 24ωρο</p>
                  <p className="text-forest/60">Ετοιμότητα για άμεση νομική εκπροσώπηση</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-xl border border-gray-100 flex items-center justify-center text-forest/40 hover:text-gold hover:border-gold/30 hover:bg-gold/5 transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[3rem] overflow-hidden shadow-2xl relative min-h-[400px] bg-gray-100 border border-gray-100"
          >
            {/* Mock Map with design styling */}
            <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/23.5478,41.0847,15,0/1000x1000?access_token=none')] bg-cover bg-center grayscale contrast-75 brightness-110" />
            <div className="absolute inset-0 bg-forest/10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-16 h-16 bg-forest text-gold rounded-full flex items-center justify-center shadow-2xl border-4 border-white"
              >
                <MapPin size={32} />
              </motion.div>
              <div className="mt-4 glass px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap shadow-xl">
                Μεραρχίας 44, Σέρρες
              </div>
            </div>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Merarchias+44+Serres" 
              target="_blank" 
              className="absolute bottom-8 right-8 bg-white text-forest px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-xl hover:bg-forest hover:text-white transition-all"
            >
              Οδηγίες Χάρτη
              <ExternalLink size={16} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const Footer = () => {
  return (
    <footer className="bg-forest text-ivory py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center text-forest">
                <Scale size={24} />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-serif font-bold text-xl tracking-tight">KΛMΠOYPHΣ</span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold opacity-70">ΔΙΚΗΓΟΡΙΚΟ ΓΡΑΦΕΙΟ</span>
              </div>
            </div>
            <p className="max-w-sm opacity-50 font-light leading-relaxed">
              Βραβευμένη νομική εκπροσώπηση στις Σέρρες. Δέσμευση στην αριστεία, την ακαδημαϊκή γνώση και την συνεχή υποστήριξη του πολίτη.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-gold uppercase tracking-widest text-xs">Γρήγοροι Σύνδεσμοι</h4>
            <ul className="space-y-4 opacity-70">
              <li><a href="#profile" className="hover:text-gold transition-colors">Το Γραφείο</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">Υπηρεσίες</a></li>
              <li><a href="#awards" className="hover:text-gold transition-colors">Πιστοποιήσεις</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">Επικοινωνία</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-gold uppercase tracking-widest text-xs">Νομικά</h4>
            <ul className="space-y-4 opacity-70">
              <li><a href="#" className="hover:text-gold transition-colors">Όροι Χρήσης</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Πολιτική Απορρήτου</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">GDPR</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Νομική Σημείωση</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] font-bold opacity-40">
          <p>© {new Date().getFullYear()} Δικηγορικό Γραφείο Βασίλειος Γ. Καμπούρης. All Rights Reserved.</p>
          <p>Design & Code by Elite UI Studios</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="relative">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gold z-[60] origin-left"
        style={{ scaleX }}
      />
      
      <Navbar />
      <main>
        <Hero />
        <AwardsSection />
        <ProfileSection />
        <ServicesSection />
        <ReadinessSection />
        <ContactSection />
      </main>
      <Footer />

      {/* Floating Action Button for Emergency */}
      <motion.a
        href="tel:2321120131"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-16 h-16 bg-gold text-forest rounded-full shadow-2xl flex items-center justify-center z-40 md:hidden"
      >
        <Phone size={24} />
      </motion.a>
    </div>
  );
}
