import React from "react";

const AdPlaceholder = () => {
  return (
    <div className="text-center my-3 p-3 border rounded" style={{ backdropFilter: "blur(8px)", background: "rgba(255,255,255,0.3)" }}>
      {/* Replace with AdSense code later */}
      <p style={{ fontSize: "0.9rem", color: "#6c757d" }}>
        [Ad space – Google AdSense will load here]
      </p>
    </div>
  );
};

export default AdPlaceholder;
