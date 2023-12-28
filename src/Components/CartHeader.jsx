import React, { useContext } from 'react'
import ThemeContex from '../Context/ThemeContex'
import CartProduct from './CartProduct'
function CartHeader() {
    const {Ishow,HandleCartShow,Count} = useContext(ThemeContex)
  return (
    <>
    <header className='d-flex sticky-top   justify-content-between p-2 bg-dark text-light align-items-center '>
        <h5>SHOP</h5>
         <div>
          <i style={{cursor: "pointer"}} onClick={HandleCartShow} className="fa-solid fa-cart-shopping"></i>
          <span className='text-danger fw-bold'>{Count}</span>
         </div>
    </header>
     {Ishow ? "" :  <CartProduct/>}  
    </>
  )
}

export default CartHeader