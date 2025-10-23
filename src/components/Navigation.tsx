import { motion, useScroll, useTransform } from 'motion/react';
import { useState } from 'react';
import { X, Linkedin, Instagram, Mail } from 'lucide-react';

interface NavigationProps {
  onNavigate?: (page: 'home' | 'data' | 'creative') => void;
}

export function Navigation({ onNavigate }: NavigationProps = {}) {
  const [showConnect, setShowConnect] = useState(false);
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.95)']
  );
  
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(12px)']
  );

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor,
          backdropFilter: backdropBlur,
          WebkitBackdropFilter: backdropBlur,
        }}
      >
        <div className="border-b border-black/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between">
            {/* Navigation Links */}
            <div className="flex items-center gap-4 sm:gap-8 md:gap-12">
              <motion.button
                onClick={() => onNavigate?.('home')}
                className="relative text-black group cursor-pointer"
                style={{ 
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 'clamp(13px, 2vw, 15px)',
                  letterSpacing: '-0.01em',
                  background: 'none',
                  border: 'none',
                  padding: 0,
                }}
                whileHover={{ y: -1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                Home
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-black origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
                />
              </motion.button>
              
            
              
              
            </div>
            
            {/* Connect Button */}
            <motion.button
              onClick={() => setShowConnect(true)}
              className="px-4 sm:px-5 py-2 sm:py-2.5 bg-black text-white hover:bg-[#333333] transition-colors duration-200"
              style={{ 
                fontFamily: "'Inter', sans-serif",
                fontSize: 'clamp(12px, 2vw, 14px)',
                letterSpacing: '-0.01em',
                borderRadius: '8px',
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Connect
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Connect Modal */}
      {showConnect && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowConnect(false)}
        >
          <motion.div
            className="bg-white p-8 rounded-3xl shadow-2xl max-w-md w-full mx-4 relative border border-[#E0E0E0]"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowConnect(false)}
              className="absolute top-4 right-4 text-[#666666] hover:text-black transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="mb-6 text-black text-center" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Let's Connect
            </h3>

            <div className="space-y-4">
              <motion.a
                href="https://www.linkedin.com/in/raghnya/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-[#F8F8F8] hover:bg-[#E0E0E0] transition-colors group"
                whileHover={{ x: 4 }}
              >
                <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                  <Linkedin className="w-6 h-6 text-black" />
                </div>
                <div style={{ fontFamily: "'Inter', sans-serif" }}>
                  <div className="text-black">LinkedIn</div>
                  <div className="text-[#666666]">Professional network</div>
                </div>
              </motion.a>

             

              <motion.a
                href="mailto:raghnyavalluru@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-[#F8F8F8] hover:bg-[#E0E0E0] transition-colors group"
                whileHover={{ x: 4 }}
              >
                <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                  <Mail className="w-6 h-6 text-black" />
                </div>
                <div style={{ fontFamily: "'Inter', sans-serif" }}>
                  <div className="text-black">Email</div>
                  <div className="text-[#666666]">raghnyavalluru@gmail.com</div>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
