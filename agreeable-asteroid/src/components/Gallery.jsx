import { useState, useEffect } from "react";

export default function Gallery({ images = [] }) {
  const [modalIdx, setModalIdx] = useState(null);
  const [fade, setFade] = useState(false);

  const openModal = (idx) => {
    setModalIdx(idx);
    setFade(false);
  };

  const closeModal = () => setModalIdx(null);

  const changeImg = (newIdx) => {
    setFade(true);
    setTimeout(() => {
      setModalIdx(newIdx);
      setFade(false);
    }, 180);
  };

  const prevImg = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    changeImg((modalIdx - 1 + images.length) % images.length);
  };

  const nextImg = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    changeImg((modalIdx + 1) % images.length);
  };

  const modalImg = modalIdx !== null ? images[modalIdx].src : null;
  const modalTitle = modalIdx !== null ? images[modalIdx].title : null;
  const modalDesc = modalIdx !== null ? images[modalIdx].desc : null;

  useEffect(() => {
    if (modalIdx === null) return;
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") prevImg(e);
      if (e.key === "ArrowRight") nextImg(e);
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalIdx]);

  return (
    <>
      <div className="gallery-grid">
        {images.map((img, i) => (
          <div className="gallery-item" key={i}>
            <img
              src={img.src}
              alt={img.desc || img.title || `Image ${i + 1}`}
              onClick={() => openModal(i)}
              className="gallery-thumb"
            />
          </div>
        ))}
      </div>

      {modalImg && (
        <div className="gallery-modal" onClick={closeModal}>
          <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={modalImg}
              alt="Expanded"
              className={`gallery-modal-img${fade ? " fade" : ""}`}
            />
            <div className="gallery-modal-bottom">
              <button
                className="gallery-arrow left"
                onClick={prevImg}
                aria-label="Previous image"
              >
                &#8592;
              </button>

              <div className="gallery-modal-desc">
                {modalTitle && <h3>{modalTitle}</h3>}
                {modalDesc && <p>{modalDesc}</p>}
              </div>

              <button
                className="gallery-arrow right"
                onClick={nextImg}
                aria-label="Next image"
              >
                &#8594;
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
