import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, BarChart3, FolderOpen, CheckCircle, Calendar, Download, ArrowRight } from "lucide-react";

const trainingData: Record<string, {
  title: string; category: string; duration: string; level: string;
  description: string; learnings: string[]; outline: string[];
  audience: string[]; schedule: string; fee: string;
}> = {
  "piping-engineering": {
    title: "Piping Engineering & Design",
    category: "Technical Training",
    duration: "4 Days (32 Hours)",
    level: "Intermediate",
    description: "This comprehensive training program covers industrial piping systems aligned with the ASME B31.3 Process Piping Code and relevant API standards, including instrumentation diagrams (P&ID). Participants will gain practical skills in piping stress analysis, material selection, and system design that can be immediately applied in industrial settings.",
    learnings: ["Understand piping stress analysis fundamentals", "Read and interpret P&ID diagrams accurately", "Apply ASME B31.3 standards in real projects", "Select appropriate pipe materials for various services", "Design piping supports and expansion systems"],
    outline: ["Introduction to Piping Systems & Codes", "Pipe Stress Analysis & Load Calculations", "Material Selection & Specifications", "P&ID Reading & Interpretation", "Piping Installation Best Practices", "Corrosion Prevention & Mitigation", "Case Study: Real Plant Piping Design"],
    audience: ["Piping Engineers & Designers", "Mechanical Engineers", "Project Engineers", "Maintenance Engineers", "Plant Supervisors"],
    schedule: "Mon, May 20, 2025",
    fee: "Rp 8.500.000",
  },
};

const defaultTraining = trainingData["piping-engineering"];

const TrainingDetail = () => {
  const { id } = useParams();
  const training = trainingData[id || ""] || defaultTraining;

  return (
    <>
      {/* Header */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-brand-navy-dark" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <p className="text-sm text-brand-text-secondary mb-4">
            <Link to="/" className="hover:text-brand-gold">Home</Link> / <Link to="/services/training" className="hover:text-brand-gold">Training</Link> / {training.title}
          </p>
          <h1 className="text-section-heading text-brand-text-primary mb-4">{training.title}</h1>
          <div className="flex flex-wrap gap-5 text-sm text-brand-text-secondary">
            <span className="flex items-center gap-2"><Clock size={16} className="text-brand-gold" />{training.duration}</span>
            <span className="flex items-center gap-2"><FolderOpen size={16} className="text-brand-gold" />{training.category}</span>
            <span className="flex items-center gap-2"><BarChart3 size={16} className="text-brand-gold" />{training.level}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-brand-navy-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_360px] gap-10">
            {/* Main */}
            <div className="space-y-10">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h2 className="text-section-subheading text-brand-text-primary mb-4">Training Description</h2>
                <p className="text-brand-text-secondary leading-relaxed">{training.description}</p>
              </motion.div>

              <div>
                <h2 className="text-section-subheading text-brand-text-primary mb-4">What You Will Learn</h2>
                <ul className="space-y-3">
                  {training.learnings.map((item, i) => (
                    <li key={i} className="flex gap-3 text-brand-text-secondary">
                      <CheckCircle size={18} className="text-brand-gold shrink-0 mt-0.5" />{item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-section-subheading text-brand-text-primary mb-4">Course Outline</h2>
                <ol className="space-y-3">
                  {training.outline.map((item, i) => (
                    <li key={i} className="flex gap-3 text-brand-text-secondary">
                      <span className="font-mono text-brand-gold text-sm w-6 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                      {item}
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <h2 className="text-section-subheading text-brand-text-primary mb-4">Who Should Attend</h2>
                <ul className="space-y-2">
                  {training.audience.map((item, i) => (
                    <li key={i} className="flex gap-3 text-brand-text-secondary">
                      <CheckCircle size={16} className="text-brand-gold shrink-0 mt-0.5" />{item}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 w-full justify-center px-7 py-4 gold-gradient text-brand-navy font-heading font-bold text-lg rounded-lg hover:shadow-xl hover:shadow-brand-gold/25 transition-all"
              >
                Register Training <ArrowRight size={20} />
              </Link>
            </div>

            {/* Sidebar */}
            <div className="space-y-6 lg:sticky lg:top-24 lg:self-start">
              <div className="glass-card-strong rounded-xl p-6">
                <h3 className="text-card-title text-brand-text-primary mb-4">Next Schedule</h3>
                <div className="flex items-center gap-3 text-brand-text-secondary mb-3">
                  <Calendar size={18} className="text-brand-gold" />
                  <span>{training.schedule}</span>
                </div>
                <div className="text-2xl font-heading font-bold text-brand-gold mb-5">{training.fee}</div>
                <Link
                  to="/contact"
                  className="block w-full text-center px-5 py-3 gold-gradient text-brand-navy font-heading font-bold rounded-lg mb-3 hover:shadow-lg hover:shadow-brand-gold/20 transition-all"
                >
                  Register Now
                </Link>
                <button className="block w-full text-center px-5 py-3 border border-brand-gold/30 text-brand-gold font-heading font-bold rounded-lg hover:bg-brand-gold/10 transition-all">
                  <Download size={16} className="inline mr-2" />Download Brochure
                </button>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-card-title text-brand-text-primary mb-3">Inhouse Option</h3>
                <p className="text-sm text-brand-text-secondary mb-4">
                  Need training for your team? Get customized content tailored to your facility with on-site delivery by expert instructors.
                </p>
                <ul className="space-y-2 mb-5 text-sm text-brand-text-secondary">
                  {["Customized content", "On-site delivery", "Expert instructor", "Flexible schedule"].map((item, i) => (
                    <li key={i} className="flex gap-2"><CheckCircle size={14} className="text-brand-gold shrink-0 mt-0.5" />{item}</li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="block w-full text-center px-5 py-3 border border-brand-gold/30 text-brand-gold font-heading font-bold rounded-lg hover:bg-brand-gold/10 transition-all text-sm"
                >
                  Request Inhouse Training
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrainingDetail;
