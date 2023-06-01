import { routerConstant } from "@/constants/routerConstant";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo.jpg";
import { FaBars } from "react-icons/fa";
import { useHeaderMobile } from "@/hooks/useHeaderMobile";
import { useRouter } from "next/router";
export default function Header() {
  const router = useRouter();
  const [headerBg, setHeaderBg] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setHeaderBg(true);
      } else {
        setHeaderBg(false);
      }
    });
  }, []);
  const { openHeader, setOpenHeader } = useHeaderMobile();
  return (
    <header
      className={` w-full fixed  top-0 left-0 z-[1000] ${
        headerBg ? "bg-black" : "bg-transparent"
      } transition-all duration-300`}
    >
      <div className="max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] mx-auto px-3">
        <div className="flex items-center justify-between">
          <Link href={routerConstant.home}>
            <div className="flex items-center gap-4 ">
              <Image
                src={Logo}
                className="rounded-full"
                width={70}
                height={70}
                alt="logo"
                loading="lazy"
              />
              <h1 className="font-bold hidden md:block text-3xl text-white">
                SHIBA HONGKONG
              </h1>
            </div>
          </Link>
          <ul className=" hidden lg:flex items-center">
            <Link href="#about">
              <li className="font-semibold text-xl text-white py-[30px] px-[18px] ">
                About
              </li>
            </Link>
            {/* <Link href="#howTo">
              <li className="font-semibold text-xl text-white py-[30px] px-[18px] ">
                How to swap
              </li>
            </Link> */}
            <li className="group">
              <button
                className=" py-1 px-5 text-xl font-bold text-white outline-none bg-red-600 rounded bg-gradient-to-r from-[#e49945] to-blue-500"
                onClick={() => {
                  router.push("");
                }}
              >
                Swap
              </button>
              {/* <button className="hidden group-hover:block py-1 px-5 text-xl font-bold text-white outline-none bg-red-600 rounded bg-gradient-to-r from-[#e49945] to-blue-500">
                Coming Soon
              </button> */}
            </li>
          </ul>
          <button
            className="block lg:hidden text-xl"
            onClick={() => {
              setOpenHeader(true);
            }}
          >
            <FaBars />
          </button>
        </div>
      </div>
    </header>
  );
}
