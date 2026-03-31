import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Shield, Wrench, GraduationCap, CheckCircle, XCircle, ArrowRight, Quote,
  Factory, Zap, Droplets, Building2, Ship, Hospital, Newspaper, Clock,
  BarChart3, Users, Search as SearchIcon, Target, Lightbulb, HeadphonesIcon
} from "lucide-react";
import AnimatedCounter from "../components/AnimatedCounter";
import SectionLabel from "../components/SectionLabel";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const clientLogos = ["PLN", "PERTAMINA", "ASTRA", "TOYOTA", "BNSP", "TOTAL"];

const industryTags = ["#Manufacturing", "#Oil & Gas", "#Energy", "#Power Plant", "#Petrochemical"];

const Homepage = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image with fallback */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1920&q=85"
            alt="Industrial engineering facility"
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              if (target.src.includes('photo-1581094794329')) {
                target.src = 'https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=1920&q=85';
              } else if (target.src.includes('photo-1565008576549')) {
                target.src = 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1920&q=85';
              }
            }}
          />
        </div>
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(10,12,24,0.94) 0%, rgba(30,35,71,0.82) 60%, rgba(48,54,92,0.65) 100%)' }}
        />
        <div className="absolute inset-0 noise-bg" />

        {/* Top badges */}
        <div className="absolute top-24 left-4 lg:left-20 z-10 flex flex-wrap gap-3">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-brand-gold font-mono-label text-[11px] tracking-wider"
            style={{ background: 'rgba(248,217,34,0.12)', border: '1px solid rgba(248,217,34,0.40)' }}
          >
            <CheckCircle size={13} /> ISO Certified Training Provider
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-brand-gold font-mono-label text-[11px] tracking-wider"
            style={{ background: 'rgba(248,217,34,0.12)', border: '1px solid rgba(248,217,34,0.40)' }}
          >
            <CheckCircle size={13} /> BNSP Accredited
          </motion.span>
        </div>

        <div className="container mx-auto px-6 lg:px-20 relative z-10 pt-32 pb-20 lg:pt-20">
          <div className="flex flex-col lg:flex-row items-center gap-16 min-h-[80vh] lg:justify-between">
            {/* Left content */}
            <motion.div
              className="flex-1 max-w-[620px] flex flex-col gap-6 mt-10 lg:mt-16"
              {...fadeInUp}
            >
              <p className="text-label text-brand-gold text-[11px] tracking-[0.15em]">
                CERTIFIED ENGINEERING SOLUTIONS
              </p>

              <h1 className="font-display leading-none" style={{ fontSize: 'clamp(52px, 7vw, 92px)', letterSpacing: '0.02em' }}>
                <span className="text-[#F5F6FA]" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
                  Engineering
                </span>
                <br />
                <span className="text-brand-gold" style={{ textShadow: '0 0 20px rgba(248,217,34,0.3)' }}>
                  Excellence For
                </span>
                <br />
                <span className="text-[#F5F6FA]" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
                  Industrial Performance
                </span>
              </h1>

              <div className="w-16 h-[3px] rounded-full" style={{ background: 'linear-gradient(90deg, #F8D922, transparent)' }} />

              <p className="font-body text-[17px] leading-[1.75] max-w-[520px]" style={{ color: '#B8BCDA' }}>
                Professional training programs and technical consultation for
                manufacturing, energy, and oil & gas sectors — backed by
                academic expertise and 15+ years of industry experience.
              </p>

              <div className="flex flex-wrap gap-2">
                {industryTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-md font-body text-[13px]"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: '#9BA3C4' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/services/training"
                  className="inline-flex items-center gap-2 px-7 py-3.5 font-body font-bold text-[15px] rounded-lg transition-all duration-250 hover:-translate-y-0.5"
                  style={{ background: '#F8D922', color: '#0D0F1A', letterSpacing: '0.02em' }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#FFE84D'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(248,217,34,0.35)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = '#F8D922'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  Explore Training <ArrowRight size={18} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 font-body font-semibold text-[15px] rounded-lg transition-all duration-250 hover:-translate-y-0.5"
                  style={{ background: 'transparent', color: '#F5F6FA', border: '1.5px solid rgba(245,246,250,0.35)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#F8D922'; e.currentTarget.style.color = '#F8D922'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(245,246,250,0.35)'; e.currentTarget.style.color = '#F5F6FA'; }}
                >
                  Request Consultation
                </Link>
              </div>

              <div className="flex items-center gap-5 pt-2" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <span className="font-mono-label text-[10px] tracking-[0.12em] whitespace-nowrap" style={{ color: '#6B7299' }}>TRUSTED BY:</span>
                <div className="flex flex-wrap gap-6">
                  {clientLogos.map((name) => (
                    <span
                      key={name}
                      className="font-heading font-bold text-sm tracking-wider transition-colors cursor-default"
                      style={{ color: '#7A82A8' }}
                      onMouseEnter={(e) => { (e.target as HTMLSpanElement).style.color = '#F5F6FA'; }}
                      onMouseLeave={(e) => { (e.target as HTMLSpanElement).style.color = '#7A82A8'; }}
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right stat cards */}
            <motion.div
              className="hidden lg:flex flex-col gap-4 min-w-[250px]"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {[
                { num: "150+", label: "Industrial Clients" },
                { num: "300+", label: "Projects Completed" },
                { num: "15+", label: "Years of Excellence" },
                { num: "80+", label: "Training Programs" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="rounded-xl px-7 py-5 flex flex-col gap-1 transition-all duration-250 cursor-default"
                  style={{
                    background: 'rgba(28,32,64,0.75)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(248,217,34,0.18)',
                  }}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{
                    x: -4,
                    background: 'rgba(48,54,92,0.85)',
                    borderColor: 'rgba(248,217,34,0.45)',
                  }}
                >
                  <span className="font-display text-[42px] leading-none text-brand-gold tracking-wide">{stat.num}</span>
                  <span className="font-body text-sm" style={{ color: '#9BA3C4' }}>{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Mobile stats row */}
            <div className="flex flex-wrap gap-3 lg:hidden w-full">
              {[
                { num: "150+", label: "Clients" },
                { num: "300+", label: "Projects" },
                { num: "15+", label: "Years" },
                { num: "80+", label: "Programs" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex-1 min-w-[140px] rounded-xl px-5 py-4 flex flex-col gap-1"
                  style={{
                    background: 'rgba(28,32,64,0.75)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(248,217,34,0.18)',
                  }}
                >
                  <span className="font-display text-3xl text-brand-gold">{stat.num}</span>
                  <span className="font-body text-xs" style={{ color: '#9BA3C4' }}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* THE PROBLEM WE SOLVE */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1920&q=80')` }} />
        <div className="absolute inset-0 bg-brand-navy-dark/95" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <SectionLabel>Why Companies Choose Us</SectionLabel>
            <h2 className="text-section-heading text-brand-text-primary">
              The Challenges. <span className="text-brand-gold">The Solutions.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            <motion.div {...fadeInUp} className="glass-card rounded-xl p-8">
              <h3 className="text-card-title text-brand-text-primary mb-6">Industry Challenges</h3>
              <ul className="space-y-4">
                {[
                  "Inefficient workforce lacking technical competency",
                  "Outdated maintenance practices causing downtime",
                  "No access to certified engineering expertise",
                  "High operational costs from equipment failures",
                  "Difficulty meeting industry safety standards",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-brand-text-secondary">
                    <XCircle size={20} className="text-destructive shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div {...fadeInUp} className="glass-card-strong rounded-xl p-8 border-brand-gold/20">
              <h3 className="text-card-title text-brand-gold mb-6">Our Solutions</h3>
              <ul className="space-y-4">
                {[
                  "Certified training programs aligned with industry standards",
                  "Practical, hands-on technical skill development",
                  "Access to 50+ expert engineers and academics",
                  "Proven consultation methodology used by 80+ companies",
                  "BNSP-certified instructors and quality-assured programs",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-brand-text-primary">
                    <CheckCircle size={20} className="text-brand-gold shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div {...fadeInUp} className="text-center">
            <Link to="/services/training" className="inline-flex items-center gap-2 px-7 py-3.5 gold-gradient text-brand-navy font-heading font-bold rounded-lg hover:shadow-xl hover:shadow-brand-gold/25 transition-all">
              See How We Help <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="section-padding bg-brand-navy-deep">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <SectionLabel>Our Methodology</SectionLabel>
            <h2 className="text-section-heading text-brand-text-primary">
              A Proven <span className="text-brand-gold">4-Step Process</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto relative">
            <div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-brand-gold/20 via-brand-gold/40 to-brand-gold/20" />
            {[
              { num: "01", title: "ASSESS", desc: "Understand your specific needs, challenges, and objectives through thorough assessment", icon: SearchIcon },
              { num: "02", title: "DESIGN", desc: "Customized program or consultation plan tailored to your requirements and standards", icon: Target },
              { num: "03", title: "DELIVER", desc: "Expert-led execution with hands-on practical application and real industry scenarios", icon: Lightbulb },
              { num: "04", title: "SUPPORT", desc: "Ongoing technical assistance, follow-up evaluation, and continuous improvement support", icon: HeadphonesIcon },
            ].map((step, i) => (
              <motion.div key={i} {...fadeInUp} transition={{ duration: 0.6, delay: i * 0.15 }} className="text-center relative z-10">
                <div className="w-20 h-20 rounded-full gold-gradient flex items-center justify-center mx-auto mb-5 shadow-lg shadow-brand-gold/20">
                  <span className="font-display text-3xl text-brand-navy">{step.num}</span>
                </div>
                <h3 className="font-heading font-bold text-brand-gold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-brand-text-secondary leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR SERVICES */}
      <section className="section-padding bg-[hsl(228,22%,96%)]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <SectionLabel className="text-brand-navy">What We Offer</SectionLabel>
            <h2 className="text-section-heading text-foreground">
              Comprehensive Engineering Solutions
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: GraduationCap,
                title: "Training Programs",
                desc: "Industry-focused training designed to improve performance, reliability, and efficiency across mechanical engineering disciplines.",
                details: ["Available in: Public Class | Inhouse | Online", "Duration: 1–5 Days per program", "Certification: BNSP / Company Certificate"],
                outcomes: ["Maintenance Management", "Rotating Equipment", "Piping & Safety", "Reliability Engineering"],
                link: "/services/training",
                cta: "Browse 20+ Training Programs →",
              },
              {
                icon: Wrench,
                title: "Technical Consultation",
                desc: "Expert engineering consultation covering feasibility studies, asset management, MEP design, and quality compliance.",
                details: ["Clients served: 80+ industrial companies", "Standards: ASME, API, ISO, SNI compliant", "Industries: Oil & Gas, Power, Manufacturing"],
                outcomes: ["Feasibility Study", "Assessment & Testing", "Asset Management", "MEP Consulting"],
                link: "/services/consultancies",
                cta: "View All Consultation Services →",
              },
              {
                icon: Shield,
                title: "Other Services",
                desc: "Specialized engineering solutions including inspection, NDT, reliability engineering, and technical documentation.",
                details: ["Technical Documentation & Code Advisory", "Equipment Procurement Support", "Plant Condition Assessment"],
                outcomes: ["Mechanical Inspection & NDT", "Reliability Engineering & RCM", "Code & Standard Advisory"],
                link: "/services/other",
                cta: "Explore Specialized Services →",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-card rounded-xl p-8 border-t-4 border-brand-gold shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-lg bg-brand-navy flex items-center justify-center mb-5">
                  <service.icon size={24} className="text-brand-gold" />
                </div>
                <h3 className="text-card-title text-foreground mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.desc}</p>
                <ul className="space-y-1.5 mb-4">
                  {service.details.map((d, j) => (
                    <li key={j} className="text-xs text-muted-foreground">{d}</li>
                  ))}
                </ul>
                <ul className="space-y-2 mb-6">
                  {service.outcomes.map((o, j) => (
                    <li key={j} className="flex gap-2 text-sm text-foreground">
                      <CheckCircle size={16} className="text-brand-gold shrink-0 mt-0.5" />
                      {o}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-2 text-sm font-heading font-bold text-brand-navy group-hover:text-brand-gold transition-colors"
                >
                  {service.cta} <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRY SECTORS */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920&q=90')` }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(13,15,26,0.88) 0%, rgba(20,23,38,0.82) 100%)' }} />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <SectionLabel>Industries We Serve</SectionLabel>
            <h2 className="text-section-heading text-brand-text-primary" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
              Trusted Across <span className="text-brand-gold">Key Sectors</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Factory, name: "Manufacturing", services: ["Production line optimization", "Equipment maintenance", "Quality systems"] },
              { icon: Zap, name: "Power & Energy", services: ["Power plant systems", "Turbine maintenance", "Energy efficiency"] },
              { icon: Droplets, name: "Oil & Gas", services: ["Refinery operations", "Pipeline integrity", "Process safety"] },
              { icon: Building2, name: "Construction", services: ["Structural assessment", "MEP systems", "Building automation"] },
              { icon: Ship, name: "Marine & Offshore", services: ["Ship systems", "Offshore equipment", "Corrosion management"] },
              { icon: Hospital, name: "Infrastructure", services: ["Building MEP", "Facility management", "Asset lifecycle"] },
            ].map((sector, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-xl p-8 hover:-translate-y-1 transition-all duration-300 group"
                style={{
                  background: 'rgba(28, 32, 64, 0.92)',
                  backdropFilter: 'blur(4px)',
                  border: '1px solid rgba(248, 217, 34, 0.35)',
                  borderRadius: '12px',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.background = 'rgba(48, 54, 92, 0.95)';
                  el.style.borderColor = 'rgba(248, 217, 34, 0.75)';
                  el.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.4)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.background = 'rgba(28, 32, 64, 0.92)';
                  el.style.borderColor = 'rgba(248, 217, 34, 0.35)';
                  el.style.boxShadow = 'none';
                }}
              >
                <div className="w-12 h-12 rounded-lg bg-brand-gold/10 flex items-center justify-center mb-4">
                  <sector.icon size={28} className="text-brand-gold" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-3 group-hover:text-brand-gold transition-colors" style={{ color: '#F5F6FA' }}>{sector.name}</h3>
                <ul className="space-y-2">
                  {sector.services.map((s, j) => (
                    <li key={j} className="flex gap-2 text-[15px]" style={{ color: '#C8CCE0', lineHeight: 1.6 }}>
                      <CheckCircle size={14} className="text-brand-gold shrink-0 mt-1" />{s}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED TRAINING PROGRAMS */}
      <section className="section-padding bg-[hsl(228,22%,96%)]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <SectionLabel className="text-brand-navy">Featured Programs</SectionLabel>
            <h2 className="text-section-heading text-foreground">
              Popular <span className="text-brand-gold">Training Programs</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Vibration Analysis & Predictive Maintenance",
                image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80",
                category: "Maintenance Management", duration: "3 Days", level: "Advanced", format: "Hybrid",
                desc: "Master vibration measurement, analysis techniques, and predictive maintenance planning for industrial rotating equipment.",
              },
              {
                title: "Rotating Equipment: Pumps, Compressors & Turbines",
                image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80",
                category: "Maintenance Management", duration: "4 Days", level: "Intermediate", format: "On-site",
                desc: "In-depth training on operation, maintenance, and troubleshooting of rotating machinery in industrial plants.",
              },
              {
                title: "Reliability Centered Maintenance (RCM)",
                image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80",
                category: "Maintenance Management", duration: "3 Days", level: "Advanced", format: "Hybrid",
                desc: "Systematic approach to developing effective maintenance strategy for critical assets and equipment.",
              },
              {
                title: "Piping Engineering & Design",
                image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80",
                category: "Technical Training", duration: "5 Days", level: "Intermediate", format: "Classroom",
                desc: "Comprehensive piping system engineering aligned with ASME B31.3 standards and API codes.",
              },
              {
                title: "Plant Integrity Management",
                image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=600&q=80",
                category: "Technical Training", duration: "2 Days", level: "Advanced", format: "On-site",
                desc: "Risk-based inspection planning and asset integrity management for industrial plants and process facilities.",
              },
              {
                title: "HAZOP & Process Safety Management",
                image: "https://images.unsplash.com/photo-1607688387751-c1e95ae09a42?w=600&q=80",
                category: "Industrial Engineering", duration: "3 Days", level: "Intermediate", format: "Classroom",
                desc: "Hazard and operability study methodology for process safety risk identification and mitigation.",
              },
            ].map((training, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="h-48 overflow-hidden relative">
                  <img src={training.image} alt={training.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-brand-navy/90 text-brand-gold text-xs font-mono-label">{training.category}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-foreground mb-2 group-hover:text-brand-gold transition-colors">{training.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">{training.desc}</p>
                  <div className="flex flex-wrap gap-3 mb-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Clock size={12} className="text-brand-gold" />{training.duration}</span>
                    <span className="flex items-center gap-1"><BarChart3 size={12} className="text-brand-gold" />{training.level}</span>
                    <span className="flex items-center gap-1"><Users size={12} className="text-brand-gold" />{training.format}</span>
                  </div>
                  <Link to="/services/training" className="inline-flex items-center gap-2 text-sm font-heading font-bold text-brand-navy group-hover:text-brand-gold transition-colors">
                    View Details <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MILESTONES */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&q=80')` }} />
        <div className="absolute inset-0 bg-brand-navy-dark/90" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <SectionLabel>Our Milestones</SectionLabel>
            <h2 className="text-section-heading text-brand-text-primary">
              Numbers That <span className="text-brand-gold">Speak</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <AnimatedCounter end={150} label="Clients Served" />
            <AnimatedCounter end={300} label="Projects Delivered" />
            <AnimatedCounter end={80} label="Trainings Delivered" />
            <AnimatedCounter end={50} label="Experts Available" />
            <AnimatedCounter end={15} label="Years Experience" />
            <AnimatedCounter end={500} label="Participants Trained" />
          </div>

          <motion.div {...fadeInUp} className="text-center mt-12">
            <p className="text-brand-text-secondary italic max-w-2xl mx-auto">
              "Our track record speaks through the performance improvements our clients achieve after every engagement."
            </p>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-padding bg-brand-navy-deep">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <SectionLabel>Testimonials</SectionLabel>
            <h2 className="text-section-heading text-brand-text-primary">
              Trusted by <span className="text-brand-gold">Industry Leaders</span>
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-10 mb-16">
            {clientLogos.map((name) => (
              <span key={name} className="font-heading font-bold text-2xl text-brand-text-secondary/30 tracking-widest">{name}</span>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
            {[
              {
                quote: "The vibration analysis training completely transformed how our maintenance team approaches predictive maintenance. Equipment downtime reduced by 40% within 3 months.",
                name: "Ir. Budi Santoso",
                company: "PT Pertamina Refinery",
                role: "Maintenance Manager",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face",
              },
              {
                quote: "CSU's feasibility study for our new compressor station was thorough, technically sound, and delivered ahead of schedule. Highly recommended for any oil & gas project.",
                name: "Ahmad Fauzi",
                company: "PT PLN (Persero)",
                role: "Project Director",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
              },
              {
                quote: "The RCM training gave our team a structured framework that we immediately applied to our critical assets. The ROI was evident within the first quarter.",
                name: "Dr. Hendra Kusuma",
                company: "PT Astra Manufacturing",
                role: "Reliability Engineer",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
              },
            ].map((t, i) => (
              <motion.div key={i} {...fadeInUp} transition={{ duration: 0.6, delay: i * 0.15 }} className="glass-card rounded-xl p-8">
                <Quote size={28} className="text-brand-gold mb-4" />
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-brand-gold text-sm">★</span>
                  ))}
                </div>
                <p className="text-brand-text-secondary text-sm leading-relaxed mb-6">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="font-heading font-bold text-brand-text-primary">{t.name}</p>
                    <p className="text-xs text-brand-text-secondary">{t.role}, {t.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                quote: "Excellent consultation on our HVAC system design. The team's expertise in MEP engineering saved us significant redesign costs.",
                name: "Ir. Sari Dewi",
                company: "PT Toyota Manufacturing Indonesia",
                role: "Facility Manager",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face",
              },
              {
                quote: "Professional, knowledgeable, and committed. The inhouse training delivered at our plant was customized perfectly for our specific equipment and challenges.",
                name: "Reza Pratama",
                company: "PT Total Energies Indonesia",
                role: "Operations Manager",
                image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face",
              },
            ].map((t, i) => (
              <motion.div key={i} {...fadeInUp} transition={{ duration: 0.6, delay: i * 0.15 }} className="glass-card rounded-xl p-8">
                <Quote size={28} className="text-brand-gold mb-4" />
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-brand-gold text-sm">★</span>
                  ))}
                </div>
                <p className="text-brand-text-secondary text-sm leading-relaxed mb-6">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="font-heading font-bold text-brand-text-primary">{t.name}</p>
                    <p className="text-xs text-brand-text-secondary">{t.role}, {t.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LATEST INSIGHTS */}
      <section className="section-padding bg-[hsl(228,22%,96%)]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <SectionLabel className="text-brand-navy">Latest Insights</SectionLabel>
            <h2 className="text-section-heading text-foreground">
              Engineering <span className="text-brand-gold">Knowledge Hub</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "5 Signs Your Rotating Equipment Needs Immediate Attention",
                image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
                category: "Maintenance Tips",
                date: "March 15, 2025",
                excerpt: "Early detection of equipment failure can save millions in unplanned downtime. Learn the critical warning signs every maintenance engineer should know.",
              },
              {
                title: "Why RCM is Becoming Standard Practice in Oil & Gas",
                image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600&q=80",
                category: "Industry Insights",
                date: "February 28, 2025",
                excerpt: "Reliability Centered Maintenance is transforming how oil & gas companies approach asset management. Discover the key drivers behind this shift.",
              },
              {
                title: "How to Choose the Right Engineering Training Program",
                image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80",
                category: "Training Guide",
                date: "February 10, 2025",
                excerpt: "Selecting the right training program for your engineering team requires careful consideration of objectives, delivery format, and certification needs.",
              },
            ].map((article, i) => (
              <motion.div key={i} {...fadeInUp} transition={{ duration: 0.5, delay: i * 0.15 }} className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
                <div className="h-48 overflow-hidden">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-mono-label text-brand-gold bg-brand-gold/10 px-2 py-0.5 rounded">{article.category}</span>
                    <span className="text-xs text-muted-foreground">{article.date}</span>
                  </div>
                  <h3 className="font-heading font-bold text-foreground mb-2 group-hover:text-brand-gold transition-colors">{article.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">{article.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-heading font-bold text-brand-navy group-hover:text-brand-gold transition-colors cursor-pointer">
                    Read More <ArrowRight size={14} />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-brand-navy" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(248,217,34,0.1) 30px, rgba(248,217,34,0.1) 31px)` }} />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-section-heading text-brand-text-primary mb-4">
              Ready to Strengthen Your<br />
              <span className="text-brand-gold">Engineering Team?</span>
            </h2>
            <p className="text-brand-text-secondary max-w-2xl mx-auto mb-8">
              Contact our team to discuss training programs or technical consultation tailored to your needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/services/training" className="inline-flex items-center gap-2 px-7 py-3.5 gold-gradient text-brand-navy font-heading font-bold rounded-lg hover:shadow-xl hover:shadow-brand-gold/25 transition-all">
                Explore Training <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-brand-text-primary/30 text-brand-text-primary font-heading font-bold rounded-lg hover:border-brand-gold hover:text-brand-gold transition-all">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
