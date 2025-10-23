import { motion, useScroll, useTransform } from 'motion/react';
import { Navigation } from './Navigation';
import { CreativeProjectCard } from './CreativeProjectCard';
import { useRef } from 'react';

interface CreativePageProps {
  onNavigate?: (page: 'home' | 'data' | 'creative') => void;
  onProjectNavigate?: (page: 'aaroha' | 'shaktivikasa' | 'movement') => void;
}

export function CreativePage({ onNavigate, onProjectNavigate }: CreativePageProps = {}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  const projects = [
    {
      title: "Aaroha",
      description: "A mindful eating movement using AI and emotion to help people slow down and reconnect with food.",
      gradientColors: ['#F4C7C3', '#E8B4A8', '#D4A59A']
    },
    {
      title: "Shaktivikasa",
      description: "An AI-infused coloring-book and storytelling universe inspired by Indian goddesses — celebrating growth, power, and play.",
      gradientColors: ['#E8A87C', '#D4916A', '#C9886A']
    },
    {
      title: "Movement",
      description: "Dance, acting, singing, and sport — my lifelong exploration of rhythm, flow, and confidence.",
      gradientColors: ['#E8C4B4', '#D4AF9E', '#C9A894']
    }
  ];

  return (
    <div 
      ref={containerRef}
      className="min-h-screen relative"
      style={{
        background: 'linear-gradient(135deg, #FDF6F0 0%, #F9EDE3 50%, #F5E6D8 100%)',
      }}
    >
      <Navigation onNavigate={onNavigate} />

      {/* Hero Section - Full Viewport */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Circular Gradient Background */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 40% 50%, rgba(244, 199, 195, 0.3) 0%, rgba(232, 180, 168, 0.2) 35%, rgba(249, 247, 245, 0) 70%)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Flowing Waves */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${400 + i * 200}px`,
                height: `${400 + i * 200}px`,
                left: '50%',
                top: '50%',
                x: '-50%',
                y: '-50%',
                border: '2px solid rgba(232, 180, 168, 0.2)',
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 6 + i * 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        {/* Floating Circles */}
        <div className="absolute inset-0 pointer-events-none">
          {[
            { size: 120, top: '15%', left: '10%', delay: 0, color: 'rgba(244, 199, 195, 0.15)' },
            { size: 80, top: '70%', right: '15%', delay: 2, color: 'rgba(232, 180, 168, 0.15)' },
            { size: 100, top: '50%', right: '8%', delay: 4, color: 'rgba(212, 165, 154, 0.15)' },
          ].map((circle, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${circle.size}px`,
                height: `${circle.size}px`,
                top: circle.top,
                left: circle.left,
                right: circle.right,
                background: circle.color,
              }}
              animate={{
                y: [0, -20, 0],
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: circle.delay,
              }}
            />
          ))}
        </div>

        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10"
          style={{ opacity: heroOpacity, scale: heroScale }}
        >
          {/* Main Headline */}
          <motion.h1
            className="text-[#5C4A42] mb-8 md:mb-10"
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
            Creative & Innovative Products.
          </motion.h1>

          {/* Subheading */}
          <motion.div
            className="flex items-start gap-6 md:gap-12 max-w-6xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.7 }}
          >
            <div className="hidden md:block w-20 h-px bg-[#D4A59A] mt-4 flex-shrink-0" />
            <p
              className="text-[#7A6A62] flex-1"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 'clamp(1rem, 2.2vw, 1.625rem)',
                lineHeight: '1.7',
                maxWidth: '800px',
              }}
            >
              Where creativity meets consciousness - art and technology to tell stories that make people feel.
            </p>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 md:bottom-16 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-[1px] h-16 md:h-20 bg-gradient-to-b from-transparent via-[#D4A59A]/40 to-transparent" />
        </motion.div>
      </section>

      {/* Creative Portfolio Section */}
      <section className="py-16 md:py-32 px-4 sm:px-6 md:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-12 md:mb-20 text-center">
            <motion.span
              className="text-[#D4A59A]"
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
              Portfolio
            </motion.span>
            <motion.h2
              className="text-[#5C4A42] mt-4"
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
              Explore
            </motion.h2>
          </div>

          {/* Project Grid - Responsive Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={index === 2 ? "sm:col-span-2 flex justify-center" : ""}
              >
                <div className={index === 2 ? "w-full sm:w-1/2" : "w-full"}>
                  <CreativeProjectCard
                    title={project.title}
                    description={project.description}
                    gradientColors={project.gradientColors}
                    index={index}
                    onClick={() => {
                      if (project.title === "Aaroha") {
                        onProjectNavigate?.('aaroha');
                      } else if (project.title === "Shaktivikasa") {
                        onProjectNavigate?.('shaktivikasa');
                      } else if (project.title === "Movement") {
                        onProjectNavigate?.('movement');
                      }
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini Narrative Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        {/* Subtle gradient overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, rgba(249, 237, 227, 0.5) 0%, rgba(253, 246, 240, 0.8) 50%, rgba(249, 237, 227, 0.5) 100%)',
          }}
        />

        <motion.div
          className="max-w-6xl mx-auto relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <div className="space-y-16">
            {/* Staggered Text Blocks */}
            <motion.div
              className="text-left max-w-2xl"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <p
                className="text-[#5C4A42]"
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: 'clamp(1.75rem, 4vw, 3rem)',
                  lineHeight: '1.3',
                  letterSpacing: '-0.02em',
                }}
              >
                I build systems that think.
              </p>
            </motion.div>

            <motion.div
              className="text-right max-w-2xl ml-auto"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p
                className="text-[#5C4A42]"
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: 'clamp(1.75rem, 4vw, 3rem)',
                  lineHeight: '1.3',
                  letterSpacing: '-0.02em',
                }}
              >
                And stories that feel.
              </p>
            </motion.div>

            <motion.div
              className="text-center max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <p
                className="text-[#5C4A42]"
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: 'clamp(1.75rem, 4vw, 3rem)',
                  lineHeight: '1.3',
                  letterSpacing: '-0.02em',
                }}
              >
                Together, they become experiences.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer 
        className="py-32 px-6 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #F4C7C3 0%, #F9F7F5 100%)',
        }}
      >
        {/* Soft circle overlay */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            background: 'radial-gradient(circle at 70% 50%, rgba(255, 255, 255, 0.5) 0%, transparent 60%)',
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          className="max-w-5xl mx-auto text-center relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p
            className="text-[#5C4A42] mb-12"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
              letterSpacing: '-0.01em',
              lineHeight: '1.4',
            }}
          >
            Every creative act is a bridge — between logic and intuition.
          </p>

          <motion.a
  href="https://www.instagram.com/_raghnya_"
  target="_blank"
  rel="noopener noreferrer"
  className="px-12 py-4 bg-[#5C4A42] text-white hover:bg-[#7A6A62] transition-colors duration-300 rounded-full inline-block text-center"
  style={{
    fontFamily: "'Inter', sans-serif",
    fontSize: "0.9375rem",
    letterSpacing: "0.03em",
  }}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.98 }}
>
  Connect
</motion.a>

        </motion.div>
      </footer>
    </div>
  );
}
