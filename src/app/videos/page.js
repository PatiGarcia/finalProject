'use client';

import { useState, useEffect } from 'react';

export default function VideosPage() {
  const [videos, setVideos] = useState([]); // Asegúrate de que sea un array inicializado
  const [nextPageToken, setNextPageToken] = useState(null);
  const [loading, setLoading] = useState(false); // Indicador de carga
  const [error, setError] = useState(null); // Estado para manejar errores

  useEffect(() => {
    // Recupera el estado de ánimo del usuario desde localStorage
    const userState = localStorage.getItem('userState');
    if (userState) {
      fetchVideos(userState);
    }
  }, []);

  const fetchVideos = async (state) => {
    try {
      setLoading(true);
      setError(null); // Reinicia errores antes de cada solicitud
      const response = await fetch(`/api/youtube?state=${state}`);
      if (!response.ok) throw new Error('Error al obtener los datos de YouTube');
      
      const data = await response.json();
      setVideos(data.items || []); // Asegúrate de que sea un array
      setNextPageToken(data.nextPageToken || null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const loadMoreVideos = async () => {
    if (!nextPageToken) return;

    try {
      setLoading(true);
      const response = await fetch(
        `/api/youtube?state=${localStorage.getItem('userState')}&pageToken=${nextPageToken}`
      );
      if (!response.ok) throw new Error('Error al cargar más videos');

      const data = await response.json();
      setVideos((prevVideos) => [...prevVideos, ...(data.items || [])]); // Evita que sea undefined
      setNextPageToken(data.nextPageToken || null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="video-container">
      <h1>Videos recomendados</h1>
      {error && <p className="error-message">{error}</p>}
      <div className="video-grid">
        {videos.length > 0 ? (
          videos.map((video) => (
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
              <button
                onClick={() =>
                  window.open(`https://www.youtube.com/watch?v=${video.id.videoId}`, '_blank')
                }
              >
                Ver Video
              </button>
            </div>
          ))
        ) : (
          !loading && <p>No se encontraron videos.</p>
        )}
      </div>
      {loading && <p>Cargando...</p>}
      {nextPageToken && !loading && (
        <button className="load-more" onClick={loadMoreVideos}>
          Ver más
        </button>
      )}
    </div>
  );
}
