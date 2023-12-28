import React, { useEffect, useState } from "react";
import ThemeContex from "../Context/ThemeContex";
function ThemeProvider({ children }) {
   const [AddCart, SetAddCart] = useState([]);
   const [Count, SetCount] = useState(0);
   const [TotalPriceCart, SetTotal] = useState(0);

   
   // for handling Header
   const [Ishow, SetShow] = useState(true);
   const HandleCartShow = () => {
      SetShow(!Ishow);
   };
    useEffect(() =>{
      const HandleTotalPrice = () => {
         const totalPrice = AddCart.reduce(
            (prev, current) => prev + current.price,
            0
         );
         SetTotal(totalPrice);
      };
     HandleTotalPrice()
    },[AddCart])
  
   //handle the format the price
   const formattedPrice = new Intl.NumberFormat().format(
      TotalPriceCart
   );

   const HandleAddCart = (AllItems, id) => {
      const NewItem = AllItems.find((item) => item.id === id); // finding the Mutch id
      NewItem
         ? SetAddCart([...AddCart, NewItem], SetCount(Count + 1))
         : console.log("Not Found"); // if Mutch the id from HomeCart then add nya sa Addcart
   };
        // Function for removing Items
        const RemovingFromCart = (id) =>{
         const NewItem = AddCart.find((item) => item.id === id);
           console.log(NewItem)
        }

        // Function for Viewing Details

      const HandleViewDetails = (id,title,image) =>{
   
      }
   return (
      <ThemeContex.Provider
         value={{
            Ishow,
            HandleCartShow,
            HandleAddCart,
            AddCart,
            Count,
            formattedPrice,
            RemovingFromCart,
            HandleViewDetails,

         }}
      >
         {children}
      </ThemeContex.Provider>
   );
}

export default ThemeProvider;
