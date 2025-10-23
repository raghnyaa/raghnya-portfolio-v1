import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { useRef, useState } from 'react';
import { GameModal } from './GameModal';

interface ShaktiVikasaPageProps {
  onNavigate?: (page: 'home' | 'data' | 'creative') => void;
}

export function ShaktiVikasaPage({ onNavigate }: ShaktiVikasaPageProps = {}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isGameModalOpen, setIsGameModalOpen] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.6]);

  return (
    <div 
      ref={containerRef}
      className="min-h-screen relative"
      style={{
        background: 'linear-gradient(180deg, #1E1A2B 0%, #2A1F3D 30%, #3D2F4A 60%, #4A3A52 100%)',
      }}
    >
      {/* Back Button */}
      <motion.button
        onClick={() => onNavigate?.('creative')}
        className="fixed top-4 sm:top-6 md:top-8 left-4 sm:left-6 md:left-8 z-50 flex items-center gap-2 px-3 sm:px-4 py-2 backdrop-blur-md hover:bg-white/10 transition-colors"
        style={{
          border: '1px solid rgba(216, 183, 106, 0.3)',
          fontFamily: "'Inter', sans-serif",
          fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
          color: '#F8F5F0',
          borderRadius: '2rem',
          background: 'rgba(30, 26, 43, 0.6)',
        }}
        whileHover={{ x: -4 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
        <span className="hidden sm:inline">Back to Creative & Product</span>
        <span className="sm:hidden">Back</span>
      </motion.button>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 md:px-8">
        {/* Divine Light Beams */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2"
              style={{
                width: '2px',
                height: '120%',
                background: `linear-gradient(to bottom, transparent, rgba(216, 183, 106, ${0.1 + (i % 3) * 0.05}), transparent)`,
                transformOrigin: 'top center',
                transform: `rotate(${i * 45}deg)`,
              }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.3,
              }}
            />
          ))}
        </div>

        {/* Central Mandala/Halo */}
        <motion.div
          className="absolute"
          style={{
            width: '500px',
            height: '500px',
            left: '50%',
            top: '50%',
            x: '-50%',
            y: '-50%',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(216, 183, 106, 0.2) 0%, rgba(205, 170, 164, 0.1) 30%, transparent 70%)',
            border: '1px solid rgba(216, 183, 106, 0.2)',
            boxShadow: '0 0 60px rgba(216, 183, 106, 0.3), inset 0 0 60px rgba(216, 183, 106, 0.1)',
          }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.4, 0.7, 0.4],
            rotate: [0, 360],
          }}
          transition={{
            scale: {
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            opacity: {
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            rotate: {
              duration: 120,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
        >
          {/* Inner mandala rings */}
          {[0.6, 0.75, 0.9].map((scale, i) => (
            <div
              key={i}
              className="absolute inset-0 rounded-full"
              style={{
                transform: `scale(${scale})`,
                border: '1px solid rgba(216, 183, 106, 0.15)',
              }}
            />
          ))}
        </motion.div>

        {/* Secondary Aura */}
        <motion.div
          className="absolute"
          style={{
            width: '700px',
            height: '700px',
            left: '50%',
            top: '50%',
            x: '-50%',
            y: '-50%',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(205, 170, 164, 0.15) 0%, transparent 60%)',
            filter: 'blur(60px)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: '#D8B76A',
                boxShadow: '0 0 10px rgba(216, 183, 106, 0.8)',
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        <motion.div
          className="max-w-5xl mx-auto text-center relative z-10"
          style={{ opacity: heroOpacity }}
        >
          {/* Main Title */}
          <motion.h1
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: 'clamp(4rem, 12vw, 10rem)',
              letterSpacing: '-0.02em',
              lineHeight: '0.95',
              background: 'linear-gradient(135deg, #D8B76A 0%, #F8F5F0 50%, #D8B76A 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '2rem',
              textShadow: '0 0 40px rgba(216, 183, 106, 0.5)',
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            ShaktiVikasa.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
              lineHeight: '1.7',
              color: '#CDAAA4',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              maxWidth: '700px',
              margin: '0 auto',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Exploring Myths, Unlocking the Unknown.
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            className="mx-auto mt-12"
            style={{
              width: '80px',
              height: '2px',
              background: 'linear-gradient(to right, transparent, #D8B76A, transparent)',
              boxShadow: '0 0 10px rgba(216, 183, 106, 0.6)',
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-16 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div 
            className="w-[1px] h-20"
            style={{
              background: 'linear-gradient(to bottom, transparent, rgba(216, 183, 106, 0.6), transparent)',
            }}
          />
        </motion.div>
      </section>

      {/* Introduction Block - Poetic Verses */}
      <section className="py-32 px-6 relative">
        {/* Subtle overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(58, 47, 74, 0.5) 0%, transparent 70%)',
          }}
        />

        <motion.div
          className="max-w-4xl mx-auto relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2 }}
        >
          {/* Poetic Lines */}
          <div className="space-y-12">
            {[
              "Ever since I was little, I've been in conversation with a greater force.",
              "Through faith, art, and movement, I found my language — stories of Gods and Goddesses.",
              "ShaktiVikasa is my offering to the divine feminine — a universe where Goddesses come alive.",
            ].map((line, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
              >
                <p
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: 'clamp(1.375rem, 3.5vw, 2.25rem)',
                    lineHeight: '1.8',
                    color: '#F8F5F0',
                    letterSpacing: '-0.01em',
                    fontStyle: 'italic',
                  }}
                >
                  {line}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Decorative Divider */}
          <motion.div
            className="mt-16 flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div style={{ width: '40px', height: '1px', background: '#D8B76A' }} />
            <div 
              className="w-2 h-2 rounded-full"
              style={{ background: '#D8B76A', boxShadow: '0 0 10px rgba(216, 183, 106, 0.8)' }}
            />
            <div style={{ width: '40px', height: '1px', background: '#D8B76A' }} />
          </motion.div>
        </motion.div>
      </section>

      {/* Concept Section */}
      <section className="py-32 px-6 relative">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Headline */}
          <motion.h2
            className="text-center mb-12"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              letterSpacing: '-0.02em',
              color: '#D8B76A',
              lineHeight: '1.2',
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            The Origin of ShaktiVikasa
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-center mb-20 max-w-3xl mx-auto"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
              lineHeight: '1.8',
              color: '#CDAAA4',
              letterSpacing: '0.01em',
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A journey through Hindu mythology — blending the wisdom of the Vedas, Puranas, and Tantric traditions into stories and coloring experiences. Each Goddess embodies courage, creativity, and transformation.
          </motion.p>

          {/* Goddess Circles */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
            {[
              { name: 'Matangi', color: 'rgba(216, 183, 106, 0.2)' },
              { name: 'Chhinnamasta', color: 'rgba(205, 170, 164, 0.2)' },
              { name: 'Durga', color: 'rgba(216, 183, 106, 0.25)' },
            ].map((goddess, index) => (
              <motion.div
                key={goddess.name}
                className="flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
              >
                {/* Circle Placeholder */}
                <motion.div
                  className="relative mb-6"
                  style={{
                    width: '200px',
                    height: '200px',
                    borderRadius: '50%',
                    background: goddess.color,
                    border: '2px solid rgba(216, 183, 106, 0.3)',
                    boxShadow: '0 0 30px rgba(216, 183, 106, 0.2), inset 0 0 30px rgba(216, 183, 106, 0.1)',
                  }}
                  whileHover={{ scale: 1.05 }}
                  animate={{
                    boxShadow: [
                      '0 0 30px rgba(216, 183, 106, 0.2), inset 0 0 30px rgba(216, 183, 106, 0.1)',
                      '0 0 40px rgba(216, 183, 106, 0.4), inset 0 0 40px rgba(216, 183, 106, 0.2)',
                      '0 0 30px rgba(216, 183, 106, 0.2), inset 0 0 30px rgba(216, 183, 106, 0.1)',
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.5,
                  }}
                >
                  {/* Inner glow */}
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: 'radial-gradient(circle, rgba(216, 183, 106, 0.3) 0%, transparent 70%)',
                    }}
                  />
                  
                  {/* Goddess Name */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p
                      style={{
                        fontFamily: "'DM Serif Display', serif",
                        fontSize: '1.25rem',
                        color: '#F8F5F0',
                        textAlign: 'center',
                        letterSpacing: '0.02em',
                      }}
                    >
                      {goddess.name}
                    </p>
                  </div>
                </motion.div>

                {/* Label */}
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.875rem',
                    color: '#CDAAA4',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  Coming Soon
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Coming Soon - The Game */}
      <section className="py-24 px-6">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Glowing Card */}
          <div
            className="relative px-12 py-16 overflow-hidden cursor-pointer"
            style={{
              background: 'linear-gradient(135deg, rgba(216, 183, 106, 0.1) 0%, rgba(205, 170, 164, 0.1) 100%)',
              border: '1px solid rgba(216, 183, 106, 0.3)',
              borderRadius: '1.5rem',
              boxShadow: '0 0 40px rgba(216, 183, 106, 0.2), inset 0 0 40px rgba(216, 183, 106, 0.05)',
            }}
            onClick={() => setIsGameModalOpen(true)}
          >
            {/* Animated glow */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(circle at 50% 0%, rgba(216, 183, 106, 0.2) 0%, transparent 70%)',
              }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            <div className="relative z-10 text-center">
              <motion.p
                className="mb-2"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.875rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#D8B76A',
                }}
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                Next Evolution
              </motion.p>

              <h3
                className="mb-6"
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                  color: '#F8F5F0',
                  letterSpacing: '-0.01em',
                  lineHeight: '1.3',
                }}
              >
                The Game
              </h3>

              <p
                className="mb-8"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                  color: '#CDAAA4',
                  lineHeight: '1.7',
                  maxWidth: '600px',
                  margin: '0 auto 2rem',
                }}
              >
                A real-time action simulation where goddesses rise to battle their nemesis — a modern retelling of divine power.
              </p>

              {/* Explore Button */}
              <motion.div
                className="px-10 py-4 inline-block"
                style={{
                  background: 'linear-gradient(135deg, rgba(216, 183, 106, 0.2) 0%, rgba(216, 183, 106, 0.3) 100%)',
                  color: '#D8B76A',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.9375rem',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  borderRadius: '2rem',
                  border: '1px solid rgba(216, 183, 106, 0.5)',
                  boxShadow: '0 0 20px rgba(216, 183, 106, 0.3)',
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 30px rgba(216, 183, 106, 0.5)',
                }}
              >
                Explore the Vision
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-32 px-6 relative">
        {/* Subtle gradient overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, rgba(30, 26, 43, 0.8) 100%)',
          }}
        />

        <motion.div
          className="max-w-5xl mx-auto text-center relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Quote */}
          <p
            className="mb-12"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)',
              letterSpacing: '-0.01em',
              lineHeight: '1.5',
              color: '#F8F5F0',
              fontStyle: 'italic',
              textShadow: '0 0 20px rgba(216, 183, 106, 0.3)',
            }}
          >
            "There is great power in every body who remembers their strength."
          </p>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-3 mb-12">
            <div style={{ width: '60px', height: '1px', background: 'rgba(216, 183, 106, 0.5)' }} />
            <div 
              className="w-2 h-2 rounded-full"
              style={{ background: '#D8B76A', boxShadow: '0 0 10px rgba(216, 183, 106, 0.8)' }}
            />
            <div style={{ width: '60px', height: '1px', background: 'rgba(216, 183, 106, 0.5)' }} />
          </div>

          {/* Back Link */}
          <motion.button
            onClick={() => onNavigate?.('creative')}
            className="inline-flex items-center gap-2 px-6 py-3 hover:bg-white/10 transition-colors"
            style={{
              border: '1px solid rgba(216, 183, 106, 0.3)',
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.875rem',
              color: '#CDAAA4',
              letterSpacing: '0.02em',
              borderRadius: '2rem',
              background: 'rgba(30, 26, 43, 0.4)',
              backdropFilter: 'blur(10px)',
            }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Creative & Product Systems
          </motion.button>
        </motion.div>
      </footer>

      {/* Game Modal */}
      <GameModal isOpen={isGameModalOpen} onClose={() => setIsGameModalOpen(false)} />
    </div>
  );
}
