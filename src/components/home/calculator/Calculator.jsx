import { openModal } from "@/recoil/commonRecoilState";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { useAccount, useDisconnect } from "wagmi";
import ConnectWallet from "../connectWallet/ConnectWallet";

export default function Calculator() {
  const { connector: activeConnector, isConnected, address } = useAccount();
  const { disconnectAsync } = useDisconnect();
  const [open, setOpen] = useRecoilState(openModal);
  const [yourToken, setYourToken] = useState(0);
  const [yourPrice, setYourPrice] = useState(0.0006);
  const router = useRouter();
  const handleChangeInput = (e) => {
    const { value, name } = e.target;
    if (value !== "" && value.length <= 15) {
      setYourToken(value);
    } else {
      setYourToken(0);
    }
  };
  const handlePrice = (token, price) => {
    let len = Math.ceil(price * token).toString().length;
    if (len < 7 && len >= 4) {
      return ((price * token) / 1000).toFixed(2) + "k";
    } else if (len < 10 && len >= 7) {
      return ((price * token) / 1000000).toFixed(2) + "M";
    } else if (len < 13 && len >= 10) {
      return ((price * token) / 1000000000).toFixed(2) + "B";
    } else if (len < 16 && len >= 13) {
      return ((price * token) / 1000000000000).toFixed(2) + "T";
    } else {
      if (price === 1 || token === 0) {
        return (price * token).toFixed(2);
      }
      return (price * token).toFixed(4);
    }
  };
  const handlePresent = () => {
    if (yourPrice === 0.0006) {
      return "50%";
    }
    if (yourPrice === 1) {
      return "100%";
    }
    return "8.33%";
  };
  const handleDisconnect = async () => {
    await disconnectAsync();
  };
  return (
    <div
      className="p-4 sm:px-[48px] md:px-[72px] xl:px-[104px] py-[128px] bg-[rgb(221,209,228)]"
      id="calculator"
    >
      <div className=" h-auto border-[0.1875rem] border-[#5b5b5b] rounded-[4rem] 2xl:rounded-[6.25rem]  overflow-hidden bg-[#fffef5] shadow-card">
        <div className="max-w-[70rem] w-full p-4 sm:p-[3rem] md:p-[5rem] mx-auto">
          <div className="relative">
            <h1 className="text-[40px] md:text-[3.125rem] w-full sm:w-2/4 leading-10 md:leading-none mx-auto md:w-full md:leading-none font-Extra font-[900] text-center">
              Returns Calculator
            </h1>
            <div className="flex flex-col md:flex-row items-center gap-2 justify-center">
              <p className="text-[1.2rem] font-bold text-[#f38590] text-center">
                Enter how much big you own in the textbox below or
              </p>
              {!address && (
                <button
                  className="bg-[#f38590] flex items-center  justify-center text-white border-[5px] text-[0.95rem]  hover:font-semibold border-[#F9C7CC] rounded-full w-[8.5rem] h-[1.75rem] font-semibold hover:bg-[#F9C7CC] hover:text-black transition-all duration-300"
                  onClick={() => {
                    setOpen({ open: true, component: <ConnectWallet /> });
                  }}
                >
                  Connect Wallet
                </button>
              )}
              {address && (
                <button
                  className="bg-[#f38590] text-white border-[5px] text-[0.95rem]  hover:font-semibold border-[#F9C7CC] rounded-full w-[8.5rem] h-[1.75rem] font-semibold hover:bg-[#F9C7CC] hover:text-black transition-all duration-300"
                  onClick={handleDisconnect}
                >
                  Disconnect
                </button>
              )}
            </div>
            <Image
              src="https://buy1.bigeyes.space/img/star-col/star-col.webp"
              className="hidden md:block absolute top-2/4 left-0 -translate-y-2/4"
              width={159}
              height={159}
              alt=""
            />
            <Image
              src="https://buy1.bigeyes.space/img/star-col-2/star-col-2.webp"
              className="hidden md:block absolute top-[20%] right-0 -translate-y-2/4"
              width={156}
              height={156}
              alt=""
            />
          </div>
          <div className="relative mt-[48px] mb-[8rem]">
            <div className="mb-4 w-[220px] h-[48px] flex items-center py-[8px] px-[24px] bg-[#b9fff6] border-[4px] border-black rounded-[16px] mx-auto">
              <span className="font-bold mr-1">$BIG:</span>
              <input
                className="outline-none w-full bg-transparent placeholder:text-black placeholder:font-bold font-bold "
                placeholder="Enter your token"
                max={15}
                onChange={handleChangeInput}
              />
            </div>
            <div className="relative  z-[4] flex justify-center mb-4 max-w-[500px] py-[16px] md:py-[32px] px-[12px] md:px-[24px] bg-[#b9fff6] border-[4px] border-black rounded-[16px] mx-auto">
              <h1 className="text-[32px] md:text-[3.25rem] font-Extra font-bold relative ">
                USD:{" "}
                <span className="font-[900]">
                  ${handlePrice(yourToken, yourPrice)}
                </span>
              </h1>
              <Image
                src="https://buy1.bigeyes.space/img/coin-5/coin-5.webp"
                className="absolute  hidden md:block   top-0 left-0 -translate-y-2/4 -translate-x-2/4"
                width={90}
                height={73}
                alt=""
              />
              <Image
                src="https://buy1.bigeyes.space/img/coin-5/coin-5.webp"
                className="absolute  hidden md:block  bottom-0 right-full rotate-[-65deg]  -translate-x-2/4"
                width={90}
                height={73}
                alt=""
              />
              <Image
                src="https://buy1.bigeyes.space/img/coin-5/coin-5.webp"
                className="absolute  hidden md:block bottom-full left-full rotate-[-55deg] "
                width={90}
                height={73}
                alt=""
              />
              <Image
                src="https://buy1.bigeyes.space/img/coin-6/coin-6.webp"
                className="absolute hidden md:block top-full left-full rotate-[60deg]  -translate-y-[60%]"
                width={90}
                height={73}
                alt=""
              />
              <Image
                src="https://buy1.bigeyes.space/img/coin-6/coin-6.webp"
                className="absolute hidden md:block top-2/4 left-full rotate-[90deg]  -translate-y-2/4 translate-x-full"
                width={90}
                height={73}
                alt=""
              />
              {/* //mobile */}
              <Image
                src="https://buy1.bigeyes.space/img/coin-5/coin-5.webp"
                className="absolute  block md:hidden   bottom-0 left-0 -translate-x-2/4"
                width={50}
                height={43}
                alt=""
              />
              <Image
                src="https://buy1.bigeyes.space/img/coin-5/coin-5.webp"
                className="absolute  block md:hidden top-full left-0 rotate-[-65deg] translate-y-[20%]  -translate-x-2/4"
                width={50}
                height={43}
                alt=""
              />
              <Image
                src="https://buy1.bigeyes.space/img/coin-5/coin-5.webp"
                className="absolute block md:hidden bottom-full right-0 rotate-[-55deg] "
                width={50}
                height={43}
                alt=""
              />
              <Image
                src="https://buy1.bigeyes.space/img/coin-6/coin-6.webp"
                className="absolute block md:hidden top-full right-0 rotate-[60deg]  -translate-y-[60%]"
                width={50}
                height={43}
                alt=""
              />
            </div>
            <Image
              src="https://buy1.bigeyes.space/img/coin-6/coin-6.webp"
              className="absolute hidden md:block top-0 left-0 -translate-y-2/4 "
              width={90}
              height={96}
              alt=""
            />
            <Image
              src="https://buy1.bigeyes.space/img/coin-6/coin-6.webp"
              className="absolute hidden md:block top-full left-[30%] z-[1] -translate-x-2/4 -translate-y-[30%]"
              width={90}
              height={96}
              alt=""
            />
            <Image
              src="https://buy1.bigeyes.space/img/coin-6/coin-6.webp"
              className="absolute block md:hidden top-0 left-0 -translate-y-2/4 "
              width={60}
              height={63}
              alt=""
            />
            <Image
              src="https://buy1.bigeyes.space/img/coin-6/coin-6.webp"
              className="absolute block md:hidden top-full left-[30%] z-[1] -translate-x-2/4 -translate-y-[30%]"
              width={60}
              height={63}
              alt=""
            />
          </div>
          <div className="w-full h-[1px]  bg-[#c4c4c4] mt-4"></div>
          <p className="text-[1.125rem] text-center mt-[3rem] mb-[18px]">
            Move the slider to see how much your $BIG
            <br /> will be worth at different price targets!
          </p>
          <div className="progress-container mt-[2rem] mb-[3rem]">
            <div className="h-[270px] flex items-center relative">
              <div className="relative w-full ">
                <svg
                  className="h-[45px] md:h-fit w-full lg:scale-y-75"
                  viewBox="0 0 705 43"
                  fill="none"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 12.5805L19.7769 3.18011L68.7011 0L189.527 0.325497L309.836 3.18011H347.743H387.296L581.218 0.0846292L683.977 0.406872L701.256 6.29186L704.826 25.7045L701.138 35.004L675.724 41.8231H450.472L318.079 37.7772L191.724 41.8231H86.7975L15.5038 42.8843L2.87712 34.4571L0 12.5805Z"
                    fill="#F38590"
                  ></path>
                </svg>
                <svg
                  className="top-0 h-[45px] md:h-fit w-full absolute lg:scale-y-90"
                  viewBox="0 0 714 46"
                  fill="none"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M82.1527 0.613994C71.2458 0.919962 61.1105 -0.261594 50.2036 0.0541389C44.6488 0.213633 39.0908 0.353596 33.5359 0.438226C28.7004 0.51309 22.6421 1.47656 17.9243 2.59302C12.7814 3.80712 0.896977 5.5583 0.609265 12.6997C0.46214 17.5984 0.167889 25.0068 0.0174938 29.1276C-0.227715 34.6903 2.1786 36.6238 2.61998 37.431C3.01558 38.1503 4.29721 39.4881 7.05663 41.018L10.5549 42.6585C10.8492 42.818 13.0692 43.3681 13.0692 43.3681L20.3764 43.482C26.5884 43.5959 35.2622 43.827 39.7512 43.9995C44.8286 44.2306 64.1544 44.3446 91.2647 44.3739C117.738 44.4031 140.215 44.5464 148.941 44.7775C159.884 45.0672 165.949 45.0672 175.067 44.8361C181.574 44.6635 202.871 44.4617 222.393 44.4031C241.915 44.3153 261.78 44.1427 266.514 43.9995C271.245 43.827 278.591 43.6252 282.783 43.5373C286.974 43.4494 296.093 43.163 302.995 42.9319C313.15 42.5576 321.578 42.499 346.867 42.6422C364.071 42.7301 382.165 42.9319 387.043 43.0751C405.43 43.6512 422.732 43.7945 430.422 43.3908C435.993 43.1012 454.233 42.9872 504.857 42.9579C547.746 42.9286 578.309 42.7854 589.647 42.5543C603.794 42.2646 610.5 42.2646 622.675 42.525C634.655 42.8147 644.613 42.8147 668.52 42.5543C674.336 42.486 680.156 42.4209 685.972 42.3558C688.846 42.3232 691.716 42.4729 694.577 42.1833C697.719 41.8643 700.694 41.0212 703.768 40.4028C706.445 39.8625 708.567 39.3612 710.336 37.0469C711.86 35.0549 712.602 32.5811 713.102 30.1236C714.116 25.163 714.263 20.0332 713.556 15.0238C712.955 10.7467 711.317 6.19953 707.573 3.58578C702.82 0.268967 696.523 1.18687 691.063 1.05016C685.933 0.923217 680.8 0.851607 675.67 0.796273C660.827 0.633524 645.98 0.610739 631.133 0.604229C611.52 0.597719 591.903 0.653054 572.29 0.721408C549.515 0.799528 526.74 0.903687 503.965 1.00785C479.64 1.11852 455.312 1.22918 430.984 1.32358C426.688 1.33985 422.392 1.35613 418.093 1.3724C379.493 1.43099 365 1.3724 361.057 1.11201C347.106 0.161553 332.217 0.0736687 272.177 0.447991C182.211 1.05342 168.064 1.08271 148.935 0.737683C134.042 0.490305 119.147 0.386146 104.254 0.311282C96.8849 0.272222 89.5156 0.405676 82.1462 0.613994H82.1527ZM347.26 4.0545C350.415 4.14239 356.823 4.45812 361.407 4.71851C368.652 5.15143 375.998 5.21002 414.892 5.18072C444.814 5.18072 465.222 5.0375 475.527 4.7771C495.543 4.25956 561.746 4.2856 605.668 4.8064C623.414 5.0375 653.585 5.18072 672.613 5.18072C682.359 5.16445 692.465 4.08705 701.482 7.66101C702.506 8.06788 703.532 8.53985 704.202 9.26571C705.481 10.6523 705.281 12.4588 705.402 14.0668C705.563 16.1597 705.883 18.2364 705.975 20.3359C706.132 23.9847 705.824 27.5814 704.507 31.1033C704.055 32.3109 703.333 33.499 702.097 34.3127C700.073 35.644 697.641 35.1851 695.228 35.4682C692.795 35.7547 690.504 36.5163 688.009 36.5391C683.236 36.5782 678.459 36.6107 673.685 36.64C668.055 36.6758 662.425 36.7051 656.795 36.7312C650.724 36.7605 644.653 36.7865 638.578 36.806C632.477 36.8288 626.373 36.8451 620.272 36.8581C615.898 36.8679 611.52 36.8744 607.146 36.8777C579.885 36.9069 536.11 37.0795 509.784 37.2813C479.123 37.5417 458.614 37.571 452.602 37.3952C446.883 37.252 440.72 37.252 436.827 37.3952C429.581 37.7109 391.326 37.4538 381.86 37.0209C378.46 36.8776 363.62 36.6758 348.832 36.588C325.171 36.4447 319.894 36.5001 304.466 37.0209C289.43 37.5384 280.164 37.6556 238.263 37.7695C211.496 37.8281 189.41 37.9713 189.113 38.0592C188.868 38.1471 180.485 38.2024 170.529 38.2024C149.974 38.1731 148.791 38.1731 107.282 38.3456C89.8817 38.4042 70.4579 38.3587 61.6827 38.1438C50.2265 37.8672 38.7671 37.8118 27.3076 37.7272C29.9428 37.7272 32.5813 37.7305 35.2164 37.7337C30.6523 37.8379 26.0914 37.942 21.5272 38.0494C18.078 38.1276 17.1952 37.0046 14.6777 35.5919C13.1934 34.7587 11.2154 34.5145 9.88798 33.5348C8.50827 32.5127 8.1519 30.9178 8.15517 29.44C8.15517 25.9377 7.93938 22.4516 7.78572 18.946C7.7236 17.5594 7.66802 16.1467 8.14209 14.8057C9.051 12.2277 11.8497 10.2487 14.9818 9.12249C20.6281 7.09139 27.4057 6.90911 33.5065 6.55106C40.5326 6.14094 47.4965 5.26861 54.5324 4.92032C61.4832 4.5753 82.2868 4.02846 95.6948 3.82665C106.196 3.68343 342.274 3.88524 347.253 4.05776L347.26 4.0545Z"
                    fill="#080405"
                  ></path>
                </svg>
                <p className="text-[.925rem] font-bold font-Extra absolute right-6 top-2/4 -translate-y-2/4">
                  $1
                </p>
                <div className="py-[0.7rem] xl:py-[1rem] px-[.75rem]  w-full h-full absolute top-0 left-0">
                  <div
                    style={{ width: handlePresent() }}
                    className=" bg-white  rounded-[.375rem] border-[3px] border-black h-full relative transition-all duration-300"
                  >
                    <Image
                      src="https://buy1.bigeyes.space/img/returns-paw.svg"
                      className="absolute right-0 top-2/4 -translate-y-2/4 translate-x-[70%]"
                      width={32}
                      height={28}
                      alt=""
                    />
                    <Image
                      src=" https://buy1.bigeyes.space/img/arrow.svg"
                      className="absolute left-full top-2/4 -translate-y-2/4 translate-x-full animate-flash"
                      width={20}
                      height={12}
                      alt=""
                    />
                    <span className="absolute right-2 text-[.925rem] font-Extra font-bold">
                      {handlePresent()}
                    </span>
                    <div className="w-[130px] md:w-[168px] h-[103px] absolute bottom-full left-full -translate-x-2/4 md:-translate-y-[20%]">
                      <div className="relative">
                        <Image
                          src="https://buy1.bigeyes.space/img/chat-bubble-2.svg"
                          className=""
                          width={168}
                          height={103}
                          alt=""
                        />
                        <div className="absolute top-0 left-0 pt-1 md:p-3 w-full text-center ">
                          <h4 className="font-Extra font-bold text-[14px] md:text-base text-center leading-3">
                            ${yourPrice}
                          </h4>
                          <p className=" text-[10px] md:text-[12px] text-center ">
                            (${handlePrice(yourToken, yourPrice)})
                          </p>
                          {yourPrice === 0.0006 && (
                            <p className="text-center font-bold text-[10px] md:text-[12px] text-[#f38590]">
                              Current Price
                            </p>
                          )}
                          {yourPrice !== 0.0006 && (
                            <button
                              className="bg-[#f38590] py-[3px] px-[8px] text-[10px] md:text-[.75rem] font-semibold shadow-progress-btn rounded-[.25rem] text-black hover:bg-[#ff8b8f] transition-all duration-200"
                              onClick={() => {
                                setYourPrice(0.0006);
                              }}
                            >
                              Reset
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="w-[130px] md:w-[168px] h-[103px] absolute top-full left-0 -translate-x-[30%] md:translate-x-0 cursor-pointer"
                  onClick={() => {
                    setYourPrice(0.0001);
                  }}
                >
                  <div className="relative">
                    <Image
                      src="https://buy1.bigeyes.space/img/chat-bubble-2-upside-down.svg"
                      className=""
                      width={168}
                      height={103}
                      alt=""
                    />
                    <div className="absolute top-2/4 left-0 p-3 w-full text-center -translate-y-[40%]">
                      <h4 className="font-Extra font-bold text-center text-[14px] md:text-base leading-3">
                        $0.0001
                      </h4>
                      <p className=" text-[10px] md:text-[12px] text-center ">
                        (${handlePrice(yourToken, 0.0001)})
                      </p>
                      {/* <p className="text-center font-bold text-[12px] text-[#f38590]">
                            Current Price
                          </p> */}
                      <button className="bg-[#f38590] py-[3px] px-[8px] text-[10px] md:text-[.75rem] font-semibold shadow-progress-btn rounded-[.25rem] text-black hover:bg-[#ff8b8f] transition-all duration-200">
                        Presale Stage 1
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className="w-[130px] md:w-[168px] h-[103px] absolute top-full left-2/4 -translate-x-2/4 cursor-pointer"
                  onClick={() => {
                    setYourPrice(0.0006);
                  }}
                >
                  <div className="relative">
                    <Image
                      src="https://buy1.bigeyes.space/img/chat-bubble-2-upside-down.svg"
                      className=""
                      width={168}
                      height={103}
                      alt=""
                    />
                    <div className="absolute top-2/4 left-0 p-3 w-full text-[14px] md:text-base text-center -translate-y-[40%]">
                      <h4 className="font-Extra font-bold text-center leading-3">
                        $0.0006
                      </h4>
                      <p className=" text-[10px] md:text-[12px] text-center ">
                        (${handlePrice(yourToken, 0.0006)})
                      </p>
                      {/* <p className="text-center font-bold text-[12px] text-[#f38590]">
                            Current Price
                          </p> */}
                      <button className="bg-[#f38590] py-[3px] px-[8px] text-[10px] md:text-[.75rem] font-semibold shadow-progress-btn rounded-[.25rem] text-black hover:bg-[#ff8b8f] transition-all duration-200">
                        Launch Price
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className="w-[130px] md:w-[168px] h-[103px] absolute top-full right-0 translate-x-[35%] cursor-pointer"
                  onClick={() => {
                    setYourPrice(1);
                  }}
                >
                  <div className="relative">
                    <Image
                      src="https://buy1.bigeyes.space/img/chat-bubble-2-upside-down.svg"
                      className=""
                      width={168}
                      height={103}
                      alt=""
                    />
                    <div className="absolute top-2/4 left-0 p-3 w-full text-center  -translate-y-[40%]">
                      <h4 className="font-Extra text-[14px] md:text-base font-bold text-center leading-3">
                        1$
                      </h4>
                      <p className=" text-[10px] md:text-[12px] text-center ">
                        (${handlePrice(yourToken, 1)})
                      </p>
                      {/* <p className="text-center font-bold text-[12px] text-[#f38590]">
                            Current Price
                          </p> */}
                      <button className="bg-[#f38590] py-[3px] px-[8px] text-[10px] md:text-[.75rem] font-semibold shadow-progress-btn rounded-[.25rem] text-black hover:bg-[#ff8b8f] transition-all duration-200">
                        The Moon
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 ">
              <button
                className="bg-[#f38590] max-w-[10rem] w-full whitespace-nowrap text-white border-[5px] text-[1.125rem] 2xl:text-[1.25rem] hover:font-semibold border-[#F9C7CC] rounded-full  py-[4px] px-[24px] font-semibold hover:bg-[#F9C7CC] hover:text-black transition-all duration-300"
                onClick={() => {
                  router.push("#buyToken");
                }}
              >
                Buy Big Eyes
              </button>
              <button
                className="bg-[#f38590] max-w-[10rem] flex items-center justify-center w-full whitespace-nowrap text-white border-[5px] text-[1.125rem] 2xl:text-[1.25rem] hover:font-semibold border-[#F9C7CC] rounded-full  py-[4px] px-[24px] font-semibold hover:bg-[#F9C7CC] hover:text-black transition-all duration-300"
                onClick={() => {}}
              >
                Share Returns
              </button>
            </div>
            <p className="mt-[2rem] text-[1.25rem] text-[#999] text-center">
              *The returns shown are projections and are not guaranteed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
