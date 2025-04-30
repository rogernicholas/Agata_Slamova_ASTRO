export default function Gallery({ images = [] }) {
    return (
      <div className="gallery">
        {images.map((src, i) => (
          <img key={i} src={src} alt={`Image ${i + 1}`} />
        ))}
      </div>
    );
  }
  