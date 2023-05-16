import { Carousel } from 'antd';
import '../estilos/carouselStyle.css';
import carusel1 from '../imagenes/guardians3.jpg';
import carusel2 from '../imagenes/suzume.jpg';
import carusel3 from '../imagenes/cazador.jpg';
import carusel4 from '../imagenes/rapido.jpg';

function Carrusel() {
    return(
  <Carousel autoplay>
    <div className='carousel-container'>
      <img src={carusel1} alt="" />
    </div>
    <div className='carousel-container'>
      <img src={carusel2} alt="" />
    </div>
    <div className='carousel-container'>
      <img src={carusel3} alt="" />
    </div>
    <div className='carousel-container'>
      <img src={carusel4} alt="" />
    </div>
  </Carousel>
  )
}

export default Carrusel;