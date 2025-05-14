import React from "react";

export default function CategroyItems(props) {
  return (
    <div>
      <ul className="space-y-10">
        {props.selectedCategory.map((item) => (
          <>
            <li>
              <div className="flex items-center justify-between border-b-2 border-primary-color text-secondary-color text-shadow-lg">
                <h2>
                  {item.name} {item.type}
                </h2>
                {item.price.toLocaleString("fa-IR")}
              </div>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
}
