import React, { useState } from 'react';

function Slideshow() {
  const [imgId, setImgId] = useState(0);
  const imgWidth = 300;
  const imgHeight = 200;

  const images = [
    "https://picsum.photos/300/200?image=0",
    "https://picsum.photos/300/200?image=1",
    "https://picsum.photos/300/200?image=2",
  ];

  const nextImage = () => {
    setImgId((prevId) => (prevId + 1) % images.length);
  };

  const prevImage = () => {
    setImgId((prevId) => (prevId === 0 ? images.length - 1 : prevId - 1));
  };

  const resetImage = () => {
    setImgId(0);
  };

  return (
    <div className="slideshow">
      <img src={images[imgId]} width={imgWidth} height={imgHeight} alt="slideshow" />
      <div>
        <button onClick={prevImage}>Previous</button>
        <button onClick={nextImage}>Next</button>
        <button onClick={resetImage}>Reset</button>
      </div>
    </div>
  );
}

export default Slideshow;
