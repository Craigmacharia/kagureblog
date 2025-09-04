import { useState, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Throttle scroll handler for better performance
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    // Use passive event listener for better scrolling performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Navigation items with icons
  const navItems = [
    { path: "/", label: "Home", icon: "🏠" },
    { path: "/about", label: "About", icon: "👤" },
    { path: "/blog", label: "Blog", icon: "📝" },
    { path: "/contact", label: "Contact", icon: "📧" }
  ];

  return (
    <nav 
      className="navbar navbar-expand-lg navbar-dark fixed-top"
      style={{
        background: isScrolled 
          ? "rgba(10, 10, 10, 0.98)" 
          : "rgba(10, 10, 10, 0.9)",
        backdropFilter: isScrolled ? "blur(8px)" : "none",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        padding: "0.6rem 0",
        transition: "all 0.2s ease",
        willChange: "background, backdrop-filter" // Performance optimization
      }}
    >
      <div className="container">
        <NavLink 
          to="/" 
          className="navbar-brand d-flex align-items-center"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: "700",
            fontSize: "1.4rem",
            color: "rgba(255, 255, 255, 0.95)",
            transition: "color 0.2s ease"
          }}
          onMouseOver={(e) => {
            e.target.style.color = "rgba(108, 92, 231, 0.95)";
          }}
          onMouseOut={(e) => {
            e.target.style.color = "rgba(255, 255, 255, 0.95)";
          }}
          onClick={closeMenu}
        >
          <span style={{ marginRight: "8px", fontSize: "1.2rem" }}>✨</span>
          Kagure Blog
        </NavLink>
        
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
          style={{
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: "4px",
            padding: "0.35rem 0.5rem",
            transition: "all 0.2s ease"
          }}
          onMouseOver={(e) => {
            e.target.style.borderColor = "rgba(108, 92, 231, 0.5)";
          }}
          onMouseOut={(e) => {
            e.target.style.borderColor = "rgba(255, 255, 255, 0.2)";
          }}
        >
          <span 
            className="navbar-toggler-icon"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(255, 255, 255, 0.8)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")`,
              transition: "background-image 0.2s ease",
              width: "1.2em",
              height: "1.2em"
            }}
          ></span>
        </button>
        
        <div 
          className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
          style={{
            background: isScrolled 
              ? "rgba(10, 10, 10, 0.98)" 
              : "rgba(10, 10, 10, 0.95)",
            backdropFilter: "blur(10px)",
            borderRadius: "8px",
            padding: isMenuOpen ? "0.75rem" : "0",
            marginTop: isMenuOpen ? "0.5rem" : "0",
            border: isMenuOpen ? "1px solid rgba(255, 255, 255, 0.1)" : "none",
            transition: "all 0.2s ease"
          }}
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {navItems.map((item) => (
              <li key={item.path} className="nav-item">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  onClick={closeMenu}
                  style={{
                    color: "rgba(255, 255, 255, 0.8)",
                    padding: "0.5rem 0.8rem",
                    margin: "0.15rem 0",
                    borderRadius: "4px",
                    transition: "all 0.2s ease",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: "500",
                    display: "flex",
                    alignItems: "center"
                  }}
                  onMouseOver={(e) => {
                    e.target.style.background = "rgba(255, 255, 255, 0.05)";
                    e.target.style.color = "rgba(255, 255, 255, 0.95)";
                  }}
                  onMouseOut={(e) => {
                    if (!e.target.classList.contains("active")) {
                      e.target.style.background = "transparent";
                      e.target.style.color = "rgba(255, 255, 255, 0.8)";
                    }
                  }}
                >
                  <span style={{ marginRight: "8px", fontSize: "1rem" }}>
                    {item.icon}
                  </span>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@300;400;500;600&display=swap');
          
          .nav-link.active {
            background: rgba(108, 92, 231, 0.2) !important;
            color: rgba(255, 255, 255, 0.95) !important;
            border: 1px solid rgba(108, 92, 231, 0.3) !important;
          }
          
          /* Optimize for mobile devices */
          @media (max-width: 991.98px) {
            .navbar-collapse {
              position: absolute;
              top: 100%;
              left: 0;
              right: 0;
              z-index: 1000;
              padding: 0.5rem 1rem !important;
              margin: 0.5rem 1rem !important;
              box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
            }
            
            .nav-item {
              margin: 0.2rem 0;
            }
            
            .nav-link {
              padding: 0.6rem 0.8rem !important;
            }
          }
          
          /* Further optimization for very small screens */
          @media (max-width: 375px) {
            .navbar-brand {
              font-size: 1.2rem !important;
            }
            
            .navbar-toggler {
              padding: 0.25rem 0.4rem !important;
            }
          }
          
          /* Reduce motion for users who prefer it */
          @media (prefers-reduced-motion: reduce) {
            .navbar, .nav-link, .navbar-toggler, .navbar-collapse {
              transition: none !important;
            }
          }
        `}
      </style>
    </nav>
  );
}

export default Navbar;