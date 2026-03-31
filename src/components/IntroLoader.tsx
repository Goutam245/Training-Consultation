import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const IntroLoader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [showText, setShowText] = useState(false);
  const companyName = "CSU MECHANICAL ENGINEERING";

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 600);
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    const completeTimer = setTimeout(() => onComplete(), 2800);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-brand-navy-dark"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Logo size={80} />
        </motion.div>

        {showText && (
          <motion.div
            className="mt-6 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-label text-brand-gold tracking-[0.2em] text-sm">
              {companyName.split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.04 }}
                >
                  {char}
                </motion.span>
              ))}
            </p>
          </motion.div>
        )}

        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-surface">
          <motion.div
            className="h-full gold-gradient"
            style={{ width: `${progress}%` }}
            transition={{ ease: "linear" }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default IntroLoader;
