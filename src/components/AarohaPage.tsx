import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import React,{ useRef } from 'react';
import { useState } from 'react';
interface AarohaPageProps {
  onNavigate?: (page: 'home' | 'data' | 'creative') => void;
}

export function AarohaPage({ onNavigate }: AarohaPageProps = {}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.6]);
  const circleScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
// state
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");
const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbw-QkJSWf1q2-qNMgHRMYpNucYLBn2PQXCalB789m_SRuKOPbxCcMFDtu2px0SD3o5CbA/exec";

// submit handler (GET -> no CORS, no cookies required)
const submitEmail = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    setMessage("Please enter a valid email.");
    return;
  }
  try {
    // Fire a GET request that Apps Script will treat like doGet -> doPost
    await fetch(`${SCRIPT_URL}?email=${encodeURIComponent(email)}`, {
      method: "GET",
      mode: "no-cors",         // opaque is fine; we don't need the body
      cache: "no-cache",
    });

    setMessage("You're on the list! 🎉");
    setEmail("");
  } catch (err) {
    console.error(err);
    setMessage("Something went wrong. Try again?");
  }
};


  return (
    <div 
      ref={containerRef}
      className="min-h-screen relative"
      style={{
        background: 'linear-gradient(180deg, #FDF9F5 0%, #E8D5C4 40%, #DCC4B4 70%, #E8C4A0 100%)',
      }}
    >
      {/* Back Button */}
      <motion.button
        onClick={() => onNavigate?.('creative')}
        className="fixed top-4 sm:top-6 md:top-8 left-4 sm:left-6 md:left-8 z-50 flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/60 backdrop-blur-md hover:bg-white/80 transition-colors"
        style={{
          border: '1px solid rgba(232, 196, 160, 0.3)',
          fontFamily: "'Inter', sans-serif",
          fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
          color: '#5C4A42',
          borderRadius: '2rem',
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
        {/* Circular Aura - Breathing Animation */}
        <motion.div
          className="absolute"
          style={{
            width: '600px',
            height: '600px',
            left: '50%',
            top: '50%',
            x: '-50%',
            y: '-50%',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(156, 175, 136, 0.25) 0%, rgba(232, 196, 160, 0.15) 40%, transparent 70%)',
            filter: 'blur(60px)',
            scale: circleScale,
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Secondary Aura */}
        <motion.div
          className="absolute"
          style={{
            width: '800px',
            height: '800px',
            left: '50%',
            top: '50%',
            x: '-50%',
            y: '-50%',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(200, 104, 82, 0.15) 0%, transparent 60%)',
            filter: 'blur(80px)',
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />

        {/* Floating Organic Shapes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[
            { size: 200, top: '10%', left: '15%', delay: 0, color: 'rgba(156, 175, 136, 0.08)' },
            { size: 150, top: '60%', right: '10%', delay: 2, color: 'rgba(232, 196, 160, 0.08)' },
            { size: 180, bottom: '15%', left: '20%', delay: 4, color: 'rgba(200, 104, 82, 0.06)' },
          ].map((shape, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${shape.size}px`,
                height: `${shape.size}px`,
                top: shape.top,
                bottom: shape.bottom,
                left: shape.left,
                right: shape.right,
                background: shape.color,
                filter: 'blur(40px)',
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, 15, 0],
                scale: [1, 1.1, 1],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: shape.delay,
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
              fontSize: 'clamp(3rem, 12vw, 10rem)',
              letterSpacing: '-0.03em',
              lineHeight: '0.95',
              color: '#5C4A42',
              marginBottom: 'clamp(1.5rem, 4vw, 2rem)',
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            Aaroha.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
              lineHeight: '1.7',
              color: '#7A6A62',
              letterSpacing: '0.01em',
              maxWidth: '600px',
              margin: '0 auto',
              padding: '0 1rem',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Mindful eating powered by AI and reflection.
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            className="mx-auto mt-12"
            style={{
              width: '60px',
              height: '2px',
              background: 'linear-gradient(to right, transparent, #9CAF88, transparent)',
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
          <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-[#9CAF88]/40 to-transparent" />
        </motion.div>
      </section>

      {/* Concept Block - Poetic Manifesto */}
      <section className="py-32 px-6 relative">
        {/* Subtle overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, rgba(253, 249, 245, 0.6) 0%, rgba(232, 213, 196, 0.4) 50%, rgba(253, 249, 245, 0.6) 100%)',
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
          <div className="space-y-16">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                  lineHeight: '1.6',
                  color: '#5C4A42',
                  letterSpacing: '-0.01em',
                }}
              >
                Aaroha is a mindful-eating movement — a diary that listens to what you eat and how you feel.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                  lineHeight: '1.6',
                  color: '#5C4A42',
                  letterSpacing: '-0.01em',
                }}
              >
                Built with AI and reflection, it helps people slow down, notice patterns, and rediscover joy in everyday meals.
              </p>
            </motion.div>
          </div>

          {/* Mood Words */}
          <motion.div
            className="mt-20 flex justify-center items-center gap-6 flex-wrap"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {['Reflect', 'Nourish', 'Connect'].map((word, index) => (
              <motion.span
                key={word}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.875rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#9CAF88',
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                {word}
                {index < 2 && <span className="mx-4" style={{ color: '#E8C4A0' }}>•</span>}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Visual Placeholder */}
      <section className="py-32 px-6">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Rounded Rectangle Placeholder */}
          <div
            className="relative overflow-hidden"
            style={{
              aspectRatio: '16 / 10',
              borderRadius: '2rem',
              background: 'linear-gradient(135deg, rgba(156, 175, 136, 0.15) 0%, rgba(232, 196, 160, 0.2) 100%)',
              border: '1px solid rgba(156, 175, 136, 0.2)',
            }}
          >
            {/* Watercolor Texture Overlay */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(circle at 30% 40%, rgba(200, 104, 82, 0.1) 0%, transparent 50%)',
              }}
              animate={{
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <motion.div
                className="text-center"
                animate={{
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <p
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                    color: '#7A6A62',
                    letterSpacing: '-0.01em',
                    marginBottom: '1rem',
                  }}
                >
                  Preview Coming Soon
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.9375rem',
                    color: '#9CAF88',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                  }}
                >
                  Product Visuals in Development
                </p>
              </motion.div>
            </div>

            {/* Decorative Circles */}
            <div className="absolute inset-0 pointer-events-none">
              <motion.div
                className="absolute rounded-full"
                style={{
                  width: '120px',
                  height: '120px',
                  top: '10%',
                  left: '15%',
                  background: 'rgba(156, 175, 136, 0.1)',
                  filter: 'blur(30px)',
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <motion.div
                className="absolute rounded-full"
                style={{
                  width: '100px',
                  height: '100px',
                  bottom: '15%',
                  right: '20%',
                  background: 'rgba(232, 196, 160, 0.15)',
                  filter: 'blur(30px)',
                }}
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-24 px-6">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Gradient Box */}
          <div
            className="px-12 py-10"
            style={{
              background: 'linear-gradient(135deg, rgba(156, 175, 136, 0.15) 0%, rgba(232, 196, 160, 0.15) 100%)',
              border: '1px solid rgba(156, 175, 136, 0.25)',
              borderRadius: '1.5rem',
            }}
          >
            <p
              className="mb-6"
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                color: '#5C4A42',
                letterSpacing: '-0.01em',
                lineHeight: '1.5',
              }}
            >
              Coming Soon — A mindful food diary for the modern world.
            </p>
<form onSubmit={submitEmail} className="flex flex-col sm:flex-row items-center gap-3 justify-center">
  <input
    type="email"
    name="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
    placeholder="Enter your email"
    className="px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9CAF88] w-full sm:w-auto"
  />

  <motion.button
    type="submit"
    className="px-8 py-3 text-white rounded-full"
    style={{
      background: "linear-gradient(135deg, #9CAF88 0%, #8A9E7A 100%)",
      fontFamily: "'Inter', sans-serif",
      fontSize: "0.9375rem",
      letterSpacing: "0.03em",
      border: "none",
      cursor: "pointer",
    }}
    whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(156, 175, 136, 0.3)" }}
    whileTap={{ scale: 0.98 }}
  >
    Notify Me
  </motion.button>
</form>

{message && <p className="text-sm text-gray-600 mt-2">{message}</p>}
</div>  
     
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-32 px-6 relative">
        {/* Subtle gradient overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, rgba(232, 196, 160, 0.2) 100%)',
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
              color: '#5C4A42',
              fontStyle: 'italic',
            }}
          >
            "We don't just track what we eat — we learn why."
          </p>

          {/* Decorative Divider */}
          <div
            className="mx-auto mb-12"
            style={{
              width: '100px',
              height: '1px',
              background: 'linear-gradient(to right, transparent, #9CAF88, transparent)',
            }}
          />

          {/* Back Link */}
          <motion.button
            onClick={() => onNavigate?.('creative')}
            className="inline-flex items-center gap-2 px-6 py-3 hover:bg-white/40 transition-colors"
            style={{
              border: '1px solid rgba(156, 175, 136, 0.3)',
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.875rem',
              color: '#7A6A62',
              letterSpacing: '0.02em',
              borderRadius: '2rem',
              background: 'rgba(255, 255, 255, 0.2)',
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
    </div>
  );
}
