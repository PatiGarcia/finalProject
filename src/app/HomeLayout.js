import './Home.css'
import Header from './Componentes/Header';
import SliderEventos from './Componentes/SliderEventos';

import FrasesMotivacionales from './Componentes/FrasesMotivacionales';

import Footer from './Componentes/Footer';
import  Chat from './Componentes/Chat';



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
