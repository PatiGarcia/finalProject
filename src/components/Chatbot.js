// src/components/Chatbot.js
import { useState } from 'react';

export default function Chatbot({ onSubmit }) {
  const [userName, setUserName] = useState('');
  const [mood, setMood] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(userName, mood); // Llamar al método en la página principal para manejar el estado
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>¿Cuál es tu nombre?</label>
        <input 
          type="text" 
          value={userName} 
          onChange={(e) => setUserName(e.target.value)} 
          required
        />
      </div>
      <div>
        <label>¿Cómo te sientes hoy?</label>
        <input 
          type="text" 
          value={mood} 
          onChange={(e) => setMood(e.target.value)} 
          required
        />
      </div>
      <button type="submit">Buscar videos</button>
    </form>
  );
}