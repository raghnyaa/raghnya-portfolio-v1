import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

interface WayfairPageProps {
  onNavigate?: (page: 'home' | 'data' | 'creative') => void;
}

interface TimelineBlock {
  dateRange: string;
  title: string;
  description: string;
  keywords: string[];
}

export function WayfairPage({ onNavigate }: WayfairPageProps = {}) {
  const blocks: TimelineBlock[] = [
    {
      dateRange: "Dec–Apr",
      title: "Gemini Call Listening",
      description: "Used LLM tagging to analyze customer call transcripts and identify major return pain points.",
      keywords: ["LLM Tagging", "Call Analytics", "Customer Insights"]
    },
    {
      dateRange: "May–Jul",
      title: "Incident Returns Optimization",
      description: "Refined return-policy rules and compliance metrics using data frameworks.",
      keywords: ["SQL", "Returns Policy", "Process Analytics"]
    },
    {
      dateRange: "Jul–Sep",
      title: "FedEx Pickup Pilot",
      description: "Partnered with FedEx to analyze pickup success and improve labeling and logistics.",
      keywords: ["Cross-functional", "Operations", "Customer Experience"]
    },
    {
      dateRange: "Oct–Present",
      title: "Junk Detection Model",
      description: "Building an AI vision model to classify items as \"junk\" or \"resellable.\"",
      keywords: ["LLM Vision", "AI Classification", "Reverse Logistics"]
    }
  ];

  return (
    <div 
      className="min-h-screen"
      style={{
        background: '#FDFBF9',
        color: '#333333',
      }}
    >
      {/* Back Button */}
      <motion.button
        onClick={() => onNavigate?.('data')}
        className="fixed top-8 left-8 z-50 flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm hover:bg-white transition-colors"
        style={{
          border: '1px solid #DCD2C8',
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.875rem',
          color: '#333333',
        }}
        whileHover={{ x: -4 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Overview
      </motion.button>

      {/* Masthead */}
      <motion.header
        className="border-b pt-24 pb-12 px-6"
        style={{
          borderColor: '#DCD2C8',
          borderBottomWidth: '1px',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Main Title */}
          <motion.h1
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              letterSpacing: '0.02em',
              textTransform: 'uppercase',
              color: '#333333',
              marginBottom: '0.75rem',
              lineHeight: '1.1',
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            WAYFAIR 
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1rem',
              color: '#666666',
              letterSpacing: '0.01em',
              marginBottom: '0.5rem',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Operations Business Analyst — Incident Returns Analytics
          </motion.p>

          {/* Tagline */}
          <motion.p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.875rem',
              color: '#999999',
              letterSpacing: '0.02em',
              fontStyle: 'italic',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Stories from data and applied AI.
          </motion.p>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Article Blocks - Two Column Grid */}
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="grid md:grid-cols-2 gap-x-10 gap-y-12">
              {blocks.map((block, index) => (
                <motion.article
                  key={index}
                  className="relative pb-8"
                  style={{
                    borderBottom: '1px solid #E8E4DF',
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Date Range */}
                  <div
                    className="mb-3"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.75rem',
                      color: '#999999',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {block.dateRange}
                  </div>

                  {/* Title */}
                  <h2
                    className="mb-3"
                    style={{
                      fontFamily: "'DM Serif Display', serif",
                      fontSize: '1.375rem',
                      lineHeight: '1.3',
                      color: '#333333',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {block.title}
                  </h2>

                  {/* Description */}
                  <p
                    className="mb-4"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.9375rem',
                      lineHeight: '1.6',
                      color: '#555555',
                    }}
                  >
                    {block.description}
                  </p>

                  {/* Keywords */}
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.75rem',
                      color: '#999999',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {block.keywords.join(' • ')}
                  </div>

                  {/* Small square decoration */}
                  <div
                    className="absolute bottom-0 left-0 w-2 h-2"
                    style={{
                      background: '#DCD2C8',
                    }}
                  />
                </motion.article>
              ))}
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.aside
            className="lg:col-span-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="lg:sticky lg:top-24">
              {/* Pull Quote */}
              <div
                className="p-8"
                style={{
                  borderLeft: '2px solid #333333',
                  background: '#F9F7F5',
                }}
              >
                <p
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: '1.125rem',
                    lineHeight: '1.6',
                    color: '#333333',
                    fontStyle: 'italic',
                    letterSpacing: '-0.01em',
                  }}
                >
                  "Each initiative built on the last — listening, optimizing, automating."
                </p>
              </div>

              {/* Furniture Industry Art */}
              <div className="mt-12 relative h-80 overflow-hidden">
                {/* Abstract Furniture Composition */}
                <svg
                  viewBox="0 0 300 320"
                  className="w-full h-full"
                  style={{ opacity: 0.4 }}
                >
                  {/* Chair silhouette */}
                  <g transform="translate(40, 40)">
                    <rect x="20" y="0" width="40" height="8" fill="#A0927D" />
                    <rect x="22" y="8" width="36" height="60" fill="#C4B5A0" />
                    <rect x="20" y="68" width="8" height="50" fill="#8B7D6B" />
                    <rect x="52" y="68" width="8" height="50" fill="#8B7D6B" />
                    <rect x="20" y="118" width="40" height="8" fill="#A0927D" />
                  </g>

                  {/* Table silhouette */}
                  <g transform="translate(150, 100)">
                    <rect x="0" y="0" width="90" height="12" fill="#B8A990" />
                    <rect x="5" y="12" width="10" height="60" fill="#9B8B76" />
                    <rect x="75" y="12" width="10" height="60" fill="#9B8B76" />
                  </g>

                  {/* Lamp abstract */}
                  <g transform="translate(50, 180)">
                    <circle cx="25" cy="15" r="18" fill="#DCD2C8" opacity="0.6" />
                    <rect x="23" y="33" width="4" height="35" fill="#8B7D6B" />
                    <ellipse cx="25" cy="68" rx="20" ry="6" fill="#A0927D" />
                  </g>

                  {/* Sofa/couch outline */}
                  <g transform="translate(140, 200)">
                    <rect x="0" y="20" width="12" height="45" fill="#C4B5A0" />
                    <rect x="12" y="30" width="85" height="35" fill="#D4C8B8" />
                    <rect x="97" y="20" width="12" height="45" fill="#C4B5A0" />
                    <rect x="12" y="65" width="85" height="12" fill="#B8A990" />
                  </g>

                  {/* Decorative rectangles suggesting home layout */}
                  <rect x="10" y="10" width="80" height="2" fill="#DCD2C8" opacity="0.5" />
                  <rect x="200" y="50" width="2" height="60" fill="#DCD2C8" opacity="0.5" />
                  <rect x="120" y="280" width="100" height="2" fill="#DCD2C8" opacity="0.5" />
                  
                  {/* Small accent squares */}
                  <rect x="250" y="20" width="8" height="8" fill="#8B7D6B" opacity="0.3" />
                  <rect x="270" y="35" width="6" height="6" fill="#A0927D" opacity="0.3" />
                  <rect x="15" y="270" width="10" height="10" fill="#B8A990" opacity="0.3" />
                </svg>

                {/* Overlay text */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-4"
                  style={{
                    background: 'linear-gradient(to top, rgba(253, 251, 249, 0.9) 0%, transparent 100%)',
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.75rem',
                      color: '#999999',
                      letterSpacing: '0.05em',
                      textAlign: 'center',
                      textTransform: 'uppercase',
                    }}
                  >
                    Home • Furniture • Living
                  </p>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div
          className="h-[1px] mb-12"
          style={{
            background: 'linear-gradient(to right, transparent 0%, #DCD2C8 20%, #DCD2C8 80%, transparent 100%)',
          }}
        />
        
        <div className="flex flex-col items-center gap-6">
         
          
          <motion.button
            onClick={() => onNavigate?.('data')}
            className="flex items-center gap-2 px-6 py-3 bg-white hover:bg-[#F9F7F5] transition-colors"
            style={{
              border: '1px solid #DCD2C8',
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.875rem',
              color: '#333333',
              letterSpacing: '0.02em',
            }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Analytics & AI Systems
          </motion.button>
        </div>
      </div>
    </div>
  );
}
