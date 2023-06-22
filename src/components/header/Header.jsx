import { routerConstant } from "@/constants/routerConstant";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useCallback } from "react";
import iconHome from "../../assets/ic-home-white.svg";
import iconEgg from "../../assets/ic-eggs-white.svg";
import iconFight from "../../assets/ic-fight-boss-white.svg";
import iconMarketplace from "../../assets/ic-marketplace.svg";
import iconMint from "../../assets/ic-mint.svg";
import iconWallet from "../../assets/ic-wallet.svg";
import { RiArrowUpSFill, RiArrowDownSFill } from "react-icons/ri";
import { useHeaderMobile } from "@/hooks/useHeaderMobile";
import { useRouter } from "next/router";
import { useRecoilState, useSetRecoilState } from "recoil";
import { changeLang, openModal } from "@/recoil/commonRecoilState";
import { FaBars } from "react-icons/fa";
import { useAccount, useDisconnect } from "wagmi";
import { truncate, truncateReverse } from "@/utils/truncate";
import ConnectWalletClaim from "../home/connectWallet/ConnectWalletClaim";
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
  const { connector: activeConnector, isConnected, address } = useAccount();
  const { disconnectAsync } = useDisconnect();
  // const renderLang = useCallback(() => {
  //   return languages.map((lang, index) => {
  //     return (
  //       <li
  //         key={lang.id}
  //         className="py-[8px] cursor-pointer px-[24px] font-[500] "
  //         onClick={() => {
  //           SetLang(lang.name);
  //           router.push(`#googtrans(en|${lang.id})`, undefined, {
  //             shallow: true,
  //           });
  //           window.location.reload();
  //         }}
  //       >
  //         {lang.name}
  //       </li>
  //     );
  //   });
  // }, []);
  // useEffect(() => {
  //   window.addEventListener("click", function (event) {
  //     setDropdown(false);
  //   });
  //   window.addEventListener("scroll", function (event) {
  //     if (window.scrollY > 150) {
  //       setDropHeader(true);
  //     } else {
  //       setDropHeader(false);
  //     }
  //   });
  // }, []);
  return (
    <header
      className={`flex items-center justify-between py-2 px-2 md:px-0 md:py-0 md:block fixed w-full md:w-[210px] md:max-w-[210px] min-w-[210px] md:h-screen z-[1000] top-0 left-0 bg-black border-r border-[rgba(73,73,73,1)]`}
    >
      <div>
        {" "}
        <Link className="shadow-logo " href={routerConstant.home}>
          <div className=" md:p-[32px] md:mb-[32px]">
            <Image
              src={"https://zoon-games.s3.us-west-1.amazonaws.com/about-1.png"}
              className=""
              width={110}
              height={48}
              alt="logo"
              loading="lazy"
            />
          </div>
        </Link>
      </div>
      <ul className="fixed bottom-0 left-0 flex items-end md:static md:block bg-[rgba(27,27,27,0.95)] md:bg-transparent">
        <Link href={routerConstant.home}></Link>
        <li
          className={`py-3 pb-0 md:pb-3 px-4 md:px-[32px] cursor-pointer flex items-center flex-col md:flex-row gap-2 md:gap-4 text-[9px] md:text-base ${
            router.pathname === routerConstant.home
              ? "bg-[rgb(244,104,24)]"
              : ""
          }`}
        >
          <Image src={iconHome} alt="" />
          <span>Home</span>
        </li>
        <li className="py-3 pb-0 md:pb-3 px-4 md:px-[32px] flex cursor-pointer flex-col md:flex-row items-center gap-2 md:gap-4  text-[9px] md:text-base ">
          <Image src={iconFight} alt="" />
          <span className="whitespace-nowrap">Fight Boss</span>
        </li>
        <li className="py-3 pb-0 md:pb-3 px-4 md:px-[32px] flex cursor-pointer flex-col md:flex-row items-center gap-2 md:gap-4  text-[9px] md:text-base ">
          <Image src={iconEgg} alt="" />
          <span>Inventory</span>
        </li>
        <li className="py-3 pb-0 md:pb-3 px-4 md:px-[32px] flex cursor-pointer flex-col md:flex-row items-center gap-2 md:gap-4  text-[9px] md:text-base ">
          <Image src={iconMarketplace} alt="" />
          <span>Marketplace</span>
        </li>
        <li className="py-3 pb-0 md:pb-3 px-4 md:px-[32px] flex cursor-pointer flex-col md:flex-row items-center gap-2 md:gap-4  text-[9px] md:text-base ">
          <Image src={iconMint} alt="" />
          <span className="whitespace-nowrap">Pre-Mining</span>
        </li>{" "}
      </ul>
      <div className="md:mt-[76px] md:mx-4">
        {!address && (
          <button
            className=" px-[23px] h-[42px] text-[13px] font-semibold rounded-[8px] flex items-center gap-4 bg-[rgb(244,104,24)]"
            onClick={() => {
              setOpen({ open: true, component: <ConnectWalletClaim /> });
            }}
          >
            {" "}
            <Image src={iconWallet} width={11} height={10} alt="" /> Connect
            Wallet
          </button>
        )}
        {address && (
          <button
            className=" px-[23px] h-[42px] text-[13px] w-full font-semibold rounded-[8px] flex items-center gap-4 bg-transparent border border-white"
            onClick={() => {
              disconnectAsync();
            }}
          >
            {truncate(address, 6) + truncateReverse(address, 5)}
          </button>
        )}
      </div>
    </header>
  );
}
