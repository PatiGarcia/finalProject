/* "use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../styles/Frasesmotivacionales.module.css";

const FrasesMotivacionales = () => {
  const [frases, setFrases] = useState([]);

  useEffect(() => {
    const fetchFrases = async () => {
      const API_KEY = process.env.NEXT_PUBLIC_BANNERBEAR_API_KEY;
      const templateId = "Powdyxbd09pablYBAg";

      try {
        const response = await axios.post(
          "https://api.bannerbear.com/v2/images",
          {
            template: templateId,
            modifications: [
              {
                name: "message",
                text: "Mensaje motivacional",
                color: null,
                background: null,
              },
              {
                name: "face",
                image_url:
                  "https://cdn.bannerbear.com/sample_images/welcome_bear_photo.jpg",
              },
            ],
          },
          {
            headers: {
              Authorization: `Bearer ${API_KEY}`,
            },
          }
        );

        setFrases((prevFrases) => [...prevFrases, response.data.image_url]);
      } catch (error) {
        console.error("Error generando frase:", error);
      }
    };

    fetchFrases();
  }, []);

  return (
    <div className={styles.frasesSlider}>
      {frases.length === 0 ? (
        <p>Cargando frases...</p>
      ) : (
        frases.map((frase, index) => (
          <div key={index} className={styles.frase}>
            <img src={frase} alt={`Frase ${index + 1}`} />
          </div>
        ))
      )}
    </div>
  );
};

export default FrasesMotivacionales;
 */
// src/Componentes/StaticImage.js
import React from "react";
import styles from "../styles/Frasesmotivacionales.module.css";

const FrasesMotivacionales = ({ src, alt, width, height }) => {
  return (
    <div className={styles.imageContainer}>
      <img src={"images/frase.png"} alt={"frase-motivacional"} width={width} height={height} />
    </div>
  );
};

export default FrasesMotivacionales;
