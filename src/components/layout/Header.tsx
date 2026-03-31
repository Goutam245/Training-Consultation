import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../Logo";

const navLinks = [
  { label: "Home", path: "/" },
  {
    label: "About",
    path: "/about",
    children: [
      { label: "About Us", path: "/about" },
      { label: "Vision & Mission", path: "/about" },
      { label: "Management Team", path: "/about/management" },
      { label: "Our Experts", path: "/about/experts" },
    ],
  },
  {
    label: "Services",
    path: "/services/training",
    mega: true,
    columns: [
      {
        title: "Training Programs",
        items: [
          { label: "List All Trainings", path: "/services/training" },
          { label: "Maintenance Management", path: "/services/training" },
          { label: "Technical Training", path: "/services/training" },
          { label: "Building Management", path: "/services/training" },
          { label: "Inhouse Training", path: "/services/training" },
        ],
      },
      {
        title: "Consultation",
        items: [
          { label: "List Consultancies", path: "/services/consultancies" },
          { label: "Engineering Analysis", path: "/services/consultancies" },
          { label: "System Design", path: "/services/consultancies" },
          { label: "Asset Management", path: "/services/consultancies" },
          { label: "MEP Consulting", path: "/services/consultancies" },
        ],
      },
      {
        title: "Other Services",
        items: [
          { label: "Technical Documentation", path: "/services/other" },
          { label: "Inspection & NDT", path: "/services/other" },
          { label: "Reliability Engineering", path: "/services/other" },
          { label: "Equipment Procurement", path: "/services/other" },
          { label: "Code & Standard Advisory", path: "/services/other" },
        ],
      },
    ],
  },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-navy-dark/95 backdrop-blur-md shadow-lg border-b border-brand-gold/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-3">
            <Logo size={36} />
            <span className="font-heading font-bold text-brand-text-primary text-sm md:text-base tracking-wide hidden sm:block">
              CSU MECHANICAL<br className="hidden md:block" /> ENGINEERING
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => (link.children || link.mega) && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={link.path}
                  className={`px-4 py-2 text-sm font-body font-medium transition-colors flex items-center gap-1 ${
                    location.pathname === link.path || location.pathname.startsWith(link.path + "/")
                      ? "text-brand-gold"
                      : "text-brand-text-primary hover:text-brand-gold"
                  }`}
                >
                  {link.label}
                  {(link.children || link.mega) && <ChevronDown size={14} />}
                </Link>

                {/* Standard dropdown */}
                {link.children && !link.mega && openDropdown === link.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 mt-1 bg-brand-navy-deep/95 backdrop-blur-md border border-brand-gold/15 rounded-lg shadow-xl min-w-[200px] py-2"
                  >
                    {link.children.map((child) => (
                      <Link key={child.path + child.label} to={child.path} className="block px-4 py-2.5 text-sm text-brand-text-secondary hover:text-brand-gold hover:bg-brand-gold/5 transition-colors">
                        {child.label}
                      </Link>
                    ))}
                  </motion.div>
                )}

                {/* Mega dropdown */}
                {link.mega && link.columns && openDropdown === link.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full -left-20 mt-1 bg-brand-navy-deep/95 backdrop-blur-md border border-brand-gold/15 rounded-lg shadow-xl py-6 px-8"
                    style={{ width: "600px" }}
                  >
                    <div className="grid grid-cols-3 gap-8">
                      {link.columns.map((col) => (
                        <div key={col.title}>
                          <h4 className="text-label text-brand-gold text-[10px] mb-3">{col.title}</h4>
                          <ul className="space-y-1.5">
                            {col.items.map((item) => (
                              <li key={item.label}>
                                <Link to={item.path} className="block text-sm text-brand-text-secondary hover:text-brand-gold transition-colors py-1">
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/contact" className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 gold-gradient text-brand-navy font-heading font-bold text-sm rounded-lg hover:shadow-lg hover:shadow-brand-gold/20 transition-all">
              Request Consultation →
            </Link>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-brand-text-primary p-2">
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-brand-navy-dark/98 backdrop-blur-xl border-t border-brand-gold/10"
          >
            <nav className="container mx-auto px-4 py-6 space-y-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link to={link.path} className="block px-4 py-3 text-brand-text-primary font-heading font-semibold hover:text-brand-gold transition-colors">
                    {link.label}
                  </Link>
                  {link.children?.map((child) => (
                    <Link key={child.path + child.label} to={child.path} className="block px-8 py-2 text-sm text-brand-text-secondary hover:text-brand-gold transition-colors">
                      {child.label}
                    </Link>
                  ))}
                  {link.mega && link.columns?.map((col) => (
                    col.items.slice(0, 3).map((item) => (
                      <Link key={item.label} to={item.path} className="block px-8 py-2 text-sm text-brand-text-secondary hover:text-brand-gold transition-colors">
                        {item.label}
                      </Link>
                    ))
                  ))}
                </div>
              ))}
              <Link to="/contact" className="block mx-4 mt-4 text-center px-5 py-3 gold-gradient text-brand-navy font-heading font-bold rounded-lg">
                Request Consultation →
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
