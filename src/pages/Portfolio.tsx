import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import SectionLabel from "../components/SectionLabel";

const projects = [
  { id: 1, title: "Refinery Pump & Piping System Design", client: "PT Pertamina", year: "2024", service: "Piping Engineering", impact: "Delivered complete P&ID documentation compliant with ASME B31.3, on time and within budget.", image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=600&q=80" },
  { id: 2, title: "Industrial HVAC System Optimization", client: "PT Toyota Mfg", year: "2024", service: "Feasibility Study", impact: "28% energy efficiency improvement achieved through system redesign and automation integration.", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" },
  { id: 3, title: "Gas Compressor Station Feasibility Study", client: "PT PLN Nusantara", year: "2024", service: "Feasibility Study", impact: "Full FS report delivered in 45 days, enabling confident investment decision for $5M project.", image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600&q=80" },
  { id: 4, title: "Pressure Vessel Inspection & Fitness-For-Service", client: "PT Chandra Asri", year: "2023", service: "Inspection", impact: "Identified critical integrity issues early, preventing potential catastrophic failure.", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80" },
  { id: 5, title: "Rotating Machinery Overhaul & RCM Implementation", client: "PT Semen Indonesia", year: "2023", service: "Reliability", impact: "Maintenance cost reduced by 22%, unplanned downtime decreased by 40%.", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80" },
  { id: 6, title: "Heat Exchanger Condition Assessment", client: "PT Total Energies", year: "2023", service: "Inspection", impact: "Extended equipment life by 5 years through targeted maintenance recommendations.", image: "https://images.unsplash.com/photo-1518709414768-a88981a4515d?w=600&q=80" },
  { id: 7, title: "Inhouse Vibration Analysis Training", client: "PT Astra Otoparts", year: "2023", service: "Training", impact: "45 maintenance engineers certified, immediate application to 120+ machines.", image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80" },
  { id: 8, title: "Power Plant Rotating Equipment RCM", client: "PT PLN", year: "2022", service: "Reliability", impact: "Implemented RCM framework across 3 generating units, improving availability to 97.5%.", image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80" },
  { id: 9, title: "Piping Engineering & Stress Analysis", client: "PT Medco Energi", year: "2022", service: "Piping Engineering", impact: "Resolved critical piping flexibility issues in gas processing facility expansion project.", image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=600&q=80" },
];

const years = ["All Years", "2024", "2023", "2022", "2021 & Earlier"];
const services = ["All Services", "Training", "Feasibility Study", "Inspection", "Piping Engineering", "Reliability"];

const Portfolio = () => {
  const [yearFilter, setYearFilter] = useState("All Years");
  const [serviceFilter, setServiceFilter] = useState("All Services");
  const [search, setSearch] = useState("");

  const filtered = projects.filter((p) => {
    if (yearFilter !== "All Years" && yearFilter !== "2021 & Earlier" && p.year !== yearFilter) return false;
    if (yearFilter === "2021 & Earlier" && parseInt(p.year) > 2021) return false;
    if (serviceFilter !== "All Services" && p.service !== serviceFilter) return false;
    if (search && !p.title.toLowerCase().includes(search.toLowerCase()) && !p.client.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&q=80')` }} />
        <div className="absolute inset-0 dark-overlay" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <p className="text-sm text-brand-text-secondary mb-2"><Link to="/" className="hover:text-brand-gold">Home</Link> / Portfolio</p>
          <h1 className="text-display text-brand-text-primary mb-4">Our Project <span className="text-brand-gold">Portfolio</span></h1>
          <p className="text-lg text-brand-text-secondary max-w-2xl mb-6">Showcasing our track record of delivering impactful engineering solutions across Indonesia's leading industries.</p>
          <div className="flex flex-wrap gap-6 text-sm">
            <span className="text-brand-text-secondary"><span className="text-brand-gold font-heading font-bold">9</span> Project Categories</span>
            <span className="text-brand-text-secondary"><span className="text-brand-gold font-heading font-bold">80+</span> Completed Projects</span>
            <span className="text-brand-text-secondary"><span className="text-brand-gold font-heading font-bold">Since 2009</span></span>
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-navy-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 space-y-4">
            <div className="relative max-w-md">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-text-secondary" />
              <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search project, client, industry..." className="w-full pl-12 pr-4 py-3 bg-brand-surface border border-brand-gold/15 rounded-lg text-brand-text-primary placeholder:text-brand-text-secondary/50 focus:outline-none focus:border-brand-gold/40" />
            </div>
            <div className="flex flex-wrap gap-2">
              {years.map((y) => (
                <button key={y} onClick={() => setYearFilter(y)} className={`px-4 py-2 rounded-full text-sm font-heading font-semibold transition-all ${yearFilter === y ? "gold-gradient text-brand-navy" : "bg-brand-surface text-brand-text-secondary hover:text-brand-gold"}`}>{y}</button>
              ))}
              <select value={serviceFilter} onChange={(e) => setServiceFilter(e.target.value)} className="px-4 py-2 rounded-full text-sm bg-brand-surface text-brand-text-secondary border border-brand-gold/15 focus:outline-none">
                {services.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project, i) => (
              <motion.div key={project.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="glass-card rounded-xl overflow-hidden hover:border-brand-gold/30 transition-all group">
                <div className="h-48 overflow-hidden relative">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-3 py-1 rounded-full gold-gradient text-brand-navy text-xs font-bold">{project.year}</span>
                    <span className="px-3 py-1 rounded-full bg-brand-navy/80 text-brand-text-primary text-xs">{project.client}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-brand-text-primary mb-2 group-hover:text-brand-gold transition-colors">{project.title}</h3>
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] bg-brand-gold/10 text-brand-gold font-mono-label mb-3">{project.service}</span>
                  <p className="text-sm text-brand-text-secondary leading-relaxed mb-4">{project.impact}</p>
                  <button className="text-sm font-heading font-bold text-brand-gold flex items-center gap-1 hover:gap-2 transition-all">
                    View Details <ArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80')` }} />
        <div className="absolute inset-0 bg-brand-navy/90" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(248,217,34,0.1) 30px, rgba(248,217,34,0.1) 31px)` }} />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <SectionLabel>Let's Work Together</SectionLabel>
          <h2 className="text-section-heading text-brand-text-primary mb-4">Let's Discuss Your <span className="text-brand-gold">Engineering Challenge</span></h2>
          <p className="text-brand-text-secondary max-w-2xl mx-auto mb-8">Whether it's training your team or solving a complex technical problem — our experts are ready to help.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="px-7 py-3.5 gold-gradient text-brand-navy font-heading font-bold rounded-lg hover:shadow-xl hover:shadow-brand-gold/25 transition-all">Start a Consultation</Link>
            <Link to="/services/training" className="px-7 py-3.5 border-2 border-brand-text-primary/30 text-brand-text-primary font-heading font-bold rounded-lg hover:border-brand-gold hover:text-brand-gold transition-all">View Our Services</Link>
          </div>
          <div className="flex flex-wrap justify-center gap-10 mt-12">
            {["PLN", "PERTAMINA", "ASTRA", "TOYOTA", "BNSP", "TOTAL"].map((name) => (
              <span key={name} className="font-heading font-bold text-xl text-brand-text-secondary/30 tracking-widest">{name}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
