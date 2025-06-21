import { useState, useEffect } from 'react';

export default function Carousel({ images = [] }) {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const moveImages = () => {
      setPosition((prev) => {
        if (prev <= -100 * (images.length - 1)) {
          return 0;
        }
        return prev - 0.01;
      });
    };

    const timer = setInterval(moveImages, 20);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="carousel">
      <div className="carousel-track" style={{ transform: `translateX(${position}%)` }}>
        {images.map((img, i) => (
          <img key={i} src={img.src || img} alt={img.title || `Artwork ${i + 1}`} />
        ))}
        {images.map((img, i) => (
          <img key={`dup-${i}`} src={img.src || img} alt={img.title || `Artwork ${i + 1}`} />
        ))}
      </div>
    </div>
  );
}
