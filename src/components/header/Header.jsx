import { routerConstant } from "@/constants/routerConstant";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useCallback } from "react";
import Logo from "../../assets/logo_web.png";
import LogoMobile from "../../assets/ai_footer.svg";
import { RiArrowUpSFill, RiArrowDownSFill } from "react-icons/ri";
import { useHeaderMobile } from "@/hooks/useHeaderMobile";
import { useRouter } from "next/router";
import { useRecoilState, useSetRecoilState } from "recoil";
import { changeLang, openModal } from "@/recoil/commonRecoilState";
import { FaBars } from "react-icons/fa";
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
  const [dropHeader, setDropHeader] = useState(false);
  const renderLang = useCallback(() => {
    return languages.map((lang, index) => {
      return (
        <li
          key={lang.id}
          className="py-[8px] cursor-pointer px-[24px] font-[500] "
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
  useEffect(() => {
    window.addEventListener("click", function (event) {
      setDropdown(false);
    });
    window.addEventListener("scroll", function (event) {
      if (window.scrollY > 150) {
        setDropHeader(true);
      } else {
        setDropHeader(false);
      }
    });
  }, []);
  return (
    <header
      className={`fixed w-full ${
        dropHeader
          ? "bg-black"
          : "bg-[rgba(76,16,54,0)] transition-all duration-300"
      }   `}
    >
      <div className="py-[15px] px-[25px]">
        <div className="flex items-center  justify-between">
          <Link className="shadow-logo " href={routerConstant.home}>
            <Image
              src={Logo}
              className="hidden lg:block"
              width={200}
              height={20}
              alt="logo"
              loading="lazy"
            />
            {/* <Image
              src={Logo}
              className="block md:hidden"
              width={88}
              height={88}
              alt="logo"
              loading="lazy"
            /> */}
          </Link>
          <Link className="shadow-logo " href={routerConstant.home}>
            <Image
              src={LogoMobile}
              className=" block lg:hidden"
              width={50}
              height={22}
              alt="logo"
              loading="lazy"
            />
            {/* <Image
              src={Logo}
              className="block md:hidden"
              width={88}
              height={88}
              alt="logo"
              loading="lazy"
            /> */}
          </Link>
          <ul className="hidden lg:flex items-center">
            <li className="text-[17px] xl:text-[20px] mx-[10px] xl:mx-5 py-[10px] hover:text-[#26adcf]   capitalize font-inder text-white shadow-text cursor-pointer">
              Platform
            </li>
            <li className="text-[17px] xl:text-[20px] mx-[10px] xl:mx-5 py-[10px] hover:text-[#26adcf]   capitalize font-inder text-white shadow-text cursor-pointer">
              $AI Token
            </li>
            <li className="text-[17px] xl:text-[20px] mx-[10px] xl:mx-5 py-[10px] hover:text-[#26adcf]   capitalize font-inder text-white shadow-text cursor-pointer">
              How To Buy
            </li>
            <li className="text-[17px] xl:text-[20px] mx-[10px] xl:mx-5 py-[10px] hover:text-[#26adcf]   capitalize font-inder text-white shadow-text cursor-pointer">
              Roadmap
            </li>
            <li className="text-[17px] xl:text-[20px] mx-[10px] xl:mx-5 py-[10px] hover:text-[#26adcf]   capitalize font-inder text-white shadow-text cursor-pointer">
              Airdrop
            </li>
            <li className="text-[17px] xl:text-[20px] mx-[10px] xl:mx-5 py-[10px] hover:text-[#26adcf]   capitalize font-inder text-white shadow-text cursor-pointer">
              FAQ
            </li>
            <li className="relative">
              <button
                className=" outline-none text-start cursor-pointer w-[256px] py-[10px] px-[15px] bg-[rgba(255,255,255,.15)]  ms-3 text-[20px] rounded-[32px] text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  setDropdown(!dropDown);
                }}
              >
                {lang}
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
                } absolute   top-full left-0 bg-white w-full rounded-tl rounded-bl max-h-[250px] overflow-y-scroll`}
              >
                {renderLang()}
              </ul>
            </li>
          </ul>
          <button className="block lg:hidden" onClick={() => {}}>
            <FaBars className="text-2xl text-white" />
          </button>
        </div>
      </div>
    </header>
  );
}
