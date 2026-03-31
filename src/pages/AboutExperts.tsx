import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import SectionLabel from "../components/SectionLabel";

const experts = [
  { name: "Dr. Ir. Hendra Wijaya", spec: "Structural & Mechanical Engineering", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" },
  { name: "Ir. Rina Susanti, M.T.", spec: "MEP Engineering & Building Systems", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80" },
  { name: "Prof. Agus Salim, Ph.D.", spec: "Geotechnical & Foundation Engineering", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
  { name: "Dr. Maya Putri, M.T.", spec: "Environmental & Safety Engineering", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80" },
  { name: "Ir. Bambang Sutrino, M.T.", spec: "Project Management & Construction", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
  { name: "Dr. Lestari Wulandari", spec: "Quality Assurance & Inspection", image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=400&q=80" },
  { name: "Ir. Darnawan Putra, M.T.", spec: "Asset & Reliability Management", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80" },
  { name: "Dr. Nurul Hidayah, M.K.K.K.", spec: "Occupational Health & Safety", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&q=80" },
];

const AboutExperts = () => {
  return (
    <>
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1560472355-536de3962603?w=1920&q=80')` }} />
        <div className="absolute inset-0 dark-overlay" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <p className="text-sm text-brand-text-secondary mb-2">
            <Link to="/" className="hover:text-brand-gold">Home</Link> / <Link to="/about" className="hover:text-brand-gold">About</Link> / Experts
          </p>
          <SectionLabel>Subject Matter Experts</SectionLabel>
          <h1 className="text-display text-brand-text-primary">Our <span className="text-brand-gold">Experts</span></h1>
          <p className="text-lg text-brand-text-secondary max-w-2xl mt-4">Our team of certified engineers and academics bring decades of combined expertise across all major engineering disciplines.</p>
        </div>
      </section>

      <section className="section-padding bg-brand-navy-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {experts.map((expert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass-card rounded-xl p-6 text-center hover:border-brand-gold/30 transition-all group"
              >
                <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden border-2 border-brand-gold/30">
                  <img src={expert.image} alt={expert.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-heading font-bold text-brand-text-primary text-sm group-hover:text-brand-gold transition-colors">{expert.name}</h3>
                <span className="inline-block mt-2 px-3 py-1 rounded-full bg-brand-gold/10 text-brand-gold text-[10px] font-mono-label uppercase tracking-wider">
                  {expert.spec}
                </span>
                <div className="mt-3 flex items-center justify-center gap-2">
                  <span className="text-xs text-brand-text-secondary">5+ years</span>
                  <a href="#" className="w-7 h-7 rounded-md bg-brand-surface flex items-center justify-center text-brand-text-secondary hover:text-brand-gold transition-colors">
                    <Linkedin size={12} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutExperts;
