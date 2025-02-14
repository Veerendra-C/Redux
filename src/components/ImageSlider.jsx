import React, { useState, useEffect } from "react";
import '../styles/ImageSlider.css'; 
import image1 from '../assets/image1.png';
import image2 from"../assets/image2.jpg";
import image3 from"../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";


const images = [
  image1,
  image2,
  image3,
  image4,
  image5
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
