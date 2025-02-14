import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtocart } from "../redux/card/cardSlice";
import Footer from "./Footer";

const Cards =  ({ inputtext })=> {

  const items = useSelector((state) => state.allcards.items);
  const dispatch = useDispatch();

  const filteredItems = items.filter(el => 
    el.brand.toLowerCase().includes(inputtext.toLowerCase())
  );

  return (
    <>
    <div className="bg-blue-100 py-10 ">
      <div className="container mx-auto">
        {filteredItems.length === 0 ? (<div className=" flex justify-center items-center h-[295px] text-gray-800 text-xl font-bold">No Items Found</div>) :(

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {filteredItems.map((data,index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden  ">
              <img
                src={`/images/${data.img}`}
                alt="img"
                className="w-full h-80 object-cover p-1 transition-transform duration-300 hover:scale-105"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{data.brand}</h3>
                <p className="text-gray-600">Model: {data.model} | Price: {data.price}</p>
                <button
                  className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-full"
                  onClick={() => dispatch(addtocart(data))}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
          ) }

      </div>
    </div>
    <Footer/>
    </>
    
  );
};

export default Cards;
