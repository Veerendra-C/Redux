import React, { useState, useEffect } from "react";
import '../styles/ImageSlider.css'; 
const images = [
  "../public/image1.jpg",
  "../public/image2.jpg",
  "../public/image3.jpg",
  "../public/image4.jpg",
  "../public/image5.jpg",

];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="image-slider">
      <img src={images[currentIndex]} alt="Slideshow" />
    </div>
  );
}
