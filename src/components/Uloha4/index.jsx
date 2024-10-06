import './carousel.css';
import { useState } from 'react';

/*
Zadání 1: Nachystejte si adresy obrázků níže do pole.
Zadání 2: Přidejte komponentě stavovou proměnnou, ve které bude index právě aktivního obrázku.
  Na začátku 0.
Zadání 3: Pro `src` v tagu `img` použijte adresu z pole pod správným indexem.
Zadání 4: Tlačítky ← a → měňte index.

Bonus: Pozor na krajní hodnoty. Pokud dojdete na konec nebo začátek pole, tak už v daném směru
  neměňte index, aby neutekl mimo položky v poli. Nastavte tlačítkům atribut `disabled`, pokud
  v jejich směru už není žádný obrázek.
*/

const images = [
  'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
  'https://images.unsplash.com/photo-1494783367193-149034c05e8f',
  'https://images.unsplash.com/photo-1521747116042-5a810fda9664',
  'https://images.unsplash.com/photo-1546189513-0873093d4013',
  'https://images.unsplash.com/photo-1557733686-3f8641465d21',
  'https://images.unsplash.com/photo-1541539924877-6dc3d2adf8d3',
  'https://images.unsplash.com/reserve/O7A9fAvYSXC7NTdz8gLQ_IMGP1039.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHNlYXxlbnwwfDB8MHx8fDI%3D',
  'https://images.unsplash.com/26/pelican.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHNlYXxlbnwwfDB8MHx8fDI%3D',
];

export const Uloha4 = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const handlePrev = () => {
    if (carouselIndex > 0) {
      setCarouselIndex(carouselIndex - 1);
    }
  };

  const handleNext = () => {
    if (carouselIndex < images.length - 1) {
      setCarouselIndex(carouselIndex + 1);
    }
  };
  return (
    <div className="carousel">
      <button
        className="carousel__predchozi"
        aria-label="předchozí"
        onClick={handlePrev}
        disabled={carouselIndex === 0}
      >
        ←
      </button>
      <div className="carousel__media">
        <img
          className="carousel__image"
          src={images[carouselIndex]}
          alt={`Image ${carouselIndex + 1}`}
        />
      </div>
      <button
        className="carousel__dalsi"
        aria-label="další"
        onClick={handleNext}
        disabled={carouselIndex === images.length - 1}
      >
        →
      </button>
    </div>
  );
};
