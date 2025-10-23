import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useRef } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  accentColor: string;
  shape: 'circle' | 'square' | 'triangle';
}

export function ProjectCard({ title, description, accentColor, shape }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const renderShape = () => {
    switch (shape) {
      case 'circle':
        return (
          <div 
            className="w-16 h-16 rounded-full"
            style={{ 
              background: `radial-gradient(circle, ${accentColor}40 0%, ${accentColor}20 100%)`,
              border: `2px solid ${accentColor}`,
            }}
          />
        );
      case 'square':
        return (
          <div 
            className="w-16 h-16 rounded-lg"
            style={{ 
              background: `linear-gradient(135deg, ${accentColor}40 0%, ${accentColor}20 100%)`,
              border: `2px solid ${accentColor}`,
            }}
          />
        );
      case 'triangle':
        return (
          <div 
            style={{
              width: 0,
              height: 0,
              borderLeft: '30px solid transparent',
              borderRight: '30px solid transparent',
              borderBottom: `52px solid ${accentColor}`,
              filter: `drop-shadow(0 0 12px ${accentColor}40)`,
            }}
          />
        );
    }
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        borderColor: '#E8E4DF',
      }}
      className="relative p-8 bg-white border transition-all duration-500 cursor-pointer group shadow-sm hover:shadow-lg"
      whileHover={{ scale: 1.02, borderColor: '#9B8B7E' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="mb-2">
          {renderShape()}
        </div>
        <h3 className="text-[#2C2622]" style={{ fontFamily: "'DM Serif Display', serif" }}>
          {title}
        </h3>
        <p className="text-[#5C5550]" style={{ fontFamily: "'Inter', sans-serif" }}>
          {description}
        </p>
      </div>
      
      {/* Subtle shimmer on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: 'linear-gradient(45deg, transparent 30%, rgba(155, 139, 126, 0.03) 50%, transparent 70%)',
          backgroundSize: '200% 200%',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </motion.div>
  );
}
