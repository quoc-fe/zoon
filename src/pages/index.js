import React from "react";
import LayoutDocument from "@/layouts/layoutDocument";
import BannerClaim from "@/components/home/banner/BannerClaim";
import Intro from "@/components/home/intro/Intro";
export default function index() {
  return (
    <LayoutDocument title="AiDoge Presale - The Ultimate AI-Powered Meme Coin 2023">
      <BannerClaim />
      <Intro />
    </LayoutDocument>
  );
}
