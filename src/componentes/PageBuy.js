import React from "react";
import Compra from './Compra';
import MenuBarUser from "./MenuBarUser";
import FooterPage from './FooterPage';
import FormModalBuy from './FormModalBuy';

const PageBuy = () => {
    return(
    <div>
        <MenuBarUser />
        <Compra />
        <FormModalBuy />
        <FooterPage />
    </div>
        
   )
}
export default PageBuy;