import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

interface DailyBeastPageProps {
  onNavigate?: (page: 'home' | 'data' | 'creative') => void;
}

interface TimelineBlock {
  dateRange: string;
  title: string;
  description: string;
  keywords: string[];
}

export function DailyBeastPage({ onNavigate }: DailyBeastPageProps = {}) {
  const blocks: TimelineBlock[] = [
    {
      dateRange: "Jan – Apr 2021",
      title: "Connecting Revenue and Audience Data",
      description: "Began by merging datasets from Google Ad Manager (GAM) and Google Analytics (GA). Concatenated unique IDs to align customer engagement data (location, traffic source, ad viewed) with revenue information. Provided the foundation for accurate Average Revenue Per User (ARPU) definition and reporting.",
      keywords: ["Data Merging", "GA & GAM Integration", "Revenue Analytics"]
    },
    {
      dateRange: "May – Jul 2021",
      title: "Defining ARPU & Visibility Dashboards",
      description: "Built Looker dashboards to visualize ARPU trends across campaigns and audience segments. Exposed underperforming channels and revenue leak points previously hidden in disconnected data sources. Enabled stakeholders to see the full customer journey from impression to monetization.",
      keywords: ["Looker", "ARPU Visualization", "Cross-Channel Reporting"]
    },
    {
      dateRange: "Aug 2021",
      title: "Optimizing Campaign Performance",
      description: "Analyzed ad performance metrics to identify underperforming segments and redirect spend to high-ROI placements. Improved click-through rates and ad efficiency by ~30%, strengthening revenue forecast accuracy.",
      keywords: ["Campaign Optimization", "Targeting", "Revenue Efficiency"]
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
        <div className="max-w-7xl mx-auto">
          {/* Main Title */}
          <motion.div
            className="mb-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
                color: '#333333',
                lineHeight: '1.1',
                display: 'inline',
              }}
            >
              THE DAILY BEAST{' '}
            </h1>
            <span
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                letterSpacing: '0.02em',
                color: '#999999',
                lineHeight: '1.1',
              }}
            >
              | ANALYTICS & AI SYSTEMS
            </span>
          </motion.div>

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
            Data Analyst — Advertising & Revenue Insights
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
            Building visibility between engagement and monetization.
          </motion.p>
        </div>
      </motion.header>

      {/* Pull Quote Banner */}
      <motion.div
        className="border-b px-6 py-12"
        style={{
          borderColor: '#DCD2C8',
          background: '#F9F7F5',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="max-w-7xl mx-auto">
          <p
            className="text-center"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: '1.5rem',
              lineHeight: '1.6',
              color: '#333333',
              fontStyle: 'italic',
              letterSpacing: '-0.01em',
            }}
          >
            "Data storytelling here meant linking what people watch to what keeps the lights on."
          </p>
        </div>
      </motion.div>

      {/* Main Content - 3 Column Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-3 gap-8">
          {blocks.map((block, index) => (
            <motion.article
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Card Container */}
              <div
                className="h-full flex flex-col"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E8E4DF',
                }}
              >
                {/* Date Header Bar */}
                <div
                  className="px-6 py-4 border-b"
                  style={{
                    borderColor: '#DCD2C8',
                    background: '#F9F7F5',
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.75rem',
                      color: '#666666',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      textAlign: 'center',
                    }}
                  >
                    🗓️ {block.dateRange}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Title */}
                  <h2
                    className="mb-4"
                    style={{
                      fontFamily: "'DM Serif Display', serif",
                      fontSize: '1.5rem',
                      lineHeight: '1.3',
                      color: '#333333',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {block.title}
                  </h2>

                  {/* Description */}
                  <p
                    className="mb-6 flex-1"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.9375rem',
                      lineHeight: '1.7',
                      color: '#555555',
                      textAlign: 'justify',
                    }}
                  >
                    {block.description}
                  </p>

                  {/* Keywords */}
                  <div
                    className="pt-4 border-t"
                    style={{
                      borderColor: '#E8E4DF',
                    }}
                  >
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
                  </div>
                </div>

                {/* Bottom decoration bar */}
                <div
                  className="h-1"
                  style={{
                    background: `linear-gradient(to right, 
                      transparent 0%, 
                      #DCD2C8 ${index * 33}%, 
                      #333333 ${index * 33 + 33}%, 
                      #DCD2C8 ${index * 33 + 66}%, 
                      transparent 100%)`,
                  }}
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
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
            End of Daily Beast Section
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
