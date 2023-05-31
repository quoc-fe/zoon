import Image from "next/image";
import React from "react";
import AboutImg from "../../../assets/about.jpg";
export default function HomeAbout() {
  return (
    <div
      className="py-[90px] max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] w-full lg:flex items-center   mx-auto px-3"
      id="about"
    >
      <div
        className="flex-1 px-3 mb-4 lg:mb-0 rounded-full overflow-hidden"
        data-aos="fade-right"
        data-aos-easing="linear"
      >
        <Image className="rounded-full" src={AboutImg} alt="about" />
      </div>
      <div
        className="flex-1 px-3 lg:w-2/4"
        data-aos="fade-left"
        data-aos-easing="linear"
      >
        <h1 className="text-[34px] !text-white font-semibold mb-[10px] ">
          About
        </h1>
        <p className="text-xl text-[#aaaaaa] mb-5 text-justify">
          Shiba HongKong is now the #1 memecoin on @pulsechain , and we're just
          getting started! 🚜 We've been growing rapidly, and our success is a
          testament to the power of community. So if you haven't already, come
          join us on pulsechain and be a part of the memecoin revolution! 🚀
        </p>
        <p className="md:text-xl text-[#aaaaaa] ">#Shiba $ShibaHK $PLS</p>
      </div>
    </div>
  );
}
