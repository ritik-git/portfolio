import { FC, useState } from 'react';

const WhatsAppFloatingButton: FC = () => {
    const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 1000,
        display: "flex",
        flexDirection: isHovered ? "column" : "row-reverse",
        alignItems: "center",
        gap: "10px", // Space between icons
        transition: "all 0.3s ease-in-out", // Smooth expand/collapse effect
      }}
    >
      {isHovered && (
        <>
          <a
            href="https://wa.me/9399161638?text=Hi%20Ritik"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
            }}
          >
            <img
              src="/portfolio/whatsapp.png"
              alt="WhatsApp"
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                cursor: "pointer",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
               
                objectFit:"contain"
              }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/ritik-galgate-746437250/?message=Hi%20Ritik" // Replace with your LinkedIn profile link
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
            }}
          >
            <img
              src="/portfolio/linkedin.png" // Ensure LinkedIn icon is present
              alt="LinkedIn"
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                cursor: "pointer",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                backgroundColor: "white",
              }}
            />
          </a>
        </>
      )}
      <div
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
         
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          transition: "transform 0.3s ease-in-out",
          transform: isHovered ? "rotate(90deg)" : "rotate(0)",
        }}
      >
        <img
          src="/portfolio/message.png" // Placeholder icon for menu, replace with your own
          alt="Menu"
          style={{
            width: "30px",
            height: "30px",
          }}
        />
      </div>
    </div>
  );
};

export default WhatsAppFloatingButton;
