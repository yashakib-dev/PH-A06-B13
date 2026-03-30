import React from 'react';
import { toast } from 'react-toastify';
const Cards = ({toolsData,buyNow,setBuyNow}) => {
    return (
        <>

            <div className="text-center space-y-5 container md:w-full w-[90%] mx-auto justify-items-center mt-15 grid lg:grid-cols-3 md:grid-cols-2 gap-8 grid-cols-1 ">
            {toolsData.map((tool) => {
                    const isSelected = buyNow.some(b => b.id === tool.id);
                return(
                     <div key={tool.id} className="card w-96 bg-base-100 rounded-2xl shadow-sm">
                 <div className="card-body border  border-gray-300 rounded-2xl ">

            <div className="flex  justify-between">
                <img className="border border-gray-300 rounded-3xl p-2" src={tool.icon} alt="" />
                 <span className={`badge badge-soft badge-md ${tool.tag === "new" ?  "badge-success": tool.tag === "popular"?"badge-primary":"badge-warning"}`}>{tool.tag.toUpperCase()}</span>
            </div>
         
          <div className="text-start space-y-3">
            <h2 className="text-3xl font-bold">{tool.name}</h2>
            <p className="text-[#627382]">{tool.description}</p>
            <span className="text-xl font-bold">${tool.price}/<span className='text-sm font-medium text-[#627382]'>{tool.period}</span></span>
          </div>
          <ul className="mt-3 flex flex-col text-[#627382] text-start gap-2 ">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{tool.features[0]}</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{tool.features[1]}</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{tool.features[2]}</span>
            </li>
           
          </ul>
          <div className="mt-3">
            <button
            onClick={ () =>{
                 toast.success(`Item added to your cart`);
                setBuyNow([...buyNow, tool]);
                
            }}
            disabled={isSelected}
            className="btn bg-linear-to-r from-[#4F39F6] rounded-full h-12 to-[#9514FA] text-[white] btn-block">
            
            {isSelected ? "Purchased" : "Buy Now"}
           
            </button>
          </div>
        </div>
            </div>
                )

            })}
            
 

            </div>
        </>
    );
};

export default Cards;