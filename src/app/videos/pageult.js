// src/app/videos/page.js
'use client';

import { useState, useEffect } from 'react';

export default function VideosPage() {
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState(null);

  useEffect(() => {
    // Recupera el estado de ánimo del usuario desde localStorage
    const userState = localStorage.getItem('userState');
    if (userState) {
      fetchVideos(userState);
    }
  }, []);

  const fetchVideos = async (state) => {
    const response = await fetch(`/api/youtube?state=${state}`);
    const data = await response.json();
    
    setVideos(data.items);
    setNextPageToken(data.nextPageToken);
  };

  const loadMoreVideos = async () => {
    if (!nextPageToken) return;
    const response = await fetch(`/api/youtube?state=${localStorage.getItem('userState')}&pageToken=${nextPageToken}`);
    const data = await response.json();
    
    setVideos((prevVideos) => [...prevVideos, ...data.items]);
    setNextPageToken(data.nextPageToken);
  };

  return (
    <div className="video-container">
      <h1>Videos recomendados</h1>
      <div className="video-grid">
        {videos.map((video) => (
          <div key={video.id.videoId} className="video-card">
            <iframe
              width="100%"
              height="200"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              title={video.snippet.title}
              frameBorder="0"
              allowFullScreen
            />
            <h3>{video.snippet.title}</h3>
            <button onClick={() => window.open(`https://www.youtube.com/watch?v=${video.id.videoId}`, '_blank')}>
              Ver Video
            </button>
          </div>
        ))}
      </div>
      {nextPageToken && (
        <button className="load-more" onClick={loadMoreVideos}>Ver más</button>
      )}
    </div>
  );
}
