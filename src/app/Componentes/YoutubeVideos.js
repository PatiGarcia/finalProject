 "use client"
import { useEffect, useState } from 'react';
import styles from '../styles/YoutubeVideos.module.css';

const YoutubeVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
    const fetchVideos = async () => {
      const query = 'meditacion para mamás';
      const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${apiKey}&type=video`;
        try {
          const response = await fetch(url);
  console.log(response)
          if (!response.ok) {
            throw new Error(`Error en la respuesta: ${response.status}`);
          }
  
          const data = await response.json();
          setVideos(data.items || []); 
        } catch (error) {
          console.error("Error al usar la API de YouTube:", error.message);
        }
      };
  
      fetchVideos();
    }, []);; 
  return (
    <div className='video-container'>
      { <ul className = 'videoList'>
        {videos.map((video) => (
          <li key={video.id.videoId} className='video-item'>
            <img
              src={video.snippet.thumbnails.default.url}
              alt={video.snippet.title}
              />
              <h3>{video.snippet.title}</h3>
          </li>
        ))}
        </ul> }
    </div>
  );
};

export default YoutubeVideos; 
