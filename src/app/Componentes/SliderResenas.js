
/* "use client"
import React, {useState, useEffect} from 'react'; 
import axios from 'axios';
import styles from '../styles/SliderResenas.module.css';

const Resenas = () => {
  const [reseñas, setReseñas] = useState ([]);
  useEffect (() =>{
    const fetchReseñas = async () =>{
      const API_KEY= NEXT_PUBLIC_BANNERBEAR_API_KEY;
      const templateId ='wvgMNmDodrwYbyARK0';
      try {
        const response = await axios.post(
          'https://api.bannerbear.com/v2/images',
          {
            template: templateId,
            modifications: [
              {
                "name": "avatar",
                "image_url": "https://cdn.bannerbear.com/sample_images/welcome_bear_photo.jpg"
              },
              {
                "name": "name",
                "text": "Juanita P'erez",
                "color": null,
                "background": null
              },
              {
                "name": "subtitle",
                "text": "Usuaria desde 2018",
                "color": null,
                "background": null
              },
              {
                "name": "quote_text",
                "text": "Increíble. Help mom me ha ¡CAMBIADO LA VIDA!",
                "color": null,
                "background": null
              }
            ],
          }
          ,
            headers, {
              Authorization: `Bearer ${API_KEY}`,
            }
          ,
        );
        setReseñas ((prevReseñas) => [...prevReseñas, response.data.image_url]);
      } catch (error) {
        console.error('Error generando reseña', error);
      }
    };
    fetchReseñas();
  },[]);
  return (
    <div className='reseñas-slider'>
      {reseñas.length === 0? (
        <p>Cargando reseñas...</p>
      ): (
        reseñas.map((reseñas, index)=>(
          <div key={index} className={styles.reseñas}>
            <img src={reseña} alt={`reseña ${index +1}`}/>
          </div>
        ))
      )}
      </div>
  );
};


export default Reseñas; */
"use client"
import React, {useState, useEffect} from 'react'; 
import styles from '../styles/SliderResenas.module.css';


const Resenas = () => {
  const images = [
    "images/resena1.png",
    "images/resena2.png",
    "images/resena3.png",
    "images/resena4.png"

  ];


  return (
    <div className={styles.slider}>
   {images.map((image, index) => (
        <div key={index} className={styles.reseña}>
          <img src={image} alt={`Reseña ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Resenas;