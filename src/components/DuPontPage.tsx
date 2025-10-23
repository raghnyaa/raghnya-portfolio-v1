import { motion } from 'motion/react';
import { ArrowLeft, Bell, Globe, Cpu } from 'lucide-react';

interface DuPontPageProps {
  onNavigate?: (page: 'home' | 'data' | 'creative') => void;
}

interface Section {
  number: string;
  icon: 'bell' | 'globe' | 'cpu' | 'none';
  title: string;
  content: string[];
  keywords?: string[];
}

export function DuPontPage({ onNavigate }: DuPontPageProps = {}) {
  const sections: Section[] = [
    {
      number: "1️⃣",
      icon: "globe",
      title: "The Challenge — Global Safety at Scale",
      content: [
        "Supported DuPont's manufacturing safety division across 100+ sites worldwide.",
        "Goal: unify and visualize safety and hazard data across geographies in real time."
      ],
      keywords: []
    },
    {
      number: "2️⃣",
      icon: "bell",
      title: "The Solution — Real-Time Incident Monitoring System",
      content: [
        "Designed a Tableau-based dashboard for safety teams to track incidents and hazards as they occurred.",
        "Integrated automated alerts that notified managers and supervisors immediately upon detection.",
        "Over time, developed analytical layers to classify hazards by severity and category."
      ],
      keywords: ["Tableau", "Real-Time Dashboards", "Safety Analytics"]
    },
    {
      number: "3️⃣",
      icon: "cpu",
      title: "The Innovation — IoT and Early AI Experiments",
      content: [
        "Collaborated on pilot integrations using Raspberry Pi–based video recognition tools to detect visual hazard cues on-site.",
        "Proposed early frameworks for installing IoT sensors and streamlining incident detection — pre-generative-AI era."
      ],
      keywords: ["IoT", "Video Analytics", "Predictive Safety"]
    },
    {
      number: "4️⃣",
      icon: "none",
      title: "The Impact — Global Accessibility and Automation",
      content: [
        "Automated translation of dashboards into 10+ languages using Python scripting.",
        "Enabled global usage of safety data tools and reduced incident monitoring delays by over 80%.",
        "This democratized data visibility for managers worldwide."
      ],
      keywords: ["Automation", "Localization", "Global Safety Systems"]
    }
  ];

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'bell':
        return <Bell className="w-5 h-5" />;
      case 'globe':
        return <Globe className="w-5 h-5" />;
      case 'cpu':
        return <Cpu className="w-5 h-5" />;
      default:
        return null;
    }
  };

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
          borderBottomWidth: '2px',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-3xl mx-auto">
          {/* Main Title */}
          <motion.h1
            className="mb-4"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              letterSpacing: '0.02em',
              textTransform: 'uppercase',
              color: '#333333',
              lineHeight: '1.1',
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            DUPONT | ANALYTICS & AI SYSTEMS
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.125rem',
              color: '#666666',
              letterSpacing: '0.01em',
              marginBottom: '0.75rem',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Analytics Consultant — Safety & IoT Solutions
          </motion.p>

          {/* Tagline */}
          <motion.p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.9375rem',
              color: '#999999',
              letterSpacing: '0.02em',
              fontStyle: 'italic',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Building global data systems for safety, visibility, and real-time response.
          </motion.p>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Article Sections */}
        <article>
          {sections.map((section, index) => (
            <motion.section
              key={index}
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Section Header */}
              <div className="flex items-start gap-4 mb-6">
                {/* Icon */}
                {section.icon !== 'none' && (
                  <div
                    className="mt-1 p-2"
                    style={{
                      background: '#F9F7F5',
                      border: '1px solid #DCD2C8',
                      color: '#8B7D6B',
                    }}
                  >
                    {getIcon(section.icon)}
                  </div>
                )}

                {/* Title */}
                <div className="flex-1">
                  <h2
                    style={{
                      fontFamily: "'DM Serif Display', serif",
                      fontSize: '1.75rem',
                      lineHeight: '1.3',
                      color: '#333333',
                      letterSpacing: '-0.01em',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {section.number} {section.title}
                  </h2>
                  
                  {/* Top border accent */}
                  <div
                    className="h-[2px] w-20"
                    style={{
                      background: '#333333',
                    }}
                  />
                </div>
              </div>

              {/* Content Paragraphs */}
              <div className="space-y-4 mb-6">
                {section.content.map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '1rem',
                      lineHeight: '1.8',
                      color: '#555555',
                      textAlign: 'justify',
                    }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Keywords */}
              {section.keywords && section.keywords.length > 0 && (
                <div
                  className="p-4 border-l-2"
                  style={{
                    borderColor: '#DCD2C8',
                    background: '#F9F7F5',
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.875rem',
                      color: '#999999',
                      letterSpacing: '0.02em',
                    }}
                  >
                    <span style={{ color: '#666666' }}>Keywords:</span> {section.keywords.join(' • ')}
                  </p>
                </div>
              )}

              {/* Section Divider */}
              {index < sections.length - 1 && (
                <div
                  className="mt-12 h-[1px]"
                  style={{
                    background: 'linear-gradient(to right, transparent 0%, #DCD2C8 20%, #DCD2C8 80%, transparent 100%)',
                  }}
                />
              )}
            </motion.section>
          ))}
        </article>

        {/* Pull Quote */}
        <motion.div
          className="my-20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="p-10 border-l-4"
            style={{
              borderColor: '#333333',
              background: '#F9F7F5',
            }}
          >
            <p
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: '1.5rem',
                lineHeight: '1.6',
                color: '#333333',
                fontStyle: 'italic',
                letterSpacing: '-0.01em',
              }}
            >
              "Before AI was mainstream, we built an IoT-powered safety net — connecting data, people, and accountability."
            </p>
          </div>
        </motion.div>

        {/* Decorative Grid Pattern */}
        <motion.div
          className="my-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="h-32"
            style={{
              backgroundImage: `
                linear-gradient(to right, #DCD2C8 1px, transparent 1px),
                linear-gradient(to bottom, #DCD2C8 1px, transparent 1px)
              `,
              backgroundSize: '32px 32px',
              opacity: 0.2,
            }}
          />
        </motion.div>
      </div>

      {/* Footer */}
      <div className="max-w-3xl mx-auto px-6 pb-20">
        <div
          className="h-[2px] mb-12"
          style={{
            background: 'linear-gradient(to right, transparent 0%, #333333 20%, #333333 80%, transparent 100%)',
          }}
        />
        
        <div className="flex flex-col items-center gap-6">
          <p
            className="text-center"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: '1rem',
              color: '#999999',
              letterSpacing: '0.02em',
            }}
          >
            End of DuPont Section
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
