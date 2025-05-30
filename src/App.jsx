import React, { useState } from 'react';

function App() {
  const [slide, setSlide] = useState(0);

  const slides = [
    "🎉 ¡Bienvenida al cumple!",
    "✨ Acá empieza la aventura mágica...",
    "🎁 Tenés 3 regalos digitales esperándote...",
    "⏳ Contando los días para la sorpresa final..."
  ];

  const nextSlide = () => {
    setSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div onClick={nextSlide} style={{ textAlign: 'center', padding: '50px', fontSize: '24px' }}>
      {slides[slide]}
      <p>(Tocá para avanzar)</p>
    </div>
  );
}

export default App;
