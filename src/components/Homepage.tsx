import { motion } from 'motion/react';
import { Navigation } from './Navigation';
import { ProjectCard } from './ProjectCard';
import { Linkedin, Instagram, Mail } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface HomepageProps {
  onNavigate: (page: 'home' | 'data' | 'creative') => void;
}
function AnimatedShapes() {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const [stage, setStage] = useState({ w: 0, h: 0 });
  const [mode, setMode] = useState<'scatter' | 'stack'>('scatter');
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const measure = () => {
      const rect = stageRef.current?.getBoundingClientRect();
      if (rect) setStage({ w: rect.width, h: rect.height });
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (stageRef.current) ro.observe(stageRef.current);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const id = setTimeout(() => {
      setMode(Math.random() < 0.35 ? 'stack' : 'scatter');
      setTick((t) => t + 1);
    }, 4000 + Math.random() * 4000);
    return () => clearTimeout(id);
  }, [tick]);

  const center = { x: stage.w / 2, y: stage.h / 2 };
  const pad = Math.min(stage.w, stage.h) * 0.15;

  const scatterTarget = () => ({
    x: pad + Math.random() * Math.max(1, stage.w - pad * 2),
    y: pad + Math.random() * Math.max(1, stage.h - pad * 2),
    rotate: (Math.random() - 0.5) * 50,
    scale: 0.95 + Math.random() * 0.2,
    zIndex: 1 + Math.floor(Math.random() * 9),
  });

  const stackTargets = [
    { x: center.x, y: center.y - (Math.min(stage.w, stage.h) * 0.12), zIndex: 11 },
    { x: center.x, y: center.y, zIndex: 12 },
    { x: center.x, y: center.y + (Math.min(stage.w, stage.h) * 0.12), zIndex: 13 },
  ];

  const tCircle   = mode === 'stack' ? stackTargets[0] : scatterTarget();
  const tSquare   = mode === 'stack' ? stackTargets[1] : scatterTarget();
  const tTriangle = mode === 'stack' ? stackTargets[2] : scatterTarget();

  // wobble (applied to the INNER child only)
  const wobble = (base = 6) => ({
    x: [0,  base, 0, -base, 0],
    y: [0, -base, 0,  base, 0],
  });

  return (
    <div className="py-6 md:py-8 flex items-center justify-center" onClick={() => setTick(t => t + 1)}>
      <div ref={stageRef} className="relative" style={{ width: 'min(520px, 84vw)', height: 'min(200px, 36vw)' }}>
        {/* CIRCLE: wrapper positions, inner wobbles */}
        <motion.div
          key={`cw-${tick}-${mode}`}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          initial={{ x: center.x, y: center.y }}
          animate={{ x: tCircle.x, y: tCircle.y }}
          transition={{ x: { duration: 0.9, ease: 'easeInOut' }, y: { duration: 0.9, ease: 'easeInOut' } }}
          style={{ zIndex: tCircle.zIndex }}
        >
          <motion.div
            key={`ci-${tick}-${mode}`}
            className="rounded-full border-2"
            animate={{
              rotate: mode === 'stack' ? 0 : (Math.random() - 0.5) * 50,
              scale: mode === 'stack' ? 1 : 0.95 + Math.random() * 0.2,
              ...wobble(4),
            }}
            transition={{
              rotate: { duration: 0.9, ease: 'easeInOut' },
              scale: { duration: 0.9, ease: 'easeInOut' },
              default: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
            }}
            style={{ width: 64, height: 64, borderColor: '#9B8B7E' }}
          />
        </motion.div>

        {/* SQUARE */}
        <motion.div
          key={`sw-${tick}-${mode}`}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          initial={{ x: center.x, y: center.y }}
          animate={{ x: tSquare.x, y: tSquare.y }}
          transition={{ x: { duration: 0.9, ease: 'easeInOut' }, y: { duration: 0.9, ease: 'easeInOut' } }}
          style={{ zIndex: tSquare.zIndex }}
        >
          <motion.div
            key={`si-${tick}-${mode}`}
            animate={{
              rotate: mode === 'stack' ? 0 : [0, 5, -5, 0],
              scale: mode === 'stack' ? 1 : [1, 1.05, 1],
              ...wobble(5),
            }}
            transition={{
              rotate: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
              scale:  { duration: 3, repeat: Infinity, ease: 'easeInOut' },
              default:{ duration: 6, repeat: Infinity, ease: 'easeInOut' },
            }}
            style={{
              width: 64, height: 64,
              background: 'linear-gradient(135deg, #FFFFFF 0%, #EDE9E4 100%)',
              border: '2px solid #9B8B7E',
              boxSizing: 'border-box',
            }}
          />
        </motion.div>

        {/* TRIANGLE */}
        <motion.div
          key={`tw-${tick}-${mode}`}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          initial={{ x: center.x, y: center.y }}
          animate={{ x: tTriangle.x, y: tTriangle.y }}
          transition={{ x: { duration: 0.9, ease: 'easeInOut' }, y: { duration: 0.9, ease: 'easeInOut' } }}
          style={{ zIndex: tTriangle.zIndex }}
        >
          <motion.div
            key={`ti-${tick}-${mode}`}
            className="triangle-responsive"
            animate={{
              scale: mode === 'stack' ? 1 : [1, 1.1, 1],
              filter: [
                'drop-shadow(0 0 6px rgba(44, 38, 34, 0.2))',
                'drop-shadow(0 0 10px rgba(44, 38, 34, 0.3))',
                'drop-shadow(0 0 6px rgba(44, 38, 34, 0.2))',
              ],
              ...wobble(6),
            }}
            transition={{
              scale: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
              filter:{ duration: 3, repeat: Infinity, ease: 'easeInOut' },
              default:{ duration: 6, repeat: Infinity, ease: 'easeInOut' },
            }}
            style={{
              width: 0, height: 0,
              borderLeft: '24px solid transparent',
              borderRight: '24px solid transparent',
              borderBottom: '42px solid #2C2622',
              filter: 'drop-shadow(0 0 6px rgba(44, 38, 34, 0.2))',
            }}
          />
        </motion.div>

        <style>{`
          @media (min-width: 768px) {
            .triangle-responsive {
              border-left-width: 30px !important;
              border-right-width: 30px !important;
              border-bottom-width: 52px !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
}

export function Homepage({ onNavigate }: HomepageProps) {
  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #FAF8F6 0%, #FFFFFF 50%, #F5F1ED 100%)',
      }}
    >
      {/* Subtle shimmer overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(155, 139, 126, 0.08) 0%, transparent 50%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.03, 0.06, 0.03],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <Navigation onNavigate={onNavigate} />

      <div className="relative">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 pt-20">
          <motion.div
            className="max-w-5xl mx-auto text-center space-y-8 md:space-y-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            {/* Name */}
            <motion.h1
              className="text-[#2C2622]"
              style={{ 
                fontFamily: "'DM Serif Display', serif",
                fontSize: 'clamp(3rem, 10vw, 7rem)',
                letterSpacing: '-0.02em',
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
            >
              Raghnya
            </motion.h1>

            {/* Tagline */}
            <motion.p
              className="text-[#5C5550] max-w-2xl mx-auto"
              style={{ 
                fontFamily: "'Inter', sans-serif",
                fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
                lineHeight: '1.6',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              Where Structure Meets Imagination
            </motion.p>

            {/* Geometric Symbol */}
            
            <motion.div
              className="py-6 md:py-8 flex items-center justify-center gap-4 md:gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              {/* Circle */}
              <motion.div
                className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2"
                style={{
                  borderColor: '#9B8B7E',
                }}
                animate={{
                  rotate: 360,
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                  scale: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
                }}
              />
              
              {/* Square */}
              <motion.div
                className="w-12 h-12 md:w-16 md:h-16"
                style={{
                  background: 'linear-gradient(135deg, #FFFFFF 0%, #EDE9E4 100%)',
                  border: '2px solid #9B8B7E',
                }}
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              
              {/* Triangle */}
              <motion.div
                className="triangle-responsive"
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: '24px solid transparent',
                  borderRight: '24px solid transparent',
                  borderBottom: '42px solid #2C2622',
                  filter: 'drop-shadow(0 0 6px rgba(44, 38, 34, 0.2))',
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  filter: [
                    'drop-shadow(0 0 6px rgba(44, 38, 34, 0.2))',
                    'drop-shadow(0 0 10px rgba(44, 38, 34, 0.3))',
                    'drop-shadow(0 0 6px rgba(44, 38, 34, 0.2))',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <style>
                {`
                  @media (min-width: 768px) {
                    .triangle-responsive {
                      border-left-width: 30px !important;
                      border-right-width: 30px !important;
                      border-bottom-width: 52px !important;
                    }
                  }
                `}
              </style>
            </motion.div>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              <motion.button
                onClick={() => onNavigate('data')}
                className="group relative px-6 sm:px-10 py-3 sm:py-4 rounded-sm bg-white border-2 text-[#2C2622] overflow-hidden cursor-pointer w-full sm:w-auto"
                style={{ 
                  fontFamily: "'Inter', sans-serif",
                  borderColor: '#2C2622',
                  fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span>Operations & Analytics</span>
                  <span>👩🏽‍💻</span>
                </span>
                {/* Pulsating aura */}
                <motion.div
                  className="absolute inset-0 rounded-sm"
                  style={{ background: '#2C2622' }}
                  initial={{ scale: 1, opacity: 0 }}
                  whileHover={{ scale: 1.5, opacity: 0.05 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                />
              </motion.button>

              <motion.button
                onClick={() => onNavigate('creative')}
                className="group relative px-6 sm:px-10 py-3 sm:py-4 rounded-sm border-2 text-white overflow-hidden cursor-pointer w-full sm:w-auto"
                style={{ 
                  fontFamily: "'Inter', sans-serif",
                  background: '#2C2622',
                  borderColor: '#2C2622',
                  fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span>Product & Innovation</span>
                  <span>🌸</span>
                </span>
                {/* Pulsating aura */}
                <motion.div
                  className="absolute inset-0 rounded-sm bg-white"
                  initial={{ scale: 1, opacity: 0 }}
                  whileHover={{ scale: 1.5, opacity: 0.1 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                />
              </motion.button>
            </motion.div>
          </motion.div>
        </section>

        {/* Featured Projects Section 
        <section className="py-16 md:py-24 px-4 sm:px-6 md:px-8">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1 }}
          >
            <motion.h2
              className="text-center mb-12 md:mb-16 text-[#2C2622]"
              style={{ 
                fontFamily: "'DM Serif Display', serif",
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Between the Two Worlds
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.8 }}
              >
                <ProjectCard
                  title="LUMA"
                  description="An AI-powered tool for real-time damage detection — Wayfair Hackathon"
                  accentColor="#9B8B7E"
                  shape="circle"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <ProjectCard
                  title="GCC Call Center"
                  description="Reduced resolution costs through intelligent analytics and optimization"
                  accentColor="#9B8B7E"
                  shape="square"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <ProjectCard
                  title="Aaroha"
                  description="Mindful eating through community, reflection, and AI companionship"
                  accentColor="#2C2622"
                  shape="triangle"
                />
              </motion.div>
            </div>
          </motion.div>
        </section>
*/}
        {/* Footer */}
        <footer className="py-12 px-6 border-t" style={{ borderColor: '#E8E4DF' }}>
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="flex flex-col items-center space-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-6">
                <motion.a
                  href="https://www.linkedin.com/in/raghnya/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9B8B7E] hover:text-[#2C2622] transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                
                
                <motion.a
                  href="mailto:raghnyavalluru@gmail.com"
                  className="text-[#9B8B7E] hover:text-[#2C2622] transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <Mail className="w-5 h-5" />
                </motion.a>
              </div>

              <p 
                className="text-[#5C5550]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Made with intention ✨
              </p>
            </motion.div>
          </div>
        </footer>
      </div>
    </div>
  );
}
