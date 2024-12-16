import './Home.css'
import Header from './Componentes/Header';
import SliderEventos from './Componentes/SliderEventos';
import YoutubeVideos from './Componentes/YoutubeVideos';
import Test from './Componentes/Test';
import FrasesMotivacionales from './Componentes/FrasesMotivacionales';
import Resenas from './Componentes/SliderResenas';
import Footer from './Componentes/Footer';
import  Chat from './Componentes/Chat';



function HomeLayout() {
  return (
    <>
      <div><Header/></div>
      <div><SliderEventos/></div>
      {/* <div><YoutubeVideos/></div>  */}
      {/* <div><Test/></div>  */}
      <div><Chat/></div>
     <div><FrasesMotivacionales/></div>
     {/* <div><Resenas/></div>  */}
     <div><Footer/></div>
    </>
  )
}

export default HomeLayout