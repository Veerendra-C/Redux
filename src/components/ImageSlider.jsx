import React, { useState, useEffect } from "react";
import '../styles/ImageSlider.css'; 
import '../assets/image1.png';
import "../assets/image2.jpg";
import "../assets/image3.jpg";
import "../assets/image4.jpg";
import "../assets/image5.jpg";
import '../assets/vecteezy_human-interactive-tech-interaction-images-of-robot-human_6552210.svg';

const images = [
  "./Users/veerendrac/Documents/source code/react-ssg/Redux/src/assets/vecteezy_human-interactive-tech-interaction-images-of-robot-human_6552210.svg",
  "/image2.jpg",
  "/image3.jpg",
  "/image4.jpg",
  "/image5.jpg",
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
