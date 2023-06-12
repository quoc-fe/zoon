import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import Presale from "../../../assets/presale.webp";
import Pulse from "../../../assets/pulse.png";
import { FaTwitter, FaTelegramPlane } from "react-icons/fa";

import { useRouter } from "next/router";
import { openModal } from "@/recoil/commonRecoilState";
import { useRecoilState } from "recoil";

export default function HomeBanner() {
  const router = useRouter();

  const [open, setOpen] = useRecoilState(openModal);
  const { section } = router.query;
  const checkSection = () => {
    if (section) {
      if (section === "claim") {
        return true;
      }
      return false;
    }
  };
  return (
    <div className="pt-[32px] px-4 min-[576px]:px-[36px] lg:px-[72px] 2xl:px-[104px] pb-[100px]">
      <div className="h-[200px] min-[576px]:h-[300px] lg:h-[500px] xl:h-[576px] 2xl:h-[1016px] w-full border-[5px] min-[576px]:border-[8px] border-white rounded-[2rem] min-[576px]:rounded-[4rem] lg:rounded-[7.5rem] 2xl:rounded-[120px] overflow-hidden home-banner flex items-center justify-center">
        <div className="hidden lg:block shadow-banner  max-w-[90%] xl:max-w-[80%] 2xl:max-w-[70%] bg-[#fffef5] h-[95%] rounded-[6.25rem] p-[32px] 2xl:p-[110px] flex items-center justify-center">
          <div className="pb-[32px]  2xl:p-[90px] ">
            <div className="flex justify-center">
              <Image
                className="hidden 2xl:block"
                src={Presale}
                width={200}
                height={80}
                alt=""
              />
              <Image
                className="block 2xl:hidden"
                src={Presale}
                width={128}
                height={64}
                alt=""
              />
            </div>
            <h1 className=" mt-4 2xl:mb-4 2xl:mt-[40px] font-Extra font-[900] text-[40px] 2xl:text-[50px] text-center">
              100<span className="font-bubblegum text-[0.85em]">%</span>Secure
              Zone
            </h1>
            <p className="my-[16px] 2xl:my-[18px] text-base 2xl:text-[20px] text-center w-[640px] 2xl:w-[480px] mx-auto">
              Big Eyes is the ultimate memecoin platform, and it couldn't be
              easier to get your hands on the token in our presale.
            </p>
            <p className="my-[16px] 2xl:my-[18px] text-base 2xl:text-[20px] text-center w-[640px] 2xl:w-[480px] mx-auto">
              Contract code fully audited by Solidity Finance and shown to be
              100% secure.
            </p>
            <p className="my-[16px] 2xl:my-[20px] text-base 2xl:text-[20px] text-center w-[640px] 2xl:w-[480px] mx-auto">
              You can buy direct using USDT, ETH or BNB. After the public sale
              ends, you'll claim your purchased Big Eyes using the claim page.
            </p>
            <div className="mt-[42px] flex items-center justify-center gap-3">
              <button
                className="bg-[#f38590] whitespace-nowrap text-white border-[5px] text-[1.125rem] 2xl:text-[1.375rem] hover:font-semibold border-[#F9C7CC] rounded-full w-[11rem] py-[8px] px-[24px] font-semibold hover:bg-[#F9C7CC] hover:text-black transition-all duration-300"
                onClick={() => {
                  const element = document.getElementById("claim");
                  element.scrollIntoView();
                }}
              >
                Claim Tokens
              </button>
              <button
                className="bg-[#f38590] whitespace-nowrap text-white border-[5px] text-[1.125rem] 2xl:text-[1.375rem] hover:font-semibold border-[#F9C7CC] rounded-full  py-[8px] px-[24px] font-semibold hover:bg-[#F9C7CC] hover:text-black transition-all duration-300"
                onClick={() => {
                  const element = document.getElementById("Lootboxes");
                  element.scrollIntoView();
                }}
              >
                Buy Lootboxes
              </button>
              <button
                className="bg-[#F9C7CC] whitespace-nowrap text-white border-[5px] text-[1.125rem] 2xl:text-[1.375rem] hover:font-semibold border-[#F9C7CC] rounded-full  py-[8px] px-[24px] font-semibold hover:bg-[#f38590] hover:text-black transition-all duration-300"
                onClick={() => {
                  const element = document.getElementById("howto");
                  element.scrollIntoView();
                }}
              >
                How to Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
