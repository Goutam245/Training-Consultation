import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FileText, Search, Wrench, ShieldCheck, ShoppingCart, ArrowRight, CheckCircle, ClipboardCheck, Award, Quote } from "lucide-react";
import SectionLabel from "../components/SectionLabel";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const otherServices = [
  {
    category: "Documentation & Compliance",
    items: [
      {
        icon: FileText, title: "Technical Documentation",
        desc: "Professional preparation of engineering technical documents including equipment datasheets, operating manuals, maintenance procedures (SOP), and engineering reports.",
        benefits: ["Equipment datasheet preparation", "Operation & maintenance manual", "Engineering calculation package", "As-built documentation"],
      },
      {
        icon: ShieldCheck, title: "Code & Standard Advisory",
        desc: "Expert advisory on engineering codes: ASME, API, ISO, SNI, NFPA. Regulatory compliance review and standard interpretation.",
        benefits: ["Standards interpretation (ASME, API, ISO)", "Regulatory compliance review", "Standard gap analysis and remediation plan", "Code interpretation for specific project applications"],
      },
    ],
  },
  {
    category: "Inspection & Assessment",
    items: [
      {
        icon: Search, title: "Inspection & Non-Destructive Testing (NDT)",
        desc: "Comprehensive non-destructive testing and mechanical inspection services for equipment integrity verification across industrial facilities.",
        benefits: ["Ultrasonic Testing (UT), Radiographic Testing (RT)", "Magnetic Particle Testing (MT), Dye Penetrant Testing (PT)", "Visual & Dimensional Inspection", "Corrosion mapping and thickness survey"],
        isNew: true,
      },
      {
        icon: ClipboardCheck, title: "Plant Condition Assessment",
        desc: "Comprehensive assessment of plant and mechanical equipment to evaluate overall performance, identify deterioration, and estimate remaining useful life.",
        benefits: ["Overall performance evaluation", "Deterioration identification and analysis", "Remaining useful life (RUL) estimation", "Maintenance planning and replacement strategy optimization"],
      },
    ],
  },
  {
    category: "Reliability & Maintenance",
    items: [
      {
        icon: Wrench, title: "Reliability Engineering & RCM",
        desc: "Reliability-centered maintenance program development and reliability improvement consulting for industrial operations.",
        benefits: ["Reliability Centered Maintenance (RCM) analysis", "Failure Mode and Effects Analysis (FMEA)", "Root Cause Analysis (RCA) investigation", "Maintenance strategy optimization"],
      },
      {
        icon: ShoppingCart, title: "Equipment Procurement Support",
        desc: "Technical evaluation and procurement support for mechanical equipment acquisition, from specification to commissioning.",
        benefits: ["Technical specification preparation", "Vendor technical evaluation", "Factory Acceptance Testing (FAT) witness", "Commissioning and startup support"],
      },
    ],
  },
];

const OtherServices = () => {
  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=1920&q=80')` }} />
        <div className="absolute inset-0 dark-overlay" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <p className="text-sm text-brand-text-secondary mb-2"><Link to="/" className="hover:text-brand-gold">Home</Link> / Services / Other Services</p>
          <SectionLabel>Specialized Solutions</SectionLabel>
          <h1 className="text-display text-brand-text-primary mb-4">Specialized<br /><span className="text-brand-gold">Engineering Services</span></h1>
          <p className="text-lg text-brand-text-secondary max-w-2xl mb-4">Supporting your operations with targeted technical expertise across inspection, reliability, documentation, and procurement.</p>
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-brand-gold text-sm">
            <Award size={14} className="inline mr-2" />Delivered across 150+ Industrial Projects
          </span>
        </div>
      </section>

      <section className="section-padding bg-brand-navy-dark">
        <div className="container mx-auto px-4 lg:px-8">
          {otherServices.map((group, gi) => (
            <div key={gi} className="mb-20 last:mb-0">
              <motion.div {...fadeInUp}>
                <SectionLabel>{group.category}</SectionLabel>
                <h2 className="text-section-subheading text-brand-text-primary mb-8">{group.category}</h2>
              </motion.div>
              <div className="grid md:grid-cols-2 gap-8">
                {group.items.map((service, i) => (
                  <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.1 }} className="glass-card rounded-xl p-8 hover:border-brand-gold/30 transition-all group relative">
                    {'isNew' in service && service.isNew && (
                      <span className="absolute top-4 right-4 px-3 py-1 rounded-full gold-gradient text-brand-navy text-xs font-bold">NEW</span>
                    )}
                    <div className="w-12 h-12 rounded-lg bg-brand-gold/10 flex items-center justify-center mb-5">
                      <service.icon size={22} className="text-brand-gold" />
                    </div>
                    <h3 className="text-card-title text-brand-text-primary mb-3 group-hover:text-brand-gold transition-colors">{service.title}</h3>
                    <p className="text-sm text-brand-text-secondary mb-5 leading-relaxed">{service.desc}</p>
                    <ul className="space-y-2 mb-6">
                      {service.benefits.map((b, j) => (
                        <li key={j} className="flex gap-2 text-sm text-brand-text-secondary">
                          <CheckCircle size={14} className="text-brand-gold shrink-0 mt-0.5" />{b}
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-3">
                      <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-heading font-bold text-brand-gold hover:gap-3 transition-all">
                        View Details <ArrowRight size={14} />
                      </Link>
                      <Link to="/contact" className="inline-flex items-center gap-2 px-4 py-2 border border-brand-gold/30 text-brand-gold text-sm font-heading font-bold rounded-lg hover:bg-brand-gold/10 transition-all">
                        Enquire
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 gold-gradient" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <Quote size={40} className="text-brand-navy/30 mx-auto mb-4" />
          <p className="text-lg text-brand-navy/80 max-w-2xl mx-auto mb-6 italic">
            "CSU's inspection and reliability services have been instrumental in maintaining the integrity of our critical assets. Their professionalism is unmatched."
          </p>
          <p className="text-sm text-brand-navy/60 mb-8">— Ir. Budi Santoso, Maintenance Manager, PT Pertamina</p>
          <h3 className="text-section-subheading text-brand-navy mb-6">Need a Specific Engineering Solution?</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="px-7 py-3.5 bg-brand-navy text-brand-gold font-heading font-bold rounded-lg hover:shadow-xl transition-all">
              Discuss Your Requirement <ArrowRight size={18} className="inline ml-1" />
            </Link>
            <Link to="/services/consultancies" className="px-7 py-3.5 border-2 border-brand-navy/30 text-brand-navy font-heading font-bold rounded-lg hover:bg-brand-navy/10 transition-all">
              Request Consultation
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-10 mt-12">
            {["PLN", "PERTAMINA", "ASTRA", "TOYOTA", "TOTAL"].map((name) => (
              <span key={name} className="font-heading font-bold text-xl text-brand-navy/30 tracking-widest">{name}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OtherServices;
