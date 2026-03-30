import React, { use, useState } from "react";

import Cards from "../cards/Cards";
import Cart from "../cart/Cart";

const DigitalTools = ({toolsPromise, setBuyNow, buyNow}) => {
    const toolsData = use(toolsPromise);
   
    const [buttonType, setButtonType] = useState("on");  

  return (
    <>
      <div className="text-center space-y-5 container md:w-full w-[90%] mx-auto mt-30">
        <h2 className="md:text-5xl text-4xl text-[#101727] font-bold">
          Premium Digital Tools
        </h2>
        <p className="text-[#627382] md:text-lg text-sm">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>

        <div className="rounded-full border text-center border-gray-200 w-fit mx-auto p-1">
          <button onClick={()=> setButtonType("on")}
          className={`btn ${buttonType === "on" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA]" : ""} border-0  w-30 h-11  ${buttonType === "selected" ? "text-[black]" :"text-[white]" } rounded-full`}>
            Products
          </button>
          <button
            onClick={()=> setButtonType("selected")}
          className={`btn ${buttonType === "selected" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA]" : ""} border-0  w-30 h-11  ${buttonType === "on" ? "text-[black]" :"text-[white]" } rounded-full`}>
            Cart ({buyNow.length})
          </button>
        </div>

      </div>
    {
        buttonType === "on" ? <Cards toolsData={toolsData} buyNow={buyNow} setBuyNow ={setBuyNow}></Cards>
                            : <Cart setBuyNow ={setBuyNow} buyNow={buyNow} ></Cart>

    }
   
   

      
    </>
  );
};

export default DigitalTools;
