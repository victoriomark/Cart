import React, { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import ThemeContext from "../Context/ThemeContex";

function HomeProduct() {
   const { HandleAddCart, HandleViewDetails } = useContext(ThemeContext);
   const [AllItems, SetAllItems] = useState([]);
   const [selectedProduct, setSelectedProduct] = useState(null); // To store the selected product
  const [NumberOfItem,SetNumberOfItem] = useState(5)

   // Fetching data using useEffect
   useEffect(() => {
      axios.get(`https://fakestoreapi.com/products?limit=${NumberOfItem}`).then((Data) => {
         SetAllItems(Data.data);
      });
   }, [NumberOfItem]);

   // Function to show product details in a modal
   const showProductDetails = (id, title, image, description,category) => {
      HandleViewDetails(id, title, image, description,category);
      const product = AllItems.find((item) => item.id === id);
      setSelectedProduct(product);
   };
  const HanldeMoreItem = () =>{
  SetNumberOfItem(NumberOfItem + 5)
  console.log(AllItems.length)
  }
 
   // card component to display product details
   const ProductDetailsModal = ({ product }) => {
      return (
         <div id="detailsCard" className='card col-lg-6'>
            <img
               style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "30vh",
               }}
               src={product.image}
               alt=''
               className='card-img'
            />
            <div className='card-body'>
               <h5 className='card-title text-center fs-4 fw-bold'>
                  {product.title}
               </h5>
                <h6 className="text-center">{product.category}</h6>
               <h5 className='text-success card-text mt-3'>
                  Price: ${product.price}
               </h5>
               <p className='fw-bolder text-secondary card-text mb-3'>
                  Description : {product.description}
               </p>
            </div>
            <button
               className='btn text-danger fw-bold'
               onClick={() => setSelectedProduct(null)}
            >
               <i class='fa-solid fa-trash'></i>
            </button>
         </div>
      );
   };

   return (
      <>
         <div className='row gap-3 justify-content-center mt-5'>
            {AllItems.map(({ title, price, image, id }) => {
               return (
                  <div key={id} className='card bg-black text-light   col-lg-2 p-2'>
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
                    <button
                        onClick={() => HandleAddCart(AllItems, id)}
                        className='btn btn-info fw-bold text-light m-2 w-50 '
                     >
                        Add to Cart
                     </button>
                 
                     <button
                        onClick={() => showProductDetails(id, title)}
                        className='btn_con btn btn-secondary'
                     >
                        Details
                     </button>
                  </div>
               );
            })}
         </div>
         {/* Render the modal when a product is selected */}
         {selectedProduct && <ProductDetailsModal product={selectedProduct} />}
         <div className="container">
            <h5 onClick={HanldeMoreItem} style={{cursor:"pointer"}} className="text-center text-light">See More Product</h5>
         </div>
      </>
   );
}

export default HomeProduct;
