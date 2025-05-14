import React, { useState } from "react";
import MenuData from "../MenuDatas";

export default function CategoryName(props) {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const clickHandler = (id) => {
    const category = MenuData.categories.find((cat) => cat.id === id);
    props.setSelectedCategory(category ? category.items : []);
    props.setIsShowWelcome(false);
    setSelectedCategoryId(id);
  };

  return (
    <>
      <div className="h-full flex flex-col justify-between items-center text-white text-xs">
        {MenuData.categories.map((category) => (
          <div
            key={category.id}
            className="flex items-center justify-center h-full w-full"
            onClick={() => clickHandler(category.id)}
          >
            <div className="flex items-center p-3">
              <h2
                className={`${
                  selectedCategoryId === category.id
                    ? "text-sm text-shadow-lg text-secondary-color" 
                    : "text-xs text-white"
                }`}
              >
                {category.name}
              </h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`lucide lucide-chevron-left-icon lucide-chevron-left ${
                  selectedCategoryId === category.id
                    ? "text-sm text-shadow-lg text-secondary-color" 
                    : "text-xs text-white"
                }`}
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
