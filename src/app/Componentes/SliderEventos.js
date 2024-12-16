"use client";
import React, { useState, useEffect } from "react";
import styles from "../styles/SliderEventos.module.css";

/* import axios from "axios";
import styles from "../styles/SliderEventos.module.css";

const SliderEventos = () => {
  const [flyer, setFlyer] = useState([]);

  useEffect(() => {
    const fetchFlyers = async () => {
      const API_KEY = process.env.NEXT_PUBLIC_BANNERBEAR_API_KEY;
      const templateId = "YJBpekZXGwYWb2XPnO"; 

      try {
        const response = await axios.post(
          "https://api.bannerbear.com/v2/images",
          {
            template: templateId,
            modifications: [
              {
                name: "rectangle_background2",
                color: null,
              },
              {
                name: "event_role",
                text: "Aprende a relajarte en tu tiempo libre",
                color: null,
              },
              {
                name: "image_container",
                image_url: "https://cdn.bannerbear.com/sample_images/welcome_bear_photo.jpg",
              },
            ],
          },
          {
            headers: {
              Authorization: `Bearer ${API_KEY}`,
            },
          }
        );

        setFlyer((prevFlyer) => [...prevFlyer, response.data.image_url]);
      } catch (error) {
        console.error("Error generando flyer:", error);
      }
    };

    fetchFlyers();
  }, []);

  return (
    <div className={styles.slider}>
      {flyer.length === 0 ? (
        <p>Cargando flyers...</p>
      ) : (
        flyer.map((flyer, index) => (
          <div key={index} className={styles.flyer}>
            <img src={flyer} alt={`Flyer ${index + 1}`} />
          </div>
        ))
      )}
    </div>
  );
}; */

const SliderEventos = () => {
  const images = [
    "images/Evento1.png",
    "images/Evento2.png",
    "images/Evento3.png"

  ];
  const p = './public/images/Evento1.png'
  console.log("Imágenes del slider:", p);

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.slider}>
      <button className={styles.navButton} onClick={goToPrevious}>
        {"<"}
      </button>
      <div className={styles.imageContainer}>
        <img className={styles.imagenHomePrincipal} src={images[currentIndex]} alt={`Evento ${currentIndex + 1}`} />
      </div>
      <button className={styles.navButton} onClick={goToNext}>
        {">"}
      </button>
    </div>
  );
};

export default SliderEventos;
