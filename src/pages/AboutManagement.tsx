import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import SectionLabel from "../components/SectionLabel";

const team = [
  { name: "Dr. Ir. Ahmad Fauzi, M.T.", role: "Chief Executive Officer", bio: "20+ years in mechanical engineering leadership. Expert in strategic development and industrial partnerships across Indonesia.", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" },
  { name: "Ir. Siti Rahayu, M.Eng.", role: "Chief Operating Officer", bio: "Expert in operational excellence and process optimization with a track record of scaling technical service organizations.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80" },
  { name: "Prof. Dr. Budi Hartono", role: "Director of Engineering", bio: "Professor with 25 years academic and industrial research in mechanical systems, vibration analysis, and reliability.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
  { name: "Dr. Dewi Puspita, M.T.", role: "Director of Training", bio: "Specialist in curriculum development and competency assessment with 15 years in engineering education.", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80" },
  { name: "Ir. Reza Kusuma, M.B.A.", role: "Chief Financial Officer", bio: "Experienced in financial management for engineering enterprises with strong governance and strategic planning skills.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
  { name: "Hendra Pratama, S.T., M.T.", role: "Director of Human Resources", bio: "People development and organizational culture expert focused on building high-performance engineering teams.", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80" },
];

const AboutManagement = () => {
  return (
    <>
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80')` }} />
        <div className="absolute inset-0 dark-overlay" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <p className="text-sm text-brand-text-secondary mb-2">
            <Link to="/" className="hover:text-brand-gold">Home</Link> / <Link to="/about" className="hover:text-brand-gold">About</Link> / Management
          </p>
          <SectionLabel>Our Leadership</SectionLabel>
          <h1 className="text-display text-brand-text-primary">Management <span className="text-brand-gold">Team</span></h1>
          <p className="text-lg text-brand-text-secondary max-w-2xl mt-4">The leadership team driving CSU Mechanical Engineering's mission to deliver excellence in training and consultation.</p>
        </div>
      </section>

      <section className="section-padding bg-brand-navy-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card rounded-xl p-8 text-center hover:border-brand-gold/30 transition-all group"
              >
                <div className="w-28 h-28 rounded-full mx-auto mb-5 overflow-hidden border-2 border-brand-gold/30">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-heading font-bold text-brand-text-primary text-lg group-hover:text-brand-gold transition-colors">{member.name}</h3>
                <p className="text-label text-brand-gold text-[10px] mt-1 mb-3">{member.role}</p>
                <p className="text-sm text-brand-text-secondary leading-relaxed mb-4">{member.bio}</p>
                <a href="#" className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-brand-surface text-brand-text-secondary hover:text-brand-gold hover:bg-brand-gold/10 transition-all border border-brand-gold/10">
                  <Linkedin size={16} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutManagement;
