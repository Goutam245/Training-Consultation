import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FileSearch, ClipboardCheck, Settings, Building2, FileText, ArrowRight, CheckCircle, Search, Lightbulb, HeadphonesIcon, Target } from "lucide-react";
import SectionLabel from "../components/SectionLabel";
import AnimatedCounter from "../components/AnimatedCounter";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const consultancyServices = [
  {
    category: "Engineering Analysis",
    items: [
      {
        icon: FileSearch, title: "Feasibility Study (FS)",
        tagline: "Make confident investment decisions with comprehensive technical analysis",
        desc: "Comprehensive feasibility analysis for infrastructure and development projects covering technical, economic, and regulatory aspects.",
        benefits: ["Technical feasibility report with risk assessment", "Equipment and system sizing recommendations", "Preliminary P&ID and layout concept", "Cost estimation and project timeline", "Risk identification and mitigation plan"],
        industries: "Oil & Gas | Power | Manufacturing | Infrastructure",
        link: "/services/consultancies/feasibility-study",
      },
      {
        icon: ClipboardCheck, title: "Assessment & Testing",
        tagline: "Identify risks early before they become costly failures",
        desc: "Quality evaluation services for equipment and systems integrity using industry-standard methodologies.",
        benefits: ["Structural assessment, material testing, quality inspection", "Non-destructive testing (UT, RT, MT, PT, VT)", "Fitness-for-service evaluation per API 579/ASME", "Inspection reports compliant with international standards"],
        industries: "Petrochemical | Power Plant | Manufacturing",
        link: "/services/consultancies/assessment",
      },
      {
        icon: Settings, title: "Asset Management",
        tagline: "Maximize asset life and minimize lifecycle costs",
        desc: "Strategic asset lifecycle management and optimization consulting for industrial operations.",
        benefits: ["Asset lifecycle management strategy", "Maintenance optimization planning", "Asset register development and criticality ranking", "Performance benchmarking and KPI development"],
        industries: "All Industrial Sectors",
        link: "/services/consultancies/asset-management",
      },
    ],
  },
  {
    category: "System Design & Consulting",
    items: [
      {
        icon: Building2, title: "MEP Consulting",
        tagline: "Integrated mechanical, electrical, and plumbing design solutions",
        desc: "Complete MEP engineering services for commercial and industrial building projects.",
        benefits: ["Mechanical system design (HVAC, piping, fire protection)", "Electrical system design and load analysis", "Plumbing and drainage system design", "Energy efficiency analysis and green building support"],
        industries: "Commercial | Industrial | Infrastructure",
        link: "/services/consultancies/mep",
      },
      {
        icon: FileText, title: "Standard & Quality Document",
        tagline: "Ensure compliance and operational consistency across your organization",
        desc: "Development and implementation of quality management documentation systems and standard operating procedures.",
        benefits: ["Standard Operating Procedure (SOP) development", "Work Instruction (WI) and job aid creation", "Quality Management System (QMS) documentation", "Technical manual and as-built documentation"],
        industries: "All Industries",
        link: "/services/consultancies/quality",
      },
    ],
  },
];

const Consultancies = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80')` }} />
        <div className="absolute inset-0 dark-overlay" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <p className="text-sm text-brand-text-secondary mb-2"><Link to="/" className="hover:text-brand-gold">Home</Link> / Services / Consultancies</p>
          <h1 className="text-display text-brand-text-primary mb-4">Engineering<br /><span className="text-brand-gold">Consultation Services</span></h1>
          <p className="text-lg text-brand-text-secondary max-w-2xl mb-8">Practical, data-driven solutions to improve reliability, efficiency, and performance across your engineering operations.</p>
          <div className="flex flex-wrap gap-8">
            <AnimatedCounter end={150} label="Projects Delivered" />
            <AnimatedCounter end={80} label="Clients" />
            <AnimatedCounter end={15} label="Years Experience" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-brand-navy-dark">
        <div className="container mx-auto px-4 lg:px-8">
          {consultancyServices.map((group, gi) => (
            <div key={gi} className="mb-20 last:mb-0">
              <motion.div {...fadeInUp}>
                <SectionLabel>{group.category}</SectionLabel>
                <h2 className="text-section-subheading text-brand-text-primary mb-8">{group.category}</h2>
              </motion.div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {group.items.map((service, i) => (
                  <motion.div key={i} {...fadeInUp} transition={{ duration: 0.5, delay: i * 0.1 }} className="glass-card rounded-xl p-8 hover:border-brand-gold/30 transition-all group">
                    <div className="w-12 h-12 rounded-lg bg-brand-gold/10 flex items-center justify-center mb-5">
                      <service.icon size={22} className="text-brand-gold" />
                    </div>
                    <h3 className="text-card-title text-brand-text-primary mb-2 group-hover:text-brand-gold transition-colors">{service.title}</h3>
                    <p className="text-sm text-brand-gold/80 italic mb-3">{service.tagline}</p>
                    <p className="text-sm text-brand-text-secondary mb-5">{service.desc}</p>
                    <ul className="space-y-2 mb-4">
                      {service.benefits.map((b, j) => (
                        <li key={j} className="flex gap-2 text-sm text-brand-text-secondary">
                          <CheckCircle size={14} className="text-brand-gold shrink-0 mt-0.5" />{b}
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-brand-text-secondary/60 mb-5">Industries: {service.industries}</p>
                    <Link to={service.link} className="inline-flex items-center gap-2 text-sm font-heading font-bold text-brand-gold hover:gap-3 transition-all">
                      View Details <ArrowRight size={14} />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80')` }} />
        <div className="absolute inset-0 bg-brand-navy-deep/95" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <SectionLabel>Our Approach</SectionLabel>
            <h2 className="text-section-heading text-brand-text-primary">How We <span className="text-brand-gold">Deliver Results</span></h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { num: "01", title: "UNDERSTAND", desc: "Thorough assessment of your challenge and requirements", icon: Search },
              { num: "02", title: "ANALYZE", desc: "Deep technical investigation and data analysis", icon: Target },
              { num: "03", title: "RECOMMEND", desc: "Clear, actionable recommendations with detailed report", icon: Lightbulb },
              { num: "04", title: "SUPPORT", desc: "Post-delivery assistance and follow-up", icon: HeadphonesIcon },
            ].map((step, i) => (
              <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.15 }} className="text-center">
                <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center mx-auto mb-4 shadow-lg shadow-brand-gold/20">
                  <span className="font-display text-2xl text-brand-navy">{step.num}</span>
                </div>
                <h3 className="font-heading font-bold text-brand-gold mb-2">{step.title}</h3>
                <p className="text-sm text-brand-text-secondary">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-navy-dark">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-section-heading text-brand-text-primary mb-4">Need Engineering <span className="text-brand-gold">Consultation?</span></h2>
          <p className="text-brand-text-secondary max-w-xl mx-auto mb-8">Our team of experts is ready to help you solve complex engineering challenges with data-driven solutions.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="px-7 py-3.5 gold-gradient text-brand-navy font-heading font-bold rounded-lg hover:shadow-xl hover:shadow-brand-gold/25 transition-all">
              Start a Consultation <ArrowRight size={18} className="inline ml-1" />
            </Link>
            <Link to="/portfolio" className="px-7 py-3.5 border-2 border-brand-text-primary/30 text-brand-text-primary font-heading font-bold rounded-lg hover:border-brand-gold hover:text-brand-gold transition-all">
              View Our Portfolio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Consultancies;
