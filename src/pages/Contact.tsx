import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock, MessageCircle, Linkedin, Instagram, Youtube, ArrowRight, Globe, ChevronDown, Send, Facebook } from "lucide-react";
import SectionLabel from "../components/SectionLabel";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const faqItems = [
  { q: "How do I register for a training program?", a: "Contact us via WhatsApp, email, or the form above. Our team will send you the registration form and payment details within 1 business day." },
  { q: "Can training be conducted at our company location?", a: "Yes! We offer inhouse training that we deliver directly at your facility, customized to your specific equipment and operational context." },
  { q: "What certification do participants receive?", a: "Participants receive a certificate of completion from CSU Mechanical Engineering. For BNSP-certified programs, participants also receive a national competency certificate." },
  { q: "How long does a consultation project typically take?", a: "Project timelines vary by scope. A feasibility study typically takes 30–60 days. An assessment project may take 1–2 weeks. We provide detailed timelines in our proposal." },
  { q: "Do you serve clients outside of Jakarta?", a: "Yes, we serve clients across Indonesia and are expanding to other Southeast Asian countries. Travel and mobilization costs are included in the project proposal." },
];

const Contact = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", company: "", email: "", phone: "", subject: "", message: "" });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.company.trim()) errors.company = "Company is required";
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = "Valid email is required";
    if (!formData.message.trim()) errors.message = "Message is required";
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      // Form submission logic here
    }
  };

  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80')` }} />
        <div className="absolute inset-0 dark-overlay" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <p className="text-sm text-brand-text-secondary mb-2"><Link to="/" className="hover:text-brand-gold">Home</Link> / Contact</p>
          <h1 className="text-display text-brand-text-primary mb-4">Get In <span className="text-brand-gold">Touch</span></h1>
          <p className="text-lg text-brand-text-secondary max-w-2xl mb-4">Our team of engineering experts is ready to help you with training, consultation, or any technical inquiry.</p>
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-brand-gold text-sm">
            <Clock size={14} className="inline mr-2" />Response within 24 hours on business days
          </span>
        </div>
      </section>

      <section className="section-padding bg-brand-navy-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1fr_300px] gap-10">
            {/* Contact Info */}
            <motion.div {...fadeInUp} className="glass-card-strong rounded-xl p-8">
              <h2 className="text-card-title text-brand-text-primary mb-6">Contact Information</h2>
              <ul className="space-y-5">
                {[
                  { icon: MapPin, label: "Address", value: "Jl. Teknik Mesin No. 1, Kampus Universitas\nJakarta Selatan, DKI Jakarta 12345, Indonesia" },
                  { icon: Mail, label: "Email", value: "info@csumechanical.com\ntraining@csumechanical.com" },
                  { icon: Phone, label: "Phone", value: "+62 21 1234 5678" },
                  { icon: MessageCircle, label: "WhatsApp", value: "+62 812 3456 7890" },
                  { icon: Clock, label: "Operating Hours", value: "Monday – Friday: 08:00 – 16:00 WIB" },
                  { icon: Globe, label: "Website", value: "www.csumechanical.com" },
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-gold/10 flex items-center justify-center shrink-0">
                      <item.icon size={18} className="text-brand-gold" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-brand-text-primary">{item.label}</p>
                      <p className="text-sm text-brand-text-secondary whitespace-pre-line">{item.value}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="flex gap-3 mt-6">
                {[Linkedin, Instagram, Youtube, Facebook].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-lg bg-brand-surface flex items-center justify-center text-brand-text-secondary hover:text-brand-gold hover:bg-brand-gold/10 transition-all border border-brand-gold/10">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
              <div className="flex flex-col gap-3 mt-6">
                <a href="https://wa.me/6281234567890" className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-success text-success-foreground font-heading font-bold rounded-lg hover:opacity-90 transition-all">
                  <MessageCircle size={18} /> Chat via WhatsApp
                </a>
                <a href="mailto:info@csumechanical.com" className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 border border-brand-gold/30 text-brand-gold font-heading font-bold rounded-lg hover:bg-brand-gold/10 transition-all">
                  <Mail size={18} /> Send Email
                </a>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div {...fadeInUp} transition={{ delay: 0.15 }} className="glass-card rounded-xl overflow-hidden min-h-[400px]">
              <div className="w-full h-full bg-brand-surface flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin size={48} className="text-brand-gold mx-auto mb-4" />
                  <h3 className="font-heading font-bold text-brand-text-primary mb-2">Our Location</h3>
                  <p className="text-sm text-brand-text-secondary">Jl. Teknik Mesin No. 1<br />Jakarta Selatan, DKI Jakarta</p>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 text-sm text-brand-gold font-heading font-bold hover:gap-3 transition-all">
                    Open in Google Maps <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="space-y-6">
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-label text-brand-gold mb-4">Quick Access</h3>
                <div className="space-y-3">
                  <Link to="/services/training" className="block w-full text-center px-4 py-3 border border-brand-gold/30 text-brand-gold text-sm font-heading font-bold rounded-lg hover:bg-brand-gold/10 transition-all">Training Programs</Link>
                  <Link to="/services/consultancies" className="block w-full text-center px-4 py-3 border border-brand-gold/30 text-brand-gold text-sm font-heading font-bold rounded-lg hover:bg-brand-gold/10 transition-all">Consultations</Link>
                </div>
              </div>
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-label text-brand-gold mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {[Linkedin, Instagram, Youtube, Facebook].map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 rounded-lg bg-brand-surface flex items-center justify-center text-brand-text-secondary hover:text-brand-gold hover:bg-brand-gold/10 transition-all border border-brand-gold/10">
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
              <div className="gold-gradient rounded-xl p-6 text-brand-navy">
                <h3 className="font-heading font-bold mb-2">Free Consultation</h3>
                <p className="text-sm opacity-80 mb-4">Get a free initial consultation for your engineering project.</p>
                <Link to="/contact" className="block w-full text-center px-4 py-2.5 bg-brand-navy text-brand-gold text-sm font-heading font-bold rounded-lg hover:opacity-90 transition-all">Book Now</Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-brand-navy-deep">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <SectionLabel>Send Us a Message</SectionLabel>
            <h2 className="text-section-heading text-brand-text-primary">We'd Love to <span className="text-brand-gold">Hear From You</span></h2>
          </motion.div>

          <motion.form {...fadeInUp} onSubmit={handleSubmit} className="max-w-3xl mx-auto glass-card rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm text-brand-text-primary font-semibold mb-2">Full Name *</label>
                <input value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 bg-brand-surface border border-brand-gold/15 rounded-lg text-brand-text-primary placeholder:text-brand-text-secondary/50 focus:outline-none focus:border-brand-gold/40" placeholder="Your full name" />
                {formErrors.name && <p className="text-destructive text-xs mt-1">{formErrors.name}</p>}
              </div>
              <div>
                <label className="block text-sm text-brand-text-primary font-semibold mb-2">Company / Organization *</label>
                <input value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})} className="w-full px-4 py-3 bg-brand-surface border border-brand-gold/15 rounded-lg text-brand-text-primary placeholder:text-brand-text-secondary/50 focus:outline-none focus:border-brand-gold/40" placeholder="Company name" />
                {formErrors.company && <p className="text-destructive text-xs mt-1">{formErrors.company}</p>}
              </div>
              <div>
                <label className="block text-sm text-brand-text-primary font-semibold mb-2">Email Address *</label>
                <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 bg-brand-surface border border-brand-gold/15 rounded-lg text-brand-text-primary placeholder:text-brand-text-secondary/50 focus:outline-none focus:border-brand-gold/40" placeholder="email@company.com" />
                {formErrors.email && <p className="text-destructive text-xs mt-1">{formErrors.email}</p>}
              </div>
              <div>
                <label className="block text-sm text-brand-text-primary font-semibold mb-2">Phone Number</label>
                <input value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 bg-brand-surface border border-brand-gold/15 rounded-lg text-brand-text-primary placeholder:text-brand-text-secondary/50 focus:outline-none focus:border-brand-gold/40" placeholder="+62 812 xxx xxxx" />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm text-brand-text-primary font-semibold mb-2">Subject</label>
              <select value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} className="w-full px-4 py-3 bg-brand-surface border border-brand-gold/15 rounded-lg text-brand-text-primary focus:outline-none focus:border-brand-gold/40">
                <option value="">Select a subject...</option>
                <option>Training Inquiry</option>
                <option>Consultation Request</option>
                <option>Other Services</option>
                <option>General Inquiry</option>
                <option>Partnership</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-sm text-brand-text-primary font-semibold mb-2">Message *</label>
              <textarea value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} rows={5} className="w-full px-4 py-3 bg-brand-surface border border-brand-gold/15 rounded-lg text-brand-text-primary placeholder:text-brand-text-secondary/50 focus:outline-none focus:border-brand-gold/40 resize-none" placeholder="Tell us about your project or inquiry..." />
              {formErrors.message && <p className="text-destructive text-xs mt-1">{formErrors.message}</p>}
            </div>
            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 gold-gradient text-brand-navy font-heading font-bold text-lg rounded-lg hover:shadow-xl hover:shadow-brand-gold/25 transition-all">
              <Send size={18} /> Send Message
            </button>
          </motion.form>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-brand-navy-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="text-section-heading text-brand-text-primary">Frequently Asked <span className="text-brand-gold">Questions</span></h2>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqItems.map((faq, i) => (
              <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.08 }} className="glass-card rounded-xl overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between px-6 py-4 text-left">
                  <span className="font-heading font-bold text-brand-text-primary text-sm pr-4">{faq.q}</span>
                  <ChevronDown size={18} className={`text-brand-gold shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4">
                    <p className="text-sm text-brand-text-secondary leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
