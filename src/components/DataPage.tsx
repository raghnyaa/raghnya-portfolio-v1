import { motion, useScroll, useTransform } from 'motion/react';
import { Navigation } from './Navigation';
import { CompanyCard } from './CompanyCard';
import { useRef } from 'react';

interface DataPageProps {
  onNavigate?: (page: 'home' | 'data' | 'creative') => void;
  onCompanyNavigate?: (page: 'wayfair' | 'gcc' | 'dailybeast' | 'dupont') => void;
}

export function DataPage({ onNavigate, onCompanyNavigate }: DataPageProps = {}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);

  const companies = [
    {
      company: "Wayfair",
      role: "Operations Business Analyst",
      impact: "Identified $2M savings potential using AI for smarter returns and customer experience."
    },
    {
      company: "Grand Circle Travel",
      role: "Business Intelligence Specialist",
      impact: "Analyzed customer behavior and service patterns to guide call reduction strategies."
    },
    {
      company: "The Daily Beast",
      role: "Data Analyst",
      impact: "Unified ad and engagement data to define ARPU and improve campaign visibility."
    },
    {
      company: "DuPont",
      role: "Analytics Consultant",
      impact: "Built early IoT-based frameworks for safety monitoring and multilingual data dashboards."
    }
  ];

  return (
    <div 
      ref={containerRef}
      className="min-h-screen relative"
      style={{
        background: 'linear-gradient(180deg, #FAF8F6 0%, #EDE9E4 100%)',
      }}
    >
      <Navigation onNavigate={onNavigate} />

      {/* Hero Section - Full Viewport */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        {/* Subtle Geometric Grid Background */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <rect width="80" height="80" fill="none" stroke="#2C2622" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Floating Square Motifs */}
        <div className="absolute inset-0 pointer-events-none">
          {[
            { size: 100, top: '15%', left: '8%', delay: 0 },
            { size: 60, top: '70%', right: '12%', delay: 2 },
            { size: 80, top: '40%', right: '5%', delay: 4 },
          ].map((motif, i) => (
            <motion.div
              key={i}
              className="absolute border border-[#9B8B7E]/15"
              style={{
                width: `${motif.size}px`,
                height: `${motif.size}px`,
                top: motif.top,
                left: motif.left,
                right: motif.right,
              }}
              animate={{
                rotate: [0, 90, 0],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
                delay: motif.delay,
              }}
            />
          ))}
        </div>

        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10"
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
        >
          {/* Main Headline */}
          <motion.h1
            className="text-[#2C2622] mb-8 md:mb-10"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: 'clamp(2.5rem, 9vw, 9rem)',
              letterSpacing: '-0.03em',
              lineHeight: '0.95',
              maxWidth: '1400px',
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            Analytical & AI Solutions.
          </motion.h1>

          {/* Subheading */}
          <motion.div
            className="flex items-start gap-6 md:gap-12 max-w-6xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.7 }}
          >
            <div className="hidden md:block w-20 h-px bg-[#9B8B7E] mt-4 flex-shrink-0" />
            <p
              className="text-[#5C5550] flex-1"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 'clamp(1rem, 2.2vw, 1.625rem)',
                lineHeight: '1.7',
                maxWidth: '800px',
              }}
            >
              Identifying opportunities where data and AI can drive smarter, faster, more human decisions.
            </p>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-16 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-[#9B8B7E]/40 to-transparent" />
        </motion.div>
      </section>

      {/* Career Overview Section */}
      <section className="py-16 md:py-32 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-12 md:mb-20">
            <motion.span
              className="text-[#9B8B7E]"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.8125rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Career Overview
            </motion.span>
            <motion.h2
              className="text-[#2C2622] mt-4"
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                letterSpacing: '-0.02em',
                lineHeight: '1.1',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Strategic Impact Across Industries
            </motion.h2>
          </div>

          {/* Company Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {companies.map((company, index) => (
  <motion.div
    key={company.company}                // ← key goes here
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.05 }}
  >
    <CompanyCard
      company={company.company}
      role={company.role}
      impact={company.impact}
      index={index}
      onClick={() => {
        if (company.company === 'Wayfair') onCompanyNavigate?.('wayfair');
        else if (company.company === 'Grand Circle Travel') onCompanyNavigate?.('gcc');
        else if (company.company === 'GCC') onCompanyNavigate?.('gcc');
        else if (company.company === 'The Daily Beast') onCompanyNavigate?.('dailybeast');
      }}
    />
  </motion.div>
))}

          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-32 px-6 bg-[#EDE9E4]">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          {/* Quote Mark */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 0.1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span 
              className="text-[#2C2622]"
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: '120px',
                lineHeight: '1',
              }}
            >
              "
            </span>
          </motion.div>

          <motion.blockquote
            className="text-[#2C2622]"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: 'clamp(1.75rem, 4.5vw, 3.25rem)',
              lineHeight: '1.4',
              letterSpacing: '-0.02em',
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
           I think with reason, question with data, and build with creativity.
          </motion.blockquote>
        </motion.div>
      </section>

      {/* Footer - Minimal */}
      <footer className="py-24 px-6 bg-white border-t border-[#E8E4DF]">
        <motion.div
          className="max-w-7xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p
            className="text-[#2C2622] mb-10"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              letterSpacing: '-0.01em',
            }}
          >
            Let's talk data.
          </p>

          <motion.button
            className="px-10 py-4 bg-[#2C2622] text-white hover:bg-[#5C5550] transition-colors duration-300"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.9375rem',
              borderRadius: '2px',
              letterSpacing: '0.03em',
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Connect with me
          </motion.button>
        </motion.div>
      </footer>
    </div>
  );
}
