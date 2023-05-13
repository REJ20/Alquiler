
import { Card } from "antd";
import { Descriptions, Drawer, Space, InputNumber } from 'antd';
import { Button } from "antd/es/radio";
import  kimetsu  from '../imagenes/kimetsu.jpg';
import '../estilos/buyStyle.css';
import { PlusOutlined } from '@ant-design/icons';
import FormModalBuy from './FormModalBuy';
import { useState } from 'react';

const onChange = (value) => {
    console.log('changed', value);
  };

const Compra = () => {
    const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
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
            <Descriptions title="Kimetsu no Yaiba">
            <Descriptions.Item label="Sinopsis">Tanjiro Kamado y sus amigos del Demon Slayer Corps acompañan
            a Kyojuro Rengoku, el Flame Hashira, para investigar una 
            misteriosa serie de desapariciones que ocurren dentro de un tren aparentemente infinitamente largo. 
            Poco saben que Enmu, la última de las Lunas Inferiores de los Doce Kizuki, también está a bordo y 
            les ha preparado una trampa.</Descriptions.Item>
            </Descriptions>
            </div>
            <div className='botton-container'>
                <InputNumber className="input-number" min={1} max={10} defaultValue={3} onChange={onChange} /> <p>Cantidad</p> 
                <Button className="button-buy" type="primary" onClick={showDrawer()} icon={<PlusOutlined />}>
                Comprar
                </Button>
                <Drawer
                title="Datos del Cliente"
                width={720}
                onClose={onClose}
                open={open}
                bodyStyle={{
                paddingBottom: 80,
                }}
                extra={
                <Space>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button onClick={onClose} type="primary">
                    Comprar
                    </Button>
                </Space>
                }
                >   
                </Drawer>
                <Button className="button-rent" type="primary" htmlType="submit">
                    Alquilar
                </Button>
                
            </div>
        </div>
    </div>
    );
    };
    export default Compra;