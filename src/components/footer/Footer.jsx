import Link from "next/link";
import React from "react";
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className=" bg-black/10 border-t border-white/10">
      <div className="max-w-[1140px] w-full flex items-center justify-center gap-3  mx-auto px-3 py-5">
        <Link href={"https://t.me/pulseshibahk"} target="_blank">
          <div className="group hover:bg-white w-[30px] h-[30px] flex items-center justify-center rounded-full transition-all duration-300">
            <FaTelegramPlane className=" group-hover:!text-[#171A1D] !text-white text-2xl transition-all duration-300" />
          </div>
        </Link>
        <Link href={"https://twitter.com/PulseShibaHK"} target="_blank">
          <div className="group hover:bg-white w-[30px] h-[30px] flex items-center justify-center rounded-full transition-all duration-300">
            <FaTwitter className=" group-hover:!text-[#171A1D] !text-white text-2xl transition-all duration-300" />
          </div>
        </Link>
      </div>
    </footer>
  );
}
