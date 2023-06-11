import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "../../assets/logo-desktop-header.svg";
import React from "react";
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";
export default function Footer() {
  const router = useRouter();
  return (
    <footer className="bg-[#fffef5]">
      <div className="max-w-[82.5rem] flex flex-col gap-3 md:flex-row items-start md:items-center  py-[6rem] px-4 md:px-[4rem] mx-auto">
        <div
          className="w-[17.5rem] mr-[8rem]"
          onClick={() => {
            router.push("https://bigeyes.space/");
          }}
        >
          <Image src={Logo} alt="" />
        </div>
        <div className=" md:ml-[8rem] flex flex-col md:flex-row items-start gap-10">
          <div>
            <p className="text-[1.3125rem] text-black font-bold">About us</p>
            <p>
              <a className="text-[#999]" href="https://bigeyes.space/?page=2">
                Tokenomics
              </a>
            </p>
            <p>
              <a className="text-[#999]" href="https://bigeyes.space/?page=3">
                Roadmap
              </a>
            </p>
            <p>
              <a className="text-[#999]" href="https://bigeyes.space/?page=4">
                Charity
              </a>
            </p>
          </div>
          <div className="text-[#999]">
            <p className="text-[1.3125rem] text-black font-bold">Documents</p>
            <p>
              <a
                href="https://buy.bigeyes.space/documents/Whitepaper.pdf"
                download="whitepaper.pdf"
              >
                Whitepaper
              </a>
            </p>
            <p>
              <a
                href="https://solidity.finance/audits/BigEyes/"
                target="_blank"
              >
                Audit
              </a>
            </p>
          </div>
          <div className="text-[#999]">
            <p className="text-[1.3125rem] text-black font-bold">Coming Soon</p>
            <p>
              <a>NFT</a>
            </p>
            <p>
              <a target="_blank">Influencers</a>
            </p>
          </div>
          <div className="text-[#999]">
            <p className="text-[1.3125rem] text-black font-bold">Social</p>
            <p>
              <a href="https://www.instagram.com/BigEyesCoin" target="_blank">
                Instagram
              </a>
            </p>
            <p>
              <a href="https://twitter.com/BigEyesCoin" target="_blank">
                Twitter
              </a>
            </p>
            <p>
              <a href="https://t.me/BIGEYESOFFICIAL" target="_blank">
                Telegram
              </a>
            </p>
            <p>
              <a href="https://linktr.ee/bigeyescoin" target="_blank">
                Linktree
              </a>
            </p>
            <p>
              <a href="https://discord.gg/4jyTjhgYJN" target="_blank">
                Discord
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
