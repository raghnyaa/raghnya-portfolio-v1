import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

interface CompanyCardProps {
  company: string;
  role: string;
  impact: string;
  index: number;
  onClick?: () => void;
}

export function CompanyCard({ company, role, impact, index, onClick }: CompanyCardProps) {
  return (
    <motion.div
      className="relative group cursor-pointer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onClick={onClick}
    >
      {/* Card Container */}
      <div className="relative p-10 bg-white border border-[#E8E4DF] hover:border-[#9B8B7E] transition-all duration-500 overflow-hidden">
        {/* Index Number */}
        <motion.div
          className="absolute top-6 right-6 text-[#E8E4DF] group-hover:text-[#9B8B7E] transition-colors duration-300"
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: '4rem',
            lineHeight: '1',
            fontWeight: '400',
          }}
        >
          {String(index + 1).padStart(2, '0')}
        </motion.div>

        {/* Content */}
        <div className="relative z-10 space-y-6">
          {/* Company Name */}
          <h3
            className="text-[#2C2622]"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              lineHeight: '1.2',
              letterSpacing: '-0.01em',
            }}
          >
            {company}
          </h3>

          {/* Role */}
          <p
            className="text-[#9B8B7E]"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.9375rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}
          >
            {role}
          </p>

          {/* Divider */}
          <div className="w-12 h-[1px] bg-[#9B8B7E]/30" />

          {/* Impact Statement */}
          <p
            className="text-[#5C5550] max-w-md"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.0625rem',
              lineHeight: '1.7',
            }}
          >
            {impact}
          </p>

          {/* Read More Link */}
          <motion.div
            className="flex items-center gap-2 text-[#2C2622] group-hover:text-[#9B8B7E] transition-colors duration-300 pt-2"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.3 }}
          >
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.875rem',
                letterSpacing: '0.02em',
              }}
            >
              View details
            </span>
            <ArrowUpRight className="w-4 h-4" />
          </motion.div>
        </div>

        {/* Decorative Square */}
        <motion.div
          className="absolute -bottom-4 -left-4 w-24 h-24 border border-[#9B8B7E]/0 group-hover:border-[#9B8B7E]/20 transition-all duration-500"
          style={{ transform: 'rotate(45deg)' }}
        />
      </div>
    </motion.div>
  );
}
