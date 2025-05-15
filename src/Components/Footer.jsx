import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-row items-center justify-evenly font-lalezar p-4 bg-primary-color">
      <div>
        <span>
          <a
            href="https://superapp.snappfood.ir/caffe/menu/%DA%A9%D8%A7%D9%81%D9%87_%D8%AA%DB%8C%D9%88%D8%A7%D9%86-r-mem75z/?from_list=1&is_pickup=0&GAParams="
            className="text-pink-500 font-semibold text-xl"
          >
            snapp food
          </a>
        </span>
      </div>
      <div>
        <a href="https://www.instagram.com/t.one_cafe?igsh=MXJtcjc1M3h2NjhnMw%3D%3D&utm_source=qr">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-red-800"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        </a>
      </div>
    </div>
  );
}
