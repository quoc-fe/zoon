import React from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

export default function ScrollTop() {
  return (
    <button
      className="fixed bottom-4 right-3 w-[50px] h-[50px] flex items-center justify-center border-2 rounded-full z-[800]"
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      <MdOutlineKeyboardArrowUp className="text-3xl !text-white" />
    </button>
  );
}
