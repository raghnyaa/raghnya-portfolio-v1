import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface DataProjectCardProps {
  title: string;
  description: string;
  dateRange: string;
}

export function DataProjectCard({ title, description, dateRange }: DataProjectCardProps) {
  return (
    <motion.div
      className="relative h-full p-10 bg-white border-l-4 border-l-transparent hover:border-l-[#A68C7C] transition-all duration-500 cursor-pointer group"
      whileHover={{ x: 8 }}
      transition={{ duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] }}
    >
      {/* Date Badge */}
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span 
          className="inline-block px-3 py-1 bg-[#F9F7F5] text-[#A68C7C] rounded"
          style={{ 
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.75rem',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
          }}
        >
          {dateRange}
        </span>
      </motion.div>
      
      <div className="space-y-6">
        {/* Number Index */}
        <div className="flex items-start gap-6">
          <motion.div
            className="w-12 h-12 flex items-center justify-center border-2 border-[#ECE8E3] group-hover:border-[#A68C7C] transition-colors duration-300 rounded-sm flex-shrink-0"
            whileHover={{ rotate: 90 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-3 h-3 bg-[#A68C7C] rounded-sm" />
          </motion.div>

          <h3 
            className="text-[#2C2C2C] flex-1"
            style={{ 
              fontFamily: "'DM Serif Display', serif",
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              lineHeight: '1.2',
              letterSpacing: '-0.01em',
            }}
          >
            {title}
          </h3>
        </div>
        
        <p 
          className="text-[#6B5E52] pl-[72px]"
          style={{ 
            fontFamily: "'Inter', sans-serif",
            fontSize: '1.0625rem',
            lineHeight: '1.7',
          }}
        >
          {description}
        </p>
        
        <div className="pl-[72px] pt-4">
          <motion.div
            className="flex items-center gap-3 text-[#2C2C2C] group-hover:text-[#A68C7C] transition-colors duration-300"
            whileHover={{ x: 8 }}
            transition={{ duration: 0.3 }}
          >
            <span 
              style={{ 
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.9375rem',
                letterSpacing: '0.02em',
              }}
            >
              Explore Project
            </span>
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background pattern on hover */}
      <motion.div
        className="absolute top-0 right-0 w-32 h-32 border border-[#A68C7C]/0 group-hover:border-[#A68C7C]/10 rounded-sm transition-all duration-500 pointer-events-none"
        style={{ margin: '2rem' }}
      />
    </motion.div>
  );
}
