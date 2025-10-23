import { motion } from 'motion/react';
import { Heart, MessageCircle, Send, ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import badmintonPng from './images/badminton.png';
import singPng from './images/sing.png';
import movieVideo from "./videos/movie.mov";
import garnicheJpg from "./images/garniche.jpg";
import danceJpg from "./images/dance.jpg"


interface MovementPageProps {
  onNavigate?: (page: 'home' | 'data' | 'creative') => void;
}

interface Post {
  id: number;
  image?: string;
   video?: string;  // <-- add this line
  caption: string;
  hashtags: string;
}

export function MovementPage({ onNavigate }: MovementPageProps = {}) {
const posts: Post[] = [
  {
    id: 1,
     image: garnicheJpg,
    caption: "Started GarNiche — a kitchen experiment that tasted like home and smelled like ambition.",
    hashtags: "#Entrepreneur #FoodCulture #AarohaRoots"
    ,
  },
  {
    id: 2,
    image: singPng,
    caption: "Trained in Carnatic vocals — where scales feel like meditation and practice is the real performance.",
    hashtags: "#IndianClassical #Voice #Tradition"
  },
  {
    id: 3,
    image: danceJpg,
    caption: "Stage lights, late nights, and too many auditions — sometimes the lead, sometimes the lesson.",
    hashtags: "#Performance #StageLife #Expression"
  },
  {
    id: 4,
   image: badmintonPng,
    caption:"Picked up a racket at 10 and never stopped running. Coached by the best, humbled by every smash." ,
    hashtags: "#Discipline #Flow #Movement"
    
  },
];


  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-12 md:py-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #F5E6D3 0%, #F9F5F0 50%, #FAE8E0 100%)',
      }}
    >
      {/* Back Button */}
      <motion.button
        onClick={() => onNavigate?.('creative')}
        className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 backdrop-blur-md hover:bg-black/10 transition-colors"
        style={{
          border: '1px solid rgba(0, 0, 0, 0.1)',
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.875rem',
          color: '#4A3A31',
          borderRadius: '2rem',
          background: 'rgba(255, 255, 255, 0.6)',
        }}
        whileHover={{ x: -4 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Creative & Product
      </motion.button>

      {/* Decorative Circles */}
      <motion.div
        className="absolute top-20 left-20 rounded-full opacity-30"
        style={{
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, #E8C4A0 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute bottom-20 right-20 rounded-full opacity-30"
        style={{
          width: '250px',
          height: '250px',
          background: 'radial-gradient(circle, #C86852 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Mobile Phone Mockup */}
      <motion.div
        className="relative z-10 w-full max-w-md mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
      >
        {/* Phone Frame */}
        <div
          className="relative overflow-hidden"
          style={{
            aspectRatio: '9 / 19.5',
            borderRadius: '2.5rem',
            background: '#ffffff',
            boxShadow: '0 20px 80px rgba(0, 0, 0, 0.15), inset 0 0 0 12px #1a1a1a, inset 0 0 0 14px #e5e5e5',
            border: '14px solid #1a1a1a',
          }}
        >
          {/* Top Notch */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 z-50"
            style={{
              width: '140px',
              height: '28px',
              background: '#1a1a1a',
              borderBottomLeftRadius: '1rem',
              borderBottomRightRadius: '1rem',
            }}
          />

          {/* Screen Content */}
          <div 
            className="h-full overflow-y-auto overflow-x-hidden"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              background: '#ffffff',
            }}
          >
            {/* Hide scrollbar for webkit browsers */}
            <style>
              {`
                .h-full::-webkit-scrollbar {
                  display: none;
                }
              `}
            </style>

            {/* Instagram Header */}
            <div
              className="sticky top-0 z-40 px-4 py-3"
              style={{
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  {/* Profile Photo */}
                  <div
                    className="flex-shrink-0"
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #E8C4A0 0%, #C86852 100%)',
                      border: '2px solid #ffffff',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                    }}
                  />
                  
                  {/* Username */}
                  <div>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.9375rem',
                        color: '#1a1a1a',
                      }}
                    >
                      @raghnya
                    </p>
                  </div>
                </div>
              </div>

              {/* Stories/Highlights Strip */}
              
            </div>

            {/* Feed Posts */}
            <div className="pb-20">
              {posts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                  style={{
                    marginBottom: '1.5rem',
                  }}
                >
                  {/* Post Header */}
                  <div className="px-4 py-2 flex items-center gap-2">
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #E8C4A0 0%, #C86852 100%)',
                      }}
                    />
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.875rem',
                        color: '#1a1a1a',
                      }}
                    >
                      
                    </p>
                  </div>

                  {/* Post Image */}
                  <div
                    style={{
                      width: '100%',
                      aspectRatio: '1 / 1',
                      background: '#f5f5f5',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <ImageWithFallback
                      src={post.image}
                      alt={`Movement post ${post.id}`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </div>

                  {/* Post Actions */}
                  <div className="px-4 py-3 flex items-center gap-4">
                    <Heart className="w-6 h-6" style={{ color: '#1a1a1a', strokeWidth: 1.5 }} />
                    <MessageCircle className="w-6 h-6" style={{ color: '#1a1a1a', strokeWidth: 1.5 }} />
                    <Send className="w-6 h-6" style={{ color: '#1a1a1a', strokeWidth: 1.5 }} />
                  </div>

                  {/* Likes Count */}
                  <div className="px-4 pb-2">
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.875rem',
                        color: '#1a1a1a',
                      }}
                    >
                    </p>
                  </div>

                  {/* Caption */}
                  <div className="px-4 pb-1">
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.875rem',
                        color: '#1a1a1a',
                        lineHeight: '1.4',
                      }}
                    >
                      <span style={{ fontWeight: '600' }}>raghnya</span>{' '}
                      {post.caption}
                    </p>
                  </div>

                  {/* Hashtags */}
                  <div className="px-4 pb-3">
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.875rem',
                        color: '#C86852',
                        lineHeight: '1.3',
                      }}
                    >
                      {post.hashtags}
                    </p>
                  </div>
                </motion.article>
              ))}

              {/* Feed Footer */}
              <motion.div
                className="px-6 py-8 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <p
                  className="mb-2"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1.5rem',
                    color: '#4A3A31',
                    letterSpacing: '-0.01em',
                  }}
                >
                  Follow @raghnya
                </p>
                <p
                  className="mb-6"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.875rem',
                    color: '#7A6A61',
                    lineHeight: '1.5',
                    fontStyle: 'italic',
                  }}
                >
                  A lifetime of art, movement, and stories — all in motion.
                </p>

                <motion.button
                  onClick={() => onNavigate?.('creative')}
                  className="px-6 py-2.5 mx-auto"
                  style={{
                    background: 'linear-gradient(135deg, #E8C4A0 0%, #C86852 100%)',
                    color: '#ffffff',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.875rem',
                    letterSpacing: '0.02em',
                    borderRadius: '0.5rem',
                    border: 'none',
                    boxShadow: '0 4px 12px rgba(200, 104, 82, 0.3)',
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 6px 16px rgba(200, 104, 82, 0.4)',
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Back to Creative & Product Systems
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.75rem',
              color: '#7A6A61',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}
          >
            Scroll to explore
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
