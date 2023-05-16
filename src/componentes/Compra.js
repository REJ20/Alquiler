
import { Card } from "antd";
import { Descriptions } from 'antd';
import  kimetsu  from '../imagenes/kimetsu.jpg';
import '../estilos/buyStyle.css';
import FormModalBuy from "./FormModalBuy";

const Buy = () => {
    return(
      
    <div className='compra-container'>
        <div className='movie-container'>
            
            <Card 
                hoverable
                cover={<img alt="Kimetsu no Yaiba el tren infinito" 
                src={kimetsu} />}
            >
          </Card>
        </div>
        <div className='details-container'>
            <div className='details-movie'>   
            <Descriptions title="Kimetsu no Yaiba: movie">
            <Descriptions.Item className='description-movie' label="Sinopsis">Tanjiro Kamado y sus amigos del Demon Slayer Corps acompañan
            a Kyojuro Rengoku, el Flame Hashira, para investigar una 
            misteriosa serie de desapariciones que ocurren dentro de un tren aparentemente infinitamente largo. 
            Poco saben que Enmu, la última de las Lunas Inferiores de los Doce Kizuki, también está a bordo y 
            les ha preparado una trampa.</Descriptions.Item>
            </Descriptions>
            </div>
            <div className='botton-container'>
                <FormModalBuy />
            </div>
        </div>
    </div>
    );
    };
export default Buy;