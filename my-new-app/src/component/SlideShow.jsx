import React, { useState } from 'react';

function Slideshow() {
  const [imgId, setImgId] = useState(0);
  const [imgWidth, setImgWidth] = useState(300);
  const [imgHeight, setImgHeight] = useState(200);

  const images = ["/my-new-app/public/img_laptop.jpg"
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
    <div>
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
