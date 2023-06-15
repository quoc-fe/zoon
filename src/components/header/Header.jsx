import { routerConstant } from "@/constants/routerConstant";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useCallback } from "react";
import Logo from "../../assets/logo-desktop-header.svg";
import Insta from "../../assets/insta.svg";
import BlackInsta from "../../assets/black_insta.svg";
import Tele from "../../assets/tele.svg";
import BlackTele from "../../assets/black_tele.svg";
import Growth from "../../assets/growth.svg";
import BlackGrowth from "../../assets/black_growth.svg";
import Discord from "../../assets/discord.svg";
import BlackDiscord from "../../assets/black_discord.svg";
import { RiArrowUpSFill, RiArrowDownSFill } from "react-icons/ri";
import { useHeaderMobile } from "@/hooks/useHeaderMobile";
import { useRouter } from "next/router";
import MetaMaskSDK from "@metamask/sdk";
import { useRecoilState, useSetRecoilState } from "recoil";
import { changeLang, openModal } from "@/recoil/commonRecoilState";
import { useNetwork } from "wagmi";

const languages = [
  { id: "ar", name: "Arabic" },
  { id: "zh-CN", name: "Chinese" },
  { id: "cs", name: " Czech" },
  { id: "en", name: " English" },
  { id: "et", name: " Estonian" },
  { id: "tl", name: " Tagalog" },
  //
  { id: "fr", name: "French" },
  { id: "de", name: "German" },
  { id: "el", name: " Greek" },
  { id: "iw", name: " Hebrew" },
  { id: "hi", name: " Hindi" },
  { id: "id", name: " Indonesian" },
  //
  { id: "it", name: "Italian" },
  { id: "ja", name: "Japanese" },
  { id: "ko", name: " Korean" },
  { id: "fa", name: " Farsi" },
  { id: "pt", name: " Portuguese" },
  //
  { id: "ro", name: "Romanian" },
  { id: "ru", name: "Russian" },
  { id: "es", name: " Spanish" },
  { id: "tr", name: " Turkish" },
  { id: "ur", name: " Urdu" },
  { id: "vi", name: " Vietnamese" },
];
export default function Header() {
  const router = useRouter();
  const [lang, SetLang] = useState("English");
  const { openHeader, setOpenHeader } = useHeaderMobile();
  const { section } = router.query;
  const [dropDown, setDropdown] = useState(false);
  const [open, setOpen] = useRecoilState(openModal);

  const renderLang = useCallback(() => {
    return languages.map((lang, index) => {
      return (
        <li
          key={lang.id}
          className="py-[8px] cursor-pointer px-[24px] border-b border-black/10"
          onClick={() => {
            SetLang(lang.name);
            router.push(`#googtrans(en|${lang.id})`, undefined, {
              shallow: true,
            });
            window.location.reload();
          }}
        >
          {lang.name}
        </li>
      );
    });
  }, []);
  // useEffect(() => {
  //   if (section) {
  //     if (section === "buy") {
  //       const element = document.getElementById("claim");
  //       element.scrollIntoView();
  //     } else if (section === "lootboxes") {
  //       const element = document.getElementById("Lootboxes");
  //       element.scrollIntoView();
  //     }
  //   }
  // }, [router.isReady]);
  return (
    <header className={` w-full  bg-transparent `}>
      <div className="py-[24px] px-[40px]">
        <div className="flex items-center md:items-start justify-between">
          <ul className="hidden md:flex items-center gap-[24px] mt-4">
            <Link href="https://www.instagram.com/BigEyesCoin/" target="_blank">
              <li className="group  ">
                <Image
                  className="group-hover:hidden"
                  src={Insta}
                  width={25}
                  height={25}
                  alt=""
                />
                <Image
                  className="hidden group-hover:block"
                  width={25}
                  height={25}
                  src={BlackInsta}
                  alt=""
                />
              </li>
            </Link>
            <Link href="https://twitter.com/BigEyesCoin" target="_blank">
              <li className="text-white hover:text-[#242424]  ">
                <svg
                  width="28"
                  height="25"
                  viewBox="0 0 28 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.3693 0.585872C26.178 1.48348 24.859 2.17001 23.463 2.61902C22.7137 1.6988 21.718 1.04657 20.6104 0.750552C19.5028 0.454529 18.3368 0.528992 17.2701 0.963869C16.2035 1.39875 15.2876 2.17305 14.6463 3.18207C14.005 4.19109 13.6694 5.38613 13.6847 6.60557V7.93442C11.4984 7.99497 9.33204 7.47705 7.37853 6.42677C5.42503 5.37649 3.74502 3.82646 2.48812 1.91472C2.48812 1.91472 -2.48812 13.8744 8.70842 19.1898C6.14632 21.0475 3.09417 21.979 0 21.8475C11.1965 28.4918 24.8812 21.8475 24.8812 6.5657C24.8801 6.19556 24.8467 5.82632 24.7817 5.46276C26.0514 4.12526 26.9474 2.43658 27.3693 0.585872Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </li>
            </Link>
            <Link href="https://t.me/BIGEYESOFFICIAL" target="_blank">
              <li className="group  ">
                <Image
                  className="group-hover:hidden"
                  width={25}
                  height={25}
                  src={Tele}
                  alt=""
                />
                <Image
                  className="hidden group-hover:block"
                  width={25}
                  height={25}
                  src={BlackTele}
                  alt=""
                />
              </li>
            </Link>
            <Link href="https://linktr.ee/bigeyescoin" target="_blank">
              <li className="group  ">
                <Image
                  className="group-hover:hidden"
                  width={25}
                  height={25}
                  src={Growth}
                  alt=""
                />
                <Image
                  className="hidden group-hover:block"
                  width={25}
                  height={25}
                  src={BlackGrowth}
                  alt=""
                />
              </li>
            </Link>
            <Link href="https://discord.com/invite/4jyTjhgYJN" target="_blank">
              <li className="group  ">
                <Image
                  className="group-hover:hidden"
                  width={25}
                  height={25}
                  src={Discord}
                  alt=""
                />
                <Image
                  className="hidden group-hover:block"
                  width={25}
                  height={25}
                  src={BlackDiscord}
                  alt=""
                />
              </li>
            </Link>
          </ul>
          <Link href="https://bigeyes.space/">
            <Image
              src={Logo}
              className="md:ml-[4.5rem] hidden md:block"
              width={120}
              height={88}
              alt="logo"
              loading="lazy"
            />
            <Image
              src={Logo}
              className="block md:hidden"
              width={88}
              height={88}
              alt="logo"
              loading="lazy"
            />
          </Link>

          <ul className=" flex-col-reverse md:flex-row flex  items-center gap-2 md:gap-4 mt-4">
            <li className="relative">
              <button
                className={`${
                  dropDown
                    ? "rounded-bl-none rounded-br-none"
                    : "rounded-bl-[28px] rounded-br-[28px]"
                } translate-all min-w-[168px] md:min-w-fit  min-h-[56px] duration-300 rounded-tl-[28px] rounded-tr-[28px] group hover:bg-white flex items-center relative  py-[10px] px-[24px]  border-[4px] border-white `}
                onClick={() => {
                  setDropdown(!dropDown);
                }}
              >
                <span className="text-white font-medium group-hover:text-[#242424]">
                  {lang}
                </span>
                <span className="invisible">
                  <RiArrowDownSFill className="text-xl" />
                </span>
                <span className="absolute top-2/4 right-2 -translate-y-2/4">
                  <RiArrowDownSFill
                    className={`text-xl text-white group-hover:text-[#242424] ${
                      dropDown ? "hidden" : "block"
                    }`}
                  />
                  <RiArrowUpSFill
                    className={`text-xl text-white group-hover:text-[#242424] ${
                      dropDown ? "block" : "hidden"
                    }`}
                  />
                </span>
              </button>
              <ul
                className={`${
                  dropDown ? "block" : "hidden"
                } absolute shadow-languages  top-full left-0 bg-white w-full min-w-[168px] z-[20] max-h-[320px] overflow-y-scroll rounded-bl-[28px] `}
              >
                {renderLang()}
              </ul>
            </li>
            {/* <li>
              <button
                className="min-w-[168px] min-h-[56px] py-[12px] px-[32px] text-[19px] bg-white text-[#242424] hover:text-white hover:bg-[#242424] rounded-[28px] translate-all duration-300 font-semibold"
                onClick={() => {
                  const element = document.getElementById("claim");
                  element.scrollIntoView();
                }}
              >
                Buy now
              </button>
            </li> */}
          </ul>
        </div>
      </div>
    </header>
  );
}
