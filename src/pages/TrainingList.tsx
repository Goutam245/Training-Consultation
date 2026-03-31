import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, BarChart3, MapPin, ArrowRight, Users, BookOpen, Headphones, GraduationCap, Award, Calendar } from "lucide-react";
import SectionLabel from "../components/SectionLabel";

const categories = [
  { id: "all", label: "All Categories", count: 14 },
  { id: "maintenance", label: "Maintenance Management", count: 4 },
  { id: "technical", label: "Technical Training", count: 4 },
  { id: "industrial", label: "Industrial Engineering", count: 3 },
  { id: "building", label: "Building Management", count: 2 },
  { id: "academic", label: "Academics & Research", count: 1 },
];

const trainings = [
  {
    id: "vibration-analysis", title: "Vibration Analysis & Predictive Maintenance", category: "maintenance",
    desc: "Master vibration measurement techniques and predictive maintenance strategies to reduce unplanned downtime and extend equipment life.",
    duration: "3 Days", level: "Advanced", format: "Hybrid",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80",
  },
  {
    id: "rotating-equipment", title: "Rotating Equipment: Pumps, Compressors & Turbines", category: "maintenance",
    desc: "Comprehensive training covering operation, maintenance, and troubleshooting of critical rotating machinery in industrial plants.",
    duration: "4 Days", level: "Intermediate", format: "On-site",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80",
  },
  {
    id: "rcm", title: "Reliability Centered Maintenance (RCM)", category: "maintenance",
    desc: "Learn systematic approaches to develop maintenance strategies that ensure equipment reliability and operational efficiency.",
    duration: "3 Days", level: "Advanced", format: "Hybrid",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80",
  },
  {
    id: "oil-analysis", title: "Oil Analysis & Lubrication Management", category: "maintenance",
    desc: "Comprehensive understanding of oil analysis techniques, lubrication best practices, and condition monitoring for rotating equipment.",
    duration: "2 Days", level: "Intermediate", format: "Classroom",
    image: "https://images.unsplash.com/photo-1518709414768-a88981a4515d?w=600&q=80",
  },
  {
    id: "piping-engineering", title: "Piping Engineering & Design", category: "technical",
    desc: "Industrial piping systems aligned with ASME B31.3 Process Piping Code and relevant API standards, including P&ID interpretation.",
    duration: "5 Days", level: "Intermediate", format: "Classroom",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80",
  },
  {
    id: "pressure-vessel", title: "Pressure Vessel Design & Inspection", category: "technical",
    desc: "Detailed training on pressure vessel design principles, ASME Section VIII requirements, and inspection methodologies.",
    duration: "3 Days", level: "Advanced", format: "Hybrid",
    image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=600&q=80",
  },
  {
    id: "heat-exchanger", title: "Heat Exchanger: Design, Operation & Maintenance", category: "technical",
    desc: "Detailed study of heat exchanger types, selection criteria, thermal design calculations, and operational best practices.",
    duration: "3 Days", level: "Intermediate", format: "Classroom",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    id: "centrifugal-pump", title: "Centrifugal Pump: System Design & Troubleshooting", category: "technical",
    desc: "In-depth training on centrifugal pump selection, system curve analysis, troubleshooting common problems, and performance optimization.",
    duration: "2 Days", level: "Intermediate", format: "On-site",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
  },
  {
    id: "plant-layout", title: "Plant Layout & Material Handling Design", category: "industrial",
    desc: "Principles of efficient plant layout design, material flow analysis, and equipment arrangement for manufacturing facilities.",
    duration: "3 Days", level: "Intermediate", format: "Classroom",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80",
  },
  {
    id: "hazop", title: "Industrial Safety & HAZOP Analysis", category: "industrial",
    desc: "Hazard and Operability Study (HAZOP) methodology for process safety risk identification, assessment, and mitigation in industrial operations.",
    duration: "3 Days", level: "Advanced", format: "Hybrid",
    image: "https://images.unsplash.com/photo-1607688387751-c1e95ae09a42?w=600&q=80",
  },
  {
    id: "energy-management", title: "Energy Management & Efficiency Optimization", category: "industrial",
    desc: "Practical approaches to energy management, audit techniques, and efficiency optimization strategies for industrial facilities.",
    duration: "2 Days", level: "Intermediate", format: "Classroom",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80",
  },
  {
    id: "mep-system", title: "MEP System Design & Maintenance", category: "building",
    desc: "Integrated mechanical, electrical, and plumbing system design principles for commercial and industrial buildings.",
    duration: "3 Days", level: "Intermediate", format: "Classroom",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
  },
  {
    id: "building-automation", title: "Building Automation System (BAS)", category: "building",
    desc: "Understanding BAS architecture, HVAC control strategies, energy management systems, and smart building technologies.",
    duration: "2 Days", level: "Intermediate", format: "Classroom",
    image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600&q=80",
  },
  {
    id: "plant-integrity", title: "Plant Integrity Management", category: "academic",
    desc: "Comprehensive training on managing the mechanical integrity of process plants including inspection strategies and fitness-for-service evaluation.",
    duration: "3 Days", level: "Advanced", format: "On-site / Online",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const TrainingList = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = activeCategory === "all" ? trainings : trainings.filter((t) => t.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1920&q=80')` }} />
        <div className="absolute inset-0 dark-overlay" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <p className="text-sm text-brand-text-secondary mb-2">
            <Link to="/" className="hover:text-brand-gold">Home</Link> / <Link to="/services/training" className="hover:text-brand-gold">Services</Link> / Training
          </p>
          <h1 className="text-display text-brand-text-primary mb-4">Engineering<br /><span className="text-brand-gold">Training Programs</span></h1>
          <p className="text-lg text-brand-text-secondary max-w-2xl mb-8">
            Industry-focused training designed to improve performance, reliability, and efficiency across mechanical engineering disciplines.
          </p>
          <div className="flex flex-wrap gap-4">
            {[
              { icon: GraduationCap, label: "20+ Programs" },
              { icon: Users, label: "Public & Inhouse" },
              { icon: Award, label: "BNSP Certified" },
              { icon: Calendar, label: "Online Available" },
            ].map((stat, i) => (
              <span key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-brand-text-primary text-sm">
                <stat.icon size={16} className="text-brand-gold" />{stat.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Filter + List */}
      <section className="section-padding bg-brand-navy-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-[280px_1fr] gap-10">
            {/* Sidebar */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <h3 className="text-label text-brand-gold mb-5">Filter by Category</h3>
              <ul className="space-y-1">
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <button
                      onClick={() => setActiveCategory(cat.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all flex justify-between items-center ${
                        activeCategory === cat.id
                          ? "bg-brand-gold/10 text-brand-gold border-l-2 border-brand-gold font-semibold"
                          : "text-brand-text-secondary hover:text-brand-text-primary hover:bg-brand-surface"
                      }`}
                    >
                      {cat.label}
                      <span className="text-xs bg-brand-surface px-2 py-0.5 rounded-full">{cat.count}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cards */}
            <div className="space-y-6">
              {filtered.map((training, i) => (
                <motion.div
                  key={training.id}
                  {...fadeInUp}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="glass-card rounded-xl overflow-hidden hover:border-brand-gold/30 transition-all group"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-72 h-48 md:h-auto overflow-hidden shrink-0">
                      <img src={training.image} alt={training.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6 flex-1">
                      <h3 className="text-card-title text-brand-text-primary mb-2 group-hover:text-brand-gold transition-colors">{training.title}</h3>
                      <p className="text-sm text-brand-text-secondary leading-relaxed mb-4 line-clamp-2">{training.desc}</p>
                      <div className="flex flex-wrap gap-3 mb-5 text-xs text-brand-text-secondary">
                        <span className="flex items-center gap-1"><Clock size={14} className="text-brand-gold" />{training.duration}</span>
                        <span className="flex items-center gap-1"><BarChart3 size={14} className="text-brand-gold" />{training.level}</span>
                        <span className="flex items-center gap-1"><MapPin size={14} className="text-brand-gold" />{training.format}</span>
                      </div>
                      <div className="flex gap-3">
                        <Link to={`/services/training/${training.id}`} className="inline-flex items-center gap-2 px-5 py-2.5 border border-brand-gold/30 text-brand-gold text-sm font-heading font-bold rounded-lg hover:bg-brand-gold/10 transition-all">
                          View Details
                        </Link>
                        <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 gold-gradient text-brand-navy text-sm font-heading font-bold rounded-lg hover:shadow-lg hover:shadow-brand-gold/20 transition-all">
                          Quick Enquiry
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Inhouse Training Benefits */}
      <section className="section-padding bg-brand-navy-deep">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <SectionLabel>Inhouse Training</SectionLabel>
            <h2 className="text-section-heading text-brand-text-primary mb-4">Why Choose <span className="text-brand-gold">Inhouse Training?</span></h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: BookOpen, title: "Tailored Content", desc: "Training designed around your specific equipment and processes" },
              { icon: MapPin, title: "No Travel Costs", desc: "We come to your facility, eliminating travel and accommodation expenses" },
              { icon: Calendar, title: "Flexible Scheduling", desc: "We work around your production schedule and shift patterns" },
              { icon: Users, title: "Expert Instructors", desc: "Direct access to our certified engineers with real industry experience" },
            ].map((benefit, i) => (
              <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.1 }} className="glass-card rounded-xl p-6 text-center hover:border-brand-gold/30 transition-all">
                <div className="w-14 h-14 rounded-full bg-brand-gold/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon size={24} className="text-brand-gold" />
                </div>
                <h3 className="font-heading font-bold text-brand-text-primary mb-2">{benefit.title}</h3>
                <p className="text-sm text-brand-text-secondary">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inhouse Training CTA */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1920&q=80')` }} />
        <div className="absolute inset-0 bg-brand-navy-dark/92" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-section-heading text-brand-text-primary mb-4">
              Need Inhouse <span className="text-brand-gold">Technical Training?</span>
            </h2>
            <p className="text-brand-text-secondary max-w-2xl mx-auto mb-10">
              We deliver customized training programs at your facility, tailored to your specific equipment and operational needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 gold-gradient text-brand-navy font-heading font-bold rounded-lg hover:shadow-xl hover:shadow-brand-gold/25 transition-all">
                Request Inhouse Training <ArrowRight size={18} />
              </Link>
              <a href="https://wa.me/6281234567890" className="inline-flex items-center gap-2 px-7 py-3.5 bg-success text-success-foreground font-heading font-bold rounded-lg hover:opacity-90 transition-all">
                Chat via WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default TrainingList;
