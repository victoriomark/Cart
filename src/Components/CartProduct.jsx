import React, { useContext } from "react";
import ThemeContex from "../Context/ThemeContex";

function CartProduct() {
   const { AddCart, formattedPrice } = useContext(ThemeContex);

   return (
      <div
         style={{
            position: "absolute",
            right: "0",
            top: "50px",
            width: "100%",
            height: "50vh",
         }}
         className='rounded-2 p-2 d-flex flex-column sticky-top bg-dark gap-2 justify-content-center'
      >
         {AddCart.length === 0 ? (
            <h3 className='text-light text-center'>No items in the cart</h3>
         ) : (
            <>
               <div
                  style={{ overflowY: "scroll" }}
                  className='row d-flex justify-content-center gap-2 p-2'
               >
                  {AddCart.map(({ id, title, image, price }) => (
                     <div key={id} className='card col-lg-2 col-md-7'>
                        <img
                           style={{
                              objectFit: "cover",
                              width: "100%",
                              height: "30vh",
                           }}
                           src={image}
                           alt={title}
                        />
                        <div className='card-body'>
                           <h5 className='card-title'>{title}</h5>
                           <h5 className='fw-bolder text-success'>₱ {price}</h5>
                        </div>
                     </div>
                  ))}
               </div>
               <h5 className='text-center text-light'>
                  Total: ₱{formattedPrice}
               </h5>
            </>
         )}
      </div>
   );
}

export default CartProduct;
