// src/app/chatbot/page.js
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import './page.css';  // Importa el archivo CSS aquí

export default function ChatBot() {
  const [userName, setUserName] = useState('');
  const [mood, setMood] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [step, setStep] = useState(1);  // Paso del flujo: 1 para nombre, 2 para estado de ánimo
  const router = useRouter();

  // Maneja la captura del nombre de usuario
  const handleUserNameSubmit = (e) => {
    e.preventDefault();
    if (userName) {
      setChatHistory([...chatHistory, `¡Hola, ${userName}!. Me complace saludarte`]);
      setStep(2); // Avanzamos al siguiente paso (preguntar el estado de ánimo)
    }
  };

  // Maneja la captura del estado de ánimo
  const handleMoodSubmit = (e) => {
    e.preventDefault();
    if (mood) {
      // Guarda el estado de ánimo en el localStorage
      localStorage.setItem('userState', mood);
      setChatHistory([...chatHistory, `Me siento ${mood}.`]);
      router.push('/videos'); // Redirige a la página de videos
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        {chatHistory.map((message, index) => (
          <div key={index} className="chat-message">
            <p>{message}</p>
          </div>
        ))}
      </div>

      {step === 1 ? (
        <form onSubmit={handleUserNameSubmit}>
          <label>¿Cuál es tu nombre?</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Ingresa tu nombre"
          />
          <button type="submit">Enviar</button>
        </form>
      ) : (
        <form onSubmit={handleMoodSubmit}>
          <label>¿Cómo te sientes?</label>
          <input
            type="text"
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            placeholder="Ej: Feliz, triste, estresado"
          />
          <button type="submit">Enviar</button>
        </form>
      )}
    </div>
  );
}