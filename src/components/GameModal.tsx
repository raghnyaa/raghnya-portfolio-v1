import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { useEffect, useRef } from 'react';

interface GameModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GameModal({ isOpen, onClose }: GameModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[100]"
            style={{
              background: 'rgba(0, 0, 0, 0.85)',
              backdropFilter: 'blur(8px)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Modal Container - Center with padding */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 md:p-8">
            <motion.div
              ref={modalRef}
              className="relative w-full max-w-6xl h-full overflow-hidden"
              style={{
                background: 'linear-gradient(180deg, #0B0A0F 0%, #1A1320 40%, #3C2547 100%)',
                borderRadius: '1rem',
                boxShadow: '0 0 80px rgba(230, 199, 110, 0.3), inset 0 0 100px rgba(230, 199, 110, 0.05)',
                border: '1px solid rgba(230, 199, 110, 0.2)',
              }}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 60, scale: 0.95 }}
              transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                onClick={onClose}
                className="absolute top-6 right-6 z-50 p-2 rounded-full transition-all"
                style={{
                  background: 'rgba(230, 199, 110, 0.1)',
                  border: '1px solid rgba(230, 199, 110, 0.3)',
                  color: '#E6C76E',
                }}
                whileHover={{
                  background: 'rgba(230, 199, 110, 0.2)',
                  boxShadow: '0 0 20px rgba(230, 199, 110, 0.4)',
                  scale: 1.1,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <X className="w-6 h-6" />
              </motion.button>

              {/* Gold Particle Overlay */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(30)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full"
                    style={{
                      width: `${1 + Math.random() * 3}px`,
                      height: `${1 + Math.random() * 3}px`,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      background: '#E6C76E',
                      boxShadow: '0 0 8px rgba(230, 199, 110, 0.8)',
                      opacity: 0.4 + Math.random() * 0.3,
                      filter: 'blur(1px)',
                    }}
                    animate={{
                      y: [0, -150, 0],
                      x: [0, Math.random() * 30 - 15, 0],
                      opacity: [0, 0.7, 0],
                    }}
                    transition={{
                      duration: 4 + Math.random() * 6,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: Math.random() * 5,
                    }}
                  />
                ))}
              </div>

              {/* Scrollable Content */}
              <div 
                className="h-full overflow-y-auto overflow-x-hidden px-6 md:px-12 py-20"
                style={{
                  scrollbarWidth: 'thin',
                  scrollbarColor: 'rgba(230, 199, 110, 0.3) transparent',
                }}
              >
                {/* Scene 1 - The Awakening */}
                <motion.section
                  className="min-h-screen flex flex-col items-center justify-center relative mb-24"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Background Glow */}
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: 'radial-gradient(circle at 50% 50%, rgba(230, 199, 110, 0.15) 0%, transparent 60%)',
                    }}
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />

                  {/* Light Sweep Animation */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: 'linear-gradient(90deg, transparent 0%, rgba(230, 199, 110, 0.15) 50%, transparent 100%)',
                    }}
                    animate={{
                      x: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      repeatDelay: 2,
                    }}
                  />

                  {/* Sanskrit Runes Background - Placeholder */}
                  <div 
                    className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='30' y='30' text-anchor='middle' dominant-baseline='middle' fill='%23E6C76E' font-size='40' font-family='serif'%3Eॐ%3C/text%3E%3C/svg%3E")`,
                      backgroundRepeat: 'repeat',
                      backgroundSize: '120px 120px',
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10 text-center max-w-4xl">
                    <motion.h2
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 'clamp(2.5rem, 7vw, 5rem)',
                        lineHeight: '1.1',
                        background: 'linear-gradient(135deg, #E6C76E 0%, #FFE5B4 50%, #E6C76E 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        marginBottom: '2rem',
                        letterSpacing: '-0.02em',
                      }}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      The Goddesses Awaken.
                    </motion.h2>

                    <motion.p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                        lineHeight: '1.8',
                        color: 'rgba(230, 199, 110, 0.9)',
                        letterSpacing: '0.02em',
                        maxWidth: '700px',
                        margin: '0 auto',
                      }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    >
                      When balance breaks, the divine feminine rises.
                    </motion.p>

                    {/* Silhouette Placeholder */}
                    <motion.div
                      className="mt-16 relative"
                      style={{
                        height: '300px',
                        background: 'radial-gradient(ellipse at center, rgba(230, 199, 110, 0.1) 0%, transparent 70%)',
                      }}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.6 }}
                    >
                      {/* Three goddess silhouettes - represented by glowing circles */}
                      <div className="absolute inset-0 flex items-center justify-center gap-8">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            className="relative"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.8 + i * 0.2 }}
                          >
                            {/* Goddess figure - simplified */}
                            <div
                              className="relative"
                              style={{
                                width: '100px',
                                height: '180px',
                              }}
                            >
                              {/* Head */}
                              <motion.div
                                className="absolute top-0 left-1/2 -translate-x-1/2"
                                style={{
                                  width: '40px',
                                  height: '40px',
                                  borderRadius: '50%',
                                  background: `rgba(230, 199, 110, ${0.2 + i * 0.1})`,
                                  boxShadow: '0 0 30px rgba(230, 199, 110, 0.6)',
                                  border: '1px solid rgba(230, 199, 110, 0.4)',
                                }}
                                animate={{
                                  boxShadow: [
                                    '0 0 30px rgba(230, 199, 110, 0.6)',
                                    '0 0 50px rgba(230, 199, 110, 0.9)',
                                    '0 0 30px rgba(230, 199, 110, 0.6)',
                                  ],
                                }}
                                transition={{
                                  duration: 3,
                                  repeat: Infinity,
                                  ease: 'easeInOut',
                                  delay: i * 0.5,
                                }}
                              />
                              
                              {/* Body */}
                              <div
                                className="absolute top-12 left-1/2 -translate-x-1/2"
                                style={{
                                  width: '60px',
                                  height: '120px',
                                  background: `linear-gradient(180deg, rgba(230, 199, 110, ${0.15 + i * 0.05}) 0%, rgba(230, 199, 110, 0.05) 100%)`,
                                  clipPath: 'polygon(30% 0%, 70% 0%, 100% 100%, 0% 100%)',
                                  filter: 'blur(2px)',
                                }}
                              />

                              {/* Aura */}
                              <motion.div
                                className="absolute inset-0"
                                style={{
                                  background: 'radial-gradient(circle, rgba(230, 199, 110, 0.2) 0%, transparent 70%)',
                                  filter: 'blur(10px)',
                                }}
                                animate={{
                                  scale: [1, 1.2, 1],
                                  opacity: [0.3, 0.6, 0.3],
                                }}
                                transition={{
                                  duration: 4,
                                  repeat: Infinity,
                                  ease: 'easeInOut',
                                  delay: i * 0.7,
                                }}
                              />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.section>

                {/* Scene 2 - The Battle */}
                <motion.section
                  className="min-h-screen flex flex-col items-center justify-center relative mb-24"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Crimson Glow */}
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: 'radial-gradient(circle at 50% 50%, rgba(199, 91, 57, 0.2) 0%, transparent 60%)',
                    }}
                    animate={{
                      opacity: [0.4, 0.7, 0.4],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10 text-center max-w-4xl">
                    <motion.h2
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 'clamp(2.5rem, 7vw, 5rem)',
                        lineHeight: '1.1',
                        background: 'linear-gradient(135deg, #C75B39 0%, #E6C76E 50%, #C75B39 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        marginBottom: '2rem',
                        letterSpacing: '-0.02em',
                      }}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      Chaos Meets Creation.
                    </motion.h2>

                    <motion.p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                        lineHeight: '1.8',
                        color: 'rgba(230, 199, 110, 0.9)',
                        letterSpacing: '0.02em',
                        maxWidth: '700px',
                        margin: '0 auto',
                      }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    >
                      Demons of greed, doubt, and rage challenge the forces of Shakti.
                    </motion.p>

                    {/* Battle Scene Placeholder */}
                    <motion.div
                      className="mt-16 relative"
                      style={{
                        height: '400px',
                      }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.6 }}
                    >
                      {/* Left side - Asuras (demons) */}
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={`asura-${i}`}
                            className="mb-6"
                            style={{
                              width: '80px',
                              height: '80px',
                              marginLeft: `${i * 20}px`,
                              background: 'radial-gradient(circle, rgba(199, 91, 57, 0.3) 0%, transparent 70%)',
                              borderRadius: '50%',
                              border: '2px solid rgba(199, 91, 57, 0.5)',
                              boxShadow: '0 0 30px rgba(199, 91, 57, 0.6)',
                            }}
                            animate={{
                              x: [0, 20, 0],
                              scale: [1, 1.1, 1],
                            }}
                            transition={{
                              duration: 2 + i * 0.5,
                              repeat: Infinity,
                              ease: 'easeInOut',
                              delay: i * 0.3,
                            }}
                          />
                        ))}
                      </div>

                      {/* Right side - Shakti (goddesses) */}
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={`shakti-${i}`}
                            className="mb-6 ml-auto"
                            style={{
                              width: '80px',
                              height: '80px',
                              marginRight: `${i * 20}px`,
                              background: 'radial-gradient(circle, rgba(230, 199, 110, 0.4) 0%, transparent 70%)',
                              borderRadius: '50%',
                              border: '2px solid rgba(230, 199, 110, 0.6)',
                              boxShadow: '0 0 30px rgba(230, 199, 110, 0.8)',
                            }}
                            animate={{
                              x: [0, -20, 0],
                              scale: [1, 1.1, 1],
                            }}
                            transition={{
                              duration: 2 + i * 0.5,
                              repeat: Infinity,
                              ease: 'easeInOut',
                              delay: i * 0.3,
                            }}
                          />
                        ))}
                      </div>

                      {/* Center - Impact sparks */}
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        {[...Array(8)].map((_, i) => (
                          <motion.div
                            key={`spark-${i}`}
                            className="absolute"
                            style={{
                              width: '4px',
                              height: '40px',
                              background: 'linear-gradient(to bottom, rgba(230, 199, 110, 0.8), transparent)',
                              transformOrigin: 'bottom center',
                              left: '50%',
                              top: '50%',
                            }}
                            animate={{
                              rotate: [i * 45, i * 45],
                              scaleY: [0, 1, 0],
                              opacity: [0, 1, 0],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: 'easeOut',
                              delay: i * 0.1,
                            }}
                          />
                        ))}
                        
                        {/* Center burst */}
                        <motion.div
                          style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '50%',
                            background: 'radial-gradient(circle, rgba(230, 199, 110, 0.6) 0%, transparent 70%)',
                            boxShadow: '0 0 40px rgba(230, 199, 110, 0.8)',
                          }}
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.8, 0.4, 0.8],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                        />
                      </div>
                    </motion.div>
                  </div>
                </motion.section>

                {/* Scene 3 - The Return of Balance */}
                <motion.section
                  className="min-h-screen flex flex-col items-center justify-center relative pb-12"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Golden Glow */}
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: 'radial-gradient(circle at 50% 50%, rgba(230, 199, 110, 0.2) 0%, transparent 60%)',
                    }}
                    animate={{
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10 text-center max-w-4xl">
                    <motion.h2
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 'clamp(2.5rem, 7vw, 5rem)',
                        lineHeight: '1.1',
                        background: 'linear-gradient(135deg, #E6C76E 0%, #FFE5B4 50%, #E6C76E 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        marginBottom: '2rem',
                        letterSpacing: '-0.02em',
                      }}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      Power is Remembered.
                    </motion.h2>

                    <motion.p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                        lineHeight: '1.8',
                        color: 'rgba(230, 199, 110, 0.9)',
                        letterSpacing: '0.02em',
                        maxWidth: '700px',
                        margin: '0 auto 3rem',
                      }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    >
                      Every goddess carries a fragment of the universe's strength—reclaim it.
                    </motion.p>

                    {/* Rotating Mandala */}
                    <motion.div
                      className="relative mx-auto mb-12"
                      style={{
                        width: '300px',
                        height: '300px',
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.6 }}
                    >
                      {/* Outer mandala ring */}
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: 'radial-gradient(circle, transparent 45%, rgba(230, 199, 110, 0.3) 50%, transparent 55%)',
                          border: '2px solid rgba(230, 199, 110, 0.4)',
                          boxShadow: '0 0 60px rgba(230, 199, 110, 0.5), inset 0 0 60px rgba(230, 199, 110, 0.2)',
                        }}
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 30,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      >
                        {/* Mandala petals */}
                        {[...Array(8)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute"
                            style={{
                              width: '40px',
                              height: '80px',
                              left: '50%',
                              top: '50%',
                              marginLeft: '-20px',
                              marginTop: '-40px',
                              transformOrigin: '20px 150px',
                              transform: `rotate(${i * 45}deg)`,
                            }}
                          >
                            <div
                              style={{
                                width: '40px',
                                height: '40px',
                                background: 'rgba(230, 199, 110, 0.2)',
                                borderRadius: '50% 50% 0 50%',
                                border: '1px solid rgba(230, 199, 110, 0.4)',
                              }}
                            />
                          </div>
                        ))}
                      </motion.div>

                      {/* Middle ring */}
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{
                          transform: 'scale(0.7)',
                          background: 'radial-gradient(circle, transparent 40%, rgba(230, 199, 110, 0.2) 50%, transparent 60%)',
                          border: '2px solid rgba(230, 199, 110, 0.3)',
                        }}
                        animate={{
                          rotate: [360, 0],
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      />

                      {/* Inner glow */}
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{
                          transform: 'scale(0.4)',
                          background: 'radial-gradient(circle, rgba(230, 199, 110, 0.6) 0%, rgba(230, 199, 110, 0.3) 50%, transparent 70%)',
                          boxShadow: '0 0 80px rgba(230, 199, 110, 0.8)',
                        }}
                        animate={{
                          scale: [0.4, 0.45, 0.4],
                          opacity: [0.7, 1, 0.7],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      />
                    </motion.div>

                    {/* CTA Button */}
                    <motion.button
                      className="px-12 py-5"
                      style={{
                        background: 'linear-gradient(135deg, rgba(230, 199, 110, 0.2) 0%, rgba(230, 199, 110, 0.3) 100%)',
                        color: '#E6C76E',
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '1.125rem',
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        borderRadius: '3rem',
                        border: '2px solid rgba(230, 199, 110, 0.5)',
                        cursor: 'pointer',
                        boxShadow: '0 0 30px rgba(230, 199, 110, 0.4)',
                      }}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: '0 0 50px rgba(230, 199, 110, 0.7)',
                        background: 'linear-gradient(135deg, rgba(230, 199, 110, 0.3) 0%, rgba(230, 199, 110, 0.4) 100%)',
                      }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 1 }}
                    >
                      Enter the Universe — Coming Soon
                    </motion.button>
                  </div>
                </motion.section>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
