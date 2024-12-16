import Link from 'next/link';

export default function Chat() {
    return (
  
      
      <div className='chatMain'>
        <div className='divElement'>
          <h1>Bienvenido a la App de HelpMom</h1>
          <p>¡Hola! ¿Cómo estás hoy? Haz clic en el botón para hablar con el chatbot:</p>
          <Link href="/chatbot">
            <button>Ir al Chatbot</button>
          </Link>

        </div>
        
      </div>
    );
  }