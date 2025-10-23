import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface LogoAnimationProps {
  onAnimationComplete: () => void;
}

export function LogoAnimation({ onAnimationComplete }: LogoAnimationProps) {
  const [stage, setStage] = useState<'pulse' | 'emerge' | 'zoom' | 'settle'>('pulse');

  useEffect(() => {
    // Triangle pulse phase (2.5 seconds)
    const pulseTimer = setTimeout(() => {
      setStage('emerge');
    }, 2500);

    // Raghnya emerge phase (1.5 seconds)
    const emergeTimer = setTimeout(() => {
      setStage('zoom');
    }, 4000);

    // Zoom in phase (1.5 seconds)
    const zoomTimer = setTimeout(() => {
      setStage('settle');
    }, 5500);

    // Settle and complete (1.5 seconds)
    const completeTimer = setTimeout(() => {
      onAnimationComplete();
    }, 7000);

    return () => {
      clearTimeout(pulseTimer);
      clearTimeout(emergeTimer);
      clearTimeout(zoomTimer);
      clearTimeout(completeTimer);
    };
  }, [onAnimationComplete]);

  const containerScale = stage === 'pulse' ? 1 : stage === 'emerge' ? 1 : stage === 'zoom' ? 5 : 1;
  const squareScale = 1;

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #FAF8F6 0%, #EDE9E4 100%)',
      }}
    >
      <motion.div 
        className="relative flex items-center justify-center"
        animate={{
          scale: containerScale,
        }}
        transition={{
          scale: {
            duration: stage === 'zoom' ? 1.5 : stage === 'settle' ? 1.5 : 0,
            ease: [0.43, 0.13, 0.23, 0.96],
          },
        }}
      >
        {/* Logo Container */}
        <motion.div
          className="relative"
          animate={{
            y: stage === 'settle' ? -80 : 0,
            opacity: stage === 'settle' ? 0 : 1,
          }}
          transition={{
            y: { 
              duration: 1.5,
              ease: [0.43, 0.13, 0.23, 0.96],
            },
            opacity: {
              duration: 0.8,
              ease: 'easeOut',
            },
          }}
        >
          {/* Circle (Aura) */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{ width: '200px', height: '200px' }}
          >
            <motion.div
              className="w-48 h-48 rounded-full border-4 opacity-25"
              style={{
                borderColor: '#9B8B7E',
              }}
              animate={{
                scale: stage === 'pulse' ? [1, 1.05, 1] : 1,
              }}
              transition={{
                scale: {
                  duration: 2.5,
                  repeat: stage === 'pulse' ? 1 : 0,
                  ease: 'easeInOut',
                },
              }}
            />
          </motion.div>

          {/* Square (Face) */}
          <motion.div
            className="relative flex items-center justify-center"
            style={{ width: '200px', height: '200px' }}
          >
            <motion.div
              className="w-32 h-32"
              style={{
                background: 'linear-gradient(135deg, #FFFFFF 0%, #EDE9E4 50%, #D4C9BD 100%)',
                border: '2px solid #9B8B7E',
              }}
            />

            {/* Triangle (Third Eye) */}
            <motion.div
              className="absolute"
              style={{
                width: 0,
                height: 0,
                borderLeft: '25px solid transparent',
                borderRight: '25px solid transparent',
                borderBottom: '43px solid #2C2622',
                filter: stage === 'pulse' ? 'drop-shadow(0 0 20px rgba(44, 38, 34, 0.5))' : 'drop-shadow(0 0 8px rgba(44, 38, 34, 0.3))',
              }}
              animate={{
                scale: stage === 'pulse' ? [1, 1.2, 1, 1.2, 1] : 1,
              }}
              transition={{
                scale: {
                  duration: 2.5,
                  repeat: stage === 'pulse' ? 0 : 0,
                  ease: 'easeInOut',
                },
              }}
            />

            {/* Triangle Glow */}
            <motion.div
              className="absolute rounded-full"
              style={{
                width: '80px',
                height: '80px',
                background: 'radial-gradient(circle, rgba(155, 139, 126, 0.2) 0%, rgba(155, 139, 126, 0) 70%)',
              }}
              animate={{
                scale: stage === 'pulse' ? [1, 1.5, 1, 1.5, 1] : 1,
                opacity: stage === 'pulse' ? [0.5, 0.9, 0.5, 0.9, 0.5] : 0.5,
              }}
              transition={{
                scale: {
                  duration: 2.5,
                  repeat: stage === 'pulse' ? 0 : 0,
                  ease: 'easeInOut',
                },
                opacity: {
                  duration: 2.5,
                  repeat: stage === 'pulse' ? 0 : 0,
                  ease: 'easeInOut',
                },
              }}
            />
          </motion.div>
        </motion.div>

        {/* Raghnya Text for homepage - fades in during settle in BLACK */}
        <motion.h1
          className="absolute"
          style={{ 
            fontFamily: "'DM Serif Display', serif",
            fontSize: 'clamp(3rem, 10vw, 7rem)',
            letterSpacing: '-0.02em',
            color: '#2C2622',
            top: '20%',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: stage === 'settle' ? 1 : 0,
          }}
          transition={{
            opacity: { duration: 1.5, ease: 'easeInOut' },
          }}
        >
          Raghnya
        </motion.h1>
      </motion.div>

      {/* Expanding overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #FAF8F6 0%, #EDE9E4 100%)',
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: stage === 'settle' ? 1 : 0,
        }}
        transition={{
          duration: 1,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}
