import { useHeaderMobile } from "@/hooks/useHeaderMobile";
import { Drawer } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Logo from "../../assets/logo.png";
import { IoMdClose } from "react-icons/io";
import { routerConstant } from "@/constants/routerConstant";
import Link from "next/link";
export default function HeaderMobile() {
  const { openHeader, setOpenHeader } = useHeaderMobile();
  const router = useRouter();
  return (
    <>
      <Drawer
        className="header-mobile"
        closable={false}
        title={
          <div
            className="w-[100px] cursor-pointer"
            onClick={() => {
              router.push(routerConstant.home);
              setOpenHeader(false);
            }}
          >
            {" "}
            <Image src={Logo} alt="logo" />
          </div>
        }
        placement="right"
        open={openHeader}
        onClose={() => {
          setOpenHeader(false);
        }}
        extra={
          <div>
            <button
              onClick={() => {
                setOpenHeader(false);
              }}
            >
              <IoMdClose className="text-white text-3xl" />
            </button>
          </div>
        }
      >
        <div>
          <ul className=" flex flex-col items-center">
            <li
              className="font-semibold text-xl text-[#aaaaaa] hover:text-white py-4 cursor-pointer "
              onClick={() => {
                router.push("#about");
                setOpenHeader(false);
              }}
            >
              About
            </li>

            {/* <li
              className="font-semibold text-xl text-[#aaaaaa]  hover:text-white py-4 px-[18px]  cursor-pointer"
              onClick={() => {
                router.push("#howTo");
                setOpenHeader(false);
              }}
            >
              How to swap
            </li> */}

            <li className="group mt-10">
              <button className=" py-1 px-5 text-xl font-bold text-white outline-none bg-red-600 rounded bg-gradient-to-r from-[#e49945] to-blue-500">
                Swap
              </button>
              {/* <button className="hidden group-hover:block py-1 px-5 text-xl font-bold text-white outline-none bg-red-600 rounded bg-gradient-to-r from-[#e49945] to-blue-500">
                Coming Soon
              </button> */}
            </li>
          </ul>
        </div>
      </Drawer>
    </>
  );
}
