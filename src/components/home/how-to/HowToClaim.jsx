import React, { useEffect, useState } from "react";
import { RiContactsBookLine } from "react-icons/ri";
import Copy from "../../../assets/copy.svg";
import codeCountry from "../../../constants/codeCountry.json";
import { IoCopyOutline } from "react-icons/io5";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useRouter } from "next/router";
import Image from "next/image";
export default function HowToClaim() {
  const [bestContact, setBestContact] = useState({
    show: false,
    value: "Morning",
  });
  const [code, setCode] = useState({
    show: false,
    value: "",
  });
  const [budget, setBudget] = useState({
    show: false,
    value: "",
  });
  useEffect(() => {
    window.addEventListener("click", function (event) {
      setBestContact({
        ...bestContact,
        show: false,
      });
      setCode({
        ...code,
        show: false,
      });
      setBudget({
        ...code,
        show: false,
      });
    });
  }, []);
  const renderCode = () => {
    return codeCountry.map((code, index) => {
      return (
        <div
          key={index}
          className={`${
            code.value === code.dial_code
              ? "bg-[#f9c7cc] text-black"
              : "bg-transparent text-[#999]"
          } py-3 px-[24px] text-xl font-bold  border-b-[.125rem] border-[#C4C4C4]`}
          onClick={(e) => {
            e.stopPropagation();
            setCode({
              ...code,
              show: false,
              value: code.dial_code,
            });
          }}
        >
          {code.name + `(${code.dial_code})`}
        </div>
      );
    });
  };
  const renderBudget = () => {
    return ["$0-$5k", "$5-$10k", "$10-$25k", "$25-$50k", "$50k +"].map(
      (budgets, index) => {
        return (
          <div
            key={index}
            className={`${
              budget.value === budgets
                ? "bg-[#f9c7cc] text-black"
                : "bg-transparent text-[#999]"
            } py-3 px-[24px] text-xl font-bold  border-b-[.125rem] border-[#C4C4C4]`}
            onClick={(e) => {
              e.stopPropagation();
              setBudget({
                ...budget,
                show: false,
                value: budgets,
              });
            }}
          >
            {budgets}
          </div>
        );
      }
    );
  };
  const router = useRouter();
  const { section } = router.query;
  const checkSection = () => {
    if (section) {
      if (section === "claim") {
        return true;
      }
      return false;
    }
  };
  return (
    <div
      className="p-4 sm:px-[48px] md:px-[72px] xl:px-[104px] py-[128px] bg-[rgb(214,244,251)]"
      id="howto"
    >
      <div className=" h-auto   rounded-[4rem] 2xl:rounded-[6.25rem]   bg-[#fffef5] shadow-card">
        <div className="relative max-w-[80rem] w-full mx-auto pt-[128px] pb-[32px] md:pt-[8rem] pb-[5rem] px-4 sm:px-[48px] md:px-[5.5rem]">
          <div className="w-[300px] md:w-[390px] h-[173px] absolute top-0 left-2/4 -translate-x-2/4 -translate-y-[30%]">
            <Image
              src="https://buy1.bigeyes.space/img/plants/plants.webp"
              width={390}
              height={173}
              alt=""
            />
          </div>

          <h1 className="mt-4 mb-[5rem] mx-4 sm:mx-0 text-[40px] sm:text-[3.125rem] font-Extra font-[900] text-center">
            How to claim Big Eyes
          </h1>
          {/* step1 */}
          <div className="flex flex-col lg:flex-row items-center ">
            <div className="flex-1">
              {/* title */}
              <div className="flex items-center gap-3">
                <Image
                  src="https://buy1.bigeyes.space/img/paw-red.svg"
                  width={24}
                  height={24}
                  alt=""
                />
                <p className="text-[#f38590] text-[1.5rem] font-bold">
                  Step 1 / <span className="text-[#f9c7cc]">3</span>
                </p>
              </div>
              <p className="text-[1.25rem] mt-5">
                <strong>
                  Pre-Claim Features + Preparation before the 15th
                </strong>
              </p>
              <p className="text-[1.25rem] mt-5 leading-[1.5rem]">
                Make sure you have enough ETH to pay the gas fees in the wallet
                you used to purchase $BIG originally to complete the claiming of
                your $BIG Tokens.
              </p>
              <p className="text-[1.25rem] mt-5 mb-10 leading-[1.5rem]">
                Select one or both of the new optional features which allow you
                to make the most of the claiming process and the 819 Casino
                Launch.
              </p>

              <p className="text-[1.25rem] mt-10 leading-[1.5rem]">
                <strong>The Early Access Ticket:</strong>
                <br></br>Claim your tokens and start trading the moment we
                launch $BIG before anyone else can 6 hours later at 22:00
                (UTC+1). 1 ticket costs 100 USD, and the same amount will be
                credited to your 819 CASINO account when it launches on August
                29th!
              </p>
              <p className="text-[1.25rem] mt-5 leading-[1.5rem]">
                <strong>Double Up + Split the Pot:</strong>
                <br></br>Pay 5% of the value of all your deposits TODAY and
                double your total $ value of all your deposits! Your extra
                balance will be credited in USD or $BIG to your 819 Casino
                account when it launches on August 29th for you to play with or
                withdraw!
              </p>
            </div>
            <div className="flex-1">
              <div className=" mx-auto  w-[344px] h-[294px] md:w-[552px] md:h-[473px]">
                <Image
                  src="https://buy1.bigeyes.space/img/cat_room_2/cat_room_2.webp"
                  width={552}
                  height={473}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="w-full h-[1px] bg-[#c4c4c4] my-[8rem]"></div>
          {/* step2 */}
          <div>
            <div className="flex  flex-col lg:flex-row items-center ">
              <div className="flex-1">
                {/* title */}
                <div className="flex items-center gap-3">
                  <Image
                    src="https://buy1.bigeyes.space/img/paw-red.svg"
                    width={24}
                    height={24}
                    alt=""
                  />
                  <p className="text-[#f38590] text-[1.5rem] font-bold">
                    Step 2 / <span className="text-[#f9c7cc]">3</span>
                  </p>
                </div>
                <p className="mt-5 ">
                  <strong>Launch Day</strong>
                </p>
                <p className="text-[1.25rem] my-5 leading-[1.5rem]">
                  On the 15th of June at 22:00 UTC+1 (or 16:00 if you have an
                  early access ticket) you will be able to start the Claiming
                  Process. Here is what you need to know;
                </p>
              </div>
              <div className="flex-1"></div>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-4 ">
              <div className="flex-1 md:flex items-center md:h-[730px] 2xl:h-[620px] lg:block py-[2rem] px-[1rem] border border-[#C4C4C4] rounded-[2.375rem]">
                <div className="w-[186px] h-[186px] mx-auto">
                  <Image
                    src="https://buy1.bigeyes.space/img/wallet-coins/wallet-coins.webp"
                    width={186}
                    height={186}
                    className="h-[186px]"
                    alt=""
                  />
                </div>
                <div className="flex-1">
                  <p className="text-[#f38590] text-[1.25rem] font-bold text-center my-4">
                    ENABLE
                  </p>

                  <p className="px-3 my-4 text-center text-[1.25rem] leading-[1.5rem] text-[#999]">
                    On the 15th at the time of launch you will see the “Enable”
                    Button show up on the website the time that this button will
                    appear will depend on whether you have bought an early
                    access ticket.
                  </p>
                  <p className="px-3 my-4 text-center text-[1.25rem] leading-[1.5rem] text-[#999]">
                    When pressing “ENABLE” a transaction will come up that will
                    need to be processed. Once the Blockchain has confirmed you
                    will move on to “CLAIMING”.
                  </p>
                </div>
              </div>
              <div className="flex-1 md:flex items-center md:h-[730px] 2xl:h-[620px] lg:block py-[2rem] px-[1rem] border border-[#C4C4C4] rounded-[2.375rem]">
                <div className="w-[186px] h-[186px] mx-auto">
                  <Image
                    src="https://buy1.bigeyes.space/img/paw-diamond/paw-diamond.webp"
                    width={186}
                    height={186}
                    className="h-[186px]"
                    alt=""
                  />
                </div>
                <div className="flex-1">
                  <p className="text-[#f38590] text-[1.25rem] font-bold text-center my-4">
                    CLAIM
                  </p>
                  <p className="px-3 my-4 text-center text-[1.25rem] leading-[1.5rem] text-[#999]">
                    Once the blockchain has confirmed for “ENABLE” you will then
                    see the “Claim” button visible. Click the “CLAIM” button,
                    then you will need to confirm the transaction through your
                    wallet and pay the gas fee. Finally wait for the Blockchain
                    to transfer your Tokens into your Wallet.
                  </p>
                </div>
              </div>
              <div className="flex-1 md:flex items-center md:h-[730px] 2xl:h-[620px] lg:block py-[2rem] px-[1rem] border border-[#C4C4C4] rounded-[2.375rem]">
                <div className="w-[186px] h-[186px] mx-auto">
                  <Image
                    src="https://buy1.bigeyes.space/img/phone/phone.webp"
                    width={186}
                    height={186}
                    className="h-[186px]"
                    alt=""
                  />
                </div>
                <div className="flex-1">
                  <p className="text-[#f38590] text-[1.25rem] font-bold text-center my-4">
                    HOLDING
                  </p>
                  <p className="px-3 my-4 text-center text-[1.25rem] leading-[1.5rem] text-[#999]">
                    Once the blockchain has approved all above transactions the
                    claimed tokens will be valid in the wallet used above. Now
                    you can buy more and build your bag; keep in mind Big Eyes
                    has just begun, and utility is around the corner.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[1px] bg-[#c4c4c4] my-[8rem]"></div>
          {/* step3 */}
          <div className="flex flex-col lg:flex-row items-center ">
            <div className="flex-1">
              {/* title */}
              <div className="flex items-center gap-3">
                <Image
                  src="https://buy1.bigeyes.space/img/paw-red.svg"
                  width={24}
                  height={24}
                  alt=""
                />
                <p className="text-[#f38590] text-[1.5rem] font-bold">
                  Step 3 / <span className="text-[#f9c7cc]">3</span>
                </p>
              </div>

              <p className=" my-5 text-[1.25rem] leading-[1.5rem] ">
                With only these simple steps, you will have now officially
                become a Big Eyes Holder.
              </p>
              <p className=" mt-5 text-[1.25rem] leading-[1.5rem] ">
                As we are now LIVE, the fun starts! Keep your $BIG eyes on the
                up-and-coming posts as more partnerships, listings and
                development releases are just around the corner.
              </p>
              <button
                className="mt-[64px] bg-[#f38590] min-w-[10rem] w-[16.875rem] whitespace-nowrap text-white border-[5px] text-[1.125rem] 2xl:text-[1.25rem] hover:font-semibold border-[#F9C7CC] rounded-full  py-[4px] px-[24px] font-semibold hover:bg-[#F9C7CC] hover:text-black transition-all duration-300"
                onClick={() => {
                  const element = document.getElementById("banner-claim");
                  element.scrollIntoView();
                }}
              >
                Claim now
              </button>
            </div>
            <div className="flex-1">
              <div className=" mx-auto  w-[344px] h-[257px] md:w-[552px] md:h-[400px]">
                <Image
                  src="https://buy1.bigeyes.space/img/cat_room_3/cat_room_3.webp"
                  width={552}
                  height={400}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="w-full h-[1px] bg-[#c4c4c4] my-[8rem]"></div>
          {/* Form */}
          <div>
            <div>
              <h1 className="text-[2.5rem] md:text-[3.125rem] font-Extra font-[900] my-4">
                Big Eyes Contract
              </h1>
              <p className="max-w-[26rem] text-[#f38590] text-[1.1rem] md:text-[1.5rem] w-full font-bold mt-5 mb-[72px]">
                Use the contract information below to add Big Eyes to your
                wallet.
              </p>
              <div>
                <div className="flex items-center mb-[6rem] gap-3">
                  <div className="w-full">
                    <label className="text-[1.25rem] font-bold">Address</label>
                    <input
                      value="0xc8De43Bfe33FF496Fa14c270D9CB29Bda196B9B5"
                      className="py-1 w-full text-[#999] text-[1.25rem] border-b-[0.1875rem] bg-transparent border-[#f38590]"
                      disabled
                    />
                  </div>
                  <button
                    className="flex items-center gap-2 justify-center bg-[#F9C7CC] min-w-[7rem] md:min-w-[10rem] text-white border-[5px] text-[1.125rem] 2xl:text-[1.375rem] hover:font-semibold border-[#F9C7CC] rounded-full  py-[8px] px-[24px] font-semibold hover:bg-[#f38590]  transition-all duration-300"
                    onClick={() => {
                      navigator.clipboard.writeText(
                        "0xc8De43Bfe33FF496Fa14c270D9CB29Bda196B9B5"
                      );
                    }}
                  >
                    Copy <Image src={Copy} width={19} height={21} alt="" />
                  </button>
                </div>
                <div className="flex items-center  flex-col md:flex-row gap-[24px]">
                  <div className="flex w-full  items-center gap-3">
                    <div className="w-full">
                      <label className="text-[1.25rem] font-bold">
                        Decimals
                      </label>
                      <input
                        value="18"
                        className="py-1 w-full text-[#999] text-[1.25rem] border-b-[0.1875rem] bg-transparent border-[#f38590]"
                        disabled
                      />
                    </div>
                    <button
                      className="flex items-center gap-2 justify-center bg-[#F9C7CC] min-w-[7rem] md:min-w-[10rem] text-white border-[5px] text-[1.125rem] 2xl:text-[1.375rem] hover:font-semibold border-[#F9C7CC] rounded-full  py-[8px] px-[24px] font-semibold hover:bg-[#f38590]  transition-all duration-300"
                      onClick={() => {
                        navigator.clipboard.writeText("18");
                      }}
                    >
                      Copy <Image src={Copy} width={19} height={21} alt="" />
                    </button>
                  </div>
                  <div className="flex w-full  items-center gap-3">
                    <div className="w-full">
                      <label className="text-[1.25rem] font-bold">
                        Token Symbol
                      </label>
                      <input
                        value="BIG"
                        className="py-1 w-full text-[#999] text-[1.25rem] border-b-[0.1875rem] bg-transparent border-[#f38590]"
                        disabled
                      />
                    </div>
                    <button
                      className="flex items-center gap-2 justify-center bg-[#F9C7CC] min-w-[7rem] md:min-w-[10rem] text-white border-[5px] text-[1.125rem] 2xl:text-[1.375rem] hover:font-semibold border-[#F9C7CC] rounded-full  py-[8px] px-[24px] font-semibold hover:bg-[#f38590]  transition-all duration-300"
                      onClick={() => {
                        navigator.clipboard.writeText("BIG");
                      }}
                    >
                      Copy <Image src={Copy} width={19} height={21} alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[1px] bg-[#c4c4c4] my-[8rem]"></div>
          {/* Form 2 */}
          <div>
            <h1 className="text-[2.5rem] md:text-[3.125rem] font-Extra text-center font-[900] my-4">
              100<span className="font-bubblegum">%</span>Secure
            </h1>
            <p className="text-[1.25rem] text-center my-[2rem]">
              Contract fully audited by Solidity Finance and shown to be 100%
              secure.
            </p>
            <div className="text-center ">
              <a href="/documents/Whitepaper.pdf" download="whitepaper.pdf">
                <button className=" bg-[#f38590] min-w-[10rem] w-full max-w-[16rem] whitespace-nowrap text-white border-[5px] text-[1.125rem] 2xl:text-[1.25rem] hover:font-semibold border-[#F9C7CC] rounded-full  py-[4px] px-[24px] font-semibold hover:bg-[#F9C7CC] hover:text-black transition-all duration-300">
                  Whitepaper
                </button>
              </a>
            </div>
            <div className="w-[80px] h-[80px] mx-auto mt-5">
              <Image
                src="https://buy1.bigeyes.space/img/solidify-logo/solidify-logo.webp"
                width={80}
                height={80}
                alt=""
              />
            </div>
          </div>
          <div className="w-full h-[1px] bg-[#c4c4c4] my-[8rem]"></div>
          {/* form 3 */}
          <div>
            <div>
              <h1 className="text-[2.5rem] md:text-[3.125rem] font-Extra font-[900] my-4">
                Talk to us
              </h1>
              <p className="max-w-[26rem] text-[#f38590] text-[1.1rem] md:text-[1.5rem] w-full font-bold mt-5 mb-[72px]">
                Leave your details below and we’ll contact you to discuss
                purchasing Big Eyes.
              </p>
              <form>
                <div className="flex items-center  flex-col md:flex-row gap-[24px] mb-[4rem]">
                  <div className="w-full">
                    <label className="text-[1.25rem] font-bold">
                      First name
                    </label>
                    <input
                      className="outline-none py-1 w-full text-[#999] text-[1.25rem] border-b-[0.1875rem] bg-transparent border-[#f38590]"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className="w-full">
                    <label className="text-[1.25rem] font-bold">
                      Last name
                    </label>
                    <input
                      className="outline-none py-1 w-full text-[#999] text-[1.25rem] border-b-[0.1875rem] bg-transparent border-[#f38590]"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                <div className="flex items-center  flex-col md:flex-row gap-[24px] mb-[4rem]">
                  <div className="flex w-full items-center  flex-col md:flex-row gap-3 ">
                    <div className="w-full">
                      <label className="text-[1.25rem] font-bold">
                        Code country
                      </label>
                      <div className="relative">
                        <input
                          value={code.value}
                          className="outline-none py-1 w-full text-[#999] text-[1.25rem] border-b-[0.1875rem] bg-transparent border-[#f38590]"
                          placeholder="Code"
                          onClick={(e) => {
                            e.stopPropagation();
                            setCode({
                              ...code,
                              show: !code.show,
                            });
                          }}
                        />
                        {!code.show && (
                          <MdKeyboardArrowDown className="absolute right-3 top-2/4 text-2xl -translate-y-2/4 text-[#f38590]" />
                        )}
                        {code.show && (
                          <MdKeyboardArrowUp className="absolute right-3 top-2/4 text-2xl -translate-y-2/4 text-[#f38590]" />
                        )}
                        <div
                          className={`absolute top-full left-0 h-[200px] z-[2] bg-white overflow-y-scroll w-full shadow-dropdown ${
                            code.show ? "block" : "hidden"
                          }`}
                        >
                          <input
                            className="outline-none py-1 w-full text-[#999] text-[1.25rem]  border-b-[.125rem] border-[#C4C4C4] bg-transparent "
                            placeholder="Search"
                          />
                          {renderCode()}
                        </div>
                      </div>
                    </div>
                    <div className="w-full">
                      <label className="text-[1.25rem] font-bold">
                        Contact number
                      </label>
                      <input
                        className="outline-none py-1 w-full text-[#999] text-[1.25rem] border-b-[0.1875rem] bg-transparent border-[#f38590]"
                        placeholder="Enter your contact number"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <label className="text-[1.25rem] font-bold">
                      Best time to contact
                    </label>
                    <div className="relative">
                      <input
                        value={bestContact.value}
                        className="outline-none py-1 w-full text-[#999] text-[1.25rem] border-b-[0.1875rem] bg-transparent border-[#f38590]"
                        placeholder="Enter your first name"
                        onClick={(e) => {
                          e.stopPropagation();
                          setBestContact({
                            ...bestContact,
                            show: !bestContact.show,
                          });
                        }}
                      />
                      {!bestContact.show && (
                        <MdKeyboardArrowDown className="absolute right-3 top-2/4 text-2xl -translate-y-2/4 text-[#f38590]" />
                      )}
                      {bestContact.show && (
                        <MdKeyboardArrowUp className="absolute right-3 top-2/4 text-2xl -translate-y-2/4 text-[#f38590]" />
                      )}
                      <div
                        className={`absolute top-full left-0 w-full shadow-dropdown bg-white ${
                          bestContact.show ? "block" : "hidden"
                        }`}
                      >
                        <div
                          className={`${
                            bestContact.value === "Morning"
                              ? "bg-[#f9c7cc] text-black"
                              : "bg-transparent text-[#999]"
                          } py-3 px-[24px] text-xl font-bold  border-b-[.125rem] border-[#C4C4C4]`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setBestContact({
                              ...bestContact,
                              show: false,
                              value: "Morning",
                            });
                          }}
                        >
                          Morning
                        </div>
                        <div
                          className={`${
                            bestContact.value === "Afternoon"
                              ? "bg-[#f9c7cc] text-black"
                              : "bg-transparent text-[#999]"
                          } py-3 px-[24px] text-xl font-bold  border-b-[.125rem] border-[#C4C4C4]`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setBestContact({
                              ...bestContact,
                              show: false,
                              value: "Afternoon",
                            });
                          }}
                        >
                          Afternoon
                        </div>
                        <div
                          className={`${
                            bestContact.value === "Evening"
                              ? "bg-[#f9c7cc] text-black"
                              : "bg-transparent text-[#999]"
                          } py-3 px-[24px] text-xl font-bold  border-b-[.125rem] border-[#C4C4C4]`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setBestContact({
                              ...bestContact,
                              show: false,
                              value: "Evening",
                            });
                          }}
                        >
                          Evening
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center  flex-col md:flex-row gap-[24px] mb-[4rem]">
                  <div className="w-full">
                    <label className="text-[1.25rem] font-bold">
                      Investment budget
                    </label>
                    <div className="relative">
                      <input
                        value={budget.value}
                        className="outline-none py-1 w-full text-[#999] text-[1.25rem] border-b-[0.1875rem] bg-transparent border-[#f38590]"
                        placeholder="Enter investment budget"
                        onClick={(e) => {
                          e.stopPropagation();
                          setBudget({
                            ...budget,
                            show: !budget.show,
                          });
                        }}
                      />
                      {!budget.show && (
                        <MdKeyboardArrowDown className="absolute right-3 top-2/4 text-2xl -translate-y-2/4 text-[#f38590]" />
                      )}
                      {budget.show && (
                        <MdKeyboardArrowUp className="absolute right-3 top-2/4 text-2xl -translate-y-2/4 text-[#f38590]" />
                      )}
                      <div
                        className={`absolute top-full left-0 w-full bg-white shadow-dropdown ${
                          budget.show ? "block" : "hidden"
                        }`}
                      >
                        {renderBudget()}
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <button
                      type={"reset"}
                      className=" bg-[#f38590] min-w-[14rem]  whitespace-nowrap text-white border-[5px] text-[1.125rem] 2xl:text-[1.25rem] hover:font-semibold border-[#F9C7CC] rounded-full  py-[10px] px-[24px] font-semibold hover:bg-[#F9C7CC] hover:text-black transition-all duration-300"
                    >
                      Submit
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type={"checkbox"}
                    className="accent-[#f38691] checked:text-black"
                  />
                  <p className=" text-[#999]">
                    By submitting this form you agree to our{" "}
                    <a
                      href="https://bigeyes.space/terms"
                      className="text-black"
                      target="_blank"
                    >
                      Terms
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://bigeyes.space/privacy-policy"
                      className="text-black"
                      target="_blank"
                    >
                      Privacy Policy
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
