import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, Target, Heart, Award, Users, Lightbulb, Handshake, TrendingUp, CheckCircle } from "lucide-react";
import SectionLabel from "../components/SectionLabel";
import AnimatedCounter from "../components/AnimatedCounter";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const About = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80')` }} />
        <div className="absolute inset-0 dark-overlay" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <SectionLabel>About Us</SectionLabel>
          <h1 className="text-display text-brand-text-primary mb-4">About CSU<br /><span className="text-brand-gold">Mechanical Engineering</span></h1>
          <p className="text-lg text-brand-text-secondary max-w-2xl">
            A mechanical engineering–based service unit providing professional training programs and technical consultation for industrial sectors across Indonesia.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-brand-navy-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeInUp} className="mb-12">
              <SectionLabel>Our Story</SectionLabel>
              <h2 className="text-section-heading text-brand-text-primary mb-6">Building Engineering Excellence Since 2009</h2>
              <p className="text-brand-text-secondary leading-relaxed mb-4">
                Founded within the prestigious Mechanical Engineering Department, CSU Mechanical Engineering has grown from an academic initiative into a full-service engineering consultancy and training provider. Our foundation in academic rigor, combined with deep industry partnerships, gives us a unique edge in delivering solutions that are both theoretically sound and practically applicable.
              </p>
              <p className="text-brand-text-secondary leading-relaxed">
                With over 15 years of experience, we've trained more than 150 companies and completed 300+ projects across Indonesia's most critical industrial sectors — from oil & gas refineries to power generation plants, manufacturing facilities to infrastructure projects. Our team of 50+ expert engineers and certified instructors bring decades of combined experience to every engagement.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <AnimatedCounter end={2009} suffix="" label="Year Established" />
              <AnimatedCounter end={50} label="Expert Staff" />
              <AnimatedCounter end={80} label="Certified Programs" />
              <AnimatedCounter end={150} label="Clients Served" />
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
            <motion.div {...fadeInUp} className="glass-card-strong rounded-xl p-8">
              <div className="w-12 h-12 rounded-lg bg-brand-gold/10 flex items-center justify-center mb-5">
                <Eye size={24} className="text-brand-gold" />
              </div>
              <h2 className="text-card-title text-brand-gold mb-3">Our Vision</h2>
              <p className="text-brand-text-secondary leading-relaxed italic">
                "To become the leading engineering training and consultation center in Southeast Asia, delivering excellence through academic expertise and industry partnership."
              </p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.15 }} className="rounded-xl p-8 gold-gradient text-brand-navy">
              <div className="w-12 h-12 rounded-lg bg-brand-navy/20 flex items-center justify-center mb-5">
                <Target size={24} className="text-brand-navy" />
              </div>
              <h2 className="text-card-title text-brand-navy mb-3">Our Mission</h2>
              <ul className="space-y-3 text-brand-navy/80 text-sm leading-relaxed">
                <li className="flex gap-2"><CheckCircle size={16} className="shrink-0 mt-0.5" />Provide certified, industry-relevant training programs</li>
                <li className="flex gap-2"><CheckCircle size={16} className="shrink-0 mt-0.5" />Deliver practical engineering consultation solutions</li>
                <li className="flex gap-2"><CheckCircle size={16} className="shrink-0 mt-0.5" />Build partnerships with industry leaders and institutions</li>
                <li className="flex gap-2"><CheckCircle size={16} className="shrink-0 mt-0.5" />Continuously develop engineering talent for Indonesia's industrial sector</li>
                <li className="flex gap-2"><CheckCircle size={16} className="shrink-0 mt-0.5" />Uphold the highest standards of technical quality and integrity</li>
              </ul>
            </motion.div>
          </div>

          {/* Core Values */}
          <div className="mb-20">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <SectionLabel>Core Values</SectionLabel>
              <h2 className="text-section-heading text-brand-text-primary">What Drives Us</h2>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
              {[
                { icon: Award, label: "Excellence", desc: "Highest quality in everything" },
                { icon: Heart, label: "Integrity", desc: "Transparent practices" },
                { icon: Lightbulb, label: "Innovation", desc: "Creative solutions for every challenge" },
                { icon: Users, label: "Professionalism", desc: "Industry-grade standards" },
                { icon: TrendingUp, label: "Development", desc: "Continuous learning culture" },
                { icon: Handshake, label: "Partnership", desc: "Strong client & academic ties" },
              ].map((val, i) => (
                <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.08 }} className="glass-card rounded-xl p-5 text-center hover:border-brand-gold/30 transition-all">
                  <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center mx-auto mb-3">
                    <val.icon size={20} className="text-brand-gold" />
                  </div>
                  <h3 className="font-heading font-bold text-brand-text-primary text-sm mb-1">{val.label}</h3>
                  <p className="text-xs text-brand-text-secondary">{val.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Company Timeline */}
          <div>
            <motion.div {...fadeInUp} className="text-center mb-12">
              <SectionLabel>Our Journey</SectionLabel>
              <h2 className="text-section-heading text-brand-text-primary">Company <span className="text-brand-gold">History</span></h2>
            </motion.div>
            <div className="max-w-3xl mx-auto space-y-0 relative">
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-brand-gold/20 -translate-x-1/2" />
              {[
                { year: "2009", event: "Founded as engineering unit within university" },
                { year: "2012", event: "First corporate training program delivered to PT PLN" },
                { year: "2015", event: "Expanded consultation services to oil & gas sector" },
                { year: "2018", event: "Achieved BNSP certification for training programs" },
                { year: "2020", event: "Launched online training platform" },
                { year: "2023", event: "Reached 150+ corporate clients milestone" },
                { year: "2025", event: "Expanding to regional Southeast Asia market" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  {...fadeInUp}
                  transition={{ delay: i * 0.1 }}
                  className={`relative flex items-center gap-6 py-4 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"} pl-12 md:pl-0`}>
                    <span className="font-display text-2xl text-brand-gold">{item.year}</span>
                    <p className="text-sm text-brand-text-secondary mt-1">{item.event}</p>
                  </div>
                  <div className="absolute left-6 md:relative md:left-auto w-3 h-3 rounded-full gold-gradient shrink-0 z-10 -translate-x-1/2 md:translate-x-0" />
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-brand-navy-deep">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <SectionLabel>Certifications & Partnerships</SectionLabel>
            <h2 className="text-section-subheading text-brand-text-primary mb-8">Recognized Industry Credentials</h2>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {[
              "BNSP Certified Training Provider",
              "ISO 9001:2015 Quality Management",
              "State University Partnership",
              "Indonesian Engineers Association (PII)",
              "ASME Indonesia Chapter",
            ].map((cert, i) => (
              <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.1 }} className="glass-card rounded-xl px-6 py-4 text-center">
                <Award size={24} className="text-brand-gold mx-auto mb-2" />
                <p className="text-sm text-brand-text-secondary font-heading font-semibold">{cert}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation to sub-pages */}
      <section className="section-padding bg-brand-navy-dark">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-section-subheading text-brand-text-primary mb-8">Meet Our Team</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/about/management" className="px-7 py-3.5 gold-gradient text-brand-navy font-heading font-bold rounded-lg hover:shadow-xl hover:shadow-brand-gold/25 transition-all">
              Management Team
            </Link>
            <Link to="/about/experts" className="px-7 py-3.5 border-2 border-brand-gold/30 text-brand-gold font-heading font-bold rounded-lg hover:bg-brand-gold/10 transition-all">
              Our Experts
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
