import { Link } from "react-router-dom";
import { Linkedin, Instagram, Youtube, Mail, Phone, MapPin, Clock, MessageCircle, Award, Facebook } from "lucide-react";
import Logo from "../Logo";

const Footer = () => {
  return (
    <footer className="bg-brand-navy-dark border-t-2 border-brand-gold/30 noise-bg relative">
      <div className="container mx-auto px-4 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Logo size={40} />
              <span className="font-heading font-bold text-brand-text-primary text-sm">
                CSU MECHANICAL<br />ENGINEERING
              </span>
            </div>
            <p className="text-sm text-brand-text-secondary leading-relaxed mb-4">
              Professional training and engineering consultation for industrial excellence. Serving 150+ companies across Indonesia.
            </p>
            <div className="flex gap-3 mb-4">
              {[Linkedin, Instagram, Youtube, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg bg-brand-surface flex items-center justify-center text-brand-text-secondary hover:text-brand-gold hover:bg-brand-gold/10 transition-all border border-brand-gold/10">
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <div className="flex gap-2">
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-brand-gold/10 text-brand-gold text-[10px] font-mono-label">
                <Award size={10} />BNSP
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-brand-gold/10 text-brand-gold text-[10px] font-mono-label">
                <Award size={10} />ISO 9001
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-label text-brand-gold mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Management Team", path: "/about/management" },
                { label: "Our Experts", path: "/about/experts" },
                { label: "Portfolio", path: "/portfolio" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-brand-text-secondary hover:text-brand-gold transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-label text-brand-gold mb-5">Services</h4>
            <ul className="space-y-3">
              {[
                { label: "Training Programs", path: "/services/training" },
                { label: "Maintenance Management", path: "/services/training" },
                { label: "Technical Training", path: "/services/training" },
                { label: "Engineering Consultation", path: "/services/consultancies" },
                { label: "Feasibility Study", path: "/services/consultancies" },
                { label: "Other Services", path: "/services/other" },
              ].map((link, i) => (
                <li key={i}>
                  <Link to={link.path} className="text-sm text-brand-text-secondary hover:text-brand-gold transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-label text-brand-gold mb-5">Contact Info</h4>
            <ul className="space-y-4 text-sm text-brand-text-secondary">
              <li className="flex gap-3">
                <MapPin size={16} className="text-brand-gold shrink-0 mt-0.5" />
                <span>Jl. Teknik Mesin No. 1, Jakarta Selatan</span>
              </li>
              <li className="flex gap-3">
                <Mail size={16} className="text-brand-gold shrink-0 mt-0.5" />
                <span>info@csumechanical.com</span>
              </li>
              <li className="flex gap-3">
                <Phone size={16} className="text-brand-gold shrink-0 mt-0.5" />
                <span>+62 21 1234 5678</span>
              </li>
              <li className="flex gap-3">
                <MessageCircle size={16} className="text-brand-gold shrink-0 mt-0.5" />
                <span>+62 812 3456 7890 (WhatsApp)</span>
              </li>
              <li className="flex gap-3">
                <Clock size={16} className="text-brand-gold shrink-0 mt-0.5" />
                <span>Mon–Fri: 08:00–16:00 WIB</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-brand-gold/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-text-secondary">
          <span>© {new Date().getFullYear()} CSU Mechanical Engineering. All rights reserved.</span>
          <div className="flex gap-4">
            <span className="hover:text-brand-gold cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-brand-gold cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-brand-gold cursor-pointer transition-colors">Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
