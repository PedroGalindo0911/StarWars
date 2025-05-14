import React, { useEffect, useState } from "react";
import starsBackground from "../images/background.jpg"; // Imagen de fondo (estrellas)
import xwing from "../images/xwing.png"; // Imagen de X-Wing

const HomePage = () => {
  const [isJumped, setIsJumped] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Inicia la animación al cargar la página
    setTimeout(() => setIsJumped(true), 100); // Delay para el inicio del movimiento

    // Muestra el texto después de que la animación de movimiento termine
    setTimeout(() => setShowText(true), 3100); // Coincide con duration-[3000ms]
  }, []);

  return (
    <div
      className="relative min-h-screen bg-black overflow-hidden"
      style={{
        backgroundImage: `url(${starsBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* X-Wing animada */}
      <div
        className={`absolute z-40 ${
          isJumped
            ? "xwing-move" // Clase para la animación de movimiento
            : "xwing-start"
        }`}
        style={{
          top: "0",
          right: "0",
        }}
      >
        <img
          src={xwing}
          alt="X-Wing"
          className="w-40 h-auto xwing-float" // Clase para la animación de flotación
          style={{
            filter: "drop-shadow(0 0 15px rgba(255, 255, 255, 0.8))",
          }}
        />
      </div>

      {/* Texto animado de Star Wars */}
      {showText && (
        <div
          className="absolute inset-0 flex items-center justify-center z-50 text-blue-500 text-center font-bold animate-fade-in"
          style={{
            fontFamily: "Star Jedi, Arial, sans-serif", // Fuente Star Wars
            fontSize: "2rem",
          }}
        >
          In a Galaxy Far, Far Away...
        </div>
      )}
    </div>
  );
};

export default HomePage;
