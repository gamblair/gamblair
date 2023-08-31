import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function GenericImageCarousel({ images }) {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showArrows={true}
      showThumbs={false}
      // dynamicHeight={true}
      interval={3000}
      showStatus={false}

    >
      {images.map((image, index) => (
        <div key={index}>
          <img src={image.url} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </Carousel>
  );
}

export default GenericImageCarousel;
