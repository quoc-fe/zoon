import { openModal } from "@/recoil/commonRecoilState";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useRecoilState } from "recoil";
import { useAccount, useDisconnect } from "wagmi";
import ConnectWallet from "../connectWallet/ConnectWallet";

export default function BuyToken() {
  const { connector: activeConnector, isConnected, address } = useAccount();
  const { disconnectAsync } = useDisconnect();
  const [open, setOpen] = useRecoilState(openModal);
  const router = useRouter();
  const renderDot = (num) => {
    let arr = [];
    for (let index = 0; index <= num; index++) {
      arr.push(
        <div className=" gap-3 bg-[#e9959d] w-[1.5rem] h-[1.5rem] border-[2px] border-[#747576] rounded-full"></div>
      );
    }
    return arr;
  };
  const handleDisconnect = async () => {
    await disconnectAsync();
  };
  return (
    <div
      className="p-4 sm:px-[48px] md:px-[72px] xl:px-[104px] py-[128px] bg-[rgb(255,220,170)]"
      id="buyToken"
    >
      <div className="min-h-[43rem] h-auto lg:h-[637px] 2xl:h-[1148px] border-[0.1875rem] border-[#5b5b5b] rounded-[4rem] 2xl:rounded-[6.25rem] overflow-hidden bg-[#fffef5] shadow-card">
        <div className="bg-[#a6e8fe] border-b-[0.1875rem] border-[#000] flex items-center gap-3 pl-[4.5rem] py-4">
          <div className="w-[1.5rem] h-[1.5rem] rounded-full bg-[#eb6e6e] border-[0.125rem] border-[#000]"></div>
          <div className="w-[1.5rem] h-[1.5rem] rounded-full bg-[#ffdea9] border-[0.125rem] border-[#000]"></div>
          <div className="w-[1.5rem] h-[1.5rem] rounded-full bg-[#cce79e] border-[0.125rem] border-[#000]"></div>
        </div>
        <div className="h-full w-full flex flex-col lg:flex-row items-center relative ">
          <div className=" flex items-start 2xl:items-center justify-center max-h-[40rem] h-full w-full lg:w-2/4 p-[32px]">
            <div className=" relative py-4 sm:py-8 px-8 border-[.1875rem] border-[#c4c4c4] max-w-[27rem] w-full rounded-[2.1875rem] text-center">
              <p className="text-[#f38590] text-[1.5rem] font-bold text-center my-4">
                PRESALE ENDED
              </p>
              {address && (
                <>
                  <p className="text-[#f38590] text-base sm:text-[1.5rem] font-bold text-center sm:mt-4">
                    You have 0 Big Eyes tokens.
                  </p>
                  <div
                    className="text-[#11a6d5] font-semibold cursor-pointer mb-2"
                    onClick={() => {
                      router.push("#calculator");
                    }}
                  >
                    View your potential returns
                  </div>
                  <div class="connected-text mb-4">
                    <p className="font-bold">Connected Wallet</p>
                    <span className="text-[9px] sm:text-base">{address}</span>
                  </div>
                </>
              )}
              {!address && (
                <button
                  className="bg-[#f38590] max-w-[19rem] w-full whitespace-nowrap text-white border-[5px] text-[1.125rem] 2xl:text-[1.25rem] hover:font-semibold border-[#F9C7CC] rounded-full  py-[8px] px-[24px] font-semibold hover:bg-[#F9C7CC] hover:text-black transition-all duration-300"
                  onClick={() => {
                    setOpen({ open: true, component: <ConnectWallet /> });
                  }}
                >
                  Connect Wallet
                </button>
              )}
              {address && (
                <button
                  className="bg-[#f38590] max-w-[19rem] w-full whitespace-nowrap text-white border-[5px] text-[1.125rem] 2xl:text-[1.25rem] hover:font-semibold border-[#F9C7CC] rounded-full  py-[8px] px-[24px] font-semibold hover:bg-[#F9C7CC] hover:text-black transition-all duration-300"
                  onClick={handleDisconnect}
                >
                  Disconnect
                </button>
              )}
              <Image
                src="https://buy1.bigeyes.space/img/stars/stars.webp"
                className="absolute top-2 right-2"
                width={52}
                height={67}
                alt=""
              />
            </div>
          </div>
          <div className="hidden lg:block border-r-[0.15rem] border-black w-[0.15rem] h-full absolute left-2/4 -translate-x-2/4"></div>
          <div className="max-h-[40rem] h-full  w-2/4 flex items-center justify-center p-[32px]">
            <div>
              <div className="w-[300px] sm:w-[300px] md:w-[370px] xl:w-[480px] min-w-[1800px]:w-[761px] 2xl:w-[600px] h-[250px] sm:h-[320px] mx-auto 2xl:h-[352px] flex justify-center relative">
                <div className="relative">
                  <Image
                    src={
                      "https://buy1.bigeyes.space/img/lucky-cat/lucky-cat.webp"
                    }
                    className="hidden sm:block"
                    width={300}
                    height={352}
                    alt=""
                  />{" "}
                  <Image
                    src={
                      "https://buy1.bigeyes.space/img/lucky-cat/lucky-cat.webp"
                    }
                    className="block sm:hidden"
                    width={200}
                    height={250}
                    alt=""
                  />{" "}
                  <Image
                    src={
                      "https://buy1.bigeyes.space/img/live-flash/live-flash.webp"
                    }
                    className="absolute top-0 animate-flash"
                    width={300}
                    height={352}
                    alt=""
                  />{" "}
                </div>
                <div className=" w-[.1875rem] bg-[#655d59] h-full absolute right-0 ">
                  <div className="w-full h-full relative">
                    <div className="w-[1.25rem] h-[1.25rem] absolute top-[20%] left-full rounded-full  bg-[#f38590] -translate-x-2/4  border-[.125rem] border-[#827E80] "></div>
                  </div>
                </div>
              </div>
              <div className="mt-[30px] 2xl:mt-0">
                <p className="text-[#999] text-center text-[20px] 2xl:text-[1.5rem] font-bold mb-[24px]">
                  PRESALE ENDED
                </p>
                <div className="buy-token-multiDot h-[4rem] border-[4px] border-[#757473]  rounded-[1.5rem] bg-[#a3e6fb] w-full p-[0.5rem]">
                  <div className="w-full hidden min-w-[1800px]:flex overflow-hidden rounded-[1rem] border-[3px] border-[#6c6b6b] h-full bg-[#fffdf5]  py-[0.2rem] px-[0.5rem] gap-1 justify-center">
                    {renderDot(24)}
                  </div>
                  <div className="w-full hidden hidden 2xl:flex  min-w-[1800px]:hidden overflow-hidden rounded-[1rem] border-[3px] border-[#6c6b6b] h-full bg-[#fffdf5]  py-[0.2rem] px-[0.5rem] gap-1 justify-center">
                    {renderDot(19)}
                  </div>
                  <div className="w-full hidden xl:flex 2xl:hidden overflow-hidden rounded-[1rem] border-[3px] border-[#6c6b6b] h-full bg-[#fffdf5]  py-[0.2rem] px-[0.5rem] gap-1 justify-center">
                    {renderDot(16)}
                  </div>
                  <div className="w-full hidden sm:flex xl:hidden overflow-hidden rounded-[1rem] border-[3px] border-[#6c6b6b] h-full bg-[#fffdf5]  py-[0.2rem] px-[0.5rem] gap-1 justify-center">
                    {renderDot(12)}
                  </div>
                  <div className="w-full flex sm:hidden overflow-hidden rounded-[1rem] border-[3px] border-[#6c6b6b] h-full bg-[#fffdf5]  py-[0.2rem] px-[0.5rem] gap-1 justify-center">
                    {renderDot(8)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
