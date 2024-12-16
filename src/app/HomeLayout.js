import './Home.css'
import SliderEventos from './Componentes/SliderEventos';
import FrasesMotivacionales from './Componentes/FrasesMotivacionales';
import  Chat from './Componentes/Chat';



function HomeLayout() {
  return (
    <>
      <div><SliderEventos/></div>
      <div><Chat/></div>
     <div><FrasesMotivacionales/></div>
    </>
  )
}

export default HomeLayout