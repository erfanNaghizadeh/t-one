import React, { useState } from "react";
import CategoryName from "./Components/CategoryName";
import Header from "./Components/Header";
import CategroyItems from "./Components/CategroyItems";
import Footer from "./Components/Footer";


export default function App() {
  const [isShowWelcome , setIsShowWelcome] = useState(true)
  const [selectedCategory , setSelectedCategory] = useState([])
  return (
    
    <>
      <Header />
      <div
        className="grid grid-cols-10 font-lalezar text-nowrap overflow-hidden"
        dir="rtl"
      >
        <div className="col-span-4 min-h-screen bg-teriary-color p-5 border-l-secondary-color border-l-2 ">
          <CategoryName setSelectedCategory={setSelectedCategory} setIsShowWelcome={setIsShowWelcome} />
        </div>
        <div className="bg-teriary-color col-span-6 px-1">
          <div className="mt-24 mb-24">
            {isShowWelcome?(
               <h2 className="text-secondary-color text-2xl font-bold">
               به  کافه تیوان خوش آمدی
             </h2>
            ):(<CategroyItems selectedCategory={selectedCategory}/>)}
         
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
