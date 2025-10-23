import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

interface GrandCirclePageProps {
  onNavigate?: (page: 'home' | 'data' | 'creative') => void;
}

interface TimelineBlock {
  dateRange: string;
  title: string;
  description: string;
  keywords: string[];
}

export function GrandCirclePage({ onNavigate }: GrandCirclePageProps = {}) {
  const blocks: TimelineBlock[] = [
    {
      dateRange: "Jan – Jun 2023",
      title: "Automating the Foundations",
      description: "Began in the Customer Service BI team automating daily and weekly reports. Resolved major delays and inconsistencies in data sources, improving visibility for leadership and reducing manual work.",
      keywords: ["Data Automation", "Reporting", "SQL", "Business Intelligence"]
    },
    {
      dateRange: "Jun – Dec 2023",
      title: "Defining High-Value Travelers",
      description: "Transitioned to analytics supporting service decisions for high-profile customers. Defined customer tiers using behavioral metrics: time on site (50+ min), trips taken (10+), and average spend. Used these segments to guide staffing and improve specialized service handling.",
      keywords: ["Segmentation", "Customer Analytics", "Service Strategy"]
    },
    {
      dateRange: "Jan 2024 – Jun 2024",
      title: "Call Analytics — Gemini Insights",
      description: "Applied Gemini LLM call analysis to identify pain points in service conversations. Helped improve call handling, reduce repeat callers, and enhance agent performance through better wrap-up and tagging insights.",
      keywords: ["LLM", "Call Analytics", "Operations Efficiency"]
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
            GRAND CIRCLE TRAVEL
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
            Business Intelligence Specialist — Customer Service Analytics
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
            Evolving from automation to AI insights for better service and staffing decisions.
          </motion.p>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Pull Quote at Top */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div
            className="py-8 px-10"
            style={{
              borderTop: '1px solid #333333',
              borderBottom: '1px solid #333333',
              background: '#F9F7F5',
            }}
          >
            <p
              className="text-center"
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: '1.25rem',
                lineHeight: '1.7',
                color: '#333333',
                fontStyle: 'italic',
                letterSpacing: '-0.01em',
              }}
            >
              "Better service starts with understanding — every insight begins with listening."
            </p>
          </div>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div
            className="absolute left-0 top-0 bottom-0 w-[2px] hidden md:block"
            style={{
              background: 'linear-gradient(to bottom, #DCD2C8 0%, #DCD2C8 90%, transparent 100%)',
            }}
          />

          {/* Timeline Blocks */}
          <div className="space-y-16">
            {blocks.map((block, index) => (
              <motion.article
                key={index}
                className="relative md:pl-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
              >
                {/* Timeline Dot */}
                <div
                  className="absolute left-[-7px] top-2 w-4 h-4 rounded-full hidden md:block"
                  style={{
                    background: '#333333',
                    border: '2px solid #FDFBF9',
                  }}
                />

                {/* Content Block */}
                <div
                  className="pb-8 px-8 pt-6"
                  style={{
                    background: 'linear-gradient(135deg, #FDFBF9 0%, #F9F7F5 100%)',
                    border: '1px solid #E8E4DF',
                  }}
                >
                  {/* Date Range */}
                  <div
                    className="mb-4 inline-block px-4 py-1"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.75rem',
                      color: '#666666',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      background: '#FDFBF9',
                      border: '1px solid #DCD2C8',
                    }}
                  >
                    {block.dateRange}
                  </div>

                  {/* Title */}
                  <h2
                    className="mb-5"
                    style={{
                      fontFamily: "'DM Serif Display', serif",
                      fontSize: '1.75rem',
                      lineHeight: '1.25',
                      color: '#333333',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {block.title}
                  </h2>

                  {/* Description */}
                  <p
                    className="mb-6"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      color: '#555555',
                      textAlign: 'justify',
                    }}
                  >
                    {block.description}
                  </p>

                  {/* Keywords with separators */}
                  <div className="flex flex-wrap gap-3">
                    {block.keywords.map((keyword, i) => (
                      <div
                        key={i}
                        className="px-3 py-1"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '0.75rem',
                          color: '#999999',
                          letterSpacing: '0.02em',
                          background: '#FDFBF9',
                          border: '1px solid #E8E4DF',
                        }}
                      >
                        {keyword}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Connecting line to next section */}
                {index < blocks.length - 1 && (
                  <div
                    className="absolute left-0 bottom-[-32px] w-[2px] h-8 hidden md:block"
                    style={{
                      background: '#DCD2C8',
                    }}
                  />
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-4xl mx-auto px-6 pb-20">
        <div
          className="h-[1px] mb-12"
          style={{
            background: 'linear-gradient(to right, transparent 0%, #DCD2C8 20%, #DCD2C8 80%, transparent 100%)',
          }}
        />
        
        <div className="flex flex-col items-center gap-6">
          <p
            className="text-center"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: '0.9375rem',
              color: '#999999',
              letterSpacing: '0.02em',
            }}
          >
            End of Grand Circle Travel Section
          </p>
          
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
