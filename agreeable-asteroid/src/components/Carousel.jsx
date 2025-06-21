import { useState, useEffect } from 'react';


export default function Carousel({ images = [] }) {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const moveImages = () => {
      setPosition((prev) => {
        // Reset position when it reaches the end
        if (prev <= -100 * (images.length - 1)) {
          return 0;
        }
        return prev - 0.02; // mensi cislo pomalejsi posuv
      });
    };

    const timer = setInterval(moveImages, 20); // Increased interval from 10ms to 20ms
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="carousel">
      <div className="carousel-track" style={{ transform: `translateX(${position}%)` }}>
        {images.map((src, i) => (
          <img key={i} src={src} alt={`Artwork ${i + 1}`} />
        ))}
        {/* Duplicate images for seamless loop */}
        {images.map((src, i) => (
          <img key={`duplicate-${i}`} src={src} alt={`Artwork ${i + 1}`} />
        ))}
      </div>
    </div>
  );
}
  