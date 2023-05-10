import { Button } from 'antd';
import { useHistory } from 'react-router-dom';

const handleLogout = () => {
    sessionStorage.removeItem('token');
    /*history.push('/login');*/ //por el momento omitimos esto porque no esta creado el componente login  
  };

  const CerrarSesion = () => {
    const history = useHistory();
  
    const handleLogout = () => {
      sessionStorage.removeItem('token');
      history.push('/login');
    };
  
    return (
      <Button onClick={handleLogout}>Logout</Button>
    );
  };

  export default CerrarSesion;
  