import './Home.css'
import SliderEventos from './Componentes/SliderEventos';
import FrasesMotivacionales from './Componentes/FrasesMotivacionales';
import  Chat from './Componentes/Chat';

import Header from './Componentes/Header';
import Footer from './Componentes/Footer';

function HomeLayout() {
  return (
    <>
      <div><Header/></div>
      <div><SliderEventos/></div>
      <div><Chat/></div>
      <div><FrasesMotivacionales/></div>
      <div><Footer/></div>
    </>
  )
}

export default HomeLayout
