import React, { useState, useEffect } from "react";

// Enhanced Glass Card Component with improved tactile feedback
const GlassCard = ({ children, className = "", style = {}, ...rest }) => (
  <div
    className={`glass-card ${className}`}
    style={{
      background: "rgba(255, 255, 255, 0.2)",
      backdropFilter: "blur(12px) saturate(180%)",
      border: "1px solid rgba(255, 255, 255, 0.3)",
      borderRadius: "20px",
      boxShadow: `
        0 10px 30px rgba(0, 0, 0, 0.1),
        inset 0 1px 1px rgba(255, 255, 255, 0.6),
        inset 0 -1px 1px rgba(0, 0, 0, 0.1)
      `,
      transition: "all 0.3s ease",
      overflow: "hidden",
      position: "relative",
      ...style
    }}
    {...rest}
  >
    {/* Subtle gradient overlay for depth */}
    <div style={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: "40%",
      background: "linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)",
      pointerEvents: "none",
      zIndex: 1
    }}></div>
    {children}
  </div>
);

// Enhanced Glass Button with better tactile feedback
const GlassButton = ({ children, className = "", style = {}, ...rest }) => (
  <button
    className={`glass-button ${className}`}
    style={{
      background: "rgba(255, 255, 255, 0.15)",
      backdropFilter: "blur(12px) saturate(180%)",
      border: "1px solid rgba(255, 255, 255, 0.25)",
      borderRadius: "24px",
      boxShadow: `
        0 4px 20px rgba(31, 38, 135, 0.2),
        inset 0 2px 2px rgba(255, 255, 255, 0.3),
        inset 0 -2px 2px rgba(0, 0, 0, 0.05)
      `,
      padding: "0.75rem 2rem",
      color: "#fff",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      position: "relative",
      overflow: "hidden",
      ...style
    }}
    {...rest}
  >
    {/* Subtle highlight effect */}
    <div style={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: "30%",
      background: "linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)",
      pointerEvents: "none"
    }}></div>
    {children}
  </button>
);

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setIsVisible(true);
    
    // For Netlify CMS integration, you would fetch posts here
    // This is a mock implementation
    const mockPosts = [
      {
        id: 1,
        title: "First Post",
        excerpt: "A quick preview of what Kagure Blog will bring to the table.",
        emoji: "📝",
        gradient: "linear-gradient(45deg, #6c5ce7, #a29bfe)"
      },
      {
        id: 2,
        title: "Second Post",
        excerpt: "Another glimpse into what's coming soon.",
        emoji: "✨",
        gradient: "linear-gradient(45deg, #fd79a8, #fab1a0)"
      },
      {
        id: 3,
        title: "Third Post",
        excerpt: "More updates, stories, and insights ahead.",
        emoji: "🌱",
        gradient: "linear-gradient(45deg, #00b894, #55efc4)"
      }
    ];
    
    setPosts(mockPosts);
  }, []);

  return (
    <div className="container-fluid p-0" style={{ 
      minHeight: "100vh",
      background: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 50%, #d4fc79 100%)",
      backgroundAttachment: "fixed"
    }}>
      {/* Hero Section with Enhanced Glass Effect */}
      <section 
        className="hero-section d-flex align-items-center justify-content-center"
        style={{
          minHeight: "100vh",
          position: "relative",
          overflow: "hidden"
        }}
      >
        {/* Animated background elements */}
        <div 
          className="hero-background"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              radial-gradient(circle at 15% 50%, rgba(255, 255, 255, 0.4) 0%, transparent 25%),
              radial-gradient(circle at 85% 30%, rgba(255, 255, 255, 0.3) 0%, transparent 25%),
              radial-gradient(circle at 50% 80%, rgba(255, 255, 255, 0.2) 0%, transparent 25%)
            `,
            backgroundSize: "cover",
            zIndex: 0
          }}
        ></div>
        
        <GlassCard 
          className="text-center p-5 mx-3"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(-20px) scale(0.95)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
            maxWidth: "800px",
            zIndex: 1
          }}
        >
          <h1 
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: "700",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              marginBottom: "1.5rem",
              color: "rgba(0, 0, 0, 0.8)",
              textShadow: "0 2px 4px rgba(0,0,0,0.1)"
            }}
          >
            Welcome to Kagure Blog
          </h1>
          <p 
            className="lead"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
              marginBottom: "2.5rem",
              color: "rgba(0, 0, 0, 0.7)",
              fontWeight: "300"
            }}
          >
            A space for thoughts, stories, and creativity.
          </p>
          <GlassButton
            style={{
              background: "rgba(108, 92, 231, 0.6)",
              color: "white",
              fontSize: "1.1rem",
              margin: "0 auto"
            }}
            onMouseOver={(e) => {
              e.target.style.background = "rgba(108, 92, 231, 0.8)";
              e.target.style.transform = "translateY(-2px) scale(1.02)";
              e.target.style.boxShadow = `
                0 6px 24px rgba(31, 38, 135, 0.3),
                inset 0 2px 2px rgba(255, 255, 255, 0.4),
                inset 0 -2px 2px rgba(0, 0, 0, 0.05)
              `;
            }}
            onMouseOut={(e) => {
              e.target.style.background = "rgba(108, 92, 231, 0.6)";
              e.target.style.transform = "translateY(0) scale(1)";
              e.target.style.boxShadow = `
                0 4px 20px rgba(31, 38, 135, 0.2),
                inset 0 2px 2px rgba(255, 255, 255, 0.3),
                inset 0 -2px 2px rgba(0, 0, 0, 0.05)
              `;
            }}
            onMouseDown={(e) => {
              e.target.style.transform = "translateY(1px) scale(0.98)";
              e.target.style.boxShadow = `
                0 2px 10px rgba(31, 38, 135, 0.2),
                inset 0 2px 2px rgba(0, 0, 0, 0.1),
                inset 0 -1px 1px rgba(255, 255, 255, 0.2)
              `;
            }}
            onMouseUp={(e) => {
              e.target.style.transform = "translateY(-2px) scale(1.02)";
              e.target.style.boxShadow = `
                0 6px 24px rgba(31, 38, 135, 0.3),
                inset 0 2px 2px rgba(255, 255, 255, 0.4),
                inset 0 -2px 2px rgba(0, 0, 0, 0.05)
              `;
            }}
          >
            Explore Posts
          </GlassButton>
        </GlassCard>
      </section>

      {/* Blog Posts Section */}
      <section className="container text-center py-5" style={{ position: "relative", zIndex: 2 }}>
        <h2 
          className="mb-5"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: "700",
            color: "rgba(0, 0, 0, 0.8)",
            textShadow: "0 2px 4px rgba(0,0,0,0.1)"
          }}
        >
          Latest Posts
        </h2>
        
        <div className="row mt-5">
          {posts.map((post, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={post.id}>
              <GlassCard 
                className="h-100 post-card"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
                  transition: `opacity 0.8s ease ${0.5 + index * 0.2}s, transform 0.8s ease ${0.5 + index * 0.2}s, box-shadow 0.3s ease`,
                }}
              >
                <div 
                  className="card-img-top d-flex align-items-center justify-content-center"
                  style={{
                    height: '200px',
                    background: post.gradient,
                    color: 'white',
                    fontSize: '3.5rem',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                >
                  {post.emoji}
                </div>
                <div className="card-body d-flex flex-column p-4">
                  <h5 className="card-title" style={{ 
                    fontFamily: "'Playfair Display', serif",
                    color: "rgba(0, 0, 0, 0.8)"
                  }}>
                    {post.title}
                  </h5>
                  <p className="card-text flex-grow-1" style={{ 
                    color: "rgba(0, 0, 0, 0.7)",
                    lineHeight: "1.6"
                  }}>
                    {post.excerpt}
                  </p>
                  <div className="mt-4">
                    <GlassButton
                      style={{
                        background: "rgba(108, 92, 231, 0.6)",
                        color: "white",
                        fontSize: "0.9rem",
                        padding: "0.6rem 1.5rem"
                      }}
                      onMouseOver={(e) => {
                        e.target.style.background = "rgba(108, 92, 231, 0.8)";
                        e.target.style.transform = "translateY(-2px)";
                      }}
                      onMouseOut={(e) => {
                        e.target.style.background = "rgba(108, 92, 231, 0.6)";
                        e.target.style.transform = "translateY(0)";
                      }}
                    >
                      Read More
                    </GlassButton>
                  </div>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </section>

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@300;400;500&display=swap');
          
          body {
            font-family: 'Inter', sans-serif;
            background-color: #f8f9fa;
          }
          
          .post-card:hover {
            transform: translateY(-8px) scale(1.02) !important;
            box-shadow: 
              0 20px 40px rgba(31, 38, 135, 0.25),
              inset 0 1px 1px rgba(255, 255, 255, 0.6),
              inset 0 -1px 1px rgba(0, 0, 0, 0.1) !important;
          }
          
          .glass-button:focus {
            outline: none;
          }
          
          /* Improved responsive behavior */
          @media (max-width: 768px) {
            .hero-section {
              padding: 0 1rem;
            }
            
            .glass-card {
              border-radius: 16px;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Home;