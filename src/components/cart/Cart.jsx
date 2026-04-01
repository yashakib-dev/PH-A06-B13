import React from 'react';
import { toast } from 'react-toastify';

const Cart = ({buyNow,setBuyNow}) => {
  
    const total = buyNow.reduce((sum, item) => sum + item.price, 0);
    const handleRemoveBtn = (tool) => {

    const filteredProduct = buyNow.filter(
      (buyNow) => buyNow.name !== tool.name
    );
    setBuyNow(filteredProduct);
    toast.error(`Item has been deleted!`);
    
  };
    return (
        <>
            <div className='bg-base-100  border border-gray-300 md:w-280 w-90 shadow-sm rounded-2xl  mt-10 p-10 container mx-auto'>
            <h2 className='text-[#101727] font-bold text-2xl  mb-6'>Your Cart</h2>
                {buyNow.length === 0 ? (
        <div className="shadow bg-base-100 border border-gray-300 md:p-30 p-10 md:pt-15 rounded-2xl">
          <h2 className="text-3xl  font-semibold text-center mt-10  ">
            Your cart is empty.
          </h2>
          <p className="text-lg font-semibold mt-5 text-center">
            Please select a product first
          </p>
          
        </div> 
      ) : ( buyNow.map((tool) => {
               
          return (
            <div key={tool.id} className="mb-4 shadow-sm rounded-2xl bg-base-200">
            
              <div className="  p-4  flex justify-between items-center ">
                <div className="items-center  flex gap-4 ">
                  <img
                    className="h-10 w-10 rounded-2xl"
                    src={tool.icon}
                    alt=""
                  />
                  <div className="">
                      <h2 className="card-title font-semibold">
                        {tool.name}
                      </h2>
                    <p className="text-[#131313b5] font-medium ">
                      ${tool.price}
                    </p>
                  </div>
                </div>

               <button
               onClick={()=>handleRemoveBtn(tool)}
               className='text-[#ff0000] hover:text-[purple] hover:cursor-pointer'>Remove</button>
              </div>

                </div> 
          )       
    
        }))
        
            }
        <div className='flex justify-between mt-5'>
                <p>Total:</p>
                <span>${total.toFixed(2)}</span>
        </div>
        
        <button
        disabled={buyNow.length === 0}
        onClick={()=>{
          setBuyNow([])
          toast.success(`Proceed to Checkout`);
        }
        
      }
        
        className='btn mt-5 w-full h-12 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-[white]'>Proceed to Checkout</button>
        
            </div>
        </>
    );
};

export default Cart;