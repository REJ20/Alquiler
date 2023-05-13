import { Menu } from 'antd';
import { Input, Space} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { Button } from 'antd/es/radio';
//import CerrarSesion from '../componentes/cerrarSesion';
import Logo from '../imagenes/Logo.png';
import '../estilos/estilosMenu.css';
import { Link } from 'react-router-dom';

const { Search } = Input;
const onSearch = (value) => console.log(value);
function MenuBarUser() {
  return (
        <Menu className='menu-container' theme="dark" mode="horizontal">
          <div>
            <img className='logo' src={Logo} alt="" />
          </div>
          <div className='option-menu'>
            <Menu.Item key="Inicio">Inicio</Menu.Item>
            <Menu.Item key="Peliculas">Peliculas</Menu.Item>
            <Menu.Item key="contacto">Contacto</Menu.Item>
          </div>.
          <div>
            <Search
            placeholder="Nombre"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
          />
          </div>
          <div>
            <Link to={'/Login'}>
              <Button type="primary">
                Login
              </Button>
              </Link>
            <Space wrap size={10}>
              <Avatar size={50} icon={<UserOutlined />} />
            </Space>
          </div>

          
        </Menu>
  );
}

export default MenuBarUser;
