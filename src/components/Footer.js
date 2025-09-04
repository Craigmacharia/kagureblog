import React from "react";

function Footer() {
  return (
    <footer className="pt-5" style={{ background: "#0a0a0a" }}>
      <div className="container">
        <div className="row">
          {/* Brand and description */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: "700",
                color: "rgba(255, 255, 255, 0.9)",
                marginBottom: "1.2rem"
              }}
            >
              Kagure Blog
            </h5>
            <p style={{ 
              color: "rgba(255, 255, 255, 0.7)", 
              lineHeight: "1.6",
              fontSize: "0.95rem"
            }}>
              A space for thoughts, stories, and creativity. Sharing insights on technology, 
              design, and everyday inspiration.
            </p>
            <div className="d-flex mt-3">
              {['twitter', 'instagram', 'linkedin'].map((social) => (
                <a
                  key={social}
                  href={`https://${social}.com`}
                  className="me-3"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255, 255, 255, 0.7)",
                    textDecoration: "none",
                    transition: "all 0.3s ease"
                  }}
                  onMouseOver={(e) => {
                    e.target.style.background = "rgba(108, 92, 231, 0.3)";
                    e.target.style.color = "rgba(255, 255, 255, 0.9)";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = "rgba(255, 255, 255, 0.05)";
                    e.target.style.color = "rgba(255, 255, 255, 0.7)";
                  }}
                >
                  <i className={`bi bi-${social}`}></i>
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: "600",
                color: "rgba(255, 255, 255, 0.9)",
                marginBottom: "1.2rem",
                fontSize: "1rem"
              }}
            >
              Explore
            </h6>
            <ul className="list-unstyled">
              {['Home', 'Blog', 'About', 'Contact'].map((item) => (
                <li key={item} className="mb-2">
                  <a
                    href={`/${item.toLowerCase()}`}
                    style={{
                      color: "rgba(255, 255, 255, 0.7)",
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                      display: "inline-block",
                      fontSize: "0.9rem"
                    }}
                    onMouseOver={(e) => {
                      e.target.style.color = "rgba(108, 92, 231, 0.8)";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.color = "rgba(255, 255, 255, 0.7)";
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Categories */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h6 
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: "600",
                color: "rgba(255, 255, 255, 0.9)",
                marginBottom: "1.2rem",
                fontSize: "1rem"
              }}
            >
              Categories
            </h6>
            <div className="d-flex flex-wrap">
              {['Design', 'Tech', 'Travel', 'Food', 'Life', 'Music'].map((category) => (
                <span
                  key={category}
                  className="me-2 mb-2"
                  style={{
                    padding: "0.25rem 0.6rem",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "4px",
                    fontSize: "0.8rem",
                    color: "rgba(255, 255, 255, 0.7)",
                    transition: "all 0.3s ease",
                    cursor: "pointer"
                  }}
                  onMouseOver={(e) => {
                    e.target.style.background = "rgba(108, 92, 231, 0.3)";
                    e.target.style.color = "rgba(255, 255, 255, 0.9)";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = "rgba(255, 255, 255, 0.05)";
                    e.target.style.color = "rgba(255, 255, 255, 0.7)";
                  }}
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
          
          {/* Newsletter */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h6 
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: "600",
                color: "rgba(255, 255, 255, 0.9)",
                marginBottom: "1.2rem",
                fontSize: "1rem"
              }}
            >
              Newsletter
            </h6>
            <p style={{ 
              color: "rgba(255, 255, 255, 0.7)", 
              fontSize: "0.9rem", 
              marginBottom: "1rem" 
            }}>
              Get updates on new posts
            </p>
            <div className="input-group">
              <input
                type="email"
                className="form-control"
                placeholder="Your email"
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  color: "rgba(255, 255, 255, 0.7)",
                  borderRadius: "4px 0 0 4px",
                  fontSize: "0.9rem"
                }}
              />
              <button
                className="btn"
                style={{
                  background: "rgba(108, 92, 231, 0.7)",
                  color: "white",
                  borderRadius: "0 4px 4px 0",
                  border: "1px solid rgba(108, 92, 231, 0.7)",
                  fontSize: "0.9rem",
                  transition: "all 0.3s ease"
                }}
                onMouseOver={(e) => {
                  e.target.style.background = "rgba(108, 92, 231, 0.9)";
                }}
                onMouseOut={(e) => {
                  e.target.style.background = "rgba(108, 92, 231, 0.7)";
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div 
          className="text-center py-4"
          style={{
            color: "rgba(255, 255, 255, 0.5)",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            marginTop: "1rem"
          }}
        >
          <p className="mb-1" style={{ fontSize: "0.9rem" }}>
            &copy; {new Date().getFullYear()} Kagure Blog. All rights reserved.
          </p>
          <p style={{ fontSize: "0.8rem" }}>
            Made with <span style={{ color: "rgba(108, 92, 231, 0.8)" }}>♥</span> by Kagure
          </p>
        </div>
      </div>

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@300;400;500;600&display=swap');
          @import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css');
          
          footer {
            font-family: 'Inter', sans-serif;
          }
          
          .form-control:focus {
            background: rgba(255, 255, 255, 0.08) !important;
            border-color: rgba(108, 92, 231, 0.5) !important;
            box-shadow: 0 0 0 0.2rem rgba(108, 92, 231, 0.25) !important;
            color: rgba(255, 255, 255, 0.8) !important;
          }
        `}
      </style>
    </footer>
  );
}

export default Footer;
