import { Pagination } from 'antd';
import '../estilos/estiloCatalogo.css';

function Paginacion () {
    return( 
        <div className='pagination-container'>
            <div>
            <Pagination defaultCurrent={1} total={50} />
            </div>
        </div>
    );
}
export default Paginacion;