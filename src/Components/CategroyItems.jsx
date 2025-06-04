import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CategroyItems({ selectedCategory }) {
  return (
    <AnimatePresence mode="wait">
      <motion.ul
        key={JSON.stringify(selectedCategory)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="space-y-6 max-w-full px-4 md:px-6"
      >
        {selectedCategory.map((item, index) => (
          <motion.li
            key={item.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.2 }}
            className="min-w-0"
          >
            <div className="flex items-center justify-between border-b-2 border-primary-color text-secondary-color text-shadow-md py-2 md:py-3">
              <h2 className="text-sm md:text-base  whitespace-normal min-w-0 flex flex-col">
                <span>{item.name}</span>
                <span className="text-xs text-secondary-color/70">{item.type}</span>
              </h2>
              <span className="min-w-[70px] text-right">
                {item.price.toLocaleString("fa-IR")}
              </span>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </AnimatePresence>
  );
}
