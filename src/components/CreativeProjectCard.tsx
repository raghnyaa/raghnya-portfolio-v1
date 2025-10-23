import { motion } from 'motion/react';
import { useState } from 'react';

interface CreativeProjectCardProps {
  title: string;
  description: string;
  gradientColors: string[];
  index: number;
  onClick?: () => void;
}

export function CreativeProjectCard({ title, description, gradientColors, index, onClick }: CreativeProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative group cursor-pointer"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Card Container */}
      <motion.div
        className="relative overflow-hidden"
        style={{
          borderRadius: index % 2 === 0 ? '50% 50% 50% 50% / 60% 60% 40% 40%' : '50% 50% 50% 50% / 40% 60% 40% 60%',
          aspectRatio: '1',
        }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
      >
        {/* Gradient Background */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${gradientColors[0]} 0%, ${gradientColors[1]} 50%, ${gradientColors[2]} 100%)`,
          }}
          animate={isHovered ? {
            scale: 1.1,
            rotate: 5,
          } : {
            scale: 1,
            rotate: 0,
          }}
          transition={{ duration: 0.6 }}
        />

        {/* Flowing Wave Overlay */}
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.3) 0%, transparent 50%)',
          }}
          animate={{
            x: ['-10%', '10%', '-10%'],
            y: ['-10%', '10%', '-10%'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center p-8 text-center">
          <motion.h3
            className="text-white mb-4"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
              letterSpacing: '-0.01em',
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
            }}
            animate={isHovered ? { y: -8 } : { y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {title}
          </motion.h3>

          <motion.p
            className="text-white/90"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)',
              lineHeight: '1.6',
              textShadow: '0 1px 4px rgba(0, 0, 0, 0.1)',
            }}
            initial={{ opacity: 0 }}
            animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0.7, y: 4 }}
            transition={{ duration: 0.3 }}
          >
            {description}
          </motion.p>
        </div>

        {/* Circle Accent */}
        <motion.div
          className="absolute rounded-full border-2 border-white/30"
          style={{
            width: '40%',
            height: '40%',
            bottom: '-10%',
            right: '-10%',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>
    </motion.div>
  );
}
