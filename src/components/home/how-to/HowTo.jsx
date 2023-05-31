import React from "react";
import { RiContactsBookLine } from "react-icons/ri";
import { FcFlowChart } from "react-icons/fc";
import { IoWallet } from "react-icons/io5";
export default function HowTo() {
  return (
    <div
      className="py-[90px] max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] w-full   mx-auto px-3"
      id="howTo"
    >
      <div data-aos="fade-up" data-aos-easing="linear">
        <h1 className="text-[34px] font-semibold  text-center ">How to swap</h1>
        <ul className="text-center mb-20">
          <li className="inline-block w-[30px] h-[1px] bg-white/30 mr-3"></li>
          <li className="inline-block w-[30px] h-[1px] bg-gradient-to-r from-[#e49945] to-blue-500 mr-3"></li>
          <li className="inline-block w-[30px] h-[1px] bg-white/30 "></li>
        </ul>
      </div>
      <div className="lg:flex items-center">
        <div
          className="border-l border-white/30 p-20"
          data-aos="fade-zoom-in"
          data-aos-easing="linear"
        >
          <div className="flex items-center gap-4 mb-3">
            <RiContactsBookLine className=" text-[#e49945] text-5xl" />
            <h2 className="text-xl font-semibold">Step 1</h2>
          </div>
          <p className="text-[#aaaaaa]">
            Enter currency and destination address
          </p>
        </div>
        <div
          className="border-l border-white/30 p-20"
          data-aos="fade-zoom-in"
          data-aos-easing="linear"
          data-aos-delay="300"
        >
          <div className="flex items-center gap-4 mb-3">
            <FcFlowChart className=" text-[#e49945] text-5xl" />
            <h2 className="text-xl font-semibold">Step 2</h2>
          </div>
          <p className="text-[#aaaaaa]">
            Lituya Technique: Swap, Scatter, Repeat
          </p>
        </div>
        <div
          className="border-l border-white/30 p-20"
          data-aos="fade-zoom-in"
          data-aos-easing="linear"
          data-aos-delay="500"
        >
          <div className="flex items-center gap-4 mb-3">
            <IoWallet className=" text-[#e49945] text-5xl" />
            <h2 className="text-xl font-semibold">Step 3</h2>
          </div>
          <p className="text-[#aaaaaa]">Receive destination currency</p>
        </div>
      </div>
    </div>
  );
}
